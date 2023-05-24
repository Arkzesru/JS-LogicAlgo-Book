// cria referência ao form e aos elementos de resposta (pelo seu id)
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")

// Evita o aumentar/diminuir com as teclas do teclado.
document.getElementById('inQuilo').addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault();
    }
});

document.getElementById('inConsumo').addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault();
    }
});

// Evita o aumentar/diminuir com o rolar do scroll do mouse.
document.getElementById('inQuilo').addEventListener('wheel', function(event) {
    event.preventDefault();
});

document.getElementById('inConsumo').addEventListener('wheel', function(event) {
    event.preventDefault();
});

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const quilo = Number(frm.inQuilo.value) // obtém o conteúdo dos campos
    const consumo = Number(frm.inConsumo.value)

    const valor = (quilo / 1000) * consumo // calcula o valor a ser pago.

    resp1.innerText = `Valor a pagar R$: ${valor.toFixed(2)}`

        e.preventDefault() // evita o envio do form
})