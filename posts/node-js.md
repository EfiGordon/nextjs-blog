---
title: 'Node.js & Javacript Consepts'
date: '2020-07-23'
---

## Those are my notes from [Learn and Undertand NodeJS course](https://www.udemy.com/course/understand-nodejs/)
---

### Javascript Engine & Node Core

As all programing languages, javascript as well compiled eventually to a machine code.
How is this done? With the support of a javascript engine, for example V8.
V8 is a a javascript engine that written in C++ and developed by Google and it follows the Ecmascript standard.
So basiclly node is a C++ progam with V8 embedded inside and additonal other features embedded (such as http, tcp, IO, ... support).
This is how actually node suitable to be a server.

Side note
```
Note that Node does not support DOM manipulation.
The DOM is provided by the browser and not by the javascript engine. (So basiclly Browser = DOM + Javascript engine + other things)
```
---------
### Events and Event Emitter

In node we will face two types of events:
The first one is System events - events that come from the c++ part of node and those events served to use by the libuv library.
Those events include events like 'finished reading file' ,'received data from the internet' and etc

The second type of events is Custom Events, this type comes from the javascript part of node.
It is called the Event Emitter.
Actually when we will recivie an event from libuv, it usally wil be wrapped by an event emitter.
    
The event emitter is just a module that allows us to subscribe to events (by the event type name) with a function (listener) 
and the event emitter will invoke the function when the event occurres. 
Of course that the part of code that doing the event needs to tell the event emitter that this was occurred,
by using the emit('the name of the event') function)

For those who familiar with the Observer design pattern, this is it (As far as I see it).

Lets see an example:
---------
```
const EventEmiter = require('events');

class Drink extends EventEmiter{
  constructor(drinkName) {
    super();
    this.drinkName = drinkName;
    this.counter = 0;
  }

  drink() {
    this.counter++;
    console.log(`Drink my ${this.counter}th glass of ${this.drinkName}`);
    this.emit('drink', {
      drinkName: this.drinkName,
      count: this.counter
    });
  }
}

const carlsberg = new Drink('Carlsberg');

carlsberg.on('drink', (data) => {
  if(data.count >= 3) {
    console.log('Whhow somebody here is drunk');
  }
})

carlsberg.drink();
carlsberg.drink();
carlsberg.drink();

```

And the result is:
```
Drink my 1th glass of Carlsberg
Drink my 2th glass of Carlsberg
Drink my 3th glass of Carlsberg
Whhow somebody here is drunk
```

---------
### Sync? Async?
OK, so as we mentioned before Node.js is consist of javascript engine (V8) and of several other parts. 
The *V8* part is synchronous - **JS is synchronous language**, but it has the event loop.
The other part of Node - *libuv, that connected to the OS* is Async, so the answer is that **NodeJS is asynchrnous**.

So due to libuv abilities to be async, when we deal with it we send a callback to it.
this callback will run when the task will be finished.

