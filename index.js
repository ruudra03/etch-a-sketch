// Log
console.log("JavaScript loaded.");

// Selectors for index.HTML
const sketchPad = document.querySelector("#sketch-pad");

// Add a container to the sketchPad
let container = document.createElement("div");
container.setAttribute("id", "container"); // set id for the container
sketchPad.appendChild(container);

const size = 16;
for (let x = 0; x < size; x++) {
  let row = document.createElement("div");
  row.setAttribute("id", `row${x + 1}`);
  row.classList.add("row");

  for (let y = 1; y < size; y++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    row.appendChild(cell);
  }

  container.appendChild(row);
}

// Review the DOM
console.log(sketchPad);
