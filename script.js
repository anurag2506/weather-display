const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather_img');
const temperature = document.querySelector('.temperature'); // Corrected selector
const description = document.querySelector('.description'); // Corrected selector
const humidity = document.getElementById('Humidity');
const wind_speed = document.getElementById('Wind-speed');
const location_not_found = document.querySelector('.location-not-found');

async function checkWeather(city) {
    const api_key = "ac23d5d317d04bb4c1bf2cb274702ae2";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`; // Corrected URL

    const weather_data = await fetch(`${url}`).then(response => response.json());

   

    if(weather_data.cod != `404`){
        
        temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerText = `${weather_data.wind.speed}Km/H`;
    }
    else if(weather_data.cod == `404`){
        
        temperature.innerHTML = "NULL";
        description.innerHTML = "Error !";
        weather_img.src = "assets/error.jpg";
        humidity.innerHTML = "NULL";
        wind_speed.innerText = "NULL";
        return ; 
    }

    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weather_img.src = "assets/cloudy.png";
            break;
        case 'Clear':
                weather_img.src = "assets/sunny.png";
                break;
        case 'Haze':
                weather_img.src = "assets/sunny.png";
                    break;
        case 'Rain':
            weather_img.src = "assets/rain.png";
            break;
        case 'Mist':
            weather_img.src = "assets/mist.jpg";
            break;
        //Haze
        case 'Snow':
            weather_img.src = "assets/anow.jpg"; // Moved inside switch block
            break;
        
             
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
});
