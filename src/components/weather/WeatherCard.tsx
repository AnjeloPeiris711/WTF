// src/components/weather/WeatherCard.tsx
import React from 'react';
import { WeatherCardProps } from '../../types/weather';

const WeatherCard: React.FC<WeatherCardProps> = ({ title, value, unit, icon, color }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
      <div className="flex items-center justify-between mb-2">
        <span className="text-white/80 text-sm font-medium">{title}</span>
        <div className={`${color} p-2 rounded-lg`}>
          {icon}
        </div>
      </div>
      <div className="text-white text-2xl font-bold">
        {typeof value === 'string' && value.includes('(') ? (
          <div>
            <span className="text-lg">{value.split('(')[0].trim()}</span>
            <div className="text-sm text-white/70 font-normal">
              ({value.split('(')[1]?.replace(')', '')}
            </div>
          </div>
        ) : (
          <>
            {value} <span className="text-lg text-white/80">{unit}</span>
          </>
        )}
      </div>
    </div>
  );
};

export default WeatherCard;