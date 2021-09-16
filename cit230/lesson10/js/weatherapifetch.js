const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=73cd33c03f2980c4fbeb11973fc5f602";
// use fetch feed apiurl 
// it will get the info for you and you tell me what to do in stages 
fetch(apiURL)
    // here we are waiting for the info to come back 
    .then((response) => response.json())
    // this sets up the object from the response this comes from the api documentation 
    // arrow function is a shortcut it is a promise 
    .then((jsObject) => {
        // this lets us look at what we did 
        //console.log(jsObject);
        // this closes everything out nothing will print on screen only in console
        // now we aregoing to go to the document and tell it change current-temp and change its text 
        //content to jsobject information main.temp
        // whatever we name here ' current-temp' has to match html file
        document.getElementById('current-temp').textContent = jsObject.main.temp;
        document.getElementById('cityId').textContent = jsObject.name;

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
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; // note the concatenation
        
        // this gets the weather description if it sunny cloudy the alt will come from here 
        // current weather conditions partyly cloudy set attribute for the alt
        const desc = jsObject.weather[0].description; // note how we reference the weather array
        
       // display the text of the source to make sure we concat it correctly 
        document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
       
         // this is to put a alt for the image 
        document.getElementById('desc').textContent = desc; // this is my example to display icon descrption

        
        document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
        
        document.getElementById('icon').setAttribute('alt', desc);
    });