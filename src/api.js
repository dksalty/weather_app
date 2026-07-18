import { createForecastCard } from "./screenController.js";

export { processWeatherData, processForecastData };
export async function WeatherData(city, selectedUnit) {
  
  try {
     const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?&unitGroup=${selectedUnit}&key=27ZFXJNWL8MLFAZCNDGKVGVNZ`);
   if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
    
  }
  catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
}
function processWeatherData(getWeatherData) {
  const rawWeatherData = {   
    resolvedAddressData: getWeatherData.resolvedAddress,   
    conditionData: getWeatherData.currentConditions.conditions,   
    tempData: getWeatherData.currentConditions.temp,   
    feelsLikeData: getWeatherData.currentConditions.feelslike,   
    humidityData: getWeatherData.currentConditions.humidity,  
    windSpeedData: getWeatherData.currentConditions.windspeed,  
    iconData: getWeatherData.currentConditions.icon 
  }
    return rawWeatherData; 
  };
  
function processForecastData(getWeatherData) {
  const rawForecastData =
 getWeatherData.days.map(day => ({
  forecastDateData: day.datetime,
  forecastTempData: day.temp,
  forecastIconData: day.icon,

  }))
  return rawForecastData;
}

