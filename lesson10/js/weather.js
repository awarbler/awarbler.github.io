// create the weather object and http request requires method, url, async, user
const weatherObject = new XMLHttpRequest();
// choose open method each paramenter is seperated by comma
// get the examole of api call from open weather map by copy and then paste second
// changed the zip code to whatever town 
// then type api key from openWeatherMap copy example below 
// toggle word wrap
// type true to 
// add protocall and type https:// or // before api
// to add f temp add & units imperial
weatherObject.open( "GET", "//api.openweathermap.org/data/2.5/weather?zip=84653,us&appid=73cd33c03f2980c4fbeb11973fc5f602&units=imperial", true);
// this does not open it only sets it up 
// to actually get the data .send store data on local device nothing will appear
weatherObject.send();
// onload method set to equal a function
weatherObject.onload = function(){
    // new variable set to equal to json.parse , parse the weather data to response.text . response text is info just downloaded from the website
    let weatherInfo = JSON.parse(weatherObject.responseText);
    // data from the object is convert to variable formatted as json 
    // to look at the infor type console
    console.log(weatherInfo);
    // get the document and the id element we created a 'place' in single quotes set the dot inner html to weatherInfo it is a json object so we need to use values seperated by dot. chrome will tell us what to type go to chrome open up triangle to access the data put mouse over it and you will see the element to assign or get the name we simply type name: 
    // we are using ajax from the api 
    document.getElementById('place').innerHTML = weatherInfo.name;
    // to get the current tempt on html- change id to currentTemp from id on html and change json reference
    document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;

    document.getElementById('windSpeed').innerHTML = weatherInfo.wind.speed;

    // add image from data file add a const to add iconcode set to the appropriate element in the json file
    // by going to goolgle hover over icon and the name will appear -- double quotes unnecessary
    // the phone name looks like 
    const iconcode = weatherInfo.weather[0].icon;
    // check to see if iconcode works by doing a console.log it should print out a number and letter
    console.log(iconcode);
    // full path looks weather image looks like //openwethermap.org/img/w/01n.png we remove the html protocol so it will work anywhere , notice the file name 01n , the file name is given to us in the json data. will create dynamic path to create image name with the json data create a const icon path = " " ++ " "; the first part of the name of the image will go inside the first quotes the file name and the extension will go inside the last quotes variable icon code from json data will go between the ++
    const icon_path = "//openwethermap.org/img/w/ " + iconcode + "01n.png";



} // end of onload function 



// 

