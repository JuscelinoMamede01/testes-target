const axios = require("axios");

const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
});

async function analisarFaturamento() {
  try {
    const response = await api.get("/faturamentos");
    const faturamento = response.data;

    const diasComFaturamento = faturamento.filter((dia) => dia.valor > 0);

    if (diasComFaturamento.length === 0) {
      console.log("Não há dados de faturamento disponíveis.");
      return;
    }

    const menorValor = Math.min(...diasComFaturamento.map((dia) => dia.valor));

    const maiorValor = Math.max(...diasComFaturamento.map((dia) => dia.valor));

    const mediaMensal =
      diasComFaturamento.reduce((sum, dia) => sum + dia.valor, 0) /
      diasComFaturamento.length;

    const diasAcimaDaMedia = diasComFaturamento.filter(
      (dia) => dia.valor > mediaMensal
    ).length;

    const formatarMoeda = (valor) => `R$ ${valor.toFixed(2)}`;

    console.log(`Menor valor de faturamento: ${formatarMoeda(menorValor)}`);
    console.log(`Maior valor de faturamento: ${formatarMoeda(maiorValor)}`);
    console.log(`Média mensal de faturamento: ${formatarMoeda(mediaMensal)}`);
    console.log(
      `Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`
    );

    return {
      menorValor,
      maiorValor,
      mediaMensal,
      diasAcimaDaMedia,
    };
  } catch (error) {
    console.error("Erro ao obter dados do servidor:", error.message);
    throw error;
  }
}

analisarFaturamento();
