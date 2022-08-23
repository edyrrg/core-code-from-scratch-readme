# Week 04

## What's npm?

npm is the is the world's largest Software Library (Registry) </br>
npm is also a software Package Manager and Installer.

[link about npm](https://www.w3schools.com/whatis/whatis_npm.asp)

## What's package.json?

A package.json is a JSON file that exists at the root of a Javascript/Node project.</br>
It holds metadata relevant to the project and it is used for managing the project’s </br>
dependencies, scripts, version and a whole lot more.

[link about package.json](https://blog.ezekielekunola.com/understanding-the-package.json-file)

## What's npx?

npx es también una herramienta CLI cuyo propósito es facilitar </br>
la instalación y la gestión de las dependencias alojadas en el registro npm.

[link about npx vs. npm](https://www.freecodecamp.org/espanol/news/npm-vs-npx-cual-es-la-diferencia/)

## What's TypeScript?

TypeScript is a super set of JavaScript.

## Relation between Typescript and Javascript

TypeScript adds additional syntax to JavaScript to support a tighter integration </br>
with your editor. Catch errors early in your editor.

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
