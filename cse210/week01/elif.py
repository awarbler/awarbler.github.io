'''multiply tax rates'''
province = input('Where do you live? ') # get input string
# only one will be selected
tax = 0

if province.lower() == 'alberta':
    tax == 0.05
elif province.lower() == 'nunavut':
    tax == 0.05
elif province.lower() == 'ontario':
    tax = 0.13  
    print (tax)

'''you can add an else statement to it oo'''    
    # you can add 
province = input('Where do you live? ') # get input string
# only one will be selected
tax = 0

if province.lower() == 'alberta':
    tax == 0.05
elif province.lower() == 'nunavut':
    tax == 0.05
elif province.lower() == 'ontario':
    tax = 0.13    
else:
    tax = 0.15  
    print (tax)

'''you can add an or statement'''

'''you can add an else statement to it oo'''    
    # you can add 
province = input('Where do you live? ') # get input string
# only one will be selected
tax = 0

if province.lower() == 'alberta' or province.lower() == 'nunavut':
    tax == 0.05
elif province.lower() == 'ontario':
    tax = 0.13     
else:
    tax = 0.15  
    print (tax)

'''in operator'''  
province = input('Where do you live? ') # get input string
# only one will be selected
tax = 0

if province.lower() in ('alberta', 'nunavut', 'yukon'):
    tax == 0.05
elif province.lower() == 'ontario':
    tax = 0.13  
    
else:
    tax = 0.15  
    print (tax)


'''combinaton of conditions or nesting'''   

country = input('what country do you live in? ')

# only one will be selected

if country == 'canada':
    province = input('Where do you live? ') 
    if province.lower() in ('alberta', 'nunavut', 'yukon'):
        tax == 0.05
    elif province.lower() == 'ontario':
        tax = 0.13  
    
    else:
        tax = 0.15  
        print (tax)

