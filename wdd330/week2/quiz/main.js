alert('Welcome to Quiz Ninja!');


//this declares a variable called question and assigns the string 'What is Superman's real name?' to it.
const question = "What is Superman's real name?"

/* ask the question stored in the quesitonvariable using a prompt dialog ,
 A prompt dialog allows the player to type in a response, which is then 
 stored in the variable it is assigned to, which is answer in this case.*/
const answer = prompt(question);

/* use the alert diaglog to display the players answer using string 
interpolation to insert eh value of the anser into the template literal 
that is displayed in an alert box*/
alert(`You answered ${answer}`);
