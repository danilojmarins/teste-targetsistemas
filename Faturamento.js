// Exercício 3 - Faturamento - Arquivos

const Faturamento = require('./data/dados.json');

const faturamentoDiasArray = [];
let somaFaturamento = 0;
let maiorFaturamento;
let menorFaturamento;
let mediaFaturamento;

for (let i = 0; i < Faturamento.length; i++) {
    if (Faturamento[i].valor != 0) {
        faturamentoDiasArray.push(Faturamento[i].valor);

        somaFaturamento = somaFaturamento + Faturamento[i].valor;
    }
}

maiorFaturamento = faturamentoDiasArray[0];
menorFaturamento = faturamentoDiasArray[0];
mediaFaturamento = somaFaturamento / faturamentoDiasArray.length;
let diasAcimaDaMedia = 0;

for (let i = 0; i < faturamentoDiasArray.length; i++) {
    
    if (maiorFaturamento < faturamentoDiasArray[i]) {
        maiorFaturamento = faturamentoDiasArray[i];
    }

    if (menorFaturamento > faturamentoDiasArray[i]) {
        menorFaturamento = faturamentoDiasArray[i];
    }

    if (faturamentoDiasArray[i] > mediaFaturamento) {
        diasAcimaDaMedia = diasAcimaDaMedia + 1;
    }

}

console.log(`Menor Faturamento: ${menorFaturamento} \nMaior Faturamento: ${maiorFaturamento} \nQuantidade de dias com faturamento acima da média: ${diasAcimaDaMedia}`);