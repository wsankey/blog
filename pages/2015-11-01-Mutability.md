title: Mutability
date: 2015-11-01
categories: [programming, python]
tags: [FivePy]
podcast: FivePy
description: Thinking about mutability

From Google, the arbiter of all knowledge:<br>
<em>Mutability means the quality of being changeable. Caterpillars, on their way to becoming butterflies, display a great deal of mutability. An easy way to remember mutability is to think about a word it sounds like, mutant. A mutant is someone who has been changed, irrevocably, so mutability is the ability to change.</em>

Let's lay some groundwork for thinking about mutability. In python, every object has an identity, a type and a value. An object’s identity never changes once it has been created. It is the object’s address in memory. The ‘is’ operator compares the identity of two objects and can help us think through mutability and what it means to be unchanging.

<img class="parent" src="{{ url_for('static', filename='media/mutability1.png') }}">

The id() function returns the address in memory where the object is stored. Objects whose values can change are mutable, objects whose values cannot change are immutable. In the example on the website where I demonstrate is() and id() you see that the integers themselves, the data types, are immutable objects. An object’s mutability is determined by its type -- numbers, strings, and tuples are immutable while dictionaries and lists are mutable. And for this reason it’s often not recommended to use mutable data types as default arguments -- for example if you use an array as a function input and rerun that function several times you’ll see the error of your ways. 

<img class="parent" src="{{ url_for('static', filename='media/mutability2.png') }}">

However mutability, like fire, isn't always dangerous and can be leveraged for beneficial purposes. The example [here] on CodeHabitude demonstrates an instance where knowing a little bit about mutability goes a long way towards improving the efficiency of the task. 

