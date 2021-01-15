# Facade pattern

```Analogous to a facade in architecture, a facade is an object that serves as a front-facing interface masking more complex underlying or structural code```

What problems can the Facade design pattern solve? 

To make a complex subsystem easier to use, a simple interface should be provided for a set of interfaces in the subsystem.

The dependencies on a subsystem should be minimized.

Clients that access a complex subsystem directly refer to (depend on) many different objects having different interfaces (tight coupling), which makes the clients hard to implement, change, test, and reuse.

What solution does the Facade design pattern describe?

Define a Facade ```object``` that

implements a simple interface in terms of (by delegating to) the interfaces in the subsystem and
may perform additional functionality before/after forwarding a request.

![UML class and sequence diagram](<https://upload.wikimedia.org/wikipedia/en/5/57/Example_of_Facade_design_pattern_in_UML.png>
"Facade")