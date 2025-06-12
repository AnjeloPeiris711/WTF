export const API_CONFIG = {
  BASE_URL:'https://api.weatherapi.com/v1',
  API_KEY: '902de4defab74e13b02121955251106',
  ENDPOINTS: {
    CURRENT: '/current.json',
  },
};

export const DEFAULT_CITY = 'Colombo';

export const UV_LEVELS = {
  LOW: { max: 2, level: 'Low', color: 'text-green-400' },
  MODERATE: { max: 5, level: 'Moderate', color: 'text-yellow-400' },
  HIGH: { max: 7, level: 'High', color: 'text-orange-400' },
  VERY_HIGH: { max: 10, level: 'Very High', color: 'text-red-400' },
  EXTREME: { max: Infinity, level: 'Extreme', color: 'text-purple-400' },
};

export const WEATHER_KEYWORDS = {
  SUN: ['sun', 'clear', 'sunny'],
  RAIN: ['rain', 'drizzle', 'shower'],
  SNOW: ['snow', 'blizzard', 'sleet'],
  THUNDER: ['thunder', 'storm', 'lightning'],
  CLOUD: ['cloud', 'overcast', 'partly'],
};