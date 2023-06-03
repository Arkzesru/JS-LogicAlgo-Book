// create a reference to the form and the h3 element (where the response will be displayed).
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// create an event listener triggered when the submit button is clicked.
frm.addEventListener("submit", (e) => {

    const name = frm.inName.value; // get the name entered in the form.
    resp.innerText = `Hello, ${name}!`; // display the program's response.

    e.preventDefault() // prevent form submission.
})