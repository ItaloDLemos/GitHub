let nome = "João"; // string com aspas duplas
let saudacao = 'Olá'; // string com aspas simples
let templateLiteral = `Olá, ${nome}`; // template string
// função que retorna o tipo do dado armazenado na variável
typeof(saudacao)
let retorno = typeof(saudacao) // armazena o retorno da função
console.log(nome)
console.log(typeof(nome)) // imprime no console o retorno da função


// number
let numeroInt = 20
let numeroDecimal = 20.5
console.log(typeof(numeroInt)) //number
console.log(typeof(numeroDecimal)) //number

let numeroString = "10"
console.log(typeof(numero)) //string

// let usuarioNumero = prompt('Digite um número')
// console.log(usuarioNumero)
// console.log(typeof(usuarioNumero))

console.log( numeroInt + numeroDecimal)
console.log( numeroInt - numeroString)
console.log( numeroInt + '10')
console.log("1"+1) // concatena resultado 11

// função para converter de string para number
let usuarioNumero = prompt('Digite um número') // string
console.log(typeof(usuarioNumero)) // string
let numeroConvertido = Number(usuarioNumero) // number
//parseInt ou parseFloat - caso queira em um formato específico

// boolean
let verdadeiro = true
let falso = false

// null
let entradaEstacionamento = '17:30'
let saidaEstacionamento = null // valor nulo intencional

//undefined
let variavelDefinida 
//variavel foi definida mas não foi atribuida nenhum valor

//NaN
//produto de uma conversão de string para number que resulta em um número inválido
let naoSouUmNumero = Number('oi')
