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

r1.introduce_self()
r2.introduce_self()
