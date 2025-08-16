// aplicar if e else para avaliação de paridade dos números

let n1 = 'dois'

// n1/2 = 5.5

// (n1%2 = 1) != 0 ---> impar

/* if(condição){
    executa esse bloco de código caso a condição seja verdadeira
}
else{
    executa esse bloco de código caso a condição seja falsa
}*/

// imprimir par ou impar no console para o número da váriável n1

if(n1%2 == 0){
    console.log('par')
}
else{
    console.log('impar')
}


//-------------------------
// testando condições com mais de 2 possibilidades

let x = Number(prompt('Digite um número'))
let y = Number(prompt('Digite outro número'))


if(x > y){ //false
    console.log('x maior que y')
}
// testar as outras opções
else if (x<y){ //true
    console.log('x menor que y')
}
else if (x==y){ //false
    console.log('x igual a y')
}
else{
    console.log('x ou y não é numérico')
}