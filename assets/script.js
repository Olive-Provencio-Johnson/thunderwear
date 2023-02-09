var weatherData = null;

getWeatherData();

console.log(weatherData);

async function getWeatherData() {
    var lat = '47.6062'
    var lon = '122.3321'

    console.log('taco')

    const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=32bd8e74f5dedfd3739fe74114309756');

    weatherData = await response.json();

    console.log(weatherData); 



}
