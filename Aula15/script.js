// imprimir todos os números de 0 a 50
// let numero = 1
// while ( numero <=50 ) {
//     console.log(numero)
//     // atualizar a condição de parada
//     numero ++
// }








// let escolha = true

// // exiba uma mensagem com a pergunta 'deseja continuar vendo essa mensagem?'
// //pergunte se o usuário deseja continuar

// while (escolha){
//     console.log('executei a mensagem')
//     escolha = confirm('Deseja continuar vendo essa mensagem?')
//     console.log(escolha)
// }

// let senha = '123'
// let tentativas = 1
// let senhaDigitada = prompt('Digite a senha')



// enquanto a senha digitada for diferente da senha e a qtd tentativas for menor que 3 peça novamente a senha ao usuario

// while (senhaDigitada != senha && tentativas <= 3){
//     console.log('senha incorreta')
//     tentativas++
//     senhaDigitada = prompt('Digite a senha')
// }



// imprima e some todos os números do intervalo de 0 a 50

let iterador = 0 //numero que vai variar de 0 a 50
let acumulador = 0 // soma dos numeros do intervalo de 0 a 50
let fimIntervalo = 50

while (iterador <= fimIntervalo) {
    console.log(iterador)
    // somar o valor atual do iterador ao acumulador
    acumulador += iterador
    //atualização da condição para que o loop se repita
    iterador++    
}
