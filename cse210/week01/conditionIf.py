price = input('how much did youpay? ') # get input string

price = float(price) #convert string to number 
if price >= 1.00:
    tax = .07 # if both lines are indented then it will not process unless  it is true
    print('Tax rate is : ' + str(tax))


'''add an else'''    
price = input('how much did you pay? ') # get input string

price = float(price) #convert string to number 
if price >= 1.00:
    tax = .07 # if both lines are indented then it will not process unless  it is true
    print('Tax rate is : ' + str(tax)) # this does not need to be here 
else:
    tax = 0   
    print('Tax rate is : ' + str(tax))

'''casE  sensitive'''  # will not run  
country = input('Enter the name of your home country: ')
if country == 'canada':
    print('so you love hockey!')
else: 
     print('YOU ARE NOT FROM CANADA')   


'''casE  sensitive'''  # fix the input  
country = input('Enter the name of your home country: ')
if country.lower() == 'canada':
    print('so you love hockey!')
else: 
     print('YOU ARE NOT FROM CANADA')   


