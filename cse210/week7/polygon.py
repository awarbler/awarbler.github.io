class Polygon: # superclass
    __width = None # not accessible private variables need to create a getter methods 
    __height = None

    def set_values(self, width, height):
        self.__width = width
        self.__height = height
     # create the getter methods public methods made in place of the private methods    
    def get_width(self):
        return self.__width
    def get_height(self):
        return self.__height

# cannot inherit the private 
class Retangle (Polygon):  # subclass
    def area(self):
        return self.get_width() * self.get_height()

class Triangle(Polygon): # subclass
    def area(self):
        return self.get_width() * self.get_height() / 2 


rect = Retangle() # create an instance 
tri = Triangle()
rect.set_values(50,40) # set methods to set the values of width and height 
tri.set_values(50,40)
print(rect.area())
print(tri.area())