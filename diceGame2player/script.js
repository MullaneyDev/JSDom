const createDice = (number) => {
  const dotPositionMatrix = {
    1: [[50, 50]],
    2: [
      [20, 20],
      [80, 80],
    ],
    3: [
      [20, 20],
      [50, 50],
      [80, 80],
    ],
    4: [
      [20, 20],
      [20, 80],
      [80, 20],
      [80, 80],
    ],
    5: [
      [20, 20],
      [20, 80],
      [50, 50],
      [80, 20],
      [80, 80],
    ],
    6: [
      [20, 20],
      [20, 80],
      [50, 20],
      [50, 80],
      [80, 20],
      [80, 80],
    ],
  };

  const dice = document.createElement("div");

  dice.classList.add("dice");

  for (const dotPosition of dotPositionMatrix[number]) {
    const dot = document.createElement("div");

    dot.classList.add("diceDot");
    dot.style.setProperty("--top", dotPosition[0] + "%");
    dot.style.setProperty("--left", dotPosition[1] + "%");
    dice.appendChild(dot);
  }

  return dice;
};
const numberOfDice = 1;
const diceWindow = document.querySelector(".diceWindow");
const rollDiceButton = document.querySelector(".rollDiceButton");
const holdButton = document.querySelector(".holdScoreButton");
const resetButton = document.querySelector(".reset");
const gameWindow = document.querySelector(".window")
const result = document.getElementById("result");
const player1Window = document.getElementById("player1");
const player2Window = document.getElementById("player2");
const winWindow = document.getElementById("resultWindow");
player1Window.style.opacity = 1;
player2Window.style.opacity = 0.2;
let player1 = true;
let player2 = false;

//Player 1
const currentScore1 = document.getElementById("currentScore1");
const score1 = document.getElementById("score1");
const rollCount1 = document.getElementById("count1");
const wins1 = document.getElementById("wins1");
let heldScore1 = 0;
let count1 = 0;
let total1 = 0;
let wintotal1 = 0;

//Player 2
const currentScore2 = document.getElementById("currentScore2");
const score2 = document.getElementById("score2");
const rollCount2 = document.getElementById("count2");
const wins2 = document.getElementById("wins2");
let heldScore2 = 0;
let count2 = 0;
let total2 = 0;
let wintotal2 = 0;

const randomizeDice = (diceWindow, numberOfDice) => {
  diceWindow.innerHTML = "";
  for (let face = 0; face < numberOfDice; face++) {
    const random = Math.floor(Math.random() * 6 + 1);
    const dice = createDice(random);
    diceWindow.appendChild(dice);

    if (player1) {
      count1++;
      rollCount1.innerHTML = count1;
      total1 += random;
      currentScore1.innerHTML = total1;
      if (random == 1) {
        total1 = 0;
        player1 = false;
        player2 = true;
        currentScore1.innerHTML = total1;
        player2Window.style.opacity = 1;
        player1Window.style.opacity = 0.2;
        continue;
      }
    }

    if (player2) {
      count2++;
      rollCount2.innerHTML = count2;
      total2 += random;
      currentScore2.innerHTML = total2;
      if (random == 1) {
        total2 = 0;
        player2 = false;
        player1 = true;
        currentScore2.innerHTML = total2;
        player1Window.style.opacity = 1;
        player2Window.style.opacity = 0.2;
        continue;
      }
    }
  }
};

holdButton.addEventListener("click", () => {
  if (player1) {
    heldScore1 += total1;
    score1.innerHTML = heldScore1;
    total1 = 0;
    currentScore1.innerHTML = total1;
    player2 = true;
    player1 = false;
    player2Window.style.opacity = 1;
    player1Window.style.opacity = 0.2;
    if (heldScore1 >= 21) {
      total1 = 0;
      heldScore1 = 0;
      count1 = 0;
      result.innerHTML = "Player 1 wins!";
      wintotal1++;
      wins1.innerHTML = wintotal1;
      currentScore1.innerHTML = total1;
      score1.innerHTML = heldScore1;
      rollCount1.innerHTML = count1;
      total2 = 0;
      heldScore2 = 0;
      count2 = 0;
      currentScore2.innerHTML = total2;
      score2.innerHTML = heldScore2;
      rollCount2.innerHTML = count2;
      gameWindow.style.opacity = 0.2;

    }
  } else {
    heldScore2 += total2;
    score2.innerHTML = heldScore2;
    total2 = 0;
    currentScore2.innerHTML = total2;
    player1 = true;
    player2 = false;
    player1Window.style.opacity = 1;
    player2Window.style.opacity = 0.2;
    if (heldScore2 >= 21) {
      total2 = 0;
      heldScore2 = 0;
      count2 = 0;
      result.innerHTML = "Player 2 wins!";
      wintotal2++;
      wins2.innerHTML = wintotal2;
      currentScore2.innerHTML = total2;
      score2.innerHTML = heldScore2;
      rollCount2.innerHTML = count2;
      total1 = 0;
      heldScore1 = 0;
      count1 = 0;
      currentScore1.innerHTML = total1;
      score1.innerHTML = heldScore1;
      rollCount1.innerHTML = count1;
      gameWindow.style.opacity = 0.2;

    }
  }
});

rollDiceButton.addEventListener("click", () => {
  randomizeDice(diceWindow, numberOfDice);
});

resetButton.addEventListener("click", () => {
  total1 = 0;
  count1 = 0;
  heldScore1 = 0;
  rollCount1.innerHTML = count1;
  score1.innerHTML = heldScore1;
  currentScore1.innerHTML = 0;
  total2 = 0;
  count2 = 0;
  heldScore2 = 0;
  rollCount2.innerHTML = count2;
  score2.innerHTML = heldScore2;
  currentScore2.innerHTML = 0;
  diceWindow.innerHTML = "";
  result.innerHTML = "";
  player1 = true;
  player2 = false;
      gameWindow.style.opacity = 1;
  player1Window.style.opacity = 1;
  player2Window.style.opacity = 0.2;
});
