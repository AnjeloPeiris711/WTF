import { useState, useEffect, useCallback } from 'react';
import { WeatherData } from '../types/weather';
import { weatherApiService } from '../services/weatherApi';
import { DEFAULT_CITY } from '../constants';

interface UseWeatherReturn {
  weatherData: WeatherData | null;
  loading: boolean;
  error: string;
  currentCity: string;
  fetchWeather: (city: string) => Promise<void>;
  refreshWeather: () => Promise<void>;
}

export const useWeather = (): UseWeatherReturn => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const [currentCity, setCurrentCity] = useState(DEFAULT_CITY);

  const fetchWeather = useCallback(async (city: string) => {
    try {
      setLoading(true);
      setError('');
      
      const data = await weatherApiService.getCurrentWeather(city);
      setWeatherData(data);
      setCurrentCity(city);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch weather data';
      setError(errorMessage);
      console.error('Error fetching weather:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  const refreshWeather = useCallback(async () => {
    await fetchWeather(currentCity);
  }, [currentCity, fetchWeather]);

  useEffect(() => {
    fetchWeather(DEFAULT_CITY);
  }, [fetchWeather]);

  return {
    weatherData,
    loading,
    error,
    currentCity,
    fetchWeather,
    refreshWeather,
  };
};