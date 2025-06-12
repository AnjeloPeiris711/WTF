// src/components/weather/WeatherHeader.tsx
import React from 'react';
import { WeatherData } from '../../types/weather';
import { getWeatherIconLarge } from '../../utils/weatherIcons';
import { formatDate, formatTemperature } from '../../utils/weatherHelpers';

interface WeatherHeaderProps {
  weatherData: WeatherData;
  onRefresh?: () => void;
}

const WeatherHeader: React.FC<WeatherHeaderProps> = ({ weatherData, onRefresh }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8 relative">
      {onRefresh && (
        <button
          onClick={onRefresh}
          className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors"
          title="Refresh weather data"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      )}
      
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-2">
          {weatherData.location.name}, {weatherData.location.country}
        </h2>
        
        <p className="text-white/70 mb-6">
          {formatDate(weatherData.location.localtime)}
        </p>
        
        <div className="flex items-center justify-center mb-6">
          {getWeatherIconLarge(weatherData.current.condition.text)}
          <span className="text-6xl md:text-7xl font-bold text-white ml-4">
            {Math.round(weatherData.current.temp_c)}°
          </span>
        </div>
        
        <p className="text-xl text-white/90 font-medium mb-2">
          {weatherData.current.condition.text}
        </p>
        
        <p className="text-white/70">
          Feels like {formatTemperature(weatherData.current.feelslike_c)}
        </p>
      </div>
    </div>
  );
};

export default WeatherHeader;