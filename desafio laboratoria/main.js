
var capturar = ''

function enviar(e){
    e.preventDefault();
    if (document.getElementById('nome').value){
    capturar = document.getElementById('nome').value;
    document.getElementById("nomeDigitado").style.display = "block"
    document.getElementById('nomeDigitado').innerHTML = ("olá, " + capturar + "!");
    document.getElementById('campo-da-pergunta').style.display = "none"
    document.getElementById('btn_perguntas').style.display = "block"
    }
}

function op_frutas(){
    document.getElementById('btn_perguntas').style.display = "none"
    document.getElementById('p_frutas').style.display = 'block';
    document.getElementById('p_animais').style.display = 'none';
    document.getElementById('check').style.display = "block";
    document.getElementById("duas_perguntas").style.display = "block"
}

function op_animais(){
    document.getElementById('btn_perguntas').style.display = "none"
    document.getElementById('p_animais').style.display = 'block';
    document.getElementById('p_frutas').style.display = 'none';
    document.getElementById('check').style.display = "block";
    document.getElementById('duas_perguntas').style.display = 'none';
    document.getElementById("duas_perguntas").style.display = "block"
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

    document.getElementById('resposta_correta').innerHTML = "Você acertou " + correct +" pergunta(s)";
    document.getElementById("after").style.visibility = "visible";
    document.getElementById('after').style.display = "block"
    document.getElementById('check').style.display = "none"
    document.getElementById('duas_perguntas').style.display = 'none';
    document.getElementById("btn_voltar").style.display = "block"
    document.getElementById("resposta_correta").style.display = "block"
}

function voltar(){
    document.getElementById("btn_voltar").style.display = "none"
   document.getElementById("campo-da-pergunta").style.display = "block"
   document.getElementById("resposta_correta").style.display = "none"
   document.getElementById("nomeDigitado").style.display = "none"

   document.getElementById("nome").value = ""
   document.getElementById("frutas").checked = false
   document.getElementById("animais").checked  = false
   document.getElementById("melancia").checked  = false
   document.getElementById("melancia2").checked  = false
   document.getElementById("morango").checked  = false
   document.getElementById("morango2").checked  = false
   document.getElementById("golias").checked  = false
   document.getElementById("golias2").checked  = false
   document.getElementById("polvo").checked  = false
   document.getElementById("polvo2").checked  = false
}