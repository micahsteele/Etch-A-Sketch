const container = document.querySelector("#container");
console.log(container);

for(x = 0; x < 256; x++) {
    const square = document.createElement("div");
    square.classList.add("squares");
    square.textContent = "hi";

    container.appendChild(square);
}

const squares = document.querySelectorAll(".squares");
console.log(squares);

squares.forEach(div => div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "red";    
    }))


// squares.addEventListener("mouseover", () => {
//     squares.style.backgroundColor = "red";    
// })


// let mouseOverFunction = function() {
//     div.style.backgroundColor = "red"
// };

// squares.onmouseover = mouseOverFunction;

