import React from 'react';
import Layout from './components/layout/Layout';
import SearchBar from './components/weather/SearchBar';
import WeatherHeader from './components/weather/WeatherHeader';
import WeatherDetails from './components/weather/WeatherDetails';
import LoadingSpinner from './components/common/LoadingSpinner';
import ErrorMessage from './components/common/ErrorMessage';
import { useWeather } from './hooks/useWeather';

import './App.css';

const App: React.FC = () => {
  const { weatherData, loading, error, fetchWeather, refreshWeather } = useWeather();

  if (loading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return (
      <ErrorMessage 
        message={error} 
        onRetry={refreshWeather}
        retryLabel="Retry"
      />
    );
  }
  return (
    <Layout>
      <SearchBar 
        onSearch={fetchWeather} 
        loading={loading}
      />
      
      {weatherData && (
        <>
          <WeatherHeader 
            weatherData={weatherData} 
            onRefresh={refreshWeather}
          />
          
          <WeatherDetails weatherData={weatherData} />
        </>
      )}
    </Layout>
  );
};

export default App;