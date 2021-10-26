""" example from https://www.python-course.eu/python3_properties.php"""




"""we demonstrate in the following example, how we can design a class in a 
Javaesque way with getters and setters to encapsulate the private attribute self.__x:"""
# class P:
#     def __init__(self,x):
#         self.__x = x
#         pass
#     def get_x(self):
#         return self.__x
#     def set_x(self,x) :
#         self.__x = x

   

# p1 = P(42)
# p2 = P(4711)
# p1.get_x() 

# print(p1.get_x)   

# p1.set_x(47)
# p1.set_x(p1.get_x()+p2.get_x())
# p1.get_x()

# print(p1.get_x)

"""Such an assignment is easier to write and above all easier to read than the 
Javaesque expression.Let's rewrite the class P in a Pythonic way. No getter, no 
setter and instead of the private attribute self.__x we use a public one:"""

class P:
    def __init__(self):
        self.x = x

    p1 = P(42)
    p2 = P(4711)
    p1.x            