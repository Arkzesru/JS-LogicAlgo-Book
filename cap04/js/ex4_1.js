const frm = document.querySelector("form");
const resp1 = document.querySelector("#outAverage");
const resp2 = document.querySelector("#outSituation");

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = frm.inName.value
    const firstGrade = Number(frm.inFirstGrade.value)
    const secondGrade = Number(frm.inSecondGrade.value)

    const average = (firstGrade + secondGrade) / 2;

    resp1.innerText = `Average Grade of ${average.toFixed(2)}`

    if (average >= 7.0) {
        resp2.innerText = `Congratulations ${name}! You have been approved!`
        resp2.style.color = "blue";
    } else if (average >=4) {
        resp2.innerText = `Warning ${name}!! You're in an exam!`
        resp2.style.color = "green";
    } else {
        resp2.innerText = `Oops ${name}! You have been failed :(`
        resp2.style.color = "red";
    };

    resp2.innerText = `${situation}`
})