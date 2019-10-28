// read a fahrenheit temperature from html document page 138 javascript book
// programming fundamentals rex a breeze
function doInputOutput(){
var tempf= parseFloat(document.getElementById('high').textContent);
var windSpeed = parseFloat(document.getElementById('wSpeed').textContent);
var calculate = windChill(tempF, windspeed);
if(tempf <= 50 && windSpeed > 3){
    // display the fahrenheit temperature to the user
// using textContent instead since data is not html it is text 
document.getElementById('chill').textContent=calculate;    
}
else{
    document.getElementById('chill').textContent=" N/A"
}
}
function windChill(tempf, speed){
    // convert the celsius temperature into fahrenheit
     var f= 35.74 + 0.6215 * tempf - 35.75 * Math.pow(speed,0.16) + 0.4275 * tempf * Math.pow(speed,0.16).toFixed(2)
     return f;
 }

 /* Input: get temperature and wind speed from user
         * process: calculate
         * output : the temp convet to celsius
         */
         //function doInputOutput(){
             
             // read a fahrenheit temperature from the user
             // parseFloat to convert what the user typed from tet into a number
             //var temperature= parseFloat(document.getElementById("tempInputBox").value);
             //var windSpeed= parseFloat(document.getElementById("windInputBox").value);
             //var calculate = windChill(temperature, windSpeed);
            
            // display the fahrenheit temperature to the user
            // document.getElementById("celsiusDiv").innerHTML = calculate;   
         //}
        
         //function windChill(tempf, speed){
            // convert the celsius temperature into fahrenheit
          //   var f = 35.74 + 0.6215 * tempf - 35.75 * Math.pow(speed,0.16) + 0.4275 * tempf * Math.pow(speed,0.16)
           //  return f;
        // }
 
 