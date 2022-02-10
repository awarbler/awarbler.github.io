class Parent:
    name = "Scott"

class Child(Parent):
    name = "David"

obj = Child()
print(obj.name)


class Bank:
    def rateofinterst(self):
        return 0

class ICICI(Bank):
    
    def rateofinterst(self):
        return 10.5

obj1 = ICICI()
print (obj1.rateofinterst())

obj1 = Bank()
obj1.rateofinterst()

# overload methods 

class Human:
    def sayHello(self, name = None):
        if name is not None:
            print(f"Hello {name}")
        else:
            print("Hello")

obj2 = Human()
obj2.sayHello("Pavan")
obj2.sayHello()


# overloading methods

class Bird:
    def fly(selfself, name=None):
        if name == "parrot":
            print("can fly")
        if name == "penguine":
            print("cannot fly")
        if name is None:
            print("No input")


obj4=Bird()
obj4.fly("parrot")
obj4.fly("penguine")

