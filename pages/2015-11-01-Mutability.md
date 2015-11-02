title: Mutability
date: 2015-11-01
categories: [programming, python]
tags: [FivePy]
podcast: FivePy
description: Thinking about mutability


In python, every object has an identity, a type and a value. An object’s identity never changes once it has been created. It is the object’s address in memory. The ‘is’ operator compares the identity of two objects

x=2
y=4
x is y
id(x)
id(y)
x=4
x is y
id(x)
id(y)

The id() function returns the address in memory where the object is stored. Objects whose values can change are mutable, objects whose values cannot change are immutable. In the example on the website where I demonstrate is() and id() you see that the integers themselves, the data types, are immutable objects. An object’s mutability is determined by its type -- numbers, strings, and tuples are immutable while dictionaries and lists are mutable. And for this reason it’s often not recommended to use mutable data types as default arguments -- for example if you use an array as a function input and rerun that function several times you’ll see the error of your ways. And there is an example on the blog. 

def wrongheaded( arg = [] ):
    arg.append( 1. )
    return arg

wrongheaded()
wrongheaded()
wrongheaded()

Further, objects are never explicitly destroyed, however when they become unreachable they may be garbage-collected. More on that another time. Ok, so now let’s look at a mutable object, the 
array A of [1,2,3]
a = [1,2,3]
b = a
a[0] = 4 
print a
print b
a is b


So b changed because the underlying object changed. The object is mutable. Here a and b are referencing the same object. There are ways for us to retain the same items in the array as a but create a new object so that when a changes b does not change as well

a = [1,2,3]
b = list(a)
c = a

a[0] = 4
print a
print b
print c

