// Log
console.log("JavaScript loaded.");

// Selectors for index.HTML
const sketchPad = document.querySelector("#sketch-pad");

// Container dimensions
let size = 16;
const MAX_SIZE = 100;

// Create the header
let header = document.createElement("div");
header.setAttribute("id", "header");

let display = document.createElement("span"); // to display current dimensions
display.textContent = `Dimensions: ${size}x${size}`;

let button = document.createElement("button"); // to allow changing the dimensions
button.setAttribute("id", "reset");
button.textContent = "Reset";

// Add the display and reset button to the header
header.appendChild(display);
header.appendChild(button);

// Add the header to the sketchPad
sketchPad.appendChild(header);

// Generate a container using the size parameter which takes in an integer as argument
function generateContainer(size) {
  // Create the container in sketchPad
  let container = document.createElement("div");
  container.setAttribute("id", "container"); // set id for the container

  // Create grid
  for (let x = 0; x < size; x++) {
    // Create rows
    let row = document.createElement("div");
    row.setAttribute("x", `${x + 1}`); // provide unique row number
    row.classList.add("row");

    for (let y = 0; y < size; y++) {
      // Create cells
      let cell = document.createElement("div");
      cell.setAttribute("y", `${y + 1}`); // provide unique cell number
      cell.classList.add("cell");

      // Add the cell to the corresponding row
      row.appendChild(cell);
    }

    // Add the row to the container
    container.appendChild(row);
  }

  // Add the container
  sketchPad.appendChild(container);
}

// Initialise the container
generateContainer(size); // default size

const reset = document.querySelector("#reset");
reset.addEventListener("click", function (e) {
  let newSize = parseInt(prompt(`Enter new size (max. allowed ${MAX_SIZE})`));

  if (newSize <= MAX_SIZE) {
    sketchPad.removeChild(container);
    generateContainer(newSize);
  } else {
    alert("Invalid input.");
  }
});
