let n = Number(prompt('Digite um número'))

if(n>0 && n%2 == 0){
    console.log(`O número ${n} informado é maior que 0 e par. A raiz quadrada dele é ${Math.sqrt(n)}`)
}
else if (n>0 && n%2 == 1){
    console.log(`O número ${n} informado é maior que 0 e impar. O número ao cubo dele é ${n**3}`) // n*n*n
}
else if (numero < 0 || isNaN(n)){
    console.log('A entrada do usuário é inválida')
}


let corEtiqueta = prompt('Digite o número da cor da etiqueta: \n 1) vermelho \n 2) verde \n 3) amarelo')
let valorProduto = Number(prompt('Digite o valor do produto'))
let valorFinal 

switch(corEtiqueta){
    case '1':
        valorFinal = valorProduto * (1 - 0.3)
        console.log(`O valor do produto com desconto de 30% para etiqueta vermelha é ${valorFinal}`)
        break
    case '2':
        valorFinal = valorProduto * (1 - 0.15)
        console.log(`O valor do produto com desconto de 15% para etiqueta verde é ${valorFinal}`)
        break
    case '3':
        valorFinal = valorProduto * (1 - 0.05)
        console.log(`O valor do produto com desconto de 5% para etiqueta amarela é ${valorFinal}`)
        break
    default:
        valorFinal = valorProduto
        console.log(`Cor de etiqueta não listada na tabela de descontos. O valor do produto sem desconto é ${valorFinal}`)
        break
}