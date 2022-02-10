class Shark():
    def swim(self):
        print("The shark is swimming.")

    def swim_backwards(self):
        print("The shark cannot swim backwards, but can sink backwards.")

    def skeleton(self):
        print("The shark's skeleton is made of cartilage.")


class Clownfish():
    def swim(self):
        print("The clownfish is swimming.")

    def swim_backwards(self):
        print("The clownfish can swim backwards.")

    def skeleton(self):
        print("The clownfish's skeleton is made of bone.")


"""In the code above, both the Shark and Clownfish class have three methods with the same name in common. However, each of the functionalities of these methods differ for each class.

Let’s instantiate these classes into two objects:"""

...
sammy = Shark()
sammy.skeleton()

casey = Clownfish()
casey.skeleton()

"""Output
The shark's skeleton is made of cartilage.
The clownfish's skeleton is made of bone."""

"""Polymorphism with Class Methods
To show how Python can use each of these different class types in the same way, 
we can first create a for loop that iterates through a tuple of objects. Then we 
can call the methods without being concerned about which class type each object 
is. We will only assume that these methods actually exist in each class."""

...
sammy = Shark()

casey = Clownfish()

for fish in (sammy, casey):
    fish.swim()
    fish.swim_backwards()
    fish.skeleton()

"""We have two objects, sammy of the Shark class, and casey of the Clownfish class.
 Our for loop iterates through these objects, calling the swim(), swim_backwards(), 
 and skeleton() methods on each.

When we run the program, the output will be as follows:

Output
The shark is swimming.
The shark cannot swim backwards, but can sink backwards.
The shark's skeleton is made of cartilage.
The clownfish is swimming.
The clownfish can swim backwards.
The clownfish's skeleton is made of bone.


The for loop iterated first through the sammy instantiation of the Shark class, 
then the casey object of the Clownfish class, so we see the methods related to 
the Shark class first, then the Clownfish class.

This shows that Python is using these methods in a way without knowing or 
caring exactly what class type each of these objects is. That is, using these 
methods in a polymorphic way.
"""

"""Polymorphism with a Function
We can also create a function that can take any object, allowing for polymorphism.

Let’s create a function called in_the_pacific() which takes in an object we can call 
fish. Though we are using the name fish, any instantiated object will be able to be 
called into this function:"""


def in_the_pacific(fish):
    """Next, we’ll give the function something to do that uses the fish object 
    we passed to it. In this case we’ll call the swim() methods, each of which 
    is defined in the two classes Shark and Clownfish:"""
    fish.swim()
    """Next, we’ll create instantiations of both the Shark and Clownfish classes 
    if we don’t have them already. With those, we can call their action using the 
    same in_the_pacific() function:"""
sammy = Shark()

casey = Clownfish()

in_the_pacific(sammy)
in_the_pacific(casey)
"""When we run the program, the output will be as follows:

Output
The shark is swimming.
The clownfish is swimming."""

"""Even though we passed a random object (fish) into the in_the_pacific() function when defining it, we were still able to use it effectively for instantiations of the Shark and Clownfish classes. The casey object called the swim() method defined in the Clownfish class, and the sammy object called the swim() method defined in the Shark class.

Conclusion
By allowing different objects to leverage functions and methods in similar ways through polymorphism, making use of this Python feature provides greater flexibility and extendability of your object-oriented code."""

