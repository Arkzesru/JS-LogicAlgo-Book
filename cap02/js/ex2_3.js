// cria referência ao form e aos elementos de resposta (pelo seu id)
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

// Evita o aumentar/diminuir com as teclas do teclado.
document.getElementById('inPreco').addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault();
    }
});

// Evita o aumentar/diminuir com o rolar do scroll do mouse.
document.getElementById('inPreco').addEventListener('wheel', function(event) {
    event.preventDefault();
});

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const veiculo = frm.inVeiculo.value // obtém o conteúdo dos campos
    const preco = Number(frm.inPreco.value) 

    const entrada = preco * 0.5 // calcula o valor da entrada
    const parcela = entrada / 12 // calcula o valor das parcelas

    resp1.innerText = `Mega Oferta: ${veiculo}` // exibe as respostas
    resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`
    resp3.innerText = `+12x de R$ ${parcela.toFixed(2)} s/ juros.`

        e.preventDefault() // evita o envio do form
})