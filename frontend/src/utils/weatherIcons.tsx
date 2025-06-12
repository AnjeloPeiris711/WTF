import React from 'react';
import { Sun, Cloud, CloudRain, CloudSnow, Zap } from 'lucide-react';
import { WEATHER_KEYWORDS } from '../constants';

export const getWeatherIcon = (condition: string): React.ReactNode => {
  const lowerCondition = condition.toLowerCase();

  if (WEATHER_KEYWORDS.SUN.some(keyword => lowerCondition.includes(keyword))) {
    return <Sun className="w-8 h-8 text-yellow-400" />;
  }
  
  if (WEATHER_KEYWORDS.RAIN.some(keyword => lowerCondition.includes(keyword))) {
    return <CloudRain className="w-8 h-8 text-blue-400" />;
  }
  
  if (WEATHER_KEYWORDS.SNOW.some(keyword => lowerCondition.includes(keyword))) {
    return <CloudSnow className="w-8 h-8 text-blue-200" />;
  }
  
  if (WEATHER_KEYWORDS.THUNDER.some(keyword => lowerCondition.includes(keyword))) {
    return <Zap className="w-8 h-8 text-purple-400" />;
  }
  
  return <Cloud className="w-8 h-8 text-gray-400" />;
};

export const getWeatherIconLarge = (condition: string): React.ReactNode => {
  const lowerCondition = condition.toLowerCase();

  if (WEATHER_KEYWORDS.SUN.some(keyword => lowerCondition.includes(keyword))) {
    return <Sun className="w-16 h-16 text-yellow-400" />;
  }
  
  if (WEATHER_KEYWORDS.RAIN.some(keyword => lowerCondition.includes(keyword))) {
    return <CloudRain className="w-16 h-16 text-blue-400" />;
  }
  
  if (WEATHER_KEYWORDS.SNOW.some(keyword => lowerCondition.includes(keyword))) {
    return <CloudSnow className="w-16 h-16 text-blue-200" />;
  }
  
  if (WEATHER_KEYWORDS.THUNDER.some(keyword => lowerCondition.includes(keyword))) {
    return <Zap className="w-16 h-16 text-purple-400" />;
  }
  
  return <Cloud className="w-16 h-16 text-gray-400" />;
};