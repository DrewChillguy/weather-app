const inputBox = document.getElementById('input-box');
const button = document.getElementById('button');
const weatherIcon = document.getElementById('weather-icon');
const locations = document.getElementById('city');
const temp = document.getElementById('temp');
const humid = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');

const apiKey = 'a6debec765861a989e402f73b43e04e9';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

async function checkWeather(city) {

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    } else {
        const data = await response.json();

        locations.innerHTML = data.name;
        temp.innerHTML = Math.round(data.main.temp) + `°C`;
        humid.innerHTML = data.main.humidity + `%`;
        windSpeed.innerHTML = data.wind.speed + ` km/h`;

        if (data.weather[0].main === 'Mist') {
            weatherIcon.src = 'images/mist.png';
        } else if (data.weather[0].main === 'Rain') {
            weatherIcon.src = 'images/rain.png';
        } else if (data.weather[0].main === 'Clouds') {
            weatherIcon.src = 'images/clouds.png';
        } else if (data.weather[0].main === 'Clear') {
            weatherIcon.src = 'images/clear.png';
        } else if (data.weather[0].main === 'Snow') {
            weatherIcon.src = 'images/snow.png';
        } else if (data.weather[0].main === 'Drizzle') {
            weatherIcon.src = 'images/drizzle.png';
        } else if (data.weather[0].main === 'Haze') {
            weatherIcon.src = 'images/clear.png';
        }
        else {
            weatherIcon.src = '';
        }

        document.querySelector('.container').style.height = '630px';
        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.error').style.display = 'none';

        console.log(data);
    }
}

button.addEventListener('click', function () {
    if (inputBox.value === '') {
        alert('Enter city name');
    } else {
        checkWeather(inputBox.value); 
    }
});





















