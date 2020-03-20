var capturar = ''

function enviar(){
    capturar = document.getElementById('nome').value;
    document.getElementById('nomeDigitado').innerHTML = ("olá, " + capturar + "!");
}


function op_frutas(){
    document.getElementById('p_frutas').style.display = 'block';
    document.getElementById('p_animais').style.display = 'none';
}

function op_animais(){
    document.getElementById('p_animais').style.display = 'block';
    document.getElementById('p_frutas').style.display = 'none';
}









