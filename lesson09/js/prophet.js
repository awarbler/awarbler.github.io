const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
// basic fetch() method and feed it the required argument, the URL and use the .
//then() method that returns a Promise which response we will work with as an  
// argument to an anonymous function.We need to extract the JSON content 
//from the noise of the full HTTP response by using the json() method. The second 
//.then() method is then setup for us to work with the converted response data in 
//JavaScript object format.  Initially we will test to see if we get a valid, 
//parsed response using a console.table() method to output the results to the console.
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing

        //store the results of the converted response into an array since the data source is a neatly
        //packed array of records named "prophets". See JSON source.
        const prophets = jsonObject['prophets'];
        //we need to loop through every record and process them into their own 'cards' 
        //(HTML output), one at a time. This is easily done using a for loop, something 
        //that you are familiar with as you process each element of an array. Remember? 
        //We will use the variable i as our control variable in the loop as we iterate 
        //through the prophets array.IMPORTANT: Put this line of code directly after 
        //the console.table() line and before you close the .then() method }); .
        for (let i = 0; i < prophets.length; i++) {
            // build the HTML of the prophet card using the createElement(), textContent(), 
            //and appendChild() methods on the document. We will place all of these prophet 
            //'cards' in already marked up, generic division <div> element on the page that 
            //has a class attribute value of "cards". Let's go ahead and make each card a 
            //<section> element with standard heading <h2> and paragraphs <p> for field 
            //items and an image <img>. This code snippet, which resides in the for loop, 
            //adds the <h2> element only.
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let image = document.createElement('img');

            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            p1.textContent = "Date of Birth: " + prophets[i].birthdate + ' '
            p2.textContent = "Place of Birth: " + prophets[i].birthplace;
            image.setAttribute('src', prophets[i].imageurl);
            image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + " - " + prophets[i].order);

            card.appendChild(h2);
            card.appendChild(p1);
            card.appendChild(p2);
            card.appendChild(image);

            document.querySelector('div.cards').appendChild(card);
        }
    });