''' if the price is greater than 1.00 add tax'''
price = 5.07
if price >= 1.00:
    tax = .07
    print(tax)


'''Best way :  with an else if the price is less or equal to 1.00 
print tax amount else tax is zero print tax '''

price = .95
if price >= 1.00:
    tax = .07
else: 
    tax = 0 
    print(tax)

''' with an else if the price is less or equal to 1.00 
print tax amount else tax is zero print tax '''
price = .95
if price >= 1.00:
    tax = .07
    print(tax)
else: 
    tax = 0 
    print(tax)

''' be care when comparing strings'''  
country = 'CANADA'
if country.lower() == 'canada': #Strin camparisons are case sensitive
    print('Oh look a Canadian')
else:
    print('You are not from Canada')
