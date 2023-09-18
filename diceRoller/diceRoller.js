var rollButton = document.getElementById("button");
const d4Button = document.getElementById("d4");
const d6Button = document.getElementById("d6");
const d8Button = document.getElementById("d8");
const d10Button = document.getElementById("d10");
const d100Button = document.getElementById("d100");
const d12Button = document.getElementById("d12");
const d20Button = document.getElementById("d20");
const diceValue = document.getElementById("diceValue");
const placeholder = document.getElementById("placeholder");
rollButton.disabled = true;

const dice = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  },
};

//Prints dice roll to the page

const printNumber = (number) => {
  placeholder.innerHTML = number;
};

rollButton.onclick = () => {
  let result = dice.roll();
  printNumber(result);
};

d4Button.onclick = () => {
  placeholder.innerHTML = "";
  diceValue.innerHTML = "D4";
  dice.sides = 4;
  rollButton.disabled = false;
};

d6Button.onclick = () => {
  placeholder.innerHTML = "";
  diceValue.innerHTML = "D6";
  dice.sides = 6;
  rollButton.disabled = false;
};

d8Button.onclick = () => {
  placeholder.innerHTML = "";
  diceValue.innerHTML = "D8";
  dice.sides = 8;
  rollButton.disabled = false;
};

d10Button.onclick = () => {
  placeholder.innerHTML = "";
  diceValue.innerHTML = "D10";
  dice.sides = 10;
  rollButton.disabled = false;
};

d100Button.onclick = () => {
  placeholder.innerHTML = "";
  diceValue.innerHTML = "D100";
  dice.sides = 100;
  rollButton.disabled = false;
};

d12Button.onclick = () => {
  placeholder.innerHTML = "";
  diceValue.innerHTML = "D12";
  dice.sides = 12;
  rollButton.disabled = false;
};

d20Button.onclick = () => {
  placeholder.innerHTML = "";
  diceValue.innerHTML = "D20";
  dice.sides = 20;
  rollButton.disabled = false;
};
