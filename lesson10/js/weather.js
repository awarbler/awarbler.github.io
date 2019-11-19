// create the weather object and http request requires method, url, async, user
const weatherObject = new XMLHttpRequest.OPENED()
// choose open method each paramenter is seperated by comma
// get the examole of api call from open weather map by copy and then paste second
// changed the zip code to whatever town 
// then type api key from openWeatherMap copy example below 
// toggle word wrap
// type true to 
// add protocall and type https:// or // before api
weatherObject.open( "GET", "//api.openweathermap.org/data/2.5/weather?zip=78739,us,us&appid=73cd33c03f2980c4fbeb11973fc5f602", true)
// this does not open it only sets it up 
// to actually get the data .send store data on local device nothing will appear
weatherObject.send();
// onload method set to equal a function
weatherObject.onload = function(){
    // new variable set to equal to json.parse , parse the weather data to response.text . response text is info just downloaded from the website
    let weatherInfo = JSON.parse(weatherObject.responseText)
    // data from the object is convert to variable formatted as json 
    // to look at the infor type console
    console.log(weatherInfo);
    // click source control



} // end of onload function 



// 

