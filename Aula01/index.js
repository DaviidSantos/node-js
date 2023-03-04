import PromptSync from "prompt-sync";
const prompt = PromptSync();

// Salário Funcionário
const salarioAtual = Number.parseFloat(
  prompt("Qual o Salário Atual do Funcionário? ")
);
const porcentagemDeAumento =
  1 + Number.parseFloat(prompt("Qual a Porcentagem de Aumento? ") / 100);

const salarioReajustado = salarioAtual * porcentagemDeAumento;
console.log(salarioReajustado);

//Habilitação
const anoDeNascimento = Number.parseInt(prompt("Ano de Nascimento: "));
const anoAtual = new Date();

if (anoAtual.getFullYear() - anoDeNascimento >= 18) {
  console.log("Já pode tirar a habilitação");
} else {
  console.log("Não pode tirar a habilitação");
}
