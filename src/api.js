
export async function getWeatherData(city) {
  try {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=27ZFXJNWL8MLFAZCNDGKVGVNZ`);
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