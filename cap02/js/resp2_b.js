// Create references to the elements on the page.
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// Prevent increase/decrease with keyboard keys.
document.getElementById('inCost').addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault();
    }
});

document.getElementById('inTime').addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault();
    }
});

// Prevent increase/decrease with mouse scroll.
document.getElementById('inCost').addEventListener('wheel', function(event) {
    event.preventDefault();
});

document.getElementById('inTime').addEventListener('wheel', function(event) {
    event.preventDefault();
});

// Create an event listener triggered when the submit button is clicked.
frm.addEventListener("submit", (e) => {
    // Get the content (and convert it to a number).
    const cost = Number(frm.inCost.value);
    const time = Number(frm.inTime.value);

    // Calculate the amount to be paid (rounding up).
    const paymentAmount = Math.ceil(time / 15) * cost;

    // Display the amount (with 2 decimal places).
    resp.innerText = `Amount to be paid by the user $${paymentAmount.toFixed(2)}`
        
        e.preventDefault()
})