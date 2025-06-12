import { UVLevel } from '../types/weather';
import { UV_LEVELS } from '../constants';

export const getUVLevel = (uv: number): UVLevel => {
  if (uv <= UV_LEVELS.LOW.max) return { level: UV_LEVELS.LOW.level, color: '#00E400' };
  if (uv <= UV_LEVELS.MODERATE.max) return { level: UV_LEVELS.MODERATE.level, color: '#FFFF00' };
  if (uv <= UV_LEVELS.HIGH.max) return { level: UV_LEVELS.HIGH.level, color: '#FF8C00' };
  if (uv <= UV_LEVELS.VERY_HIGH.max) return { level: UV_LEVELS.VERY_HIGH.level, color: '#FF0000' };
  return { level: UV_LEVELS.EXTREME.level, color: '#8B00FF' };
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
