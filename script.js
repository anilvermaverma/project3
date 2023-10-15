
const apikey = "ee01098536f37723360bc9f5cf42b2a4";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search_input = document.querySelector(".search_box")
const search_b = document.querySelector(".button_search")
const weatherIcon = document.querySelector(".weather-icon")

async function checkweather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }
    else{
        var data = await response.json();
    
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
    document.querySelector(".humedity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h"
    
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "mist.png"
    }

   document.querySelector(".weather").style.display = "block"
   document.querySelector(".error").style.display = "none"

    }
   
}
search_b.addEventListener("click" , () =>{
    checkweather(search_input.value)
})
