/*Escreva um programa que receba como entrada o valor do saque realizado pelo cliente
de um banco e retorne quantas notas de cada valor serão necessárias para atender ao
saque com a menor quantidade de notas possível. Serão utilizadas notas de 100, 50, 20,
10, 5, 2 e 1 real.*/


let nota100 = 0
let nota50 = 0
let nota20 = 0
let nota10 = 0
let nota5 = 0
let nota2 = 0
let nota1 = 0
let valor = 257
//257

//1ª repetição: valor 257
//quantas notas de 100?
nota100+=2
// 2 notas de 100
//sobra quanto?
valor=valor-(nota100*100)
// 57

//2ª repetição: valor 57
//quantas notas de 100? 
// 0 
//sobra quanto?
// 57 
//quantas notas de 50?
nota50+=1
// 1
//quanto sobra?
valor=valor-(nota50*50)
// 7

//3ª repetição: 7 
//quantas notas de 100? 
// 0 
//quantas notas de 50?
// 0
//quantas notas de 20?
// 0
//quantas notas de 10?
// 0
//quantas notas de 5?
// 1
//quanto sobra? 
// 2