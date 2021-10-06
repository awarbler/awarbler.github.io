# print timestamps to see how long sections of code
# take to run
# if you are copy and pasting code move it to a function
# instead of copy and paste call function
# advantage more readable 
# calling print time 
# reduces rework and chance of introducig bugs


# import the datetime class from dateime library
# from datetie import datetime

from datetime import datetime
# print the current time
# define functon print time () and :
# then write the code 
# indent by 4 spaces
def print_time():
    print('task completed')
    print(datetime.now)
    print()

# excute the statement 
first_name = 'Susan'
print_time() # calling print time to excute


for x in range(0, 10):
    print(x)
print_time() # calling print time to excute

# pass in parameter
# allow flexibilty

# same logic over and over 
first_name = input('Enter your first name: ')
first_name_initial = first_name[0:1]
last_name = input('Enter your last name: ')
last_name_initial = last_name[0:1]

print('your initials are : ' + first_name_initial + last_name_initial)

# create function 
#define function 

def get_initial(name):
    initial = name[0:1].upper
    return initial # passes back a value back 



first_name = input('Enter your first name: ')
first_name_initial = get_initial(first_name)

last_name = input('Enter your last name: ')
last_name_initial = get_initial(last_name)

print('your initials are : ' + first_name_initial + last_name_initial)


