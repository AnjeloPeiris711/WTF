export const API_CONFIG = {
  BASE_URL:'https://wtf-api.vercel.app/',
};

export const DEFAULT_CITY = 'Colombo';

export const UV_LEVELS = {
  LOW: { max: 2, level: 'Low'},
  MODERATE: { max: 5, level: 'Moderate'},
  HIGH: { max: 7, level: 'High'},
  VERY_HIGH: { max: 10, level: 'Very High'},
  EXTREME: { max: Infinity, level: 'Extreme' },
};

export const WEATHER_KEYWORDS = {
  SUN: ['sun', 'clear', 'sunny'],
  RAIN: ['rain', 'drizzle', 'shower'],
  SNOW: ['snow', 'blizzard', 'sleet'],
  THUNDER: ['thunder', 'storm', 'lightning'],
  CLOUD: ['cloud', 'overcast', 'partly'],
};
