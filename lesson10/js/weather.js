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
    // get the document and the id element we created was place in single quotes set the dot inner html to weatherInfo it is a json object to we need to use values seperated by dot chrome tells us what to type go to chrome open up triangle and you will see to get the name we simply type name: 
    document.getElementById('place').innerHTML = weatherInfo.name;


} // end of onload function 



// 

