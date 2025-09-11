// Para rodar: instale o prompt-sync -> npm install prompt-sync
// const prompt = require("prompt-sync")();

function main() {
  try {
    const quantidade = parseInt(prompt("Quantos produtos você vai comprar? "), 10);

    if (isNaN(quantidade) || quantidade <= 0) {
      alert("A quantidade precisa ser um número maior que zero.");
      return;
    }

    let total = 0;

    for (let i = 1; i <= quantidade; i++) {
      while (true) {
        const entrada = prompt(`Digite o preço do produto ${i}: R$ `);
        const preco = parseFloat(entrada.replace(",", ".")); // aceita vírgula ou ponto

        if (isNaN(preco) || preco < 0) {
          console.log("Preço inválido. Digite um número positivo.");
        } else {
          total += preco;
          break;
        }
      }
    }
    
    alert(`\nTotal da compra: R$ ${total.toFixed(2)}`);
    console.log(`\nTotal da compra: R$ ${total.toFixed(2)}`);
  } catch (error) {
    console.log("Erro inesperado:", error.message);
    alert("Erro inesperado:", error.message);
  }
}

main();
