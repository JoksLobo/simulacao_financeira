const despesas = {
  alimentacao: 500,
  transporte: 150,
  aluguel: 1200,
  lazer: 200,
};

const valorInicial = 1000;
const taxaMensal = 1.5;
const meses = 12;
const metaInvestimento = 1500;
const metaOrcamento = 2000;

function simularInvestimento(valorInicial, taxaMensal, periodo) {
  let resultado = valorInicial;

  for (i = 1; i <= periodo; i++) {
    resultado += resultado * (taxaMensal / 100);
  }

  return resultado.toFixed(2);
}

console.log(simularInvestimento(valorInicial, taxaMensal, meses));

function gerenciarDespesas(despesas) {
  let gastoFinal = 0;

  for (let despesa in despesas) {
    gastoFinal += despesas[despesa];
  }
  return gastoFinal;
}

console.log(gerenciarDespesas(despesas));
