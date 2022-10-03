# React Kata

Solution...

``` JavaScript

import React from 'react';

export const EggList = (props) => {
  
  return (
  <ul>
  {props.eggs.map((egg, index)=> {
    return <EasterEgg name = {egg} key={index}/>
  })}
  </ul>
  )
};

export const EasterEgg = ({name}) => {
  return <li>{name}</li>
};
```

[Regresar](/README.md)
