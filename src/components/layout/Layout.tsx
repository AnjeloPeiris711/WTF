import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🌤️ Weather Dashboard
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