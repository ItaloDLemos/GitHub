// o E lógico testa a associação de duas expressões ou mais expressões. Se ambas forem verdadeiras, a expressão resulta verdadeira. Caso um ou mais deles sejam falsas, a expressão resulta falsa
// o OU lógico testa a associação de duas expressões ou mais expressões. Se qualquer uma delas for verdadeira, a expressão resulta verdadeira
// && = and
// || = or
let numero1 = 10 
// é divisível por 2 - true
// é divisível por 5 - true
// condição1 && condição2 = true
// condição1 || condição2 = true

let numero2 = 11
// não é divisível por 2 - false
// não é divisível por 5 - false
// condição1 && condição2 = false
// condição1 || condição2 = false

let numero3 = 15
// não é divisível por 2 - false
// é divisível por 5 - true
// condição1 && condição2 = false
// condição1 || condição2 = true

//verificar se é divisível por 2 e 5
if(numero1%2 == 0 && numero1%5 == 0){
    console.log('Divisível por 2 e 5')
}
else{
    console.log('Não é divisível por 2 e 5')
}

//verificar se é divisível por 2 ou 5
if(numero2%2 == 0 || numero2%5 == 0){
    console.log('Divisível por 2 ou 5')
}
else{
    console.log('Não é divisível por 2 ou 5')
}

// Atividade 1

function verificarAluguel() {
  const idade = parseInt(prompt("Digite sua idade:"));
  const habilitado = prompt("Você é habilitado? \n1 - sim\n2 - não");
  console.log(idade, habilitado);

  if (idade >= 18 && habilitado === "1") {
    alert("✅ O carro pode ser alugado.");
    console.log("✅ O carro pode ser alugado.");
  } else (idade < 18 || habilitado !== "2") {
    alert("❌ O carro não pode ser alugado.");
    console.log("❌ O carro não pode ser alugado.");
  }
}

verificarAluguel();