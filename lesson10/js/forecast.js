//What is Today's encoded Date?
const d = new Date();
//console.log(d);

//What day of the week is it?
const todayDayNumber = d.getDay();
//console.log(todayDayNumber);

//Build my own array to convert the day to a word
const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

// Now what is today's day name?
//console.log(weekday[todayDayNumber]);

let weatherObject =  new XMLHttpRequest();

weatherObject.open('GET','//api.openweathermap.org/data/2.5/forecast?zip=84653,us&appid=73cd33c03f2980c4fbeb11973fc5f602=imperial',true);

weatherObject.send();

weatherObject.onload =  function() {
let weatherInfo = JSON.parse(weatherObject.responseText);
console.log(weatherInfo);

let list = weatherInfo.list;
//console.log(list.length);

let forcastDayNumber=todayDayNumber;
for (let i = 0; i < list.length; i++) {
	
	var time = list[i].dt_txt;
	//console.log(i + "--" + time);
	
	if (time.includes('18:00:00')) {
		console.log("Noon on day "+i + "--" + time);
		//console.log(weatherInfo.list[i].main.temp+ "°");
		
		forcastDayNumber += 1;
		if (forcastDayNumber === 7){forcastDayNumber = 0;}
		console.log(forcastDayNumber);
		
		var theDayName = document.createElement("span");
		theDayName.textContent = weekday[forcastDayNumber];
		console.log(">"+weekday[forcastDayNumber]);
		
		var theTemp = document.createElement("p");
		theTemp.textContent = weatherInfo.list[i].main.temp + "\xB0";
		console.log(">"+weatherInfo.list[i].main.temp);
		
		var iconcode = weatherInfo.list[i].weather[0].icon;
		var iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
		var theIcon = document.createElement("img");
		theIcon.src=iconPath;
		
		var theDay = document.createElement("div");
		theDay.appendChild(theDayName);
		theDay.appendChild(theTemp);
		theDay.appendChild(theIcon);
		
		document.getElementById('weatherforecast').appendChild(theDay);
	} // end if
} //end for






//var iconcode = weatherInfo.weather[0].icon;
//var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";

//document.getElementById('weather_icon').src = icon_path;
} // end of function