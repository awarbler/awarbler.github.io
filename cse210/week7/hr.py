"""implementing a PayrollSystem class that processes payroll:
The hr module implements the PayrollSystem, which calculates payroll for the employees. 
It also implements the policy classes for payroll. As you can see, the policy classes don’t 
derive from Employee anymore."""

class PayrollSystem:

    """PayrollSystem implements a .calculate_payroll() method that takes a collection of
    employees and prints their id, name, and check amount using the .calculate_payroll() 
    method exposed on each employee object."""
    def calculate_payroll(self, employees):
        print('Calculating Payroll')
        print('===================')
        for employee in employees:
            print(f'Payroll for: {employee.id} - {employee.name}')
            print(f'- Check amount: {employee.calculate_payroll()}')
            print('')

class SalaryPolicy:
    def __init__(self, weekly_salary):
        self.weekly_salary = weekly_salary

    def calculate_payroll(self):
        return self.weekly_salary

class HourlyPolicy:
    def __init__(self, hours_worked, hour_rate):
        self.hours_worked = hours_worked
        self.hour_rate = hour_rate

    def calculate_payroll(self):
        return self.hours_worked * self.hour_rate

class CommissionPolicy(SalaryPolicy):
    def __init__(self, weekly_salary, commission):
        super().__init__(weekly_salary)
        self.commission = commission

    def calculate_payroll(self):
        fixed = super().calculate_payroll()
        return fixed + self.commission
## moved to employees.py
# """implement a base class Employee that handles the common interface for every employee type:"""
# class Employee:
#     """Employee is the base class for all employee types. It is constructed with an id and a 
#     name. The HR system requires that every Employee processed must provide a .calculate_payroll() 
#     interface that returns the weekly salary for the employee. The implementation of that 
#     interface differs depending on the type of Employee.What you are saying is that every Employee 
#     must have an id assigned as well as a name."""
#     def __init__(self, id, name):
#         self.id = id
#         self.name = name


# """create a derived class SalaryEmployee that inherits Employee"""
# class SalaryEmployee(Employee):
#     """SalaryEmployee that inherits Employee. The class is initialized with the id and name 
#     required by the base class, and you use super() to initialize the members of the base class"""
#     def __init__(self, id, name, weekly_salary):
#         super().__init__(id, name)
#         self.weekly_salary = weekly_salary
#         """SalaryEmployee also requires a weekly_salary initialization parameter that 
#         represents the amount the employee makes per week."""

#     def calculate_payroll(self):
#         """class provides the required .calculate_payroll() method used by the HR system. 
#         The implementation just returns the amount stored in weekly_salary."""
#         return self.weekly_salary

# """add an HourlyEmployee to the HR system:"""
# class HourlyEmployee(Employee):
#     """HourlyEmployee class is initialized with id and name, like the base class, 
#     plus the hours_worked and the hour_rate required to calculate the payroll. 
#     The .calculate_payroll() method is implemented by returning the hours worked times the 
#     hour rate."""
#     def __init__(self, id, name, hours_worked, hour_rate):
#         super().__init__(id, name)
#         self.hours_worked = hours_worked
#         self.hour_rate = hour_rate

#     def calculate_payroll(self):
#         return self.hours_worked * self.hour_rate

# """company employs sales associates that are paid through a fixed salary plus a 
# commission based on their sales, so you create a CommissionEmployee class:"""

# class CommissionEmployee(SalaryEmployee):
#     """You derive CommissionEmployee from SalaryEmployee because both classes have a 
#     weekly_salary to consider. At the same time, CommissionEmployee is initialized with a 
#     commission value that is based on the sales for the employee."""
    
#     def __init__(self, id, name, weekly_salary, commission):
#         super().__init__(id, name, weekly_salary)
#         self.commission = commission

#     def calculate_payroll(self):
#         """.calculate_payroll() leverages the implementation of the base class to retrieve 
#         the fixed salary and adds the commission value. CommissionEmployee derives from 
#         SalaryEmployee, you have access to the weekly_salary property directly, and you 
#         could’ve implemented .calculate_payroll() using the value of that property."""
#         fixed = super().calculate_payroll()
#         return fixed + self.commission



