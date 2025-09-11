// Alternar modo escuro
const toggleDark = document.getElementById("toggleDark");
toggleDark.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
  document.querySelector(".card").classList.toggle("dark-mode");
});

// Gerar tabuada
document.getElementById("formTabuada").addEventListener("submit", function(e) {
  e.preventDefault();

  const numero = parseInt(document.getElementById("numero").value);
  const limite = parseInt(document.getElementById("limite").value);
  const resultadoDiv = document.getElementById("resultado");
  const btnDownload = document.getElementById("btnDownload");
  const btnImprimir = document.getElementById("btnImprimir");

  resultadoDiv.innerHTML = "";
  btnDownload.disabled = true;
  btnImprimir.disabled = true;

  if (isNaN(numero) || isNaN(limite) || limite <= 0) {
    resultadoDiv.innerHTML = "<div class='alert alert-danger'>Digite valores válidos!</div>";
    return;
  }

  let conteudo = `<h5 class="text-center mb-3">Tabuada do ${numero} até ${limite}</h5>`;

  for (let i = 1; i <= limite; i++) {
    conteudo += `<div class="linha">${numero} x ${i} = <strong>${numero * i}</strong></div>`;
  }

  resultadoDiv.innerHTML = conteudo;
  btnDownload.disabled = false;
  btnImprimir.disabled = false;
});

// Baixar PDF com efeito zebra
document.getElementById("btnDownload").addEventListener("click", function() {
  const numero = parseInt(document.getElementById("numero").value);
  const limite = parseInt(document.getElementById("limite").value);
  if (!numero || !limite) return;

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.setFontSize(16);
  doc.text(`Tabuada do ${numero} até ${limite}`, 20, 20);
  doc.setFontSize(12);

  let y = 35;
  for (let i = 1; i <= limite; i++) {
    if (i % 2 === 0) { doc.setFillColor(240,240,240); } 
    else { doc.setFillColor(224,224,224); }

    doc.rect(15, y-6, 180, 8, 'F'); 
    doc.text(`${numero} x ${i} = ${numero * i}`, 20, y);
    y += 10;
    if (y > 280) { doc.addPage(); y = 20; }
  }

  doc.save(`tabuada_${numero}.pdf`);
});

// Visualização e impressão via modal
document.getElementById("btnImprimir").addEventListener("click", function() {
  const previewContent = document.getElementById("previewContent");
  const resultadoDiv = document.getElementById("resultado");

  previewContent.innerHTML = resultadoDiv.innerHTML;
  const modal = new bootstrap.Modal(document.getElementById("previewModal"));
  modal.show();

  document.getElementById("btnPrintModal").onclick = function() {
    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.write('<html><head><title>Tabuada</title>');
    printWindow.document.write('<style>body{font-family:Arial,sans-serif;font-size:14pt;}');
    printWindow.document.write('.linha{border:1px solid #000;padding:6px;margin-bottom:5px;border-radius:0;}');
    printWindow.document.write('</style></head><body>');
    printWindow.document.write(previewContent.innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };
});
