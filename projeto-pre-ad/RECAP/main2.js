const page1 = document.getElementById('page1')
const page2 = document.getElementById('page2')
const page3 = document.getElementById('page3')
const nomeJogador = document.getElementById('nome');
const nomeDigitado = document.getElementById('nomeDigitado')
const perguntas = document.getElementById('duas_perguntas')
const btn_perguntas = document.getElementById('btn_perguntas')
const p_frutas = document.getElementById('p_frutas')
const p_animais = document.getElementById('p_animais')
const opcaoJogoAnimais = document.getElementById('animais')
const opcaoJogoFrutas = document.getElementById('frutas')
const resposta_correta = document.getElementById('resposta_correta')
const option1 = document.getElementById("frutas")
const option2 = document.getElementById("animais")
const option3 = document.getElementById("melancia")
const option4 = document.getElementById("melancia2")
const option5 = document.getElementById("morango")
const option6 = document.getElementById("morango2")
const option7 = document.getElementById("golias")
const option8 = document.getElementById("golias2")
const option9 = document.getElementById("polvo")
const option10 = document.getElementById("polvo2")

initializeGame()

function enviar(e) {
  e.preventDefault();
  if (nomeJogador.value) {
    page1.style.display = 'none'
    page2.style.display = 'block'
    nomeDigitado.innerHTML = ("olá, " + nomeJogador.value + "!");
  }
}

function escolherJogo(opcaoEscolhida) {
  perguntas.style.display = 'block'
  btn_perguntas.style.display = 'none'

  if (opcaoEscolhida == 'frutas') {

    p_frutas.style.display = 'block'

    p_animais.style.display = 'none'
  }
  if (opcaoEscolhida == 'animais') {

    p_animais.style.display = 'block'
    p_frutas.style.display = 'none'
  }
}


function check() {

  let pergunta1 = document.quiz.opcao.value;
  let pergunta2 = document.quiz.opcao2.value;
  let pergunta3 = document.quiz.opcao3.value;
  let pergunta4 = document.quiz.opcao4.value;
  let correct = 0;

  if (pergunta1 == "Melancia") {
    correct++;

  }
  if (pergunta2 == 'Morango') {
    correct++
  }
  if (pergunta3 == 'Golias') {
    correct++
  }
  if (pergunta4 == 'Polvo') {
    correct++
  }

  page2.style.display = 'none'
  page3.style.display = 'block'
  resposta_correta.innerHTML = "Você acertou " + correct + " pergunta(s)";
}

function initializeGame() {
  page1.style.display = 'block'
  page2.style.display = 'none'
  page3.style.display = 'none'
  perguntas.style.display = 'none'
  btn_perguntas.style.display = 'block'
  p_frutas.style.display = 'none'
  p_animais.style.display = 'none'
  nomeJogador.value = ''
  option1.checked = false
  option2.checked = false
  option3.checked = false
  option4.checked = false
  option5.checked = false
  option6.checked = false
  option7.checked = false
  option8.checked = false
  option9.checked = false
  option10.checked = false
}


