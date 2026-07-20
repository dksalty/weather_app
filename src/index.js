import './styles.css';
import { createWeatherCard, createForecastCard} from './screenController.js';
import {WeatherData, processWeatherData, processForecastData} from './api.js';
const cityInput = document.getElementById('city');
const weatherForm = document.getElementById('weather-form');
const unitRadios = document.getElementsByName('unit');
 
 const weatherContainer = document.getElementById('weather-container');
  const forecastContainer = document.getElementById('forecast-container');

async function handleWeatherFormSubmit(e) {
  e.preventDefault();
  const city = cityInput.value;
  const selectedUnit = Array.from(unitRadios).find(radio => radio.checked).value;
const getWeatherData = await WeatherData(city, selectedUnit);
 const processedWeatherData = processWeatherData(getWeatherData);
  const processedForecastData = processForecastData(getWeatherData);
   const weatherCard = createWeatherCard(processedWeatherData, selectedUnit, city);
  weatherContainer.textContent = '';
  forecastContainer.textContent = '';
   for (let i = 2; i <= 7; i++) {
    const forecastCard = createForecastCard(selectedUnit, processedForecastData[i]);
    forecastContainer.appendChild(forecastCard);
  }
weatherContainer.append(weatherCard, forecastContainer);
};
weatherForm.addEventListener('submit', handleWeatherFormSubmit);

