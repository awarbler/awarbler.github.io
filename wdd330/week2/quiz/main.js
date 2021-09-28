//alert('Welcome to Quiz Ninja!');


//this declares a variable called question and assigns the string 'What is Superman's real name?' to it.
//const question = "What is Superman's real name?"

/* ask the question stored in the quesitonvariable using a prompt dialog ,
 A prompt dialog allows the player to type in a response, which is then 
 stored in the variable it is assigned to, which is answer in this case.*/
//const answer = prompt(question);

/* use the alert diaglog to display the players answer using string 
interpolation to insert eh value of the anser into the template literal 
that is displayed in an alert box*/
//alert(`You answered ${answer}`);

const quiz = [
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];

function start(quiz) {
    // initialize score
    let score = 0;
    // main game loop
    for(const [question,answer] of quiz){
        const response = ask(question);
        check(response,answer);
    }
    // end of main game loop

    gameOver();
    // function declarations
    function ask(question){
        return prompt(question);
    }
    function check(response,answer){
        // check if answer is correct
        if(response === answer){
          alert('Correct!');
          // increase score by 1
          score++;
        } else {
          alert(`Wrong! The correct answer was ${answer}`);
        }
      }
      function gameOver(){
        // At the end of the game, report the player's score
        alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
      }
}
start(quiz);