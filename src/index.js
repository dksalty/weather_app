import './styles.css';
import { createWeatherCard, createForecastCard} from './screenController.js';
import { getWeatherData } from './api.js';
const cityInput = document.getElementById('city');
const weatherForm = document.getElementById('weather-form');
const unitRadios = document.getElementsByName('unit');
async function handleWeatherFormSubmit(e) {
  e.preventDefault();
  const city = cityInput.value;
  const selectedUnit = Array.from(unitRadios).find(radio => radio.checked).value;
  const weatherData = await getWeatherData(city, selectedUnit,);
  const weatherCard = createWeatherCard(weatherData, selectedUnit);
  const weatherContainer = document.getElementById('weather-container');
  const forecastContainer = document.getElementById('forecast-container');
  weatherContainer.textContent = '';
  forecastContainer.textContent = '';
   for (let i = 2; i <= 7; i++) {
    const forecastCard = createForecastCard(selectedUnit, weatherData, i);
    forecastContainer.appendChild(forecastCard);
  }
weatherContainer.append(weatherCard, forecastContainer);
};
weatherForm.addEventListener('submit', handleWeatherFormSubmit);

