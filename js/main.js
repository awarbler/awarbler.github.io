/** 1. select ol element
 *  2. Create an array of links
 *  3. Create li element and add an a tag with the label and url
  */
 const links = [
    {
      label: "Week 1",
      url: "wdd330/week1/index.html"
    },
    {
        label: "Week 2",
        url: "wdd330/week2/index.html"
    },
    {
        label: "Week 3",
        url: "wdd330/week3/index.html"
    },
    {
        label: "Week 4",
        url: "wdd330/week4/index.html"
    },

    {
        label: "Week 5",
        url: "wdd330/week4/index.html"
    }
    
  ]
  /**create for loop to go through array and create li and a tags */

  var parent = document.getElementById("assignments")
  
  for(let i = 0; i < links.length; i++){
    const newList = document.createElement("li");
    const link = document.createElement("a");
    const text = document.createTextNode(links[i].label);

    link.setAttribute("href", links[i].url);
    link.appendChild(text);
    newList.appendChild(link);
    parent.appendChild(newList);
  }
/* create an array to go through 
const links = [
    {
    label: "Week 1",
    url: "wdd330/week1/index.html"
    },
    {
        label: "Week 2",
        url: "wdd330/week2/index.html"
    },
    {
        label: "Challenge: 1 Todo",
        url: "wdd330/week3/index.html"
    }
]

/* create parent to create li 
 * creatto go thrugh array 
 * create li and a tags
 * */

/*var parent = document.getElementById("assignments")

for (let i = 0; i < links.length; i++)
{
    const newList = document.createElement("li");
    const link = document.createElement("a");
    const text = document.createTextNode(link[i].label);

    link.setAttribute("href", links[i].url);
    link.appendChild(text);
    newList.appendChild(link);
    parent.appendChild(newList);

}*/