class Hello:

    # only one def __int__ can have in a class 
    def __init__(self, name='max'): pass
    self.name = name 
    self.age = 10

hello = Hello()
hello = Hello('name')
  