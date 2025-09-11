function gerarInputs() {
  const quantidade = parseInt(document.getElementById("quantidade").value, 10);
  const container = document.getElementById("produtos");
  container.innerHTML = "";

  document.getElementById("resultado").classList.add("d-none");
  document.getElementById("resumo").classList.add("d-none");

  if (isNaN(quantidade) || quantidade <= 0) {
    container.innerHTML = `<div class="alert alert-warning">Digite uma quantidade válida.</div>`;
    return;
  }

  for (let i = 1; i <= quantidade; i++) {
    const div = document.createElement("div");
    div.classList.add("mb-2");

    const input = document.createElement("input");
    input.type = "number";
    input.min = "0";
    input.step = "0.01";
    input.placeholder = `Preço do produto ${i}`;
    input.classList.add("form-control");
    input.id = `produto-${i}`;

    div.appendChild(input);
    container.appendChild(div);
  }
}

function calcularTotal() {
  const quantidade = parseInt(document.getElementById("quantidade").value, 10);
  const resultado = document.getElementById("resultado");
  const resumo = document.getElementById("resumo");
  const lista = document.getElementById("lista-produtos");

  let total = 0;
  lista.innerHTML = "";

  for (let i = 1; i <= quantidade; i++) {
    const input = document.getElementById(`produto-${i}`);
    const valor = parseFloat(input?.value || 0);

    if (isNaN(valor) || valor < 0) {
      resultado.textContent = `Preço inválido no produto ${i}. Digite um número positivo.`;
      resultado.className = "alert alert-danger mt-3 text-center fw-bold";
      resultado.classList.remove("d-none");
      resumo.classList.add("d-none");
      return;
    }

    total += valor;

    // Adiciona item no resumo
    const li = document.createElement("li");
    li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
    li.innerHTML = `Produto ${i} <span class="badge bg-primary rounded-pill">R$ ${valor.toFixed(2)}</span>`;
    lista.appendChild(li);
  }

  // Exibe o total
  resultado.textContent = `Total da compra: R$ ${total.toFixed(2)}`;
  resultado.className = "alert alert-success mt-3 text-center fw-bold";
  resultado.classList.remove("d-none");

  // Exibe resumo
  resumo.classList.remove("d-none");
}
