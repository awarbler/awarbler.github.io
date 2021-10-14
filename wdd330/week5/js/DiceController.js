
// contructor fuction 
const Dice = function(sides=6){ // capital letter 
    this.sides = sides;
    this.roll = function() {
        return Math.floor(this.sides * Math.random() + 1)
    }
}

// instance of the dice  using the dice operator
const redDice = new Dice();  
   //  Dice { sides: 6, roll: [Function] }

// create another instace  with and withoug ()



const whiteDice = new Dice(4);

redDice instanceof Dice

redDice.sides
print(redDice.sides);

redDice.roll()
const literalObject = {};
constructedObject = new Object();
literalObject instanceof Object;
const literalArray = [1,2,3];
constructedArray = new Array(1,2,3);
new Array(5); // you might expect [5]
// causes an error his behavior is another reason why it’s recommended to 
// always use literals to create arrays.
new Array(2.5); 


//ES6 Class Declarations
//Before ES6, constructor functions were the only way of achieving class-like behavior in JavaScript.

//ES6 introduced the newclass declarationsyntax that does exactly the same thing as a constructor function, but looks much similar to writing a class in a class-based programming language. Here is the dice example again, using a class declaration:
class Dice2 {
    constructor(sides=6) {
        this.sides = sides;
    }

    roll() {
        return Math.floor(this.sides * Math.random() + 1)
    }
};
// to create an instance of theDiceclass, thenewoperator is again used:
const blueDice = new Dice(20);

//The variableblueDicenow contains an instance of theDiceclass and behaves in exactly the same way as theredDiceobjec
blueDice instanceof Dice
//////<< true

blueDice.sides
////<< 20

blueDice.roll()
//<< 13

// Using constructor function - noDice is just set to undefined without any warning
const noDice = Dice();
noDice
//<< undefined

// Using class - an error is thrown
const noDice = Dice();
//<< TypeError: Class constructor Dice cannot be invoked without 'new'

// All objects have aconstructorproperty that returns the constructor function that created it:
blueDice.constructor
//<< [Function: Dice]

const literalObject = {};
//<< {}
literalObject.constructor
//<< [Function: Object]

/*We can use theconstructorproperty to instantiate a copy of an object, without having to 
reference the actual constructor function or class declaration directly. For example, if we
 wanted to make another copy of theredDiceobject, but if the name of its constructor was unknown, 
 we could use the following:*/

 const greenDice = new redDice.constructor(10);

greenDice instanceOf Dice
//<< truegreenDice instanceOf Dice

class Dice3 {
    constructor(sides=6) {
        this.sides = sides;
    }

    roll() {
        return Math.floor(this.sides * Math.random() + 1)
    }

    static description() {
        return 'A way of choosing random numbers'
    }
};

Dice.description()

redDice.description

class Turtle {
    constructor(name) {
        this.name = name;
        this.weapon = 'hands';
    }
    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }
    attack(){
        return `Feel the power of my ${this.weapon}!`;
    }
}
//This can then be used to create a new turtle instance:
const leo = new Turtle('Leonardo');
//<< Turtle { name: 'Leonardo' }

//The variableleopoints to an instance of theTurtleclass. It has 
// anameproperty and asayHi()method that references thenameproperty:
leo.name;
// 'Leonardo'

leo.sayHi();
//<< 'Hi dude, my name is Leonardo'

//The Prototype Property
//When creating a class, you would normally add any default properties 
// and methods to the class declaration. But what if you want to augment 
// the class with extra methods and properties after it has been created? It 
// turns out that you can still do this using theprototypeproperty of the class. T
// his is particularly useful if you don't have access to the class declaration, but 
// still want to add properties and methods to the class.

//All classes and constructor functions have aprototypeproperty that returns an object:

Turtle.prototype;
//<< Turtle {}

//All instances of the theTurtleclass share all the properties and methods of its prototype. 
// This means they can call any methods of the prototype and access any of its properties.
//  Since the prototype is just an object, we can add new properties by assignment: