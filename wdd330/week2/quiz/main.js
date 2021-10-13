// ch 1 and ch 2 
//alert('Welcome to Quiz Ninja!'); // alert function displays message ch 1
//const question = "What is Superman's real name?" // declares variable question / assign string ch 2
/* A prompt dialog allows the player to type in a response, which is then  ch 2
stored in the variable it is assigned to, which is answer in this case. ch 2*/
//const answer = prompt(question);ch 2
/* use the alert diaglog to display the players answer using string ch 2
interpolation to insert eh value of the anser into the template literal ch 2
that is displayed in an alert box ch 2*/
//alert(`You answered ${answer}`); ch 2

/* Chapter 4 summary 
 * initialize a varialbe called score to 0 that iterate over quiz array
 * invoke ask() = [ and accept a question parameter and use a prompt diaglog 
 * and return text to player and save in a variable called answer ]
 * for each question then invoke check() function to check 
 * if players response is correct[ check is written after ask() has 
 * two paramenter response and answer. increase score by 1 if correct], loop 
 * through every question in quiz array invoke gameOver() [all questions asked
 *  and answer and has been check the gamover function is invoked use alert 
 * dialog to give feedback abut how many questions answered correctly] last function 
 * start(quiz )variable passed to it as an argument. this is requred to actually 
 * start the quize 
 */

/* Chapter 5 objects arrays 
 * objects replace nested arrays 
 * objects have properties of name & realName used to form questions & answers
 * Namespace the functions - by placing inside an object name game
 * any reference to the function needs to be replace with game.function()
 * outside the functionor this.function() inside the object 
 */

// ch5 change to objects inside an array
// ch4 map a question store in quiz
const quiz = [ // an array called quiz contains all questions all answers chapt 3
  {
    name: "Superman",
    realName: "Clark Kent"
  }, // nested array questions first element answer second element chapt 3
  {
    name: "Wonder Woman",
    realName: "Diana Prince"
  },
  {
    name: "Batman",
    realName: "Bruce Wayne"
  }
];
// ch 5:::: add namespace
const game = {// ch5
  // ch 4 create functions // window.onload = function() { //   setTimeout(() => {

  // ch 5::: change to namespace 
  // ch 4 create functions::::::::: 
  // ch 5 change function start(quiz){  // ch4 create functions start function using quiz 
  start(quiz) {// ch5
    this.questions = [...quiz]; // ch 5::: namespace
    // ch 5 change let score = 0   //ch3  initialize score to zero 
    this.score = 0; // ch 5 change to this.score referring to game namespace

    // ch 3 main game Loop 

    // ch 5 :: change to use game namespace
    // ch 3 for of loop assigns the variable question and answer 
    // ch 5 change for (const [question,answer] of quiz) { // ch 3 ask the question allow user input stored in
    // ch 5 change   const response = prompt(question);    // ch 3 prompt question hold in response 
    // ch 5 change   check(response,answer);               // ch 4 ::: create check response function use response and element  
    // ch 5 change } 

    // main game loop
    for (const question of this.questions) {// ch5
      this.question = question;// ch5
      this.ask();// ch5
    } // end of main game loop

    // ch5::: change to game nameSpace by using this ch4:::: create game over functin 
    this.gameOver(); // ch 4 add functon gameOver
  },

  // ch 5 change ask function to use game namespace ch 4::: function declartions 
  //function ask(question){ // ch 4:::
  //return prompt(question);// ch 4:::
  //}// ch 4:::
  ask() { // ch 5
    const question = `What is ${this.question.name}'s real name?`; // ch 5
    const response = prompt(question); // ch 5
    this.check(response); // ch 5
  }, // ch 5

  // ch 5 change ask function to use game namespace 
  //ch 4::: function check response
  // function check(response,answer){//ch 4:::
  //   if(response === answer){ // ch 3 checks answer ch4 moved to function
  //     alert("correct!"); // ch 3 checks answer ch4 moved to function
  //     score++; // ch 3 checks answer ch4 moved to function
  //   } else { // ch 3 checks answer ch4 moved to function
  //     alert(`Wrong! The correct answer was ${answer}`); // ch 3 checks answer ch4 moved to function
  //     }//  // ch 3 checks answer ch4 moved to function
  // }//ch 4:::end of function 
  check(response) { // ch 5 
    const answer = this.question.realName; // ch 5 
    if (response === answer) { // ch 5 
      alert('Correct'); // ch 3 checks answer ch4 moved to function
      this.score++; // ch 5 
    } else { // ch 3 checks answer ch4 moved to function
      alert(`Wrong! The correct answer was ${answer}`); // ch 3 checks answer ch4 moved to function
    } // ch 5 
  }, // ch 5 

  // ch5 use namespace
  // ch 4::: function  game over()
  // function gameOver(){
  //alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`); // ch 3 At the end of the game, report the player's score
  gameOver() {// ch5
    alert(`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);// ch5
  }// ch5
}// ch5

// ch 4::: functin start quiz 

//start(quiz); //ch 4::: functin start quiz 
game.start(quiz); // ch5
//}, 100);
//};