let listaDeNumeroSorteado = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function texto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});
}

function textoMenu() {
    texto("h1", "Jogo da adivinhação");
    texto("p", "Escolha um número de 1 a 10");
}

textoMenu();

function verificarChute() {
    let chute = document.querySelector("input").value;

    if(chute == numeroSecreto) {
        texto("h1", "Você acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = "Você descobriu o número secreto em " + tentativas + " " + palavraTentativa;
        texto("p", mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute("disabled");

    } else {
        if (chute > numeroSecreto) {
            texto("p", "O número secreto é menor que " + chute);
        } else {
            texto("p", "O número secreto é maior que " + chute);
        } 
        tentativas++;
        limpaCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let qtdElementos = listaDeNumeroSorteado.length;

    if (qtdElementos == numeroLimite) {
        listaDeNumeroSorteado = [];
    }

    if (listaDeNumeroSorteado.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumeroSorteado.push(numeroEscolhido);
        console.log(listaDeNumeroSorteado);
        return numeroEscolhido;
    }

}

function limpaCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limpaCampo();
    tentativas = 1;
    textoMenu();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}