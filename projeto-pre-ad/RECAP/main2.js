var page1 = document.getElementById('page1')
var page2 = document.getElementById('page2')
var page3 = document.getElementById('page3')
var nomeJogador = document.getElementById('nome');
var nomeDigitado =  document.getElementById('nomeDigitado')
var perguntas = document.getElementById('duas_perguntas')
var btn_perguntas = document.getElementById('btn_perguntas')
var p_frutas = document.getElementById('p_frutas')
var p_animais = document.getElementById('p_animais')
var opcaoJogoAnimais = document.getElementById('animais')
var opcaoJogoFrutas = document.getElementById('frutas')
var resposta_correta = document.getElementById('resposta_correta')
var option1 = document.getElementById("frutas")
var option2 = document.getElementById("animais")
var option3 = document.getElementById("melancia")
var option4 = document.getElementById("melancia2")
var option5 = document.getElementById("morango")
var option6 = document.getElementById("morango2")
var option7 = document.getElementById("golias")
var option8 = document.getElementById("golias2")
var option9 = document.getElementById("polvo")
var option10 = document.getElementById("polvo2")

initializeGame()

function enviar(e){
    e.preventDefault();
    if (nomeJogador.value){
        page1.style.display = 'none'
        page2.style.display = 'block'
        nomeDigitado.innerHTML = ("olá, " + nomeJogador.value + "!");
    }
}

function escolherJogo(opcaoEscolhida){
    perguntas.style.display ='block'
    btn_perguntas.style.display = 'none'

    if(opcaoEscolhida == 'frutas'){

        p_frutas.style.display = 'block'
        
        p_animais.style.display = 'none'
    }
    if(opcaoEscolhida == 'animais'){

        p_animais.style.display = 'block'
        p_frutas.style.display = 'none'
    }
}


function check(){
    
    var pergunta1 = document.quiz.opcao.value;
    var pergunta2 = document.quiz.opcao2.value;
    var pergunta3 = document.quiz.opcao3.value;
    var pergunta4 = document.quiz.opcao4.value;
    var correct = 0;

    if (pergunta1 == "Melancia"){
        correct++; 
   
    }
    if (pergunta2 == 'Morango'){
        correct++
    }
    if (pergunta3 == 'Golias'){
        correct++
    }
    if (pergunta4 == 'Polvo'){
        correct++
    }

    page2.style.display = 'none'
    page3.style.display = 'block'
    resposta_correta.innerHTML = "Você acertou " + correct +" pergunta(s)";
}

function initializeGame(){
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


