import { UVLevel } from '../types/weather';
import { UV_LEVELS } from '../constants';

export const getUVLevel = (uv: number): UVLevel => {
  if (uv <= UV_LEVELS.LOW.max) return { level: UV_LEVELS.LOW.level, color: UV_LEVELS.LOW.color };
  if (uv <= UV_LEVELS.MODERATE.max) return { level: UV_LEVELS.MODERATE.level, color: UV_LEVELS.MODERATE.color };
  if (uv <= UV_LEVELS.HIGH.max) return { level: UV_LEVELS.HIGH.level, color: UV_LEVELS.HIGH.color };
  if (uv <= UV_LEVELS.VERY_HIGH.max) return { level: UV_LEVELS.VERY_HIGH.level, color: UV_LEVELS.VERY_HIGH.color };
  return { level: UV_LEVELS.EXTREME.level, color: UV_LEVELS.EXTREME.color };
};

export const formatTemperature = (temp: number): string => {
  return `${Math.round(temp)}°C`;
};

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const formatTime = (dateString: string): string => {
  return new Date(dateString).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const isValidCity = (city: string): boolean => {
  return city.trim().length >= 2 && /^[a-zA-Z\s-']+$/.test(city.trim());
};