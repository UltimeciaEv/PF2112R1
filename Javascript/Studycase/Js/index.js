const APP_ID = '8e4aa64662df484c4aef7bd7406c6efd';
const DEFAULT_VALUE = '--';
// const searchInput = document.querySelector('#search-input');
const searchInput = document.getElementById('search-input');
const cityName = document.querySelector('.city-name');
const weatherState = document.querySelector('.weather-state');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');

searchInput.addEventListener('change', (e) => {
    let searchValue = searchInput.value;
    console.log('searchValue: '+ JSON.stringify(searchValue));
    if(searchValue === null || searchValue === ""){
        alert('Nhập vào địa điểm!')
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${APP_ID}&units=metric&lang=vi`)
        .then(async res => {
            const data = await res.json();
            console.log('[Search Input]', data);
            cityName.innerHTML = data.name || DEFAULT_VALUE;
            if(data.weather !== undefined){
            weatherState.innerHTML = data.weather[0].description || DEFAULT_VALUE;
            weatherIcon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
            temperature.innerHTML = Math.round(data.main.temp) || DEFAULT_VALUE;
            }
            
        });
});