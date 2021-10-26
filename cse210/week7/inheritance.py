class Rectangle:
    def __init__(self,length, width):
        self.length = length
        self.width = width
    def area(self):
        return self.length * self.width
    def perimeter(self):
        return 2 * self.length + 2 * self.width
    
class Square:
    def __init__(self,length):
        self.length = length
    def area(self):
        return self.length * self.length
    
    def perimeter(self):
        return 4 * self.length

square = Square(4)
square.area()
rectangle = Rectangle(2,4)
rectangle.area()

"""here we have used super() to call the __init__ of the rectangle class. allowing you to 
use it in the square class without repeating code Below the core functionality remains after making
the changes 

Because the Square and Rectangle .__init__() methods are so similar, you can simply call the superclass’s 
.__init__() method (Rectangle.__init__()) from that of Square by using super(). This sets the .length and 
.width attributes even though you just had to supply a single length parameter to the Square constructor.

When you run this, even though your Square class doesn’t explicitly implement it, the call to .area() will 
use the .area() method in the superclass and print 16. The Square class inherited .area() from the Rectangle class."""
class Rectangle:
    def __init__(self, length, width):
        self.length = length
        self.width = width

    def area(self):
        return self.length * self.width

    def perimeter(self):
        return 2 * self.length + 2 * self.width

# Here we declare that the Square class inherits from the Rectangle class
class Square(Rectangle): 
    def __init__(self, length):
       #  super().__init__(length, length) # call the superclass 
       super(Square, self).__init__(length, length) # super deep dive

square = Square(4)
square.area()

"""In the example below, you will create a class Cube that inherits from Square and extends the functionality 
of .area() (inherited from the Rectangle class through Square) to calculate the surface area and volume o
f a Cube instance: """

# class Square(Rectangle): 
#     def __init__(self, length):
#         super().__init__(length, length) # call the superclass 
class Cube(Square):
    def surface_area(self):
        #face_area = super().area() 
        # In this example, you are setting Square as the subclass argument to super(), instead of Cube. This causes super() to start
        # searching for a matching method (in this case, .area()) at one level above Square in the instance hierarchy, in this case 
        # Rectangle.
        face_area = super(Square, self).area()# super deep dive
        return face_area * 6
    def volume(self):
        #face_area = super().area()
        face_area = super(Square, self).area()
        return face_area * self.length
"""Now that you’ve built the classes, let’s look at the surface area and volume of a cube with a side length of 3:
Here you have implemented two methods for the Cube class: .surface_area() and .volume(). Both of these calculations 
rely on calculating the area of a single face, so rather than reimplementing the area calculation, you use super() 
to extend the area calculation.

Also notice that the Cube class definition does not have an .__init__(). Because Cube inherits from Square and 
.__init__() doesn’t really do anything differently for Cube than it already does for Square, you can skip defining 
it, and the .__init__() of the superclass (Square) will be called automatically.

super() returns a delegate object to a parent class, so you call the method you want directly on it: super().area().

Not only does this save us from having to rewrite the area calculations, but it also allows us to change the internal 
.area() logic in a single location. This is especially in handy when you have a number of subclasses inheriting from 
one superclass.
Note that in our example above, super() alone won’t make the method calls for you: you have to call the method on 
the proxy object itself."""
cube = Cube(3)
cube.surface_area()
cube.volume()




