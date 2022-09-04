// API key----(confidential)
const apiKey = 'c5057d4472e091671f2456e3bd5c2243';
// Data loading function
const loadData = (city) =>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => loadTemperature(data))
}
// Datum loading function
const loadTemperature = data =>{
    const temperature = document.getElementById('temperature');
    temperature.innerText = `${data.main.temp}`;
    for(const weatherDatum of data.weather){
        const info = document.getElementById('info');
        info.innerText = `${weatherDatum.main}`;
    }
}
// Search button funtionalities
document.getElementById('search-button').addEventListener('click', function(){
    const cityNameInput = document.getElementById('city-name');
    const cityName = cityNameInput.value;
    const displayCityName = document.getElementById('cityName');
    displayCityName.innerText = cityName;
    loadData(cityName)
})
// The end-------------------



