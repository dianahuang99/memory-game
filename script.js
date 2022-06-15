const gameContainer = document.getElementById("game");
let cardsFlipped = [];
let correct = 0;
let lockboard = false;
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
  console.log(correct);
  if (lockboard) return; //lock
  if (event.target == cardsFlipped[0]) return;
  for (let color of COLORS) {
    if (event.target.classList == color) {
      event.target.style.backgroundColor = color;
    }
  }
  cardsFlipped.push(event.target);
  if (cardsFlipped.length == 2) {
    if (cardsFlipped[0].className == cardsFlipped[1].className) {
      for (let card of cardsFlipped) {
        card.removeEventListener("click", handleCardClick);
      }
      correct += 2;
      cardsFlipped = [];
      setTimeout(() => {
        if (correct == 10) {
          alert("You won!!");
        }
      }, 400);
    }
    if (cardsFlipped[0].className !== cardsFlipped[1].className) {
      lockboard = true;
      for (let card of cardsFlipped) {
        setTimeout(() => {
          card.style.backgroundColor = "white";
          lockboard = false; //make sure this is in the timeout too
        }, "500");
      }
      cardsFlipped = [];
    }
  }
}

// when the DOM loads
createDivsForColors(shuffledColors);
