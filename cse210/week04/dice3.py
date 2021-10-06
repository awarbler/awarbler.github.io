import random


def main():
player1 = 0
player2 = 0
rounds = 1
while round != 4:
    print('round' + str(rounds))
    player1  = dice_roll()

    rounds = rounds + 1


def dice_roll ():
    # 1 being first number roll and 6 last number we can roll
    diceRoll = random.randint(1,6)
    return diceRoll
print (dice_roll())

main()
