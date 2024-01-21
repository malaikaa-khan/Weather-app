const inputBox = document.querySelector("#inputSearch");
const searchBtn = document.querySelector("#searchBtn");
const weather_img = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");

    let location_not_found=document.querySelector(".location-Not-Found");
    let weather_body=document.querySelector(".weather-body");

    




async function checkWeather(city){
    let api_keys= "9992d10c3be10ab3b1713b77e374cc3a";
    let url=  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_keys}`;

    let weather_data=await fetch (`${url}`).then(response =>
       response.json());
       console.log(weather_data);

       if(weather_data.cod === '404'){
        location_not_found.style.display="flex";
        weather_body.style.display="none";
        console.log('error');
        return;
    }

    location_not_found.style.display="none";
    weather_body.style.display="flex";
    console.log('run');
    temperature.innerHTML= `${Math.round(weather_data.main.temp)-273}°C`;
    description.innerHTML=`${weather_data.weather[0].description}`
    humidity.innerHTML=`${weather_data.main.humidity}%`;
    wind_speed.innerHTML=`${weather_data.wind.speed}Km/H`


    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "/images/cloud.png";
            break;
        case 'Rain':
            weather_img.src = "/images/rain.png";
            break;
        case 'Clear':
            weather_img.src = "/images/clear.png";
            break;
        case 'Snow':
                weather_img.src = "/images/snow.png";
                break;
        case 'Mist':
                 weather_img.src = "/images/mist.png";    
       

    }
    
   
    
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(inputBox.value);
})

