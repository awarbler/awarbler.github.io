You created your first class hierarchy for the system. The UML diagram of the classes looks like this:

                                    +-------------------------------------------+
                                    |Employe                                    |
                                    +-------------------------------------------+
                                    |+ id: int                                  |
                                    |+ name: string                             |
                                    +-------------------------------------------+


                                    ^                                       ^

          +----------------------------+                                     +-----------------------------+
          |SalaryEmployee              |                                     |HourEmployee                 |
          +----------------------------+                                     +-----------------------------+
          |+ calculate_payroll():number| ----------                          |+ calculate_payroll():number |
          |                            |           V                         |+ name: string               |
          +----------------------------+                                     +-----------------------------+
                        ^                                                       v
          +-----------------------------+           +----------------------------+
          |CommissionEmployee           |           |  << interface>>            |
          +-----------------------------+           |IPayrollCalculator          |
          |+ calculate_payroll():number |     >     +----------------------------+ 
          |                             |           | + id: int                  |
          +-----------------------------+           | + name: string             |
                                                    +----------------------------+
                                                    |+ calculate_payroll():number|
                                                    +----------------------------+


//  The diagram shows the inheritance hierarchy of the classes. The derived classes implement the IPayrollCalculator 
//  interface, which is required by the PayrollSystem. The PayrollSystem.calculate_payroll() implementation requires that 
//  the employee objects passed contain an id, name, and calculate_payroll() implementation.

// Interfaces are represented similarly to classes with the word interface above the interface name. 
// Interface names are usually prefixed with a capital I.                                                   