import random

"""HILO BASIC 2 """
# input number and computer guess number

""" # play hi lo with the comoputer
    # for loop 
    # computer guess a number to check if it is right
    # while player_ number not equal to cpu num 
    # print cpu guess is and print number %i cpu_num
    # else
    # print cpu guess is %i cpu_num
    # read guesses  equal 1 
    # calculate guess + = 1 
    # print cpu guess in %i cpu_num % guesses
    # there is a problem it take a long time for it to guess 

    # create an array of guesses and then append the guesses by the player number
    # then display well and print the % of guess using the length of the guesses
    # then print out here are your guesses and print the list """

 # input number and computer guess number   

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
