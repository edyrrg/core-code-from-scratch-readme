//get number from string
function getNumberFromString(s) {
    /*Por medio de expresiones regulares 
    hacemo match con lo que es de nuestro interes*/
    const regex = /[a-z\s:?!;,]/g
    return parseInt(s.replace(regex, ''))
}

console.log(getNumberFromString('hello3 fasdf5 adfaf5 adfaf4: 9'))

function stringClean(s){
    // Function will return the cleaned string
    const regex = /[\d]/g
    return s.replace(regex, '')
}

console.log(stringClean('(E3at m2e2!!)'))