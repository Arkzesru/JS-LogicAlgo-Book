// Create references to the form and response elements (using their id)
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

// Prevent arrow keys from triggering increase/decrease
document.getElementById('inPrice').addEventListener('keydown', function (event) {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault();
    }
});

// Prevent mouse scroll from triggering increase/decrease
document.getElementById('inPrice').addEventListener('wheel', function (event) {
    event.preventDefault();
});

// Create an event listener triggered when the submit button is clicked
frm.addEventListener("submit", (e) => {
    const vehicle = frm.inVehicle.value // Get the content of the fields
    const price = Number(frm.inPrice.value)

    const downPayment = price * 0.5; // calculate the down payment
    const installment = downPayment / 12; // calculate the installment value

    resp1.innerText = `Mega Offer: ${vehicle}`; // display the responses
    resp2.innerText = `Down Payment: $${downPayment.toFixed(2)}`;
    resp3.innerText = `+12 installments of $${installment.toFixed(2)} with no interest.`

    e.preventDefault() // Prevent form submission.
})