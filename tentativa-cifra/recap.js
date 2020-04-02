let word = prompt("Digite a palavra desejada")
let option = prompt("Escolha a opção desejada \n 1: Criptografar \n 2: Descriptografar")

if (option == "1"){
    criptografar(word)

}else if(option == "2"){
    descriptografar(word)
}

function criptografar(palavra){
    let armazenar = "";
    for(contar = 0; contar < palavra.length; contar++){
        let maiuscula = palavra.toUpperCase();
        let palavraNova = maiuscula[contar].charCodeAt();
        let palavraCharCode = ((palavraNova - 65 + 7)% 26) + 65;
        let mostrar = String.fromCharCode(palavraCharCode);
        armazenar = armazenar + mostrar;
    }
    alert(armazenar)
}

function descriptografar(palavra){
    let armazenar = "";
    for(contar = 0; contar < palavra.length; contar++){
        let palavraNova = palavra[contar].charCodeAt();
        let maiuscula = palavra[contar].toUpperCase();
        let palavraCharCode = ((palavraNova - 65 - 7)% 26) + 65;
        let mostrar = String.fromCharCode(palavraCharCode);
        armazenar = armazenar + mostrar;
    }
    alert(armazenar)
}