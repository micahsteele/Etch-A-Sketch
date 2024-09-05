const container = document.querySelector("#container")
console.log(container)

for(x = 0; x < 256; x++) {
    const square = document.createElement("div");
    square.classList.add("squares");
    square.textContent = "hi";

    container.appendChild(square);
}

