let checkers = document.querySelectorAll(".black-figure")
let cells = document.querySelectorAll(".cell")
checkers.forEach((el) => {
    el.onclick = () => {
        cells[el.id].classList.add("glow")
    }
})