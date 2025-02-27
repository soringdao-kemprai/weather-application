// Get references to HTML elements
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const weatherResult = document.getElementById('weatherResult');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const weatherDescription = document.getElementById('weatherDescription');
const windSpeed = document.getElementById('windSpeed');

// API Key and Base URL
const apiKey = '25cac0f43016c7053fd59543e1f14b64'; // Replace with your OpenWeatherMap API Key
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Event listener for button click
searchBtn.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        getWeatherData(city);
    }
});

// Fetch weather data
async function getWeatherData(city) {
    const url = `${baseUrl}?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        alert(error.message);
    }
}

// Display weather data
function displayWeatherData(data) {
    cityName.textContent = data.name;
    temperature.textContent = Math.round(data.main.temp);
    weatherDescription.textContent = data.weather[0].description;
    windSpeed.textContent = data.wind.speed;
    
    // Show the weather result
    weatherResult.classList.remove('hidden');
}
