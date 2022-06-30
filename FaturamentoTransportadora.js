// Exercício 4 - Faturamento Transportadora

const FaturamentoMensal = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
}

const SP = FaturamentoMensal.SP;
const RJ = FaturamentoMensal.RJ;
const MG = FaturamentoMensal.MG;
const ES = FaturamentoMensal.ES;
const Outros = FaturamentoMensal.Outros;

const FaturamentoMensalTotal = SP + RJ + MG + ES + Outros;

const PorCentoSP = (SP / FaturamentoMensalTotal) * 100;
const PorCentoRJ = (RJ / FaturamentoMensalTotal) * 100;
const PorCentoMG = (MG / FaturamentoMensalTotal) * 100;
const PorCentoES = (ES / FaturamentoMensalTotal) * 100;
const PorCentoOutros = (Outros / FaturamentoMensalTotal) * 100;

console.log("Percentual de SP em relação ao Total: " + PorCentoSP.toFixed(2) + " %");
console.log("Percentual de RJ em relação ao Total: " + PorCentoRJ.toFixed(2) + " %");
console.log("Percentual de MG em relação ao Total: " + PorCentoMG.toFixed(2) + " %");
console.log("Percentual de ES em relação ao Total: " + PorCentoES.toFixed(2) + " %");
console.log("Percentual de Outros estados em relação ao Total: " + PorCentoOutros.toFixed(2) + " %");