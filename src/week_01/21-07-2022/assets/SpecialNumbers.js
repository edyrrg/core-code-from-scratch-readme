// Numeros pares con for
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// Numeros pares con while
let contador = 0;

while(contador <= 100){
    if (contador % 2 == 0) {
        console.log("Realizado con while: " + contador);
    }
    contador++;
}

// Numeros pares con do...while
let contador2 = 0;

do {
    if (contador2 % 2 == 0) {
        console.log("Realizado con do...while: " + contador2);
    }
    contador2++;
} while(contador2 <= 100);