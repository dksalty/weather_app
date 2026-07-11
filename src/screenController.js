


export function createWeatherCard(weatherData, selectedUnit) {
  const card = document.createElement('div');
  card.classList.add('weather-card');
  const nowDiv = document.createElement('div');
  nowDiv.textContent = 'Now in ' + weatherData.resolvedAddress.charAt(0).toUpperCase() + weatherData.resolvedAddress.slice(1);
  nowDiv.classList.add('now-div');
  card.appendChild(nowDiv);
   const icon = document.createElement('img');
  icon.src = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/${weatherData.currentConditions.icon}.png`;
  card.appendChild(icon);
  const condition = document.createElement('p');
  condition.textContent = `${weatherData.currentConditions.conditions}`;
  card.appendChild(condition);
  const temperature = document.createElement('p');
  if (selectedUnit === 'us') {
    temperature.textContent = `${weatherData.currentConditions.temp}°F`;
  } else if (selectedUnit === 'metric') {
    temperature.textContent = `${weatherData.currentConditions.temp}°C`;
  }
  card.appendChild(temperature);
  const feelsLike = document.createElement('p');
  if (selectedUnit === 'us') {
    feelsLike.textContent = `Feels Like: ${weatherData.currentConditions.feelslike}°F`;
  } else if (selectedUnit === 'metric') {
    feelsLike.textContent = `Feels Like: ${weatherData.currentConditions.feelslike}°C`;
  }
  card.appendChild(feelsLike);
  const humidity = document.createElement('p');
  humidity.textContent = `Humidity: ${weatherData.currentConditions.humidity}%`;
  card.appendChild(humidity);
  const windSpeed = document.createElement('p');
  if (selectedUnit === 'us') {
    windSpeed.textContent = `Wind Speed: ${weatherData.currentConditions.windspeed} mph`;
  } else if (selectedUnit === 'metric') { 
  windSpeed.textContent = `Wind Speed: ${weatherData.currentConditions.windspeed} km/h`;    
  }
  card.appendChild(windSpeed);
 
  card.classList.add('weather-card');
  return card;
  
}
export function createForecastCard(selectedUnit, weatherData, day){
  const date = new Date(weatherData.days[day].datetime);
  const forecastCard = document.createElement('div');
  forecastCard.classList.add('forecast-card');
  const forecastDate = document.createElement('p');
  forecastDate.textContent = `${date.toLocaleDateString("en-US", { weekday: 'short' })}`;
  forecastCard.appendChild(forecastDate);
  const forecastTemp = document.createElement('p');
  if (selectedUnit === 'us') {
    forecastTemp.textContent = `${weatherData.days[day].temp}°F`;
  } else if (selectedUnit === 'metric') {
    forecastTemp.textContent = `${weatherData.days[day].temp}°C`;
  }
  forecastCard.appendChild(forecastTemp);
   const forecastIcon = document.createElement('img');
  forecastIcon.src = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/${weatherData.days[day].icon}.png`;
  forecastCard.appendChild(forecastIcon);
  return forecastCard;
}
