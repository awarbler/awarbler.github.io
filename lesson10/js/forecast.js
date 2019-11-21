const requestURL = "//api.openweathermap.org/data/2.5/forecast?id=5604473&appid=73cd33c03f2980c4fbeb11973fc5f602&units=imperial";

fetch(requestURL)
  // different request
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
   console.table(jsonObject); // temporary checking for valid response and data parsing

    //store the results of the converted response into an array since the data source is a neatly
    //packed array of records named "prophets". See JSON source.

    // this is an array 
    const prophets = jsonObject['prophets'];
forecastObject.onload = function () {
  // new variable set to equal to json.parse , parse the weather data to response.text 
  //.response text is info just downloaded from the website
  let forecastInfo = JSON.parse(forecastObject.responseText);
  // data from the object is convert to variable formatted as json to look at the
  // info type console we need to llok at the data to assing the elements by id info.
  console.log(forecastInfo);
  // get the document and the id element we created a 'place' in single quotes set the 
  //dot inner html to weatherInfo it is a json object so we need to use values seperated 
  //by dot. chrome will tell us what to type go to chrome open up triangle to access the 
  //data put mouse over it and you will see the element to assign or get the name we simply 
  //type name: we are using ajax from the api 

  document.getElementById('place').innerHTML = forecastInfo.city.name;
  // to get the current tempt on html- change id to currentTemp from id on html and change json reference
  document.getElementById('currentTemp').innerHTML = forecastInfo.main.temp;
  document.getElementById('high').innerHTML = forecastInfo.main.temp_max;
  document.getElementById('humidity').innerHTML = forecastInfo.main.humidity;
  document.getElementById('windSpeed').innerHTML = forecastInfo.wind.speed;
  // add image from data file add a const to add iconcode set to the appropriate 
  //element in the json file by going to goolgle hover over icon and the name 
  //will appear -- double quotes unnecessary the phone name looks like 
  const iconcode = forecastInfo.weather[0].icon;

  // check to see if iconcode works by doing a console.log it should print out a number and letter
  //console.log(iconcode);

  // full path looks weather image looks like //openwethermap.org/img/w/01n.png 
  //we remove the html protocol so it will work anywhere , notice the file name 
  //01n , the file name is given to us in the json data. will create dynamic path 
  //to create image name with the json data create a const icon path = " " ++ " "; 
  //the first part of the name of the image will go inside the first quotes the 
  //file name extension will go inside the last quotes  and the variable icon code 
  //from json data will go between the ++ should look like this create a const with 
  //icon_path as the variable you have quotes with the path, you have a + to concat 
  //( to join 2 or more strings together) then the variable iconcode we created for 
  //the icon another + to close the concat then we glue on the last part with "" and 
  //we put the extension in the middle, make sure you add ; to close 
  const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";

  // to check to see if icon_path works or will display we will put it in console
  console.log(icon_path);

  // to add the image to html 
  document.getElementById('forecast_icon').src = icon_path;

}

// this create the file
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
// basic fetch() method and feed it the required argument, the URL and use the .
//then() method that returns a Promise which response we will work with as an  
// argument to an anonymous function.We need to extract the JSON content 
//from the noise of the full HTTP response by using the json() method. The second 
//.then() method is then setup for us to work with the converted response data in 
//JavaScript object format.  Initially we will test to see if we get a valid, 
//parsed response using a console.table() method to output the results to the console.

fetch(requestURL)
  // different request
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject); // temporary checking for valid response and data parsing

    //store the results of the converted response into an array since the data source is a neatly
    //packed array of records named "prophets". See JSON source.

    // this is an array 
    const prophets = jsonObject['prophets'];
    //we need to loop through every record and process them into their own 'cards' 
    //(HTML output), one at a time. This is easily done using a for loop, something 
    //that you are familiar with as you process each element of an array. Remember? 
    //We will use the variable i as our control variable in the loop as we iterate 
    //through the prophets array.IMPORTANT: Put this line of code directly after 
    //the console.table() line and before you close the .then() method }); .

    // this is to go through all prophets with a for loop
    for (let i = 0; i < prophets.length; i++) {

      // build the HTML of the prophet card using the createElement(), textContent(), 
      //and appendChild() methods on the document. We will place all of these prophet 
      //'cards' in already marked up, generic division <div> element on the page that 
      //has a class attribute value of "cards". Let's go ahead and make each card a 
      //<section> element with standard heading <h2> and paragraphs <p> for field 
      //items and an image <img>. This code snippet, which resides in the for loop, 
      //adds the <h2> element only.

      // this is to populate the page , this needs to be done in the loop

      let card = document.createElement('section'); // how do I know this so each card will be a section
      let h2 = document.createElement('h2'); // create an h2 because it is 
      let dateBirth = document.createElement('p'); // creates date of birth 
      let placeBirth = document.createElement('p'); // creates place of birth 
      let image = document.createElement('img'); // creates the image 

      // h2 heading textcontext is going to change to prophets name using the array 
      // then use the back ticks to make a string 
      // do this for all information 
      // textcontent is putting whatever is in the string
      h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
      dateBirth.textContent = "Date of Birth: " + prophets[i].birthdate + ' '
      placeBirth.textContent = "Place of Birth: " + prophets[i].birthplace;
      image.setAttribute('src', prophets[i].imageurl);
      image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + " - " + prophets[i].order);

      // card is the section and this puts the information into section
      card.appendChild(h2);
      card.appendChild(dateBirth);
      card.appendChild(placeBirth);
      card.appendChild(image);

      // this tells query selection to find div cards
      document.querySelector('div.cards').appendChild(card);
    }
  });