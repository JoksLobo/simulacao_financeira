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

// console.log(simularInvestimento(valorInicial, taxaMensal, meses));

function gerenciarDespesas(despesas) {
  let gastoFinal = 0;

  for (let despesa in despesas) {
    gastoFinal += despesas[despesa];
  }
  return gastoFinal;
}

// console.log(gerenciarDespesas(despesas));

function obterMesAtual() {
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const dataAtual = new Date();
  return meses[dataAtual.getMonth()];
}
// console.log(obterMesAtual());

function gerarRelatorio(
  investimentoInicial,
  taxaMensal,
  meses,
  despesa,
  metaInvestimento,
  metaOrcamento
) {
  const saldoInvestimento = simularInvestimento(
    investimentoInicial,
    taxaMensal,
    meses
  );

  const totalDespesas = gerenciarDespesas(despesas);

  const mesAtual = obterMesAtual();

  console.log("=== Relatório Financeiro ===");
  console.log(`Mês: ${mesAtual}`);
  console.log(`Saldo final do investimento: ${saldoInvestimento}`);
  console.log(`Total de despesas: ${totalDespesas}`);

  //orçamento
  const economia = metaOrcamento - totalDespesas;
  if (economia > 0) {
    console.log(`Parabéns você economizou: ${economia}`);
  } else {
    console.log(`Você excedeu seu orçamento em: ${Math.abs(economia)}`);
  }

  //investimento
  if (saldoInvestimento >= metaInvestimento) {
    console.log("Meta de investimento atingida!");
  } else {
    console.log("Você não atingiu a meta de investimento.");
  }

  //resumo das despesas
  console.log("=== Resumo das Despesas ===");
  for (const categoria in despesas) {
    console.log(
      `${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: ${
        despesas[categoria]
      }`
    );
  }
}

gerarRelatorio(
  valorInicial,
  taxaMensal,
  meses,
  despesas,
  metaInvestimento,
  metaOrcamento
);
