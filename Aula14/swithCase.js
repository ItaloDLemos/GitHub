let turno = prompt("Digite o turno \n1 - Manha, \n2 - Tarde, \n3 - Noite");
console.log(turno);

switch (turno) {
    case '3':
        alert('Boa noite');
        console.log('Boa noite')
        break;
    case '2':
        alert('Boa tarde');
        console.log('Boa tarde')
        break;
    case '1':
        alert('Bom dia');
        console.log('Bom dia')
        break;
    default:
        alert('Turno desconhecido')
        console.log('Turno desconhecido')
        break;
}

let numero = parseFloat(prompt("Digite um número:"));

if (isNaN(numero) || numero < 0) {
    console.log("Entrada inválida!");
    alert("Entrada inválida!");
} else if (numero > 0 && numero % 2 === 0) {
    // Número positivo e par
    console.log("Raiz quadrada:", Math.sqrt(numero));
    alert(`O número ${numero} é positivo e par. A raiz quadrada dele é ${Math.sqrt(numero)}`);
} else if (numero > 0 && numero % 2 !== 0) {
    // Número positivo e ímpar
    console.log("Número elevado ao cubo:", Math.pow(numero, 3));
    alert(`O número ${numero} é positivo e ímpar. O número ao cubo dele é ${Math.pow(numero, 3)}`);
}

let valorEtiqueta = parseFloat(prompt("Digite o valor da peça:"));
let corEtiqueta = prompt("Digite a cor da etiqueta: \n1 - Vermelho, \n2 - Verde, \n3 - Amarelo").toLowerCase();
let valorFinal;
console.log(valorEtiqueta, corEtiqueta);

switch(corEtiqueta) {
    case "1":
        valorFinal = valorEtiqueta * 0.7; // 30% de desconto
        break;
    case "2":
        valorFinal = valorEtiqueta * 0.85; // 15% de desconto
        break;
    case "3":
        valorFinal = valorEtiqueta * 0.95; // 5% de desconto
        break;
    default:
        valorFinal = valorEtiqueta; // Sem desconto
}

console.log("Valor final da peça: R$", valorFinal.toFixed(2));
alert("Valor final da peça: R$" + valorFinal.toFixed(2));