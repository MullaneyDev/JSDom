const gameBoard = document.querySelector(".gameBoard");
const allBoxes = document.querySelectorAll(".box");
const instruction = document.getElementById("instruction");
const restartBtn = document.getElementById("restartBtn");
let XorO = 0;
restartBtn.style.opacity = 0;

const fillSquare = () => {
  filled = true;
};
const startGame = () => {
  gameStart = true;
  instruction.style.opacity = 0;
  console.log(gameStart);
  gameBoard.removeEventListener("click", startGame);
};

let gameStart = false;
console.log(gameStart);

gameBoard.addEventListener("click", startGame);

allBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (gameStart && XorO % 2 == 0 && !box.innerHTML) {
      console.log("click");
      box.style.backgroundColor = "white";
      box.innerHTML = "X";
      checkForWinner();
      fillSquare();
      //   box.imageObject.src = "./images/X.webp"
      XorO++;
    } else if (gameStart && XorO % 2 !== 0 && !box.innerHTML) {
      console.log("clicked");
      box.style.backgroundColor = "white";
      box.innerHTML = "O";
      checkForWinner();
      fillSquare();
      //   box.imageObject.src = "./images/ONew.webp"
      XorO++;
    }
  });
});

const checkForWinner = () => {
  let xArray = [];
  let oArray = [];
  // create arrays of box numbers for Xs and Os
  allBoxes.forEach((box) => {
    if (box.innerHTML) {
      if (box.innerHTML == "X") {
        xArray.push(parseInt(box.id));
      }
      if (box.innerHTML == "O") {
        oArray.push(parseInt(box.id));
      }
    }
  });
  // if one player has 3 or more icons, and it matches a winning array, declare winner.
  if (xArray.length >= 3 && compareToWinningArrays(xArray)) {
    return declareWinner("Crosses");
  } else if (oArray.length >= 3 && compareToWinningArrays(oArray)) {
    return declareWinner("Noughts");
  } else if (xArray.length + oArray.length === 9) {
    return declareWinner("Nobody");
  }
};

let winCode = null;

// test the 8 winning combos against sample
const compareToWinningArrays = (playerArray) => {
  let final = false;
  winningArrays.forEach((combo) => {
    let outcome = true;
    for (let i = 0; i < 3; i++) {
      if (playerArray.indexOf(combo[i]) == -1) return (outcome = false);
    }
    if (outcome) {
      winCode = combo;
      return (final = true);
    }
  });
  if (final) return true;
};

const winningArrays = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

