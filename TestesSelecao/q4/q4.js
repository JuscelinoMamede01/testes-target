const faturamentoPorEstado = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

let valorTotal = 0;
for (let estado in faturamentoPorEstado) {
  valorTotal += faturamentoPorEstado[estado];
}

function arredondar(numero) {
  return Number(numero.toFixed(2));
}

console.log("Percentual de representação por estado:");
for (let estado in faturamentoPorEstado) {
  let percentual = (faturamentoPorEstado[estado] / valorTotal) * 100;
  console.log(estado + ": " + arredondar(percentual) + "%");
}

let somaPercentuais = 0;
for (let estado in faturamentoPorEstado) {
  let percentual = (faturamentoPorEstado[estado] / valorTotal) * 100;
  somaPercentuais += percentual;
}
console.log("\nSoma dos percentuais: " + arredondar(somaPercentuais) + "%");
