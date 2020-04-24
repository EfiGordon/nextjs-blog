---
title: 'React Two Way Binding'
date: '2020-04-23'
---

Note: React hooks supported in version > 16.

So lets say we have two input elements:

```
<input type="text" id="title" />
<input type="number" id="amount" />
```
And we want to update its value on each change, we will use React Hooks for that purpose.
The most popular hook in React is `useState`, (React hooks will always look in the syntax of `useSomething`)

we can use this hook by importing this
```
import React, { useState } from 'react';
```

First we can use `useState` to initialize the state:

```
  const initialState = {
    title: '',
    amount: ''
  }
  const inputState =  useState(initialState);
```

the `useState` method returns us an array with two elements:

1. Current state
2. A function which allows us to update the state

So the **first way** in the two-way binding is to add the value to the input elements:

```
<input type="text" id="title" value= {inputState[0].title}/>
<input type="number" id="amount" value= {inputState[0].amount}/>
```

The **second way** is to update the value on change, so we will add the `onChange` property:

```
            <input type="text" id="title" value={inputState[0].title} onChange={
              (event) => {
                inputState[1]({
                  ...inputState[0],
                  title: event.target.value
                })
              }
            } />
            
            <input type="number" id="amount" value={inputState[0].amount} onChange={
              (event) => {
                inputState[1]({
                  ...inputState[0],
                  amount: event.target.value
                })
              }
            } />
```

Note that we added the old state properties `...inputState[0]` because `useState` replaces the old state with the new one we passing it to him, and we don't want to lose any data.


That's all - we have **two-way binding**.
Thank you for reading and i hope you enjoyed my explanation.