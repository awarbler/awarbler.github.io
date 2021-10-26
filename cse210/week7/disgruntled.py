class DisgruntledEmployee:
    """The DisgruntledEmployee class doesn’t derive from Employee, but it exposes the 
    same interface required by the PayrollSystem. The PayrollSystem.calculate_payroll() 
    requires a list of objects that implement the following interface:
        An id property or attribute that returns the employee’s id
        A name property or attribute that represents the employee’s name
        A .calculate_payroll() method that doesn’t take any parameters and returns 
        the payroll amount to process"""
    def __init__(self, id, name):
        self.id = id
        self.name = name

    def calculate_payroll(self):
        return 1000000