// Create references to the elements on the page.
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outMedicine")
const resp2 = document.querySelector("#outPromotion")


// Prevent increase/decrease using keyboard keys.
document.getElementById('inPrice').addEventListener('keydown', function (event) {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault();
    }
});

// Prevent increase/decrease using mouse scroll.
document.getElementById('inPrice').addEventListener('wheel', function (event) {
    event.preventDefault();
});

// Create an event listener triggered when the submit button is clicked.
frm.addEventListener("submit", (e) => {
    const medicine = frm.inMedicine.value
    const price = Number(frm.inPrice.value)

    // Calculate the promotion value (round down).
    const promotion = Math.floor(price * 2)

    // exibe as respostas
    resp1.innerText = `Promotion of ${medicine}`
    resp2.innerText = `Get 2 for only $: ${promotion.toFixed(2)}`

    e.preventDefault()
})