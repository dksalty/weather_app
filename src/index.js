import './styles.css';
import { createWeatherCard, createForecastCard, showLoading, hideLoading} from './screenController.js';
import {WeatherData, processWeatherData, processForecastData} from './api.js';
const cityInput = document.getElementById('city');
const weatherForm = document.getElementById('weather-form');
const unitRadios = document.getElementsByName('unit');
const weatherContainer = document.getElementById('weather-container');
const forecastContainer = document.getElementById('forecast-container');
async function handleWeatherFormSubmit(e) {
  e.preventDefault();
  showLoading(weatherContainer);
  const city = cityInput.value;
  const selectedUnit = Array.from(unitRadios).find(radio => radio.checked).value;
  try {
  const weatherData = await WeatherData(city, selectedUnit);
  const processedWeatherData = processWeatherData(weatherData);
  const processedForecastData = processForecastData(weatherData);
  const weatherCard = createWeatherCard(processedWeatherData, selectedUnit, city);
  weatherContainer.textContent = '';
  forecastContainer.textContent = '';
   for (let i = 0; i < processedForecastData.length; i++) {
    const forecastCard = createForecastCard(selectedUnit, processedForecastData[i]);
    forecastContainer.appendChild(forecastCard);
  }
weatherContainer.append(weatherCard, forecastContainer);
  }
  catch (error) {
    const existingError = document.querySelector('.error-message');
if (existingError) {
  existingError.remove();
}
    const errorContainer = document.createElement('p');
    errorContainer.classList.add('error-message');
    errorContainer.textContent = "Unable to load weather. Please try again."
    weatherContainer.appendChild(errorContainer)
  }
  finally {
hideLoading()
  }
};
weatherForm.addEventListener('submit', handleWeatherFormSubmit);


