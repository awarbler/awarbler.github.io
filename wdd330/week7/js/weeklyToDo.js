/** 1. select ol element
 *  2. Create an array of links
 *  3. Create li element and add an a tag with the label and url
  */
 const links = [ /* creates array to go through*/
   {
     label: "Notes", /* name of items to be listed*/
     url: "notes.html" /* url of the items */
   },
   {
     label: "Team Assignment",
     url: "teamwork.html"
   },
   {
    label:"Team Notes",
    url:"teamNotes.html"
   },
   {
     label: "Team Project",
     url: "teamProject.html"
   },
   {
     label: "Team Zoom Meeting",
     url:"https://byui.zoom.us/rec/share/9dVU5PmCcfDO5EOgGWLvRiswfZyvp73xssxUJ5pNi8qHbdiKf-w_mdYYuHjX7InC.qI_wCGbRkTy0-Jo0 "

   },
   {
     label:"Ninja Quiz",
     url: "quiz/index.html"
   },
   {
     label:"Nija Quiz Notes",
     url:"quizNotes.html"
   },
   {
     label:"Misc Work 1",
     url:"search.html"
   }

  ]
  /**create for loop to go through array and create li and a tags */

  var parent = document.getElementById("weeklyToDo") /* refernce from html page  */
  
  for(let i = 0; i < links.length; i++){ /* let i = 0 add to new list li */
    const newList = document.createElement("li"); /*creates a new list */
    const link = document.createElement("a"); /*creates a hyperlink element*/
    const text = document.createTextNode(links[i].label); //  create textNode to add text use links i to go add text from each label 

    link.setAttribute("href", links[i].url); // add the url attribute and goes through array for each url to add
    link.appendChild(text); // adds the text to the new hyperlink
    newList.appendChild(link); //  adds the new link 
    parent.appendChild(newList); //  adds to index of placehold weeklyToDo dom in memory
  }