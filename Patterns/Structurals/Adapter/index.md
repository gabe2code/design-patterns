# Adapter pattern

```The adapter pattern is a software design pattern (also known as wrapper, an alternative naming shared with the decorator pattern) that allows the interface of an existing class to be used as another interface. It is often used to make existing classes work with others without modifying their source code.```

The adapter design pattern solves problems like:
##### 1- How can a class be reused that does not have an interface that a client requires?
##### 2- How can classes that have incompatible interfaces work together?
##### 3- How can an alternative interface be provided for a class?
Often an (already existing) class can't be reused only because its interface doesn't conform to the interface clients require.

#### The adapter design pattern describes how to solve such problems:

 1- Define a separate adapter class that converts the (incompatible) interface of a class (adaptee) into another interface (target) clients require.
 2 - Work through an adapter to work with (reuse) classes that do not have the required interface.

![UML class and sequence diagram](<https://upload.wikimedia.org/wikipedia/commons/e/e5/W3sDesign_Adapter_Design_Pattern_UML.jpg>
"Adapter")
