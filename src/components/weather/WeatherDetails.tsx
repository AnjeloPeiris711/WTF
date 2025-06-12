import React from 'react';
import { Thermometer, Droplets, Wind, Shield, Eye } from 'lucide-react';
import { WeatherData } from '../../types/weather';
import { getUVLevel} from '../../utils/weatherHelpers';
import WeatherCard from './WeatherCard';

interface WeatherDetailsProps {
  weatherData: WeatherData;
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({ weatherData }) => {
  const uvLevel = getUVLevel(weatherData.current.uv);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <WeatherCard
        title="Temperature"
        value={Math.round(weatherData.current.temp_c)}
        unit="°C"
        icon={<Thermometer className="w-5 h-5 text-white" />}
        color="bg-orange-500/20"
      />
      
      <WeatherCard
        title="Humidity"
        value={weatherData.current.humidity}
        unit="%"
        icon={<Droplets className="w-5 h-5 text-white" />}
        color="bg-blue-500/20"
      />
      
      <WeatherCard
        title="Wind Speed"
        value={weatherData.current.wind_kph}
        unit="km/h"
        icon={<Wind className="w-5 h-5 text-white" />}
        color="bg-green-500/20"
      />
      
      <WeatherCard
        title="UV Index"
        value={`${weatherData.current.uv} (${uvLevel.level})`}
        unit=""
        icon={<Shield className="w-5 h-5 text-white" />}
        color="bg-purple-500/20"
      />
      
      <WeatherCard
        title="Visibility"
        value={weatherData.current.vis_km}
        unit="km"
        icon={<Eye className="w-5 h-5 text-white" />}
        color="bg-indigo-500/20"
      />
      
      <WeatherCard
        title="Feels Like"
        value={Math.round(weatherData.current.feelslike_c)}
        unit="°C"
        icon={<Thermometer className="w-5 h-5 text-white" />}
        color="bg-pink-500/20"
      />
    </div>
  );
};

export default WeatherDetails;