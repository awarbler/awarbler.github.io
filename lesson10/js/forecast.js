const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

const forecastObject = new XMLHttpRequest();
forecastObject.open("GET", "//api.openweathermap.org/data/2.5/forecast?id=5604473&temp&units=imperial&APPID=73cd33c03f2980c4fbeb11973fc5f602", true);
forecastObject.send();
forecastObject.onload = function () {
  let forecastInfo = JSON.parse(forecastObject.responseText);
  //console.log(forecastInfo);

  var forecastItems = forecastInfo.list;
  //console.log(forecastItems);
  var fiveDayItems = forecastItems.filter(function (item) {
    return item.dt_txt.includes("18:00:00");
  });
  //console.log(forecastItems);
  for (let i = 0; i < (fiveDayItems.length); ++i) {
    var day = "day" + (i + 1);
    var icon = "icon" + (i + 1);
    var temp = "temp" + (i + 1);

    var d = new Date(fiveDayItems[i].dt_txt);
    var dayName = days[d.getDay()];

    var imagesrc = '//openweathermap.org/img/w/' + fiveDayItems[i].weather[0].icon + '.png';
    var desc = '//openweathermap.org/img/w/' + fiveDayItems[i].weather[0].description;
    document.getElementById(day).textContent = dayName;
    document.getElementById(icon).setAttribute('src', imagesrc);
    document.getElementById(icon).setAttribute('alt', desc);
    document.getElementById(temp).textContent = fiveDayItems[i].main.temp;
  }
} // end of onload

fetch('https://api.openweathermap.org/data/2.5/forecast?id=5604473&&cnt=7&units=imperial&appid=73cd33c03f2980c4fbeb11973fc5f602')
  .then((response) => response.json())
  .then((jsObject) => {
   // console.log(jsObject);

    let forecast = [];
    let list = jsObject.list;
    let day = 1;

    jsObject.list.forEach(x => {

      for (let i = 1; i <= 5; i++) {
        let imagesrc = '//openweathermap.org/img/w/' + list[i].weather[0].icon + '.png';
        document.getElementById("weatherimage" + i).setAttribute('src', imagesrc);
        document.getElementById('forecastday' + i).innerHTML = forecast[i];

        if (x.dt_txt.includes('18:00:00')) {
          forecast[day] = x.main.temp;
          day++;
        }
      }
    });
  });

  const forecastObject1 = new XMLHttpRequest();
  forecastObject1.open("GET", "//api.openweathermap.org/data/2.5/weather?id=5604473&appid=73cd33c03f2980c4fbeb11973fc5f602&units=imperial", true);
  forecastObject1.send();
  forecastObject1.onload = function () {
    // new variable set to equal to json.parse , parse the weather data to response.text 
    //. response text is info just downloaded from the website
    let forecastInfo1 = JSON.parse(forecastObject1.responseText);
    //console.log(forecastInfo1);
// get the document and the id element we created a 'place' in single quotes set the dot 
//inner html to weatherInfo it is a json object so we need to use values seperated by dot. 
//chrome will tell us what to type go to chrome open up triangle to access the data put 
//mouse over it and you will see the element to assign or get the name we simply type name: 
    // we are using ajax from the api
    var forecastData = forecastInfo1.list;
    //console.log

    const iconcode = forecastInfo1.weather[0].icon;
    const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
   // console.log(icon_path);
    document.getElementById('weather_icon').src = icon_path;
  
  
  } // end of onload function 
  
  const CURRENT_LOCATION = document.getElementsByClassName('weather-content__overview')[0];
  const CURRENT_TEMP = document.getElementsByClassName('weather-content__temp')[0];
  const FORECAST = document.getElementsByClassName('component__forecast-box')[0];
  
  const appid = '';
  
  // Use Fetch API to GET data from OpenWeather API
  // return json
  function getWeatherData(5604473) {
    let headers = new Headers();
    const URL = `https://api.openweathermap.org/data/2.5/forecast/daily?5604473&cnt=7&units=imperial&APPID=${appid}`;
  
    return fetch(URL, {
      method: 'GET',
      headers: headers
    }).then(data => data.json());
  }
  
  // TUTORIAL READERS:
  // yeah, using an external resource for the icons and applying them here using a switch block
  function applyIcon(icon) {
    let selectedIcon;
    switch (icon) {
      case '01d':
        selectedIcon = "wi-day-sunny"
        break;
      case '01n':
        selectedIcon = "wi-night-clear"
        break;
      case '02d':
      case '02n':
        selectedIcon = "wi-cloudy"
        break;
      case '03d':
      case '03n':
      case '04d':
      case '04n':
        selectedIcon = "wi-night-cloudy"
        break;
      case '09d':
      case '09n':
        selectedIcon = "wi-showers"
        break;
      case '10d':
      case '10n':
        selectedIcon = "wi-rain"
        break;
      case '11d':
      case '11n':
        selectedIcon = "wi-thunderstorm"
        break;
      case '13d':
      case '13n':
        selectedIcon = "wi-snow"
        break;
      case '50d':
      case '50n':
        selectedIcon = "wi-fog"
        break;
      default:
        selectedIcon = "wi-meteor"
    }
    return selectedIcon;
  }
  
  // Use returned json from promise to render daily forecast
  renderData = (location, forecast) => {
    // render city, current weather description and temp
    const currentWeather = forecast[0].weather[0];
    const widgetHeader = `<h1>${location.name}</h1><small>${currentWeather.description}</small>`;
    CURRENT_TEMP.innerHTML = `<i class="wi ${applyIcon(currentWeather.icon)}"></i> ${Math.round(forecast[0].temp.day)} <i class="wi wi-degrees"></i>`;
    CURRENT_LOCATION.innerHTML = widgetHeader;
  
    // render each daily forecast
    forecast.forEach(day => {
      let date = new Date(day.dt * 1000);
      let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
      let name = days[date.getDay()];
      let dayBlock = document.createElement("div");
      dayBlock.className = 'forecast__item';
      dayBlock.innerHTML = `<div class="forecast-item__heading">${name}</div>
        <div class="forecast-item__info"><i class="wi ${applyIcon(day.weather[0].icon)}"></i> <span class="degrees">${Math.round(day.temp.day)}<i class="wi wi-degrees"></i></span></div>`;
      FORECAST.appendChild(dayBlock);
    });
  }
  
  // TUTORIAL reader: I moved the calling of the weather API url
  // to be able to get the current browser location
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      const coordinates = `lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
      // run/render the widget data
      getWeatherData(coordinates).then(weatherData => {
        let city = weatherData.city;
        let dailyForecast = weatherData.list;
  
        renderData(city, dailyForecast);
      });
    });
  } else {
    
  }
  