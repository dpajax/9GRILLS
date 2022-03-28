const myGrids = document.querySelectorAll(".grid");

const data = document.querySelector(".data");

let dataElements = ["<p>You Selected CHANGE:</p>"]

let newArr = []

myGrids.forEach((grid)=>{
    grid.addEventListener("click", ()=>{
        grid.classList.toggle("clicked")
        data.innerHTML = "";
        if (dataElements.includes(`<div class='selection'>Row ${grid.innerText}</div>`)){
            // let newEleArr = dataElements.filter((ele)=>{
            //     ele != `<div class='selection'>Row ${grid.innerText}</div>`;
            // });
            dataElements.forEach(ele=>{
                if (ele === "<p>You Selected CHANGE:</p>" || ele === `<div class='selection'>Row ${grid.innerText}</div>`) {
                    console.log("removed")
                } else {
                    newArr.push(ele);
                }
            })
            console.log(newArr)
            data.innerHTML = newArr.join(" ");
        } else {
            dataElements.push(`<div class='selection'>Row ${grid.innerText}</div>`)
            data.innerHTML = dataElements.join(" ");
        }
    })
})


// arr.filter method

// const myArr = [1, 2, 2, 3, 4, 5, 20, 50, 100, 125, 140, 500].filter((item)=>{
//     return item === 2;
// })

// console.log(myArr);