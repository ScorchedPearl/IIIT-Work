async function getWeather() {
 const city = document.getElementById('cityInput').value;
 const apiKey = '3839398339c7b6bbf63f1e4d59111575';
 const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

 try {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('City not found');
  }
  const data = await response.json();
  document.getElementById('location').textContent = data.name;
  document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
  document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
  document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
 } catch (error) {
  alert(error.message);
 }
}