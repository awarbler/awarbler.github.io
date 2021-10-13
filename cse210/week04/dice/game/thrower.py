import random
'''
Solo Checkpoint 04
Author: Anita Woodford 
'''
"""
Use * for multiplication of a number
The * is a multiplication operator in Python
To print the value, use the print() function
"""

# TODO: Define the Thrower class here.

class Thrower:
    """A code template for a person who participates. The responsibility of 
    this class of objects is to check to see if they can throw the dice, 
    have themthrow the dice, and get points
    
    Attributes:
        dice[5]: track the number of dice that is being thrown
        number_throws: The total number of throws the user threw    
    """

    #The class constructor.  
    def __init__(self):
        self.dice = []
        self.num_throws = 0

    # determines if the thrower  can throw again
    """Determines whether or not the Thrower can throw again according to 
    the rules. 
        Args: 
            self (Thrower): An instance of Thrower.
        
        Returns:
            boolean: True if the list of dice has at least a five, or a one, or 
            the number of throws is zero; false if otherwise.
        """
    def can_throw(self):
        return (self.dice.count(5) > 0 or self.dice.count(1) > 0 
                or self.num_throws == 0)
    # determine 
    def get_points(self):
        """Calculates the total number of points for the current throw. Fives 
        are worth 50 points. Ones are worth 100 points. 
        Args: 
            self (Thrower): An instance of Thrower.
        
        Returns:
            number: The total points for the current throw.
        """        
        return self.dice.count(5) * 50 + self.dice.count(1) * 100 
    # define throw_dice 
    # throw dice
    """Throws the dice by randomly generating five new values. 
        Args: 
            self (Thrower): An instance of Thrower.
        """
    def throw_dice(self):
        self.dice.clear()
        for i in range(5):
                result = random.randint(1,6)
                self.dice.append(result)
        self.num_throws =+ 1             