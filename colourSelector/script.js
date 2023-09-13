const colourGuess = document.getElementById("colourToGuess");
const newColBtn = document.getElementById("newColBtn");
const winMsg = document.getElementById("isCorrectMsg");
const displayScore = document.getElementById("score");
const allBoxes = document.querySelectorAll(".box");

let newColour = null;
let score = 0;
let guessing = true;

allBoxes.forEach((colouredBox) => {
    colouredBox.addEventListener("click", () => {
        if(guessing) {
            if (colouredBox.style.backgroundColor === newColour) {
                correct()
            } else {
                colouredBox.style.opacity = 0;
            }
        };
    });
});

const correct = () => {
    guessing = false;
    score++;
    winMsg.textContent = "Correct";
    displayScore.textContent = score;
    for (let i = 0; i < allBoxes.length; i++ ) {
        allBoxes[i].style.opacity = 1;
        allBoxes[i].style.backgroundColor = newColour;
    };
};

const resetGame = () => {
    guessing = true;
    for (let i =0; i< allBoxes.length; i++) {
        allBoxes[i].style.opacity = 1;
        allBoxes[i].style.backgroundColor = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
    };
    let itemToGuess = allBoxes[ Math.floor(Math.random() * allBoxes.length)];

    newColour = itemToGuess.style.backgroundColor;
    colourToGuess.textContent = newColour;
    winMsg.textContent = "";
};

resetGame()

newColBtn.addEventListener("click", resetGame);