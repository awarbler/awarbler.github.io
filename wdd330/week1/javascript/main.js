//aructure of your list of links 

const links = [
    {
        label: 'Week1 notes',
        url: 'wdd330/week1/index.html',
    }
]

const list = document.querySelector('weeklyNotes');

const listItems = listArray.map( (element) => {
    `<li id='${element} 'class='listItem'>${element}</li>` });
  list.innerHTML = listItems.join('');
