const createDice = (number) => {
    	const dotPositionMatrix = {
		1: [
			[50, 50]
		],
		2: [
			[20, 20],
			[80, 80]
		],
		3: [
			[20, 20],
			[50, 50],
			[80, 80]
		],
		4: [
			[20, 20],
			[20, 80],
			[80, 20],
			[80, 80]
		],
		5: [
			[20, 20],
			[20, 80],
			[50, 50],
			[80, 20],
			[80, 80]
		],
		6: [
			[20, 20],
			[20, 80],
			[50, 20],
			[50, 80],
			[80, 20],
			[80, 80]
		]};

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
}
const numberOfDice = 1
const diceWindow = document.querySelector(".diceWindow");
const rollDiceButton = document.querySelector(".rollDiceButton");
const resetButton = document.querySelector(".reset")
const score = document.getElementById("score");
const rolls = document.getElementById("count");
const result = document.querySelector(".result");
const wins = document.getElementById("wins")
let count = 0;
let total = 0;
let wintotal = 0;

const randomizeDice = (diceWindow, numberOfDice) => {
    diceWindow.innerHTML = "";
    for (let face = 0; face < numberOfDice; face++) {
        const random = Math.floor((Math.random() * 6) +1);
        const dice = createDice(random);
        diceWindow.appendChild(dice);
        count++;
        rolls.innerHTML = count;
        total += random;
        score.innerHTML = total;
        if (random == 1) {
            result.innerHTML = "You lost!"
            rollDiceButton.disabled = true;
        }
        if (total >= 21) {
            result.innerHTML = "You win!"
            rollDiceButton.disabled = true;
            wintotal++;
            wins.innerHTML = wintotal
        }
    };
};

rollDiceButton.addEventListener("click", () => {
    randomizeDice(diceWindow, numberOfDice);
});

resetButton.addEventListener("click", () => {
    count = 0
    rolls.innerHTML = count;
    total = 0
    score.innerHTML = total;
    diceWindow.innerHTML = "";
    result.innerHTML = "";
    rollDiceButton.disabled = false;
});

//     const interval = setInterval(() => {
//     randomizeDice(diceWindow, numberOfDice);
// },50);
//     setTimeout(() => clearInterval(interval), 500)

// });