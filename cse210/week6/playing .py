#define array to keep track of stones in bins 
# 14 bins include in the game board   https://www.youtube.com/channel/UCthQFmHq8BrXpw-ISqeDxkg/videos
binAmount = [4,4,4,4,4,4,0,4,4,4,4,4,4,0]

# create a boolean 
playing = True

# determine the players
playerOne = True

# message code value of zero to allow message above game board to be more flexible 
messageCode = 0

while(playing):
    # define a variable message and print whose turn it is 
    if playerOne and messageCode == 0:
        message = "Player One's Turn...."
    elif not(playerOne) and messageCode == 0:
        message = "Player Two's Turn...."  
    elif playerOne and messageCode == -2: #error code from user input 
            message = " invalid input trya again, player one"
    elif not(playerOne) and messageCode == -2: # error code from user input 
        message = " invalid input trya again, player two"
    elif playerOne and messageCode == -1:
        message = " choose a non empty bin player one "
    elif not(playerOne )and messageCode == -1:
        message = " choose a non empty bin player two "

    print("")  
    print(message)
    print("") # to add a space between board and turn
    messageCode = 0 # set to zero here  means elsewhere we can change message code to something else 

    i = 0 # assign i to zero to go through the for loop :  will run through the loop for every element of the array 
    for element in binAmount: 
        binAmount[i] = int(binAmount[i]) # turns input into an int 
        if int(binAmount[1]) < 10:  # if command to check to see if the bin amount at index i is less than 10
            binAmount[i] = " " + str(binAmount[i]) # if it is true then it has a single digit so the print has 
        else: # not true then else to binamount at index i to be equal as a string two digits 
            binAmount[i] = str(binAmount[i])
        i = i + 1
    # end of the for loop 

# draw game board


#  determine whos turn on the game board place the first value from binAmount in lower left space
    if not(playerOne): # if not player one turn then print the following line
        print("        a    b    c    d    e    f")

    # draw board and print array numbers 
    print("+----+----+----+----+----+----+----+----+")
    print("|    | "+ binAmount[12] +" | "+ binAmount[11] +" | "+ binAmount[10] +" | "+ binAmount[9] +" | "+ binAmount[8] +" | "+ binAmount[7] +" |    |")
    print("| "+ binAmount[13] +" |----+----+----+----+----+----| "+ binAmount[6] +" |")
    print("|    | "+ binAmount[0] +" | "+ binAmount[1] +" | "+ binAmount[2] +" | "+ binAmount[3] +" | "+ binAmount[4] +" | "+ binAmount[5] +" |    |")
    print("+----+----+----+----+----+----+----+----+")

    # determining the playerOne turns print the following code
    if playerOne: # if true
        print("        f    e    d    c    b    a")# print the following code print space to get to the first bin f second bin 3 and the d c b a 
    print("")
    userInput = input("Enter the letter 'q' to Quite the game: ")

#user input variable to exit the game 

    if userInput == "q":
        playing = False
        #choose bin
        chosenBin = 0
        # check to see if it is player one or player two and determine what letter we have 
    elif playerOne and userInput == "a": # new variable as chosen bin to equal the index that corresponse chosen bin to be 5
        chosenBin = 5
    elif playerOne and userInput == "b":  
        chosenBin = 4 
    elif playerOne and userInput == "c":  
        chosenBin = 3 
    elif playerOne and userInput == "d":  
        chosenBin = 2
    elif playerOne and userInput == "e":  
        chosenBin = 1
    elif playerOne and userInput == "f":  
        chosenBin = 0
    elif not(playerOne) and userInput == "a":  
        chosenBin = 12
    elif not(playerOne) and userInput == "b":  
        chosenBin = 11
    elif not(playerOne) and userInput == "c":  
        chosenBin = 10
    elif not(playerOne) and userInput == "d":  
        chosenBin = 9
    elif not(playerOne) and userInput == "e":  
        chosenBin = 8
    elif not(playerOne) and userInput == "f":  
        chosenBin = 7
    else:
        # set the chosen bin
        chosenBin = -2  # set chosen bin to -2 
        messageCode = -2 # if input is invaled     
        
        # check chosen bin value is appropriate value to enter into array
    if int(chosenBin) >= 0:
        # choose a bin with stones in it before set to zero check 
        giveAwayPile = binAmount[chosenBin] #store bin amount from the chosen bin
        binAmount[chosenBin] = 0 
        if int(giveAwayPile) > 0: # if giveaway is bigger then zero tha
            messageCode = -1 # empty bin was chosen

    # add distribution - stones should be distrubuted one by one to other bins
    recipient = chosenBin + 1 # index of the bin that recieves a new stone move counter clockwise
    while(int(giveAwayPile) > 0): # whle loop based on the giveaway pile - if greater than the giveawaypile then give a way a stone from the pile
        # if it is player one turn or true and value of reci is == 13 the value of the recip to go to zero
        if(playerOne and int(recipient) == 13):
            recipient = 0
        if(not(playerOne) and int(recipient) == 6):
            recipient = 7

        binAmount[recipient] = int(binAmount[recipient]) + 1 # adding one to the bin treated as an int as the recipient  adding one to the bin 
        # take one away from the giveaway pile and increase the recipient 
        giveAwayPile = int(giveAwayPile) - 1


        # when the last stone is given away
        if int(giveAwayPile) == 0:
            lastRecipient = recipient  
        else:  
            # increase by one
            recipient = int(recipient) + 1
        # value if recipient treated as an int greater than 13 switch to zero
            if int(recipient) > 13: 
                recipient = 0

    # determining if player one can play again 
    if(playerOne and int(lastRecipient) == 6):
        playerOne = True
    elif(playerOne and int(binAmount[lastRecipient]) == 1 and lastRecipient < 6) :
        binAmount[6] = int(binAmount[6]) + int(binAmount[lastRecipient]) + int(binAmount[12 - int(lastRecipient)])   
        binAmount[lastRecipient] = 0
        binAmount[12 - int(lastRecipient)] = 0
        playerOne = not(playerOne)
        # it will remain player twos turn
    elif(not(playerOne)and int(lastRecipient) == 13):
        playerOne = False
    else:
        playerOne = not(playerOne) #switch between players


# end of the while loop


