let nome = prompt("Digite seu nome:");
let idade = Number(prompt("Digite sua idade:"));
let cidade = prompt("Digite sua cidade:");

console.log(nome);
console.log(idade);
console.log(cidade);

alert("Sua cidade é " + cidade);
alert(`Sua cidade é ${cidade}, seu nome é ${nome}`);    // template string


idade=1000; // reatribuição
console.log(idade);