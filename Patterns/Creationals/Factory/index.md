# Factory

```In class-based programming, the factory method pattern is a creational pattern that uses factory methods to deal with the problem of creating objects without having to specify the exact class of the object that will be created```

This has the following advantages and is useful for the following cases, among others:

Allows construction of classes with a component of a type that has not been predetermined, but only defined in an "interface", or which is defined as a dynamic type.
Thus, for example, a class Vehicle that has a member Motor of interface IMotor, but no concrete type of Motor defined in advance, can be constructed by telling the Vehicle constructor to use an ElectricMotor or a GasolineMotor. The Vehicle constructor code then calls a Motor factory method, to create the desired Motor that complies with the IMotor interface.
Allows construction of subclasses to a parent whose component type has not been predetermined, but only defined in an interface, or which is defined as a dynamic type.
For example, a class Vehicle with a member Motor defined with a dynamic type, can have subclasses of type ElectricPlane and OldCar each constructed with a different type of Motor. This can be accomplished by constructing the subclasses with a Vehicle factory method, while supplying the motor type. In cases like this the constructor may be hidden.
Allows for more readable code in cases where multiple constructors exist, each for a different reason.
For example if there are two constructors Vehicle(make:string, motor:number) and Vehicle(make:string, owner:string, license:number, purchased:date) a more readable construction of the classes would be to use Vehicle.CreateOwnership(make:string, owner:string, license:number, purchased: date) vs Vehicle.Create(make:string, motor:number)
Allows a class to defer instantiation to subclasses, and to prevent direct instantiation of an object of the parent class type.
For example, a Vehicle can be prevented from being instantiated directly since it has no constructor, and only subclasses like ElectricPlane or OldCar can be created by calling the Vehicle (static) factory method in the subclass constructor or initializer.

![Factory UML Representation](<https://upload.wikimedia.org/wikipedia/commons/4/43/W3sDesign_Factory_Method_Design_Pattern_UML.jpg>
"Facory")