const container = document.querySelector("#container");
console.log(container);

// for(x = 0; x < 256; x++) {
//     const square = document.createElement("div");
//     square.classList.add("squares");
//     square.textContent = "hi";

//     container.appendChild(square);
// }

// let generateGrid = function gridGeneration(number) {
//     for(x = 0; x < 256; x++) {
//     const square = document.createElement("div");
//     square.classList.add("squares");
//     square.textContent = "hi";

//     container.appendChild(square);
//     }
// }

const button = document.querySelector(".button");
const squares = document.querySelectorAll(".squares");
console.log(squares);

squares.forEach(div => div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "red";    
    }))



button.addEventListener("click", () => {
    let question = prompt("Enter desired heigth x width. Cannot exceed 100");
    if (question > 100) {
        alert("entered too high of a number")
        return
    }
    let gridSize = question * question
    squares.forEach(div => {
        div.style.backgroundColor = "transparent";    
    })
    for(x = 0; x < gridSize; x++) {
        const square = document.createElement("div");
        square.classList.add("squares");
        square.textContent = "hi";
    
        container.appendChild(square);
    }
})
