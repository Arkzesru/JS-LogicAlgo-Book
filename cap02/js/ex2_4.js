// Create references to the form and response elements (using their id)
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")

// Prevent arrow keys from triggering increase/decrease
document.getElementById('inKilogram').addEventListener('keydown', function (event) {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault();
    }
});

document.getElementById('inConsumption').addEventListener('keydown', function (event) {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault();
    }
});

// Prevent mouse scroll from triggering increase/decrease
document.getElementById('inKilogram').addEventListener('wheel', function (event) {
    event.preventDefault();
});

document.getElementById('inConsumption').addEventListener('wheel', function (event) {
    event.preventDefault();
});

// Create an event listener triggered when the submit button is clicked
frm.addEventListener("submit", (e) => {
    const kilogram = Number(frm.inKilogram.value) // Get the content of the fields.
    const consumption = Number(frm.inConsumption.value)

    const amountToPay = (kilogram / 1000) * consumption // Calculate the amount to be paid.

    resp1.innerText = `Amount to pay: $${amountToPay.toFixed(2)}`

    e.preventDefault() // Prevent form submission.
})