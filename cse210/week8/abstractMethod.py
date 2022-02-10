from abc import ABC, abstractmethod
# to make an abstract class add abc 

# shape class is a template for the square class 
# do not let the user create an instance of the shape class
# make sure both methods are there are implemented in the square class
# subclass needs to be implemented 

# how to create an abstract class 
# import build in module from abc import ABC , abstractmethod 
# abc abstract base classes allows us to create abstract class
# inherit from the ABC into the shape class 
# add a decorator use the @ and the name of the abstract method 

class Shape(ABC):
    # decoartor abstract  put it on top of the method
    # an abstract method is a method that must implement in the subclass 
    @abstractmethod 
    def area(self):
        pass

    @abstractmethod # makes two methods abstract - abstract must implement in the sub class
    def perimeter(self): 
        pass

class Square(Shape):
    def __init__(self,side):
        self.__side = side
    def area(self):
        return self.__side * self.__side
    def perimeter(self):
        return 4 * self.__side
    
# dont allow the other users to use dhpae class 
# shape = Shape() this will not run because it is an abstract 
# make sure both methods are implemented in the square class
# abstract classes are made to keep users to implementd 

# this will cause an error instantiate abstract class Square with abstract methods area, perimeter
# square = Square(5)

# abstract class the subclass as to implement all methoda of the base class 
# we had to add the area and perimeter to the square(shape)class to be able to use it 

#define abstract by inporting and inherit into the class we want to make abstract
# need to implement all of the methods into the subclass 
square = Square(5)
print(square.area())
print(square.perimeter())

