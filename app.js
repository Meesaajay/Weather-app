const apiKey = '77947dd13f6218f18f26e177245f9fca';

function getWeather() {
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                document.getElementById('error-message').textContent = "City not found!";
                clearWeather();
            } else {
                document.getElementById('error-message').textContent = "";
                document.getElementById('city-name').textContent = data.name;
                document.getElementById('temperature').textContent = `${data.main.temp}°C`;
                document.getElementById('weather-description').textContent = data.weather[0].description;
            }
        })
        .catch(error => {
            console.error("Error fetching the weather data:", error);
            document.getElementById('error-message').textContent = "Error fetching the weather data!";
        });
}

function clearWeather() {
    document.getElementById('city-name').textContent = '';
    document.getElementById('temperature').textContent = '';
    document.getElementById('weather-description').textContent = '';
}
