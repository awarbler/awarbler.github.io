# declare class
class Car:
    pass # used to create an empy class or method

#create an instance of a class
# create an object name ford or an instance of a class car
ford = Car()
honda = Car()
audi = Car()

# associate data with an object
# speed is an attribute or data 
#create an empyt class you can add attributes on the fly 
# the class and object has to be created first

ford.speed = 200 
honda.speed = 220
audi.speed = 250

ford.color = 'red'
honda.color = 'blue'
audi.color = ' black'

# now to print

print(ford.speed)
print(ford.color)

# change attribute or data 
ford.speed = 300
#change color
ford.color = 'blue'

print(ford.speed)
print(ford.color)

