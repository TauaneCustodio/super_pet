let textoAtual = ""
let indice = 0;

function simularDigitacao() {
    if (indice < textoAtual.length) {
        let elemento = document.getElementById("titulo")
        elemento.textContent += textoAtual.charAt(indice)
        indice = indice + 1;

        setTimeout(simularDigitacao, 100);
    } else {
        indice = 0;
    }
}

function mudarTexto(novoTexto){
    let elemento = document.getElementById("titulo")
    elemento.textContent = ""
    textoAtual = novoTexto

    setTimeout(simularDigitacao, 200);
}