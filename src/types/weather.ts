export interface WeatherLocation {
  name: string;
  country: string;
  localtime: string;
}

export interface WeatherCondition {
  text: string;
  icon: string;
}

export interface CurrentWeather {
  temp_c: number;
  condition: WeatherCondition;
  humidity: number;
  wind_kph: number;
  uv: number;
  feelslike_c: number;
  vis_km: number;
}

export interface WeatherData {
  location: WeatherLocation;
  current: CurrentWeather;
}

export interface WeatherCardProps {
  title: string;
  value: string | number;
  unit: string;
  icon: React.ReactNode;
  color: string;
}

export interface UVLevel {
  level: string;
  color: string;
}

export interface WeatherApiError {
  error: {
    code: number;
    message: string;
  };
}