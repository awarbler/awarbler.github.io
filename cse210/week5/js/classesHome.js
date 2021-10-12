/** 1. select ol element
 *  2. Create an array of links
 *  3. Create li element and add an a tag with the label and url
  */
 const links = [ /* creates array to go through*/
    {
      label: "Solo Check Point", /* name of items to be listed*/
      url: "soloCheckpoint.html" /* url of the items */
    },
    {
        label:"Study Materials",
        url:'studyMaterials.html'
    },
    {
        label: "Team Challenge",
        url: "teamWork.html"
    },
    {
        label: "Notes",
        url:"notes.html"
    }
 
   ]
   /**create for loop to go through array and create li and a tags */
 
   var parent = document.getElementById("classesHome") /* refernce from html page  */
   
   for(let i = 0; i < links.length; i++){ /* let i = 0 add to new list li */
     const newList = document.createElement("li"); /*creates a new list */
     const link = document.createElement("a"); /*creates a hyperlink element*/
     const text = document.createTextNode(links[i].label); //  create textNode to add text use links i to go add text from each label 
 
     link.setAttribute("href", links[i].url); // add the url attribute and goes through array for each url to add
     link.appendChild(text); // adds the text to the new hyperlink
     newList.appendChild(link); //  adds the new link 
     parent.appendChild(newList); //  adds to index of placehold weeklyToDo dom in memory
   }