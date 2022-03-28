const grids = document.querySelectorAll(".grid")

const selections = document.querySelectorAll(".selection")

for (const index in grids) {
    const grid = grids[index];
    if(Object.hasOwnProperty.call(grids, index))
        grid.addEventListener("click", function () {
            grid.classList.toggle("clicked")
            selections[index].classList.toggle("active-row")
        })
    }