// cria referência aos elementos da página
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// Evita o aumentar/diminuir com as teclas do teclado.
document.getElementById('inValor').addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault();
    }
});

document.getElementById('inTempo').addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault();
    }
});

// Evita o aumentar/diminuir com o rolar do scroll do mouse.
document.getElementById('inValor').addEventListener('wheel', function(event) {
    event.preventDefault();
});

document.getElementById('inTempo').addEventListener('wheel', function(event) {
    event.preventDefault();
});

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    //obtém conteúdo (e converte em número)
    const valor = Number(frm.inValor.value)
    const tempo = Number(frm.inTempo.value)

    // calcula valor a pagar (arredonda pra cima)
    const pagar = Math.ceil(tempo / 15) * valor

    // exibe valor a pagar (com 2 decimais)
    resp.innerText = `Valor a ser pago pelo usuário R$: ${pagar.toFixed(2)}`
        
        e.preventDefault()
})