// Log
console.log("JavaScript loaded.");

// Selectors for index.HTML
const sketchPad = document.querySelector("#sketch-pad");

// Add a container to the sketchPad
let container = document.createElement("div");
container.setAttribute("id", "container"); // set id for the container
sketchPad.appendChild(container);

// Grid dimensions
const size = 16;

// Create grid
for (let x = 0; x < size; x++) {
  // Create rows
  let row = document.createElement("div");
  row.setAttribute("id", `row${x + 1}`); // provide unique row number
  row.classList.add("row");

  for (let y = 0; y < size; y++) {
    // Create cells
    let cell = document.createElement("div");
    cell.setAttribute("id", `cell${y + 1}`); // provide unique cell number
    cell.classList.add("cell");

    // Add the cell to the corresponding row
    row.appendChild(cell);
  }

  // Add the row to the container
  container.appendChild(row);
}

// Review the DOM
console.log(sketchPad);
