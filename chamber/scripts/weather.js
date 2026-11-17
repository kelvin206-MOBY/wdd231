const latitude = 6.3350;
const longitude = 5.6037;
const apiKey  =  "4b25d7266713081c23a5b6c4f49c26ca";
const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
async function getWeather() {
    const response = await fetch(currentWeatherURL);
    const data = await response.json();

    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    const forecastResponse = await fetch(forecastURL);
    const forecastData = await forecastResponse.json();

    const weatherContainer = document.querySelector(".current-weather");
    weatherContainer.innerHTML = `
        <h3>${data.name}</h3>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
    `;

    console.log(forecastData.list);
    const dailyForecast = forecastData.list
        .filter(item => item.dt_txt.includes("12:00:00"))
        .slice(0, 3);
    console.log(dailyForecast);

    const forecastContainer = document.querySelector(".weather-forecast");
    forecastContainer.innerHTML = "<h3>3-Day Forecast</h3>";
    dailyForecast.forEach(day => {
        forecastContainer.innerHTML += `
            <div class="forecast-card">
                <p>Date: ${day.dt_txt}</p>
                <p>Temperature: ${day.main.temp}°C</p>
                <p>Weather: ${day.weather[0].description}</p>
            </div>
        `;
    });

    console.log(data);
}
getWeather();