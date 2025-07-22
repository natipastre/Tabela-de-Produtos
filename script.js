function formatarReal(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function somarTotal() {
  let totalValor = 0;
  let totalQuantidade = 0;
  const linhas = document.querySelectorAll("tbody tr");

  linhas.forEach((linha) => {
    let valorTexto = linha.lastElementChild.textContent.trim();
    valorTexto = valorTexto.replace("R$ ", "").replace(/\./g, "").replace(",", ".");
    const valorNum = parseFloat(valorTexto);
    if (!isNaN(valorNum)) totalValor += valorNum;

    let qtdTexto = linha.children[2].textContent.trim();
    const qtdNum = parseInt(qtdTexto);
    if (!isNaN(qtdNum)) totalQuantidade += qtdNum;
  });

  // Atualiza a div de resumo
  const resumoDiv = document.getElementById('resumo');
  resumoDiv.innerHTML = `
    <p><strong>Quantidade total de produtos:</strong> ${totalQuantidade}</p>
    <p><strong>Valor total dos produtos:</strong> ${formatarReal(totalValor)}</p>
  `;
}

document.addEventListener("DOMContentLoaded", somarTotal);
