# Chain of Responsibility

```The chain-of-responsibility pattern is a design pattern consisting of a source of command objects and a series of processing objects. Each processing object contains logic that defines the types of command objects that it can handle; the rest are passed to the next processing object in the chain. A mechanism also exists for adding new processing objects to the end of this chain.```

The Chain of Responsibility design pattern solves problems like:

``Coupling the sender of a request to its receiver should be avoided.``

``It should be possible that more than one receiver can handle a request.``

![Chain of Responsibility UML representation](<https://upload.wikimedia.org/wikipedia/commons/6/6a/W3sDesign_Chain_of_Responsibility_Design_Pattern_UML.jpg>
"Chain of responsibility")
