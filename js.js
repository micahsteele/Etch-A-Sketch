const container = document.querySelector("#container");
console.log(container);

for(x = 0; x < 256; x++) {
    const square = document.createElement("div");
    square.classList.add("squares");
    square.textContent = "";

    container.appendChild(square);
}

const button = document.querySelector(".button");
const squares = document.querySelectorAll(".squares");
console.log(squares);

squares.forEach(div => div.addEventListener("mouseover", () => {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`;      
    div.style.backgroundColor = rgb;    
}))

button.addEventListener("click", () => {
    container.replaceChildren();
    let question = prompt("Enter desired heigth x width. Cannot exceed 100");
    if (question > 100) {
        alert("entered too high of a number")
        return
    }
    let gridSize = question * question
// make question influnce css of divs
    for(x = 0; x < gridSize; x++) {
        const square = document.createElement("div");
        square.classList.add("squares");
        square.textContent = "";
    
        container.appendChild(square);
    }
    const squares = document.querySelectorAll(".squares");
    console.log(squares);

    squares.forEach(div => div.addEventListener("mouseover", () => {
        const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
        const r = randomBetween(0, 255);
        const g = randomBetween(0, 255);
        const b = randomBetween(0, 255);
        const rgb = `rgb(${r},${g},${b})`;      
        div.style.backgroundColor = rgb; 
    }))
})


