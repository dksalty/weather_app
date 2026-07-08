import './styles.css';
import { createWeatherCard} from './screenController.js';
import { getWeatherData } from './api.js';
const submitButton = document.getElementById('getWeatherButton');
const cityInput = document.getElementById('city');
const weatherForm = document.getElementById('weather-form');
const unitRadios = document.getElementsByName('unit');
const fiveDayButton = document.getElementById('fiveDayButton');
async function handleWeatherFormSubmit(e) {
  e.preventDefault();
  const city = cityInput.value;
  const selectedUnit = Array.from(unitRadios).find(radio => radio.checked).value;
  const weatherData = await getWeatherData(city, selectedUnit,);
  const weatherCard = createWeatherCard(weatherData, selectedUnit);
  const weatherContainer = document.getElementById('weather-container');
  weatherContainer.textContent = '';
  weatherContainer.appendChild(weatherCard);
}
weatherForm.addEventListener('submit', handleWeatherFormSubmit);


