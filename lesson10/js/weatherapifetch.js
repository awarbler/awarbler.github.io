// use fetch feed apiurl 
// it will get the info for you and you tell me what to do in stages 
fetch(apiURL)
    // here we are waiting for the info to come back 
    .then((response) => response.json())
    // this sets up the object from the response 
    .then((jsObject) => {
        // this lets us look at what we did 
        console.log(jsObject);
        // this closes everything out nothing will print on screen only in console
    });
    // now we aregoing to go to the document and tell it change current-temp and change its text 
    //content to jsobject information main.temp
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    console.log(current-temp);
    document.getElementById('cityId').textContent = jsObject.city.name;
    console.log(cityID);

const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; // note the concatenation
const desc = jsObject.weather[0].description; // note how we reference the weather array
document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);