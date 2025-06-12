import React from 'react';
import {getWeatherBackground} from '../../utils/weatherBackgrounds';

interface LayoutProps {
  children: React.ReactNode;
  weatherCondition?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, weatherCondition }) => {
    const backgroundClass = weatherCondition 
    ? getWeatherBackground(weatherCondition)
    : 'bg-gradient-to-br from-black via-gray-900 to-gray-600';
  return (
    <div className={`min-h-screen ${backgroundClass} p-4 transition-all duration-1000 ease-in-out`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🌤️ What The Forecast ?
          </h1>
          <p className="text-white/80 text-lg">
            Real-time weather information for cities worldwide
          </p>
        </div>

        <main>
          {children}
        </main>

        {/* Footer */}
        <footer className="mt-12 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <p className="text-white/60 text-sm">
              Weather data provided by{' '}
              <a 
                href="http://weatherapi.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors underline"
              >
                WeatherAPI.com
              </a>
            </p>
            <p className="text-white/40 text-xs mt-2">
              Last updated: {new Date().toLocaleTimeString()}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;