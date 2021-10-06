import random

# think about the sequence of order to be executed 

# selecting different paths based on conditions

# reptition - iteration is a kind of repititon which 
# involves loops

# Creating variables, using descriptive names
# Working with strings and integers
# Outputting information to the screen
# Updating the value of a variable
# Creating random values using Python’s random module
#   random module is used to simulate rolling a 6 sided dice 
#   using random.randint(1,6) Gets a random integer in the 
#   range [a, b] including both end points.
# Python comparison operators


# need to create random numbers to simulate dice roll


# initialise player score to 0
player1 = 0
player2 = 0

# repeat everthing in this block 10 times 
for i in range(10):

    #generate random numbers between 1 and 6 for each player.
    player1_value = random.randint(1, 6)
    player2_value = random.randint(1, 6)

    # display the values
    print("Player 1 rolled: ", player1_value)
    print("Player 2 rolled: ", player2_value)

   # selection : based on comparison of the values, take the 
   # appropriate path through the code

    if player1_value > player2_value:
       print('player 1 wins')
       player1_score = player1_score + 1 # this is how we increment a variable
    elif player2_value > player1_value:
       print("player 2 wins")
       player2_score = player2_score + 1
    else:
        print("It's a draw")

        input('Press enter to continue') # Wait for user input to proceed.

    print("### Game Over ###")
    print("Player 1 score:", player1_score)
    print("Player 2 score:", player2_score)



