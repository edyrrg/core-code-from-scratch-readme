# Your date of birth in the matrix

## ¿Qué es el sistema binario?

En informática, el sistema binario __es un lenguaje que utiliza 2 dígitos binarios__, el 0 y el 1, donde cada símbolo constituye un bit, denominado en inglés como binary bit o bit binario. 8 bits constituyen un byte y cada byte contiene un caracter, letra o número.

Obtenido de [Significados](https://www.significados.com/sistema-binario/)

## Translate my date of birth into binary

### My birthday¿

05 / 10 / 1998

### Translate into binary

#### Day: 05

* 5/2 = 2 - R 1
* 2 / 2 = 1 - R 0
* 1 / 2 = 0 - R 1
  * R// 1 0 1

#### Month: 10

* 10 / 2 = 5 - R 0
* 5 / 2 = 2 - R 1
* 2 / 2 = 1 - R 0
* 1 / 2 = 0 - R 1
  * R// 1 0 1 0

#### Year: 1998

* 1998 / 2 = 999 - R 0
* 999 / 2 = 499 - R 1
* 499 / 2 = 249 - R 1
* 249 / 2 = 124 - R 1
* 124 / 2 = 62 - R 0
* 62 / 2 = 31 - R 0
* 31 / 2 = 15 - R 1
* 15 / 2 = 7 - R 1
* 7 / 2 = 3 - R 1
* 3 / 2 = 1 - R 1
* 1 / 2 = 0 R 1
  * R// 1 1 1 1 0 0 1 1 1 0

|My birthday in decimal|Translate into binary|
|:--------------------:|:-------------------:|
| 05 / 10 / 1998| 1 0 1 / 1 0 1 0 / 1 1 1 1 0 0 1 1 1 0|

[Source](https://www.youtube.com/watch?v=rsxT4FfRBaM)

# MIPS

1. Create a program that adds any two given numbers provided by the user.

```MIPS
.data
    numberOne: .asciiz "\nIngrese el primer numero: "
    numberTwo: .asciiz "\nIngrese el segundo numero: "
    result: .asciiz "\nEl resultado es: "
.text
    main:
        li $v0, 4
        la $a0, numberOne
        syscall

        li $v0, 5
        syscall

        move $t0, $v0

        li $v0, 4
        la $a0, numberTwo
        syscall

        li $v0, 5
        syscall

        move $t1, $v0

        add $t2, $t0, $t1

        li $v0, 4
        la $a0, result
        syscall

        li $v0, 1
        move $a0, $t2
        syscall
```

[Archivo .asm](/src/week_01/20-07-2022/assets/SumTwoNumbers.asm)

2. Create a program that displays your name.

```MIPS
.data
message: .asciiz "\What's your name?"
printHello: .asciiz "Hello "
userInput: .space 20

.text
main:
    li      $v0,    4
    la      $a0,    message
    syscall 

    li      $v0,    8
    la      $a0,    userInput
    li      $a1,    20
    syscall 

    li      $v0,    4
    la      $a0,    printHello
    syscall 

    li      $v0,    4
    la      $a0,    userImput
    syscall 

    li      $v0,    10
    syscall 
```

[Archivo .asm](/src/week_01/20-07-2022/assets/SumTwoNumbers.asm)

[Regresar](/README.md)
