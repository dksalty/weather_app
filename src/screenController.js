export function createWeatherCard(processedWeatherData, selectedUnit, city) {
const {resolvedAddressData, conditionData, tempData, feelsLikeData, humidityData, windSpeedData, iconData} = processedWeatherData;

  const card = document.createElement('div');
  card.classList.add('weather-card');
  const nowDiv = document.createElement('div');
  nowDiv.textContent = 'Now in ' + resolvedAddressData.charAt(0).toUpperCase() + resolvedAddressData.slice(1);
  nowDiv.classList.add('now-div');
  card.appendChild(nowDiv);
   const icon = document.createElement('img');
  icon.src = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/${iconData}.png`;
  card.appendChild(icon);
  const condition = document.createElement('p');
  condition.textContent = `${conditionData}`;
  card.appendChild(condition);
  const temperature = document.createElement('p');
  if (selectedUnit === 'us') {
    temperature.textContent = `${tempData}°F`;
  } else if (selectedUnit === 'metric') {
    temperature.textContent = `${tempData}°C`;
  }
  card.appendChild(temperature);
  const feelsLike = document.createElement('p');
  if (selectedUnit === 'us') {
    feelsLike.textContent = `Feels Like: ${feelsLikeData}°F`;
  } else if (selectedUnit === 'metric') {
    feelsLike.textContent = `Feels Like: ${feelsLikeData}°C`;
  }
  card.appendChild(feelsLike);
  const humidity = document.createElement('p');
  humidity.textContent = `Humidity: ${humidityData}%`;
  card.appendChild(humidity);
  const windSpeed = document.createElement('p');
  if (selectedUnit === 'us') {
    windSpeed.textContent = `Wind Speed: ${windSpeedData} mph`;
  } else if (selectedUnit === 'metric') { 
  windSpeed.textContent = `Wind Speed: ${windSpeedData} km/h`;    
  }
  card.appendChild(windSpeed);
 
  card.classList.add('weather-card');
  return card;
  
}
export function createForecastCard(selectedUnit, processedForecastData){
  const {forecastDateData, forecastTempData, forecastIconData} = processedForecastData;
  const date = new Date(forecastDateData);
  const forecastCard = document.createElement('div');
  forecastCard.classList.add('forecast-card');
  const forecastDate = document.createElement('p');
  forecastDate.textContent = `${date.toLocaleDateString("en-US", { weekday: 'short' })}`;
  forecastCard.appendChild(forecastDate);
  const forecastTemp = document.createElement('p');
  if (selectedUnit === 'us') {
    forecastTemp.textContent = `${forecastTempData}°F`;
  } else if (selectedUnit === 'metric') {
    forecastTemp.textContent = `${forecastTempData}°C`;
  }
  forecastCard.appendChild(forecastTemp);
   const forecastIcon = document.createElement('img');
  forecastIcon.src = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/${forecastIconData}.png`;
  forecastCard.appendChild(forecastIcon);
  return forecastCard;
}
