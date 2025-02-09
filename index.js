// Log
console.log("JavaScript loaded.");

// Selectors for index.HTML
const sketchPad = document.querySelector("#sketch-pad");

// Container dimensions
const DEFAULT_SIZE = 16;
const MAX_SIZE = 100;

// Create the header
let header = document.createElement("div");
header.setAttribute("id", "header");

let display = document.createElement("div"); // to display current dimensions
display.setAttribute("id", "display");

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
    row.classList.add("row");

    for (let y = 0; y < size; y++) {
      // Create cells
      let cell = document.createElement("div");
      cell.setAttribute("id", `x${x + 1}y${y + 1}`); // provide unique cell position
      cell.classList.add("cell");

      // Add the cell to the corresponding row
      row.appendChild(cell);
    }

    // Add the row to the container
    container.appendChild(row);
  }

  // Add the container
  sketchPad.appendChild(container);

  // Set display
  let display = sketchPad.querySelector("#display");
  display.textContent = `Dimensions: ${size}x${size}`;

  // Interactive cells
  let cells = document.querySelectorAll(".cell");
  cells.forEach(function (cell) {
    cell.addEventListener("click", function (e) {
      changeColor(e);
    });

    cell.addEventListener("contextmenu", function (e) {
      changeShade(e);
    });
  });
}

// Initialise the container
generateContainer(DEFAULT_SIZE);

// Allow change of container dimensions
const reset = sketchPad.querySelector("#reset");
reset.addEventListener("click", function (e) {
  let newSize = parseInt(prompt(`Enter new size (max. allowed ${MAX_SIZE})`));

  if (newSize <= MAX_SIZE && newSize > 0) {
    sketchPad.removeChild(container);
    generateContainer(newSize);
  } else {
    alert("Invalid input.");
  }
});

// Cell colors
const COLORS = [
  "", // no color
  "rgb(148, 0, 211)", // violet
  "rgb(75, 0, 130)", // indigo
  "rgb(0, 0, 255)", // blue
  "rgb(0, 255, 0)", // green
  "rgb(255, 255, 0)", // yellow
  "rgb(255, 127, 0)", // orange
  "rgb(255, 0 , 0)", // red
];

// Disable context-menu open after a right click inside the sketch pad
sketchPad.oncontextmenu = function (e) {
  return false;
};

function changeColor(e) {
  const color = e.target.style["background-color"];
  const currentColor = COLORS.indexOf(color);
  let nextColor = currentColor + 1;

  e.target.style["background-color"] = COLORS[nextColor];
}

function changeShade(e) {
  const shade = parseFloat(e.target.style["opacity"]);
  let nextShade;

  if (!shade || shade === 1) {
    nextShade = 0.1;
  } else {
    nextShade = shade + 0.1;
  }

  e.target.style["opacity"] = nextShade.toString();
}
