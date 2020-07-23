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
    So basiclly node is a C++ progam with V8 embedded inside and additonal other features embedded (such as http, tcp, IO, ... support) -  this is how actually node suitable to be a server.

Side note
:   Note that node does not support DOM manipulation.
:   The DOM is provided by the browser and not by the javascript engine. (So basiclly Browser = DOM + Javascript engine + other things)


### Events and Event Emitter
    In node we will face two types of events:
    The first one is System events - events that come from the c++ part of node and those events served to use by the libuv library.
    Those events include events like 'finished reading file' ,'received data from the internet' and etc

    The second type of events is Custom Events, this type comes from the javascript part of node.
    It is called the Event Emitter.
    Actually when we will recivie an event from libuv, it usally wil be wrapped by an event emitter.
    
    The event emitter is just a module that allows us to subscribe to events (by the event type name) with a function (listener)  and the event emitter will invoke the function when the event occurres. (of course that the part of code that doing the event needs to tell the event emitter that this was occurred, by using the emit('the name of the event') function)

    For those who familiar with the Observer design pattern, this is it (As far as I see it).

