/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;*/

function fibonacci() {
  let termo = parseInt(prompt("Digite seu número:"));
  let penultimo = 0,
    ultimo = 1;
  let numero = 0;

  if (termo === 0 || termo === 1) {
    console.log(`${termo} pertence à sequência de Fibonacci.`);
    return;
  }

  while (numero < termo) {
    numero = penultimo + ultimo;
    penultimo = ultimo;
    ultimo = numero;
  }

  if (numero === termo) {
    console.log(`${termo} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`${termo} não pertence à sequência de Fibonacci.`);
  }
}

fibonacci();
