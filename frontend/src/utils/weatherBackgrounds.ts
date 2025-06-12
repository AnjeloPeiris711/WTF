import './animatedbackgroud.css'
export const getWeatherBackground = (condition: string): string => {
  const conditionLower = condition.toLowerCase();
  
  // Rain conditions with animated rain effect
  if (conditionLower.includes('rain') || 
      conditionLower.includes('drizzle') || 
      conditionLower.includes('shower')) {
    return 'bg-gradient-to-br from-gray-600 via-blue-700 to-gray-800 animate-rain';
  }
  
  // Snow conditions with floating snow animation
  if (conditionLower.includes('snow') || 
      conditionLower.includes('blizzard') || 
      conditionLower.includes('sleet')) {
    return 'bg-gradient-to-br from-gray-400 via-blue-300 to-white animate-snow';
  }
  
  // Thunderstorm conditions with lightning flash
  if (conditionLower.includes('thunder') || 
      conditionLower.includes('storm')) {
    return 'bg-gradient-to-br from-gray-800 via-purple-000 to-black animate-thunder';
  }
  
  // Cloudy conditions with moving clouds blur
  if (conditionLower.includes('cloud') || 
      conditionLower.includes('overcast')) {
    return 'bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 animate-clouds';
  }
  
  // Foggy conditions with mist effect
  if (conditionLower.includes('fog') || 
      conditionLower.includes('mist') || 
      conditionLower.includes('haze')) {
    return 'bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 animate-fog';
  }
  
  // Clear/Sunny conditions with sun rays
  if (conditionLower.includes('sunny') || 
      conditionLower.includes('clear')) {
    return 'bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 animate-sunny';
  }
  
  // Partly cloudy with shifting gradients
  if (conditionLower.includes('partly')) {
    return 'bg-gradient-to-br from-blue-400 via-purple-500 to-orange-400 animate-partly-cloudy';
  }
  
  // Default with subtle pulse
  return 'bg-gradient-to-br from-black via-gray-900 to-gray-600 animate-pulse';
};