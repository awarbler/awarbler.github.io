// this create the file
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
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
    console.table(jsonObject); // temporary checking for valid response and data parsing

        //store the results of the converted response into an array since the data source is a neatly
        //packed array of records named "prophets". See JSON source.

// this is an array 
        const towns = jsonObject['towns'];
        //we need to loop through every record and process them into their own 'cards' 
        //(HTML output), one at a time. This is easily done using a for loop, something 
        //that you are familiar with as you process each element of an array. Remember? 
        //We will use the variable i as our control variable in the loop as we iterate 
        //through the prophets array.IMPORTANT: Put this line of code directly after 
        //the console.table() line and before you close the .then() method }); .

        // this is to go through all prophets with a for loop
        for (let i = 0; i < towns.length; i++) {
            // add if statement page 149 example
            if (towns[i].name == 'Fish Haven' || towns[i].name == 'Preston'|| towns[i].name == 'Soda Springs') {

            // build the HTML of the prophet card using the createElement(), textContent(), 
            //and appendChild() methods on the document. We will place all of these prophet 
            //'cards' in already marked up, generic division <div> element on the page that 
            //has a class attribute value of "cards". Let's go ahead and make each card a 
            //<section> element with standard heading <h2> and paragraphs <p> for field 
            //items and an image <img>. This code snippet, which resides in the for loop, 
            //adds the <h2> element only.

            // this is to populate the page , this needs to be done in the loop

            let card = document.createElement('section'); // how do I know this so each card will be a section
            let data = document.createElement('div')
            let h2 = document.createElement('h2'); // create an h2 because it is 
            let h3 = document.createElement('h3'); // create an h2 because it is 
            let yearFounded = document.createElement('p'); // creates date of birth 
            let population = document.createElement('p');// creates place of birth 
            let rainFall= document.createElement('p');// creates place of birth 
            let image = document.createElement('img');  // creates the image 

            // h2 heading textcontext is going to change to prophets name using the array 
            // then use the back ticks to make a string 
            // do this for all information 
            // textcontent is putting whatever is in the string
            h2.textContent = towns[i].name;
            h3.textContent = towns[i].motto;
            yearFounded.textContent = "Year Founded: " + towns[i].yearFounded;
            population.textContent = "Population: " + towns[i].currentPopulation;
            rainFall.textContent = "Annual Rain: " + towns[i].averageRainfall;
            
            image.setAttribute('src',"imagehome/" + towns[i].photo);
            image.setAttribute('alt', towns[i].photo + ' ' + towns[i].name);
            image.setAttribute('class','townimage');
            data.setAttribute('class', 'towndata');

            // card is the section and this puts the information into section
            data.appendChild(h2);
            data.appendChild(h3);
            data.appendChild(yearFounded);
            data.appendChild(population);
            data.appendChild(rainFall);
            card.appendChild(data);
            card.appendChild(image);

            // this tells query selection to find div cards
            document.querySelector('div.cards').appendChild(card);
            }
        }
    });

