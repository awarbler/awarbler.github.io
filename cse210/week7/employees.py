from hr import (
    SalaryPolicy,
    CommissionPolicy,
    HourlyPolicy
)
from productivity import (
    ManagerRole,
    SecretaryRole,
    SalesRole,
    FactoryRole
)

"""The employees module imports policies and roles from the other modules and implements 
the different Employee types. You are still using multiple inheritance to inherit the implementation
 of the salary policy classes and the productivity roles, but the implementation of each class only
  needs to deal with initialization.

Notice that you still need to explicitly initialize the salary policies in the constructors. 
You probably saw that the initializations of Manager and Secretary are identical. Also, the 
initializations of FactoryWorker and TemporarySecretary are the same.

You will not want to have this kind of code duplication in more complex designs, so you have to be 
careful when designing class hierarchies."""

class Employee:
    def __init__(self, id, name):
        self.id = id
        self.name = name

class Manager(Employee, ManagerRole, SalaryPolicy):
    def __init__(self, id, name, weekly_salary):
        SalaryPolicy.__init__(self, weekly_salary)
        super().__init__(id, name)

class Secretary(Employee, SecretaryRole, SalaryPolicy):
    def __init__(self, id, name, weekly_salary):
        SalaryPolicy.__init__(self, weekly_salary)
        super().__init__(id, name)

class SalesPerson(Employee, SalesRole, CommissionPolicy):
    def __init__(self, id, name, weekly_salary, commission):
        CommissionPolicy.__init__(self, weekly_salary, commission)
        super().__init__(id, name)

class FactoryWorker(Employee, FactoryRole, HourlyPolicy):
    def __init__(self, id, name, hours_worked, hour_rate):
        HourlyPolicy.__init__(self, hours_worked, hour_rate)
        super().__init__(id, name)

class TemporarySecretary(Employee, SecretaryRole, HourlyPolicy):
    def __init__(self, id, name, hours_worked, hour_rate):
        HourlyPolicy.__init__(self, hours_worked, hour_rate)
        super().__init__(id, name)


## moved to productivitySystem        

# class Manager(SalaryEmployee):
#     def work(self, hours):
#         print(f'{self.name} screams and yells for {hours} hours.')

# class Secretary(SalaryEmployee):
#     def work(self, hours):
#         print(f'{self.name} expends {hours} hours doing office paperwork.')

# class SalesPerson(CommissionEmployee):
#     def work(self, hours):
#         print(f'{self.name} expends {hours} hours on the phone.')

# class FactoryWorker(HourlyEmployee):
#     def work(self, hours):
#         print(f'{self.name} manufactures gadgets for {hours} hours.')







#### do not do this it causes the diamond problems need to fix it 
# # multi inherit        
# # the order matters you have to put in which comes first hourly employee comes before secetary
# # however this still will not run
# # we need to look at the Method resolution order to see how things are run for this class

# # Idont know how to run the mro so I am going to just do what it says 

# class TemporarySecretary(Secretary, HourlyEmployee):

#     """You can bypass the MRO by reversing the inheritance order and directly calling 
#     HourlyEmployee.__init__() as follows:"""
#     def __init__(self, id, name, hours_worked, hour_rate):
#         HourlyEmployee.__init__(self, id, name, hours_worked, hour_rate)
#         # this creates an error because we reversed the inheritanceorder, we need to override .calculate 
#         # in temporary secretary and invoke the right implementation from it 
#     def calculate_payroll(self):
#         return HourlyEmployee.calculate_payroll(self)
#         """The calculate_payroll() method directly invokes HourlyEmployee.calculate_payroll() to 
#         ensure that you get the correct result. You can run the program again to see it working:"""
