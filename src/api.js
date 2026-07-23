import { createForecastCard } from "./screenController.js";
export { processWeatherData, processForecastData, loadBackground};
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
  forecastDateData: day.datetimeEpoch,
  forecastTempData: day.temp,
  forecastIconData: day.icon,
}))
  return rawForecastData;
}
async function loadBackground(condition, processWeatherData) {
  try {
    const ACCESS_KEY = "iwmG2Tpvndj_Z6zTFnzBWe1kahTvclZA7YzdrNgyfcM"
    const searchTerm = processWeatherData.iconData;
    const response = await fetch(`https://api.unsplash.com/photos/random?query=${searchTerm}&client_id=${ACCESS_KEY}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const imageData = await response.json();

    // Set background image
  } catch (error) {
    console.error(error);
  }
}

