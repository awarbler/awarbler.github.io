// read a fahrenheit temperature from html document page 138 javascript book
// programming fundamentals rex a breeze
//const tempString = document.getElementById("high").textContent;
//console.log(tempString)  // this is to check our work 
//const tempNumber = parseFloat(tempString);
// console.log(tempNumber)  // this is to check our work makes a blue number conversion of a string to a number
// or just do what is below

const tempNumber = parseFloat(document.getElementById("high").textContent);
//console.log(tempNumber);s
const speedNumber = parseFloat(document.getElementById('windSpeed').textContent);
//console.log(speedNumber);

let windChill = 35.74 + (0.6215 * tempNumber) - (35.75 * Math.pow(speedNumber, 0.16)) + 
(0.4275 * tempNumber * Math.pow(speedNumber, 0.16));
//console.log(windChill);
windChill = Math.round(windChill);
//console.log(windChill);

if (tempNumber <=50 && speedNumber >3){
    // display the fahrenheit temperature to the user
    // using textContent instead since data is not html it is text 
    document.getElementById("windChill").textContent =+windChill;
} 
else {
    document.getElementById("windChill").textContent ="Wind Chill: N/A";
}