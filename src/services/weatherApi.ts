import { WeatherData, WeatherApiError } from '../types/weather';
import { API_CONFIG } from '../constants';

class WeatherApiService {
  private baseUrl: string;
  private apiKey: string;

  constructor() {
    this.baseUrl = API_CONFIG.BASE_URL;
    this.apiKey = API_CONFIG.API_KEY;
  }

  private async makeRequest<T>(endpoint: string, params: Record<string, string>): Promise<T> {
    if (!this.apiKey) {
      throw new Error('Weather API key is not configured. Please check your environment variables.');
    }

    const url = new URL(`${this.baseUrl}${endpoint}`);
    url.searchParams.append('key', this.apiKey);
    
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });

    const response = await fetch(url.toString());
    
    if (!response.ok) {
      const errorData: WeatherApiError = await response.json();
      throw new Error(errorData.error?.message || `HTTP ${response.status}: ${response.statusText}`);
    }

    return response.json();
  }

  async getCurrentWeather(city: string): Promise<WeatherData> {
    return this.makeRequest<WeatherData>(API_CONFIG.ENDPOINTS.CURRENT, {
      q: city,
      aqi: 'no'
    });
  }

  async validateApiKey(): Promise<boolean> {
    try {
      await this.getCurrentWeather('London');
      return true;
    } catch (error) {
      console.error('API Key validation failed:', error);
      return false;
    }
  }
}

export const weatherApiService = new WeatherApiService();
export default weatherApiService;