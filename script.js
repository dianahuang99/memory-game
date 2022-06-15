const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log(event.target);
  const divs = document.querySelectorAll("div");

  for (let div of divs) {
    if (div.classList.contains("red")) {
      div.addEventListener("click", function () {
        div.classList.add("turnRed");
      });
    } else if (div.classList.contains("blue")) {
      div.addEventListener("click", function () {
        div.classList.add("turnBlue");
      });
    } else if (div.classList.contains("green")) {
      div.addEventListener("click", function () {
        div.classList.add("turnGreen");
      });
    } else if (div.classList.contains("orange")) {
      div.addEventListener("click", function () {
        div.classList.add("turnOrange");
      });
    } else if (div.classList.contains("purple")) {
      div.addEventListener("click", function () {
        div.classList.add("turnPurple");
      });
    }
  }
}

// when the DOM loads
createDivsForColors(shuffledColors);

// const blueDiv = document.querySelectorAll(".blue");

// for (div of blueDiv) {
//   div.addEventListener("click", function () {});
//   // div.style.backgroundColor = "blue";
// }
