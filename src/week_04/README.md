# Week 04

## not mandatory

Para esta semana resolvi algunos katas extras que no eran obligatorios para el __README__

El codigo y el archivo js los encuentran enseguida,

``` JS
function getNumberFromString(s) {
    /*Por medio de expresiones regulares 
    hacemo match con lo que es de nuestro interes*/
    const regex = /[a-z\s:?!;,]/g
    return parseInt(s.replace(regex, ''))
}

function stringClean(s){
    // Function will return the cleaned string
    const regex = /[\d]/g
    return s.replace(regex, '')
}
```

[katas.js](/src/week_04/katas.js)

[Regresar](/README.md)
