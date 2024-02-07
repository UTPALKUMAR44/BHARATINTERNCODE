const apiKey = '4736fff982aa998ee5116178e7635f8f';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

function getWeather() {
    const city = document.getElementById('city').value;

    if (city) {
        const url = `${apiUrl}?q=${city}&appid=${apiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                displayWeather(data);
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                document.getElementById('weather-info').innerHTML = 'Error fetching weather data. Please try again.';
            });
    } else {
        alert('Please enter a city name.');
    }
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `
        <p><strong>City:</strong> ${data.name}</p>
        <p><strong>Temperature:</strong> ${data.main.temp} &#8451;</p>
        <p><strong>Description:</strong> ${data.weather[0].description}</p>
    `;
}