import "./styles.css";

//Homework 5

function changeDate(date) {
  let hour = date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[dayIndex];

  return `${day} ${hour}:${minutes}`;
}

//1. function to later apply to URL to get temp
function showWeather(response) {
  let temperature = document.querySelector("#temperature");
  let currentTemp = Math.round(response.data.main.temp);
  temperature.innerHTML = `${currentTemp}`;
  document.querySelector("#city").innerHTML = response.data.name;
}
//2. function to apply getting URL & api
function getCity(city) {
  let apiKey = "dcea31d2d28dd931cc14827a300da464";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showWeather);
}
//function to Locate city in doc then apply url/api function to it
function submitSearch(event) {
  event.preventDefault();
  let city = document.querySelector("#city-search").value;
  getCity(city);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", submitSearch);

function searchLocation(position) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

//C to F
function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 66;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 19;
}

//Date
let dateElement = document.querySelector("#given-date");
let currentTime = new Date();
dateElement.innerHTML = changeDate(currentTime);

getCity("New York");
