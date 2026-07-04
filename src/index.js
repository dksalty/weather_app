import './styles.css';
import { createWeatherCard } from './screenController.js';
import { getWeatherData } from './api.js';
const submitButton = document.getElementById('getWeatherButton');
const cityInput = document.getElementById('city');
const weatherForm = document.getElementById('weather-form');


async function handleWeatherFormSubmit(e) {
  e.preventDefault();
  const city = cityInput.value;
  
  const weatherData = await getWeatherData(city);
  const weatherCard = createWeatherCard(weatherData);
  const weatherContainer = document.getElementById('weather-container');
  weatherContainer.textContent = '';
  weatherContainer.appendChild(weatherCard);
}
weatherForm.addEventListener('submit', handleWeatherFormSubmit);
