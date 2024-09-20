function inverterString(frase) {
  let fraseInvertida = "";
  for (let i = frase.length - 1; i >= 0; i--) {
    fraseInvertida += frase[i];
  }
  return fraseInvertida;
}

// Exemplo de uso:
const frase = "Teste de JavaScript";
const fraseinvertida = inverterString(frase);
console.log(fraseinvertida);
