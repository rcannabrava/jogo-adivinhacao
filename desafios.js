function calcularIMC (altura, peso) {
    let imc = peso / (altura * altura);
}

function fatorial (numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }

    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }

    return fatorial;
}

function conversaoDolar (valor) {
    let cotacaoDolar = 4.8;
    let valorEmReais = valor * cotacaoDolar;
    return valorEmReais;
}

function salaRetangular (altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);

    console.log("Área da sala: " + area + " metros quadrados");
    console.log("Perímetro da sala: " + perimetro +" metros");
}

function salaCircular (raio) {
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;

    console.log("Área da sala: " + area.toFixed(2) + " metros quadrados");
    console.log("Perímetro da sala: " + perimetro.toFixed(2) +" metros");
}

function tabuada (numero) {
    for (i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(numero + " x " + i + " = " + resultado);
    }
}