# declare class
class Car:
   # pass used to create an empy class or method
   # initialize - normal method - self keyboard is added
   # first arguement of the method
   # self behaves like a constructor for the class - first method will be called when an 
   # self it is not a constructor - first method that is called when an instance is created
   # python does not need a destructor it has an automatic trash
   #  

# BASIC CODE 
# # the first method - has a def  two underscore and init then 
# self serves as a constructor for the class it is used to initialize
#    def __init__(self):
#        # print the initializer the print line is called and it prints 3 times 
#        print(' the __int__ is called') # shows three x for three instances

# # create an instance of a class
# # create an object name ford or an instance of a class car
# ford = Car()
# honda = Car()
# audi = Car()

# # associate data with an object
# # speed is an attribute or data 
# #create an empyt class you can add attributes on the fly 
# # the class and object has to be created first

# ford.speed = 200 
# honda.speed = 220
# audi.speed = 250

# ford.color = 'red'
# honda.color = 'blue'
# audi.color = ' black'

# # now to print

# print(ford.speed)
# print(ford.color)

# # change attribute or data 
# ford.speed = 300
# #change color
# ford.color = 'blue'

# print(ford.speed)
# print(ford.color)

# the first method init 
# self automatically added
# self keyword - when we create a class the first arguemnt of every method provide the key word self
# it doesnt have to be self but it is a convention to use self to indicate that it is the current object
# every method give it self keyword and first arguement 



   def __init__(self, speed, color): # added speed and color attributes
      print(speed)
      print(color) # brings the value 
      self.speed = speed # assign speed to color to the self keyboard - assign to current object
      self.color =   color # use self dot attribute color and whatever arguement we used for color
       # print the initializer
      print(' the __int__ is called') # shows three x for three instances

      


# create an instance of a class
# create an object name ford or an instance of a class car
#  assign values inside the car class or object? 
# dont need to provide the first argument (self) only how ever many other arguemnts you have added 
# self is automatic

ford = Car(200,'red')
honda = Car(250, 'blue')
audi = Car(300, 'black')