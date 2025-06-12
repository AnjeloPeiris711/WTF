import { WeatherData, WeatherApiError } from '../types/weather';
import { API_CONFIG } from '../constants';

class WeatherApiService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = API_CONFIG.BASE_URL;
  }

    private async makeRequest<T>(params: Record<string, string>): Promise<T> {
    if (!this.baseUrl) {
      throw new Error('Weather API is not configured');
    }

    const url = new URL(this.baseUrl);

    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });

    const response = await fetch(url.toString());

    if (!response.ok) {
      let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
      try {
        const errorData: WeatherApiError = await response.json();
        errorMessage = errorData.error?.message || errorMessage;
      } catch {
        // fallback to default message
      }
      throw new Error(errorMessage);
    }

    return response.json();
  }

  async getCurrentWeather(city: string): Promise<WeatherData> {
    return this.makeRequest<WeatherData>({ q: city });
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