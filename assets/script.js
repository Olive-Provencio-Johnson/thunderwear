
//Present current and future conditions for that city and that city is added to the search history
//View current weather conditions for that city
//Display the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed

//FUTURE weather conditions for that city
//Presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

//Search History: click on a city in the search history and be presented with current and future conditions for that city



// document.getElementById.btnMain.onclick = getLatLon();

//get the Lat and Lon for a city when searched using the searchbar
function getLatLon(cityName){
    if (!cityName) {
        var cityName = document.getElementById('form-control').value; 
    console.log(cityName);
}
    fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=5&appid=32bd8e74f5dedfd3739fe74114309756").then((response) => response.json())
    .then((data) => {getWeatherData(data[0].lat, data[0].lon)});
    //calling the API to get the Lat and Lon which will pass through the getWeatherData function below
    

}

function getWeatherData(lat, lon) {
getCurrentWeather(lat, lon);
getFiveDay(lat, lon);
}


//provides weather data for the current city, and ammends the page to include that information in the desired locations in HTML
function getCurrentWeather(lat, lon) {
   console.log(lat);
   console.log(lon);

    console.log('taco')


    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&units=imperial&appid=32bd8e74f5dedfd3739fe74114309756')
    .then((response) => response.json())
    .then((data) => {
        document.getElementById('currentCity').innerHTML = 'City:' + data.city.name;
        document.getElementById('currentTemp').innerHTML = '<i class="fa-solid fa-temperature-three-quarters"></i>Temp: ' + data.list[0].main.temp + " F";
        document.getElementById('currentWind').innerHTML = '<i class="fa-solid fa-wind"></i>Wind: ' + data.list[0].wind.speed + " mph";  
        document.getElementById('currentHumidity').innerHTML = '<i class="fa-solid fa-glass-water-droplet"></i>Humidity: ' + data.list[0].main.humidity + "%";
        console.log(data) } );

}

function getFiveDay(lat, lon) {


   
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&units=imperial&appid=32bd8e74f5dedfd3739fe74114309756')
    .then((response) => response.json())
    .then((data) => {
        for (i=0 ; i<5 ; i++) {

        document.getElementById('currentCity').innerHTML = 'City:' + data.city.name;
        document.getElementById('date-'+i).innerHTML = data.list[i*8].dt_txt.substring(5, 10);
        document.getElementById('temp-'+i).innerHTML = 'Temp: ' + data.list[i*8].main.temp +  " F";
        document.getElementById('wind-'+i).innerHTML = 'Wind: ' + data.list[i*8].wind.speed + " mph";  
        document.getElementById('humidity-'+i).innerHTML = 'Humidity: ' + data.list[i*8].main.humidity + "%";
        console.log(data) } 
    });
        
}

