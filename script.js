const cityInput = document.querySelector(".cityInput");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

const apiKey = "1afcff7ef65dd7cbc1f87a5c81d661b9";

async function checkWeather(city) {
  const cityName = cityInput.value.trim();
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

//   if (!cityName) return;

  const response = await fetch(API_URL);
  let data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = data.main.temp + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "KM/H";

  if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "images/cloudy.png"
  }else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "images/sun.png";
  }
   else if(data.weather[0].main == "Haze"){
    weatherIcon.src = "images/haze.png";
  }
   else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "images/rain.png";
  }
   else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "images/drizzle.png";
  }

  document.querySelector(".weather").style.display = "block";
}

// for search button event
searchBtn.addEventListener("click", () => {
  checkWeather();
});
// for enter button click event
cityInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter"){
        checkWeather();
    }
  
});
