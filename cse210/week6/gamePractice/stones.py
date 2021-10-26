print("21 Game")
print("=======")

print("There are currently 21 stones. On each turn, remove 1 or 2 stones.")
print("The person that removes the last stone wins!")


num_stones = 21

while True:
    print(num_stones * "# ")
    player_move = int(input("How many stones would you like to remove (1-2) > "))
    num_stones = num_stones - player_move

    if num_stones <= 0:
        print("You win!")
        break

    print(num_stones * "# ")
    computer_move = random.randint(1, 2)
    num_stones = num_stones - computer_move
    print("The computer removed", computer_move, "stones.")
    
    if num_stones <= 0:
        print("The computer wins!")
        break
    
print("Please play again!")