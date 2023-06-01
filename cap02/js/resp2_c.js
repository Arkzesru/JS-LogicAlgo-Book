// Create references to the elements on the page.
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outPromotion")
const resp2 = document.querySelector("#outThirdPartyPrice")

// Prevent increase/decrease with keyboard keys.
document.getElementById('inPrice').addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault();
    }
    });

// Prevent increase/decrease with mouse scroll.
document.getElementById('inPrice').addEventListener('wheel', function(event) {
    event.preventDefault();
});

// Create an event listener triggered when the submit button is clicked.
frm.addEventListener("submit", (e) => {
    const product = frm.inProduct.value
    const price = Number(frm.inPrice.value)

    const third = price * 0.5
    const total = (price * 2) + third

    resp1.innerText = `${product} - Promotion: Buy 3 for ${total.toFixed(2)}`
    resp2.innerText = `You only pay $ ${third.toFixed(2)} for the 3rd unit of the product.`

        e.preventDefault()
});