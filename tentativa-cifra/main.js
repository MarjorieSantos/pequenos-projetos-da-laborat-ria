let word = prompt("Digite a palavra que deseja criptografar");  
let option = prompt("Escolha uma das opções: \n 1: Criptografar \n 2: Descriptografar");

if (option == "1") {
    cipher(word)   
} else if (option == "2") {
    decipher(word)
}

function cipher(palavra) {  
    let novaPalavra = "";
    let palavraMaiuscula = palavra.toUpperCase();
    for (var contador = 0; contador < palavraMaiuscula.length; contador++) {
        let charCodeLetraAtual = palavraMaiuscula[contador].charCodeAt(); 
        let novoCharCode = ((charCodeLetraAtual - 65 + 7) % 26) + 65;
        let novaLetra = String.fromCharCode(novoCharCode); 

        novaPalavra = novaPalavra + novaLetra
        
    }
    alert(novaPalavra)
}

function decipher(palavra) {
    let novaPalavra = ""
    let palavraMaiuscula = palavra.toUpperCase();
    for (var contador = 0; contador < palavraMaiuscula.length; contador++) { 
        let charCodeLetraAtual = palavraMaiuscula[contador].charCodeAt(); 
        let novoCharCode = ((charCodeLetraAtual - 65 - 7) % 26) + 65; 
        let novaLetra = String.fromCharCode(novoCharCode); 

        novaPalavra = novaPalavra + novaLetra

    }
        alert(novaPalavra)
}