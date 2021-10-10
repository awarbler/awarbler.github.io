class Robot: # create class
    def __init__(self, name ,color, weight): #constructor assign arguements givenName,color, weight
        self.name = name       # add self to every arguements 
        self.weight = weight
        self.color = color


    def introduce_self(self): # add self to every function in the class
        print('My name is ' + self.name) 

# r1 = Robot() # create a new object with the class robot use default for 
# r1.name = "tim" # create attribute
# r1.color = 'red'
# r1.weight = '30'

# r2 = Robot()
# r2.name = "tom" # create attribute
# r2.color = 'black'
# r2.weight = '45'
r1 = Robot('tom','red', '30')
r2 = Robot('tim','black', '30')

# r1.introduce_self()
# r2.introduce_self()


class Person:

    def  __init__(self, n, p,i):  
    #constructor assign arguements n,p,i for name personality and is sitting
        self.name   = n         # set new object name to self to every 
        self.personality = p     
        self.is_sitting = i

    def sit_down(self):         # add a method called sit down no arguements execpt self
        self.is_sitting = True  #  implement by assigning true

    def stand_up(self):          # add a method called sit down no arguements execpt self
        self.is_sitting = False # false and true capital 

# load class create a new object out the class 
p1 = Person("Alice", "aggressive", False) # new object is assigned to person 
p2 = Person("Becky ", "talkative ", True) # this new object 

# display or show P1 owns r2 set the robot own to r2 
p1.robot_owned = r2 # defines new attribute in 
p2.robot_owned = r1 

p1.robot_owned.introduce_self()

