/*--

const links = [
    {
        label: 'Week1 notes',
        url: 'wdd330/week1/index.html',
    }
]

const list = document.querySelector('weeklyNotes');

const listItems = listArray.map( (element) => {
    `<li id='${element} 'class='listItem'>${element}</li>` });
  list.innerHTML = listItems.join(''); -->*/


const btn = document.getElementById('button');
const rainbow = ['red','orange','yellow','green','blue','rebeccapurple','violet'];
function change() {      
    document.body.style.background = rainbow[Math.floor(7*Math.random())];
}
btn.addEventListener('click', change);

const link = [{
    // the lae displays the "Week 1"
    label: "week 1",
    url: "wdd330/js/main.js",
}
]