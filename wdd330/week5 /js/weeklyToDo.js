/** 1. select ol element
 *  2. Create an array of links
 *  3. Create li element and add an a tag with the label and url
  */
 const links = [
    {
      label: "Week 5 Notes",
      url: "wdd330/week5/notes.html"
    },
    {
        label: "Week 5 Team Work",
        url: "wdd330/week55/teamwork.html"
    },
    {
        label: "Week 5 Ninja Quiz",
        url: "wdd330/week5/quiz/index.html"
    },
    {
        label: "Week 5 Quiz Notes",
        url: "wdd330/week5/quizNotes.html"
    },

    {
        label: "Week 5",
        url: "wdd330/week4/index.html"
    }
    
  ]
  /**create for loop to go through array and create li and a tags */

  var parent = document.getElementById("weeklyToDo")
  
  for(let i = 0; i < links.length; i++){
    const newList = document.createElement("li");
    const link = document.createElement("a");
    const text = document.createTextNode(links[i].label);

    link.setAttribute("href", links[i].url);
    link.appendChild(text);
    newList.appendChild(link);
    parent.appendChild(newList);
  }