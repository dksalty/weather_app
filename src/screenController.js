


export function createWeatherCard(weatherData, selectedUnit) {
  const today = weatherData.currentConditions
  const tomorrow = weatherData.days[1]
  const dayAfterTomorrow = weatherData.days[2]
  const threeDaysAfterTomorrow = weatherData.days[3]
  const fourDaysAfterTomorrow = weatherData.days[4]
  
  const card = document.createElement('div');
  card.classList.add('weather-card');
  const nowDiv = document.createElement('div');
  nowDiv.textContent = 'Now in ' + weatherData.resolvedAddress.charAt(0).toUpperCase() + weatherData.resolvedAddress.slice(1);
  card.appendChild(nowDiv);
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
  const icon = document.createElement('img');
  icon.src = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/${weatherData.currentConditions.icon}.png`;
  card.appendChild(icon);
  card.classList.add('weather-card');
  return card;
  
}

