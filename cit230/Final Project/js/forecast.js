// fetching information 
fetch('https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=73cd33c03f2980c4fbeb11973fc5f602')
    .then((response) => response.json())
    .then((jsObject) => {
        // this put the info onto the console so we can see the file 
        console.log(jsObject);

        let forecast = [];
        let icon = [];
        // days of the week 
        let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
        // data
        let list = jsObject.list;
        // seeting day to 1 for loop 
        let day = 1;
        // setting for the icon to run through the loop 
        let ico = 1;
        let d = 1;
        // array for the day of the week 
        let weekday = new Array(7);
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tues";
        weekday[3] = "Wed";
        weekday[4] = "Thurs";
        weekday[5] = "Fri";
        weekday[6] = "Sat";

        for (let i = 1; i <= 5; i++) {
            // forEach() method executes a provided function once for each array element
            jsObject.list.forEach(x => {
                // to grab the specific time in the file  x is the name of the element 
                // dt_txt is the name of the actual item in the file that we are pulling info from 
                // 18:00:00 is the time fram we are pulling information from because there are several different times
                if (x.dt_txt.includes('18:00:00')) {
                    // forecast is the array [day] runs through the arrays 
                    forecast[day] = x.main.temp.toFixed(0);
                    day++;
                    icon[ico] = x.weather[0].icon;
                    ico++;

                    days[d] = new Date(x.dt_txt);
                    theDayName = weekday[days[i].getDay ()];
                    d++;

                    let imagesrc = '//openweathermap.org/img/w/' + icon[i] + '.png';
                    document.getElementById("icon" + i).setAttribute('src', imagesrc);
                    document.getElementById('temp' + i).innerHTML = forecast[i];
                    document.getElementById('day' + i).innerHTML = theDayName;
                }});

            }});