const caixaPrincipal = document.querySelector("caixa-principal")
const caixaPergunta = document.querySelector("caixa-perguntas")
const caixaAlternativas = document.querySelector("caixa-alternativas")
const caixaResultado = document.querySelector("caixa-resultado")
const textoResultado = document.querySelector("texto-resultado")
const perguntas = [
    {
        enunciado: "Pergunta 1",
        alternativas: [
            "alternativa 01",
            "alternativa 02"
        ]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: [
            "alternativa 03",
            "alternativa 04"
        ]
    },
    {
        enunciado: "Pergunta 3",
        alternativas: [
            "alternativa 05",
            "alternativa 06"
        ]
    },
    {
        enunciado: "Pergunta 4",
        alternativas: [
            "alternativa 07",
            "alternativa 08"
        ]
    }
]

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}
mostraPergunta();
