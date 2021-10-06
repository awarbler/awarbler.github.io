import random
# getting and using a package 

# define variable num assign random 
# define guess and assign none
num = random.randint(1,10)
guess = None

# while loop that compares the input of guess
# converts guess to an int
# if guess equals num print congratulation
# else print sorry
while guess != num:
    guess = input(' guess a number between 1 and 10: ')
    guess = int(guess)

    if guess == num:
        print('congratulations you won! ')
        break
    else:
        print('nope, sorry. try again!')