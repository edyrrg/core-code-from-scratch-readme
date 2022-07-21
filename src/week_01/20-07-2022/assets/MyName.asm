.data
	message: .asciiz "\My name is Edy Rojas"
.text
	main:
	li $v0, 4
	la $a0, message
	syscall
	