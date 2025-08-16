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
    console.log(x,y)

if(x > y){ //false
    console.log('x maior que y')
}
// testar as outras opções
else if (x<y){ //false
    console.log('x menor que y')
}
else if (x==y){ //true
    console.log('x igual a y')
}
else{ 
    console.log('x ou y não é numérico')
}

// Atividade 2
const cursos = {
  1: "Desenvolvimento Full Stack",
  2: "Marketing Digital",
  3: "Análise de Dados"
};

const opcao = prompt("Escolha uma opção de curso:\n1 - Desenvolvimento Full Stack\n2 - Marketing Digital\n3 - Análise de Dados");

if (cursos[opcao]) {
  alert(`Você escolheu o curso de ${cursos[opcao]}. A coordenação entrará em contato com você em breve.`);
} else {
  alert("Você não digitou uma opção válida, entre em contato com o setor de vendas.");
}

// Solução da aula
let curso = prompt("Escolha uma opção de curso:\n1 - Desenvolvimento Full Stack\n2 - Marketing Digital\n3 - Análise de Dados");

if (curso==1) {
    alert("Você escolheu Desenvolvimento Full Stack. A coordenação entrará em contato com você em breve.");
}
else if (curso==2) {
    alert("Você escolheu Marketing Digital. A coordenação entrará em contato com você em breve.");
}
else if (curso==3) {
    alert("Você escolheu Análise de Dados. A coordenação entrará em contato com você em breve.");
}
else {
    alert("Você não digitou uma opção válida, entre em contato com o setor de vendas.");
}