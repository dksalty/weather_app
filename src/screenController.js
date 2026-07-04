import { getWeatherData } from './api.js';

function farenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
export function createWeatherCard(weatherData) {
  const card = document.createElement('div');
  const condition = document.createElement('p');
  condition.textContent = `Condition: ${weatherData.currentConditions.conditions}`;
  card.appendChild(condition);
  const tempContainer = document.createElement('div');
  const temperature = document.createElement('p');
  temperature.textContent = `Temperature: ${weatherData.currentConditions.temp}°C`;
 
  const tempSelect = document.createElement('select');
  const celsiusOption = document.createElement('option');
  celsiusOption.value = 'C';
  celsiusOption.textContent = 'Celsius';
  tempSelect.appendChild(celsiusOption);
  const fahrenheitOption = document.createElement('option');
  fahrenheitOption.value = 'F';
  fahrenheitOption.textContent = 'Fahrenheit';
  tempSelect.appendChild(fahrenheitOption);
  tempContainer.append(temperature, tempSelect);
  card.appendChild(tempContainer);
  const humidity = document.createElement('p');
  humidity.textContent = `Humidity: ${weatherData.currentConditions.humidity}%`;
  card.appendChild(humidity);
  const windSpeed = document.createElement('p');
  windSpeed.textContent = `Wind Speed: ${weatherData.currentConditions.windspeed} km/h`;
  card.appendChild(windSpeed);
  const icon = document.createElement('img');
  icon.src = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/${weatherData.currentConditions.icon}.png`;
  card.appendChild(icon);
  card.classList.add('weather-card');
  return card;
  if (tempSelect.value === 'F') {
    temperature.textContent = `Temperature: ${weatherData.currentConditions.temp}°F`;
  }
  else {
    temperature.textContent = `Temperature: ${farenheitToCelsius(weatherData.currentConditions.temp)}°C`;
  }
}

