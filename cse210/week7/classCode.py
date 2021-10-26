class MyClass:
    """ declared a class MyClass"""
    pass

c = MyClass

""" use the dir() function to list its members:
    dir() returns a list of all the members in the specified object. 
    You have not declared any members in MyClass, so where is the list 
    coming from? You can find out using the interactive interpreter:

"""
dir(c)

o = object()
"""There are some additional members in MyClass like __dict__ and __weakref__,
 but every single member of the object class is also present in MyClass."""
dir(o)

"""This is because every class you create in Python implicitly derives from object. 
You could be more explicit and write class MyClass(object):, but it’s redundant 
and unnecessary."""

class MyError(Exception):
    pass

raise MyError()