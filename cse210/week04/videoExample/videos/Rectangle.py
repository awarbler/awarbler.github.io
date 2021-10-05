# create new class basic 
# class Rectangle:
#     pass

# # create new instance rect1 and rect2 or objects
# rect1 = Rectangle()
# rect2 = Rectangle()

# # create attributes
# rect1.height = 20
# rect2.height = 30

# # create more attributes 
# rect1.width = 40
# rect2.width = 10

# # print
# print(rect1.height * rect1.width)
# print(rect2.height * rect2.width)

class Rectangle:
    def __init__(self, height, width):
        self.height = height # initialize the attribute using init
        self.width = width  # initialize the attribute using init

# dont need to initialize like 
# # create attributes
# rect1.height = 20
# rect2.height = 30

# DIRECTLY USE by calling the rectangle
rect1 = Rectangle(20,60)
rect2 = Rectangle(50,40)

# run code will print 1200 2000

print(rect1.height * rect1.width)
print(rect2.height * rect2.width)


