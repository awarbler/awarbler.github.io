
let daynames =[
    'Sunday',
    'Monday',
    'tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];
let month=[
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]
let d = new Date();
let dayName = daynames[d.getDay()];
let monthName = month[d.getMonth()];
let year = d.getFullYear();
let fulldate = dayName + ',' + monthName + ' ' + d.getDate() + ',' + year;
document.getElementById('currentdate').textContent = fulldate;



 datUpdated = new Date(document.lastModified) ;
 datMonth = datUpdated.getMonth() + 1 ;
 datDate = datUpdated.getDate() ;
 datYear = datUpdated.getYear() ;
 document.write("<i>Last Updated: " + datMonth + "/" + datDate + "/" + datYear + "</i>") ;
