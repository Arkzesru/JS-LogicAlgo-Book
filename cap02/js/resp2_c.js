// cria referência aos elementos da página
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outPromocao")
const resp2 = document.querySelector("#outPrecoTerceiro")

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
    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)

    const terceiro = preco * 0.5
    const total = (preco * 2) + terceiro

    resp1.innerText = `${produto} - Promoção: Leve 3 por ${total.toFixed(2)}`
    resp2.innerText = `Você paga apenas R$ ${terceiro.toFixed(2)} na 3º unidade do produto.`

        e.preventDefault()
});