const apiKey = '77947dd13f6218f18f26e177245f9fca';

function getWeather() {
    const city = document.getElementById('city').value.trim();
    const errorMessage = document.getElementById('error-message');

    if (!city) {
        errorMessage.textContent = "Please enter a city name.";
        errorMessage.style.display = "block";
        clearWeather();
        return;
    }

    errorMessage.style.display = "none"; // Hide previous errors

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                errorMessage.textContent = "City not found!";
                errorMessage.style.display = "block";
                clearWeather();
            } else {
                errorMessage.style.display = "none";
                document.getElementById('city-name').textContent = data.name;
                document.getElementById('temperature').textContent = `${data.main.temp}°C`;
                document.getElementById('weather-description').textContent = data.weather[0].description;
            }
        })
        .catch(error => {
            console.error("Error fetching the weather data:", error);
            errorMessage.textContent = "Error fetching the weather data!";
            errorMessage.style.display = "block";
            clearWeather();
        });
}

function clearWeather() {
    document.getElementById('city-name').textContent = '';
    document.getElementById('temperature').textContent = '';
    document.getElementById('weather-description').textContent = '';
}
