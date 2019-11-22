// create the weather object and http request requires method, url, async, user
const weatherObject = new XMLHttpRequest();
// choose open method: each paramenter is seperated by comma
// using get: copy example of api call from open weather map by copy and then paste second
// changed the zip code to whatever town( **** for assignment changed id to use city id not zip code no comma for city)
// then a comma with us&app= (for city id do not use commo or us and no space)then type api key from openWeatherMap copy example below 
// toggle word wrap
// type true to 
// add protocall and type https:// or // before api
// to add f temp add & units imperial

weatherObject.open("GET", "//api.openweathermap.org/data/2.5/weather?id=5604473&appid=73cd33c03f2980c4fbeb11973fc5f602&units=imperial", true);
// this does not open it only sets it up 
// to actually get the data .send store data on local device nothing will appear
weatherObject.send();
// onload method set to equal a function
weatherObject.onload = function () {
    // new variable set to equal to json.parse , parse the weather data to response.text . response text is info just downloaded from the website
    let weatherInfo = JSON.parse(weatherObject.responseText);
    // data from the object is convert to variable formatted as json 
    // to look at the info type console we need to llok at the data to assing the elements by id info.
    console.log(weatherInfo);
    // get the document and the id element we created a 'place' in single quotes set the dot inner html to weatherInfo it is a json object so we need to use values seperated by dot. chrome will tell us what to type go to chrome open up triangle to access the data put mouse over it and you will see the element to assign or get the name we simply type name: 
    // we are using ajax from the api 
    document.getElementById('place').innerHTML = weatherInfo.name;
    // to get the current tempt on html- change id to currentTemp from id on html and change json reference
    document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;
    document.getElementById('high').innerHTML = weatherInfo.main.temp_max;
    document.getElementById('humidity').innerHTML = weatherInfo.main.humidity;
    document.getElementById('windSpeed').innerHTML = weatherInfo.wind.speed;


    // add image from data file add a const to add iconcode set to the appropriate element in the json file
    // by going to goolgle hover over icon and the name will appear -- double quotes unnecessary
    // the phone name looks like 
    const iconcode = weatherInfo.weather[0].icon;

    // check to see if iconcode works by doing a console.log it should print out a number and letter
    //console.log(iconcode);

    // full path looks weather image looks like //openwethermap.org/img/w/01n.png we remove the html protocol so it will work anywhere , notice the file name 01n , the file name is given to us in the json data. will create dynamic path to create image name with the json data create a const icon path = " " ++ " "; the first part of the name of the image will go inside the first quotes the file name extension will go inside the last quotes  and the variable icon code from json data will go between the ++
    // should look like this create a const with icon_path as the variable you have quotes with the path, you have a + to concat ( to join 2 or more strings together) then the variable iconcode we created for the icon another + to close the concat then we glue on the last part with "" and we put the extension in the middle, make sure you add ; to close 
    const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";

    // to check to see if icon_path works or will display we will put it in console
    console.log(icon_path);

    // to add the image to html dont need for this project
    //document.getElementById('weather_icon').src = icon_path;
} // end of onload function 

// forecast section use the forecast data use a query stringname this comes after a ? carry data over 
// create a variable named apiURL with a const to store the url so we dont have to type url all the type
// set up for city id change temp units to imperial and api account 
// const variable is called apiURL
// comes back as a json file account - get api account 
// go to file called data but we put slashes for all the ? seperates the file from the rest of the information 
// an & seperates or concatnates the values together add units
// this is an url that we are adding 
// use your own api no one elses

const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=73cd33c03f2980c4fbeb11973fc5f602";
// use fetch feed apiurl 
// it will get the info for you and you tell me what to do in stages 
fetch(apiURL)
    // here we are waiting for the info to come back 
    .then((response) => response.json())
    // this sets up the object from the response this comes from the api documentation 
    // arrow function is a shortcut it is a promise 
    .then((jsObject) => {
        // this lets us look at what we did 
        console.log(jsObject);

        // this closes everything out nothing will print on screen only in console
        // now we aregoing to go to the document and tell it change current-temp and change its text 
        //content to jsobject information main.temp
        // whatever we name here ' current-temp' has to match html file
        document.getElementById('current-temp').textContent = jsObject.list[0].main.temp;
        // document.getElementById('cityId').textContent = jsObject.name;

        //image is a path the current weather is in a weather array 
        // a zero based index use [] and the value is icon it has an absolute address 
        // copied and pasted from the assignment - we have to declare an element 
        // giving it a imagesrc as const here is the address wehre the img are stored 
        // the openweatehrmap gives us then concat with a +
        // jsOject is the label we gave it that is storing the information put a period to seperate
        // the info, then we put .weather with an array (the file has an array so we have to go through
        // the array to get the correct weather icon)then we put .icon (this is the name of the element 
        // when we hover of the word icon in google chrome) then we put a +  then we add '.png'  because 
        // this is the type of file we are dealing with and we have to notated it. 
        // basically the file name
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png'; // note the concatenation

        // this gets the weather description if it sunny cloudy the alt will come from here 
        // current weather conditions partyly cloudy set attribute for the alt
        const desc = jsObject.list[0].weather[0].description; // note how we reference the weather array

        // display the text of the source to make sure we concat it correctly 
        //document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
        // document.getElementById('desc').textContent = desc; // this is my example to display icon descrption
        // this is to put a alt for the image 
        document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
        // set the attribute for the image description 
        document.getElementById('icon').setAttribute('alt', desc);
    });