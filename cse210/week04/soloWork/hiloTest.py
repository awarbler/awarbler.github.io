import random

"""HILO BASIC 1 1.2 """

# get computer to pick random number 1-100 and have user guess number 
# also get the count of how many times user guessed
# create an array of guesses and then append the guesses by the player number
# then display well and print the % of guess using the length of the guesses
# then print out here are your guesses and print the list 

# initialize a list guesses and make it empty  to hold player_num(or user)guesses
guesses = []
# initialize cpu_num to equal random. randint to guess # from 1 - 100
cpu_num = random.randint(1,100)
# initialize player_num to accept input of a integer between 1-100
player_num = int(input("enter a number between 1-100: "))
#append guesses to the guesses list do it everytime the player guesses so add it to the while loop
guesses.append(player_num)

# check if player number is correct
# count the player_number guesses

#start loop 
while player_num != cpu_num:                        # while player_num is not equal to cpu_num
    if player_num > cpu_num:                            # if the number is too high
        print("too high")                                   # print too high  
    else:                                               # else 
        print("too low")                                    # print too low
    player_num = int(input("Enter a number between1 -100: ")) # input the next guess ask player to enter a new number
    guesses.append(player_num)                          # add to list of guesses
else:                                                # else 
    print("well done")                                  # print well done
    print("it took you %i guesses." % len(guesses))     # print it took you percent of guesses calculate length of guesses
    print("here are your guesses: ")                    # print out all guesses
    print(guesses)


