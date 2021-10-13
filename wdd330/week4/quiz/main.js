/* window.onload = function() {
    setTimeout(() => {
        // Write your code below
        // create an array named quiz 
      const quiz = [ // objects replace the nested arrays we used in the previous chapters, 
          { name: "Superman", realName: "Clark Kent" },
          { name: "Wonder Woman",realName: "Diana Prince" },
          { name: "Batman",realName: "Bruce Wayne"  },
      ] ;
*/
/*Now we’re going to namespace the functions we created in the last chapter. 
We do this by placing them inside an object called game that will be the namespace. 
This means that any references to the functions need to be replaced with game.function() 
outside the object or this.function() inside the object.*/
// namespace the functions 

// view objects
/* 
 * use document query selector method to access elements
 * assign them to access a variable
 * example div question is accessed in js using view.question
 * add a help function called render()to update content of elements
 * render() 3 parament 1 displays content, 2nd updated content
 * 3rd an object of html attributes
 * render loops throught the attributes as the third arguement
 * uses set attribute method toupdate them to values 
 * added start to view object ch7
 */
/*     const view = {

         score: document.querySelector('#score strong'),
         question:  document.querySelector('question'),
         result: document.getElementById('result'),
         info: document.getElementById('info'),
         start: document.getElementById('start'),
         render(target, content, attributes){
             for(const key in attributes){
                 target.setAttribute(key, attributes[key]);
             }
             target.innerHtml = content;
         },
         show(element){
             element.style.display = 'block';
         },
         hide(element){
             element.style.display = 'none';
         }
     };
// game object 
     const game = {
       start(quiz){
           this.score = 0;
           this.questions = [...quiz];
           view.hide(view.start);
           // main game loop
           for(const question of this.questions){
           this.question = question;
           this.ask();
           }
           // end of main game loop
           this.gameOver();
       },*/
/* update ask ch 6 add view objec*/
/*    ask(){
        const question = `What is ${this.question.name}'s real name?`;
        // point it to the view object
        view.render(view.question, question);
        const response =  prompt(question);
        this.check(response);
    },*/
/* update check(response)*?
//        check(response){
//           const answer = this.question.realName;
//           if(response === answer){
//               //point to view object render through result
//               view.render(view.reult, 'Correct!',{'class':'correct'});
//          // forgot to delete when I added view.render it doesnt say to delete
//              alert('Correct!');
//           this.score++;
//           view.render(view.score,this.score);
//           } else {
//               // point to vievw object render through result
//               // question why does this have two grave or backticks to open and close?
//           view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
//           // the book didnt say to delete
//           alert(`Wrong! The correct answer was ${answer}`);
//           }
//       },
//       gameOver(){
//           // render view object 
//           //  why does this accept the quote without any error but it is suppose to be a backtick or grave
//           // are backticks the same as a grave? 
//           view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
//           view.show(view.start);
//       }
//   }
//   view.start.addEventListener('click', () => game.start(quiz), false);
//   }, 100);
// };

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
/* chapter 8 forms 
 * create a form on html
 * use pop method to remove for loop 
 * remove the main game loop grom game.start
 * alls thegame.ask()method, which results in the first question being asked.
 * change thegame.ask()method,
 */

// ch5 change to objects inside an array:: ch4 map a question store in quiz
const quiz = [ // an array called quiz contains all questions all answers chapt 3
    {name: "Superman",realName: "Clark Kent"}, // nested array questions first element answer second element chapt 3
    { name: "Wonder Woman",realName: "Dianna Prince" },
    { name: "Batman",realName: "Bruce Wayne" },
 ];
  
  /* chapter 6 view objects
   * use document query selector method to access elements
   * assign them to access a variable
   * example div question is accessed in js using view.question
   * add a help function called render()to update content of elements
   * render() 3 parament 1 displays content, 2nd updated content
   * 3rd an object of html attributes
   * render loops throught the attributes as the third arguement
   * uses set attribute method toupdate them to values 
   * added start to view object
   */
  const view = {                                      // ch 6
    score: document.querySelector('#score strong'),   // ch 6
    question: document.getElementById('question'),    // ch 6
    result: document.getElementById('result'),        // ch 6 
    info: document.getElementById('info'),            // ch 6
    start: document.getElementById('start'),          // ch 7 starts game
    response: document.querySelector('#response'),    // ch8 reference form response  
    timer: document.querySelector('#timer strong'), // 9 timer 
    render(target, content, attributes) {             // ch 6 helper function update content of element on page
        for (const key in attributes) {                 // ch 6
          target.setAttribute(key, attributes[key]);
        }       // ch 6
        target.innerHTML = content; 
      }, // ch 6
    show(element) {                                   // ch 7 utility functions that will show and hide elements on a page.
      element.style.display = 'block';
    }, // ch 7 utility functions that will show and hide elements on a page.
    hide(element) {                                   // ch 7 utility functions that will show and hide elements on a page.
      element.style.display = 'none'; 
    },      // ch 7 utility functions that will show and hide elements on a page.
    resetForm(){
      this.response.answer.value = '';
      this.response.answer.focus();
    },// ch 6
    setup(){
      this.show(this.question);
      this.show(this.response);
      this.show(this.result);
      this.hide(this.start);
      this.render(this.score,game.score);
      this.render(this.result,'');
      this.render(this.info,'');
      this.resetForm();
    },
    teardown(){
      this.hide(this.question);
      this.hide(this.response);
      this.show(this.start);
    } 
  };
  
  
  // game object ch 5:::: add namespace
  /*ch 4 create functions // window.onload = function() { 
    setTimeout(() => { 
    ch 5::: change to namespace ch 4 create functions::::::::: 
    ch 5 change function start(quiz){  
    ch4 create functions start function using quiz */
  const game = { // ch5 
    start(quiz) {     // ch 5 change let score = 0   //ch3  initialize score to zero 
      this.score = 0; // ch 5 change to this.score referring to game namespace
      this.questions = [...quiz]; // ch 5::: namespace
      view.setup() ;                      //view.hide(view.start);} // ch 7 chg ch 8
      this.ask();
      this.secondsRemaining = 20;         // timer c 9
      this.timer = setInterval( this.countdown , 1000 ); // timer ch 9
    },
  /* ch 3 main game Loop 
   ch 5 :: change to use game namespace
    ch 3 for of loop assigns the variable question and answer 
    ch 5 change for (const [question,answer] of quiz) { ch 3 ask the question allow user input stored in
    ch 5 change   const response = prompt(question);    ch 3 prompt question hold in response 
    ch 5 change   check(response,answer);               ch 4 ::: create check response function use response and element  
    ch 5 change } 
    main game loop // removed ch 8
     for (const question of this.questions) { // ch5 removed ch 8
       this.question = question; // ch5 removed ch 8
       this.ask(); // ch5 removed ch 8
    } // ch5 removed ch 8
     end of main game loop
     ch5::: change to game nameSpace by using this ch4:::: create game over functin 
    this.gameOver(); // ch 4 add functon gameOver
     },// ch5 removed ch 8
     ch  6 add view render parameter of view qustion question
     ch 5 change ask function to use game namespace ch 4::: function declartions 
    function ask(question){ // ch 4:::
    return prompt(question);// ch 4:::
    }// ch 4::: removed ch 8 */
   /* ask()
     const question = `What is ${this.question.name}'s real name?`; // ch 5 change ch8
      view.render(view.question, question); // ch 6 change ch8
      const response = prompt(question); // ch 5 change ch8
      this.check(response); // ch 5 change ch8
      } // ch 8 
      } //ch 8 */
    ask(name){ // ch 5 changed adding name ch 8
      if(this.questions.length > 0) {       // ch 8 check the lengh of game questions array ch 8 see f any questions left to ask
        this.question = this.questions.pop(); //  ch 8 if there are the pop function is used to remove the last element
        const question = `What is ${this.question.name}'s real name?`;
        view.render(view.question,question);
      } else {
        this.gameOver();
      }
    },
// countdown for timer ch 9
    countdown() {
      game.secondsRemaining--;
      view.render(view.timer,game.secondsRemaining);
      if(game.secondsRemaining < 0) {
          game.gameOver();
      }
  }
  
    // ch  6 add view render 
    // ch 5 change ask function to use game namespace 
    // ch 4::: function check response
    // function check(response,answer){//ch 4:::
    // if(response === answer){ // ch 3 checks answer ch4 moved to function
    //   alert("correct!"); // ch 3 checks answer ch4 moved to function
    //   score++; // ch 3 checks answer ch4 moved to function
    // } else { // ch 3 checks answer ch4 moved to function
    //   alert(`Wrong! The correct answer was ${answer}`); // ch 3 checks answer ch4 moved to function
    //   }//  // ch 3 checks answer ch4 moved to function
    // }//ch 4:::end of function 
    
  check(event) { // ch 5 ch 8 chg response to event
      event.preventDefault();
      const response = view.response.answer.value;
      const answer = this.question.realName; // ch 5 
      if (response === answer) { // ch 5 
        view.render(view.result, 'Correct', {'class': 'correct' }); //ch 6 
        // alert('Correct'); // ch 3 checks answer ch4 moved to function ch 8 chg
        this.score++; // ch 5 
        view.render(view.score, this.score); // ch 6
      } else { // ch 3 checks answer ch4 moved to function
        view.render(view.result, `Wrong! The correct answer was ${answer}`, {'class': 'wrong' }); //ch 6
        // alert(`Wrong! The correct answer was ${answer}`); // ch 3 checks answer ch4 moved to function ch 8 chg
      } // ch 5 
      view.resetForm(); //ch 8 chg
      this.ask();//ch 8 chg
    }, // ch 5 
  
    /*ch5 use namespace
    ch 4::: function  game over()
    function gameOver(){
    alert(`Game Over, you scored ${score} 
    point${score !== 1 ? 's' : ''}`); 
    // ch 3 At the end of the game, report the player's score*/   
    gameOver() { // ch5
      view.render(view.info, `Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
      view.show(view.start); // ch 7 show and element while game is in progress
      clearInterval(this.timer);
    } //ch6 //alert(`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);// ch5
  }   // ch5
  
  
/*start(quiz); 
  ch 7 add a click event listener to the button that will start the game
  ch 4::: functin start quiz  
  game.start(quiz); // ch5
  }, 100);*/
  
  view.start.addEventListener('click', () => game.start(quiz), false); // ch 7
  view.response.addEventListener('submit', (event) => game.check(event), false); // ch 8 add event handler fires when for is submitted
  view.hide(view.response); // ch 8 add event handler fires when for is submitted this will call the game check 
  





  /* debugging 
  