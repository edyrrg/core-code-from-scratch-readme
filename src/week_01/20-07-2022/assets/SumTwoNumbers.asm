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
	
	
	