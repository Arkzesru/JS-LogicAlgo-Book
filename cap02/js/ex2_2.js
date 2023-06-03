// create references to the form and the h2 and h3 elements (response)
const frm = document.querySelector("form")
const resp1 = document.querySelector("h2")
const resp2 = document.querySelector("h3")

/* Add a key event listener (keydown) to the numeric input element
   and prevent the default behavior (increase or decrease) */
document.getElementById('inDuration').addEventListener('keydown', function (event) {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault();
    }
});

// create an event listener triggered when the submit button is clicked.
frm.addEventListener("submit", (e) => {
    const movie = frm.inMovie.value
    const duration = Number(frm.inDuration.value)

    const hours = Math.floor(duration / 60) // get only the integer part of the division, rouding down the result
    const minutes = duration % 60 // get the remainder of the division (the minutes)

    resp1.innerText = `${movie}`
    resp2.innerText = `Duration: ${hours}h${String(minutes).padStart(2, '0')}min`

    e.preventDefault()
})