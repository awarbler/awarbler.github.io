import random

class Hider:
# TODO: Define the Hider class here
    """A code template for the hider. The responsibility of this class of objects
    is hide from the seeker and to give hints of location.
    
    Stereotype:
        Information Holder

    Attributes:
        location (integer): The location of the hider (1-1000). 
        distance (list): The distance travelled with each move. """

    def __init__(self):
        self.location= random.randint(1,1000) # the location of the hider 
        self.distance = [0, 0] # start with two so get_message always works

    """The get_hint method returns a hint that depends on whether or not the 
    seeker has moved closer or farther away. This is determined by inspecting 
    the last two distances contained in the distance attribute."""

    def get_hint(self):

        # The program interface must resemble the sample provided above.

        """Gets a hint from the hider.

        Args:
            self (Hider): An instance of Hider.
        
        Returns:
            string: A hint from the hider
        """
        hint= "\nI'm going to find you!"    
        if self.distance[-1] == 0:
            hint = "\nYou found me!"
        elif self.distance[-1] < self.distance[-2]:
            hint= "\nGetting warmer!"
        elif self.distance[-1] > self.distance[-2]:
            hint= "\nGetting colder!"
        return hint

    """The watch method keeps track of how far away the seeker is by calculating 
    the difference between their locations. The distance is appended to the corresponding 
    attribute for later use. """

    def watch(self,location):
        """Moves to the given location and keeps track of the distance.

        Args:
            self (Seeker): An instance of Seeker.
        """
        distance = abs(self.location - location)
        self.distance.append(distance)      


# The Hider class must have two methods called get_hint, and watch. 
# Watch accepts one argument called location.




