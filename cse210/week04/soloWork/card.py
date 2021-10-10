from hand import Hand
class Card(object):
    """ A playing card. """

#     Card object rank attribute represents rank of card 
# RANKS class attribute has all possible values  
# "A" ace, "J" jack, "Q" queen, "K" king, "2" - "10" numeric values

    RANKS = ["A", "2", "3", "4", "5", "6", "7",
             "8", "9", "10", "J", "Q", "K"]
#     Card object suit attribute represents suit of card 
# SUITS class attribute has all possible values  
# "c" clubs, "d" diamonds, "h" hearts, "s" spades 
         
    SUITS = ["c", "d", "h", "s"]
    
    def __init__(self, rank, suit):
        self.rank = rank 
        self.suit = suit

    def __str__(self):
        reply = self.rank + self.suit
        return reply

# use Card objects 

card1 = Card(rank = "A", suit = "c")
card2 = Card(rank = "2", suit = "c")
card3 = Card(rank = "3", suit = "c")
card4 = Card(rank = "4", suit = "c")
card5 = Card(rank = "5", suit = "c")
card6 = Card(rank = "6", suit = "c")
card7 = Card(rank = "7", suit = "c")
card8 = Card(rank = "8", suit = "c")
card9 = Card(rank = "9", suit = "c")
card10 = Card(rank = "10", suit = "c")
card11= Card(rank = "11", suit = "c")
card12= Card(rank = "12", suit = "c")
card13 = Card(rank = "13", suit = "c")



print(card1)  # Ac
print(card2) # 2c
print(card3) # 3c
print(card4) # 4c
print(card5) # 5c

my_hand = Hand()
print (my_hand)     # <empty>
my_hand.add(card1)
my_hand.add(card2)
my_hand.add(card3)
my_hand.add(card4)
my_hand.add(card5)
print (my_hand)  # Ac 2c 3c 4c 5c 

your_hand = Hand()
my_hand.give(card1, your_hand)
my_hand.give(card2, your_hand)
print (your_hand)  # Ac 2c
print (my_hand )   # 3c 4c 5c
my_hand.clear()
print (my_hand)    # <empty>

