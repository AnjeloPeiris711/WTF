// src/components/weather/SearchBar.tsx
import React, { useState } from 'react';
import { isValidCity } from '../../utils/weatherHelpers';

interface SearchBarProps {
  onSearch: (city: string) => void;
  loading?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, loading = false }) => {
  const [searchCity, setSearchCity] = useState('');
  const [validationError, setValidationError] = useState('');

  const handleSearch = () => {
    const trimmedCity = searchCity.trim();
    
    if (!trimmedCity) {
      setValidationError('Please enter a city name');
      return;
    }

    if (!isValidCity(trimmedCity)) {
      setValidationError('Please enter a valid city name (letters, spaces, hyphens only)');
      return;
    }

    setValidationError('');
    onSearch(trimmedCity);
    setSearchCity('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCity(e.target.value);
    if (validationError) {
      setValidationError('');
    }
  };

  return (
    <div className="mb-8">
      <div className="max-w-md mx-auto">
        <div className="relative">
          <input
            type="text"
            value={searchCity}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Search for a city..."
            disabled={loading}
            className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 disabled:opacity-50 disabled:cursor-not-allowed ${
              validationError ? 'border-red-400 focus:ring-red-400/30' : ''
            }`}
          />
          <button
            onClick={handleSearch}
            disabled={loading || !searchCity.trim()}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            )}
          </button>
        </div>
        
        {validationError && (
          <p className="mt-2 text-red-300 text-sm text-center">{validationError}</p>
        )}
        
        <p className="mt-2 text-white/60 text-xs text-center">
          Try: New York, London, Tokyo, Mumbai, etc.
        </p>
      </div>
    </div>
  );
};

export default SearchBar;