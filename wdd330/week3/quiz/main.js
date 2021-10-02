window.onload = function() {
    setTimeout(() => {
        // Write your code below
        // create an array named quiz 
      const quiz = [ // objects replace the nested arrays we used in the previous chapters, 
          { name: "Superman", realName: "Clark Kent" },
          { name: "Wonder Woman",realName: "Diana Prince" },
          { name: "Batman",realName: "Bruce Wayne"  },
      ] ;

      /*Now we’re going to namespace the functions we created in the last chapter. 
      We do this by placing them inside an object called game that will be the namespace. 
      This means that any references to the functions need to be replaced with game.function() 
      outside the object or this.function() inside the object.*/
      // namespace the functions 

      // view objects
      /* 
       * use document to query a selector method to access elements
       * example div question is accessed in jas cod using view.question
       * add a help function called render()to update content of elements
       * render() 3 parament 1 displays content, 2nd updated content
       * 3rd an object of html attributes
       * render loops throught the attributes as the third arguement
       * uses set attribute method toupdate them to values 
       * 
      */
      const view = {
          score: document.querySelector('#score strong'),
          question:  document.querySelector('question'),
          result: document.getElementById('result'),
          info: document.getElementById('info'),
          render(target, content, attributes){
              for(const key in attributes){
                  target.setAttribute(key, attributes[key]);
              }
              target.innerHtml = content;
          }

      };

      const game = {
        start(quiz){
            this.questions = [...quiz];
            this.score = 0;
            // main game loop
            for(const question of this.questions){
            this.question = question;
            this.ask();
            }
            // end of main game loop
            this.gameOver();
        },
        /* 
         * update ask ch 6 add view object
         *
         * 
        */
        ask(){
            const question = `What is ${this.question.name}'s real name?`;
            // point it to the view object
            view.render(view.question, question);
            const response =  prompt(question);
            this.check(response);
        },
         /* 
         * update ask ch 6. 
         *
         * 
        */
        check(response){
            const answer = this.question.realName;
            if(response === answer){
                //point to view object render through result
                view.render(view.reult, 'Correct',{'class': 'correct'});
            alert('Correct!');
            this.score++;
            } else {
                // point to vievw object render through result
                // question why does this have two grave or backticks to open and close?
            view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
            alert(`Wrong! The correct answer was ${answer}`);
            }
        },
        gameOver(){
            // render view object 
            //  why does this accept the quote without any error but it is suppose to be a backtick or grave
            // are backticks the same as a grave? 
            view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
        
        }
    }
    game.start(quiz);
    }, 100);
  };
