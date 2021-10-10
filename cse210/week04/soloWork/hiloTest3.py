import random
####  didnt complete youtube andy dolinski high low game in python #3
"""HILO BASIC 2 """
# input number and computer guess number

""" # play hi lo with the comoputer
    # create a loop 
    # computer guess a number 
    # check to see if it is right
    # while player_ number not equal to cpu num 
    # print cpu guess is and print number %i cpu_num
    # else
    # print cpu guess is %i cpu_num
    # read guesses equal 1 
    # calculate guess + = 1 
    # print cpu guess in %i cpu_num % guesses in loop as long as it is wrong
    # there is a problem it take a long time for it to guess 
 """

# Make original code more efficent took 201 guess is not good enough
# imporve odds by coding 
# two var hi = 100 and low 1 use the variable instead of 1-100 
# work out if the computer is guesing too high or too low
# if cpu num is greater than player num 

 # input number and computer guess number   

 hi = 100
 low = 1

# initialize cpu_num to generate random int using randint to guess # between 1-100
cpu_num = random.randint(1,100)
# initialize player_num to accept input of a integer between 1-100
player_num = int(input("enter a number between 1-100: "))

# initialize guesses to count for computer
guesses = 1


#start loop 
while player_num != cpu_num:                        # while player_num is not equal to cpu_num
    print("cpu guess is %i" % cpu_num)                  # print cpu guess is number 
    cpu_num = random.randint(1,100)                     # loop through cpu_num randomly picks a number between 1 and 100 use randint
    
else:                                                # else 
     print("cpu guess is %i" % cpu_num)                                # print well done
     print("cpu guesses in  %i guesses." %guesses)     # print it took you percent of guesses calculate length of guesses
