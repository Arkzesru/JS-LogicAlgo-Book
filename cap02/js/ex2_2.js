// cria referência ao form e aos elemento h2 e h3 (resposta)
const frm = document.querySelector("form")
const resp1 = document.querySelector("h2")
const resp2 = document.querySelector("h3")

// Adiciona um ouvinte de evento de tecla (keydown) ao elemento de entrada numérica
// e previne o comportamento padrão (aumentar ou dimiuir)
document.getElementById('inDuracao').addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault();
    }
});

// cria um "ouvinte" do evento, acionado quando o botão submit for clicado.
frm.addEventListener("submit", (e) => {
    const filme = frm.inFilme.value
    const duracao = Number(frm.inDuracao.value)

    const horas = Math.floor(duracao / 60) // pega apenas o inteiro da divisão, ou seja, arredonda para baixo o resultado
    const minutos = duracao % 60 // obtém o resto da divisão (os minutos)
    
    resp1.innerText = `${filme}`
    resp2.innerText = `Duração: ${horas}h${String(minutos).padStart(2, '0')}min`

    e.preventDefault()
})