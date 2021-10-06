names = ['Christoher', 'Elly']
scores = [] # empty list
scores.append(98) # add new item to the end
scores.append(99)
print(names)
print(scores)
print(scores[1]) # COLLECTIONS ARE ZERO INDEXED

'''Arrays'''
from array import array
from os import name
scores = array('d')
scores.append(97)
scores.append(96)
print(scores)
print(scores[1])

''' difference between array and list

array = numerical data type has to be the same data type
list  = store any data type , mixed data types'''

#common operations
names = ['Christoher', 'Elly']
print(len(names)) # get the numberof items
names.insert(0,'Bill') # insert before the index
print(names)
names.sort()
print(names)

