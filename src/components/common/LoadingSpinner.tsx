import React from 'react';

interface LoadingSpinnerProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  message = 'Loading weather data...', 
  size = 'lg' 
}) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-600 flex items-center justify-center">
      <div className="text-center">
        <div className={`animate-spin rounded-full ${sizeClasses[size]} border-4 border-white border-t-transparent mx-auto mb-4`}></div>
        <p className="text-white text-lg font-medium">{message}</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;