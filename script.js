window.addEventListener("load", () => {
  let long;
  let lat;
  let temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimeZone = document.querySelector(".location-timezone");
  let weatherIcon = document.querySelector(".weather-icon");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      //   const proxy = `https://cors-anywhere.herokuapp.com/`;
      const api = `https://api.weatherapi.com/v1/current.json?key=ab25e4910efb4b6ab63172346211007&q=${lat},${long}&aqi=no`;
      console.log(api);
      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          //   console.log(data);
          const { name, region, country } = data.location;
          const { text, icon } = data.current.condition;
          const { temp_c, feelslike_c, humidity, cloud } = data.current;

          //Set DOM elements from API

          temperatureDegree.textContent = temp_c;
          temperatureDescription.innerHTML = `Feels Like: ${feelslike_c}<span><sup>&#176</sup>C</span>`;
          locationTimeZone.textContent = `${name}, ${region}, ${country}`;
          weatherIcon.innerHTML = `<img src="${icon}" alt="Icon">`;
        });
    });
  }
});

let inputVal;
const form = document.querySelector(".top-banner form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputVal = document.querySelector(".top-banner form input").value;
  //   const proxy = `https://cors-anywhere.herokuapp.com/`;
  const api = `https://api.weatherapi.com/v1/current.json?key=ab25e4910efb4b6ab63172346211007&q=${inputVal}&aqi=no`;
  console.log(api);
  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //   console.log(data);
      const { name, region, country } = data.location;
      const { text, icon } = data.current.condition;
      const { temp_c, feelslike_c, humidity, cloud } = data.current;

      //Set DOM elements from API
      let temperatureDescription = document.querySelector(
        ".temperature-description"
      );
      let temperatureDegree = document.querySelector(".temperature-degree");
      let locationTimeZone = document.querySelector(".location-timezone");
      let weatherIcon = document.querySelector(".weather-icon");

      temperatureDegree.textContent = temp_c;
      temperatureDescription.innerHTML = `Feels Like: ${feelslike_c}<span><sup>&#176</sup>C</span>`;
      locationTimeZone.textContent = `${name}, ${region}, ${country}`;
      weatherIcon.innerHTML = `<img src="${icon}" alt="Icon">`;
    });
});
