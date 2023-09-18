const instruction = document.getElementById("instruction");
const game = document
let gameStart = false;
let gameRestart = false;
let back = false;
const time = new Date();

const randomDelay = () => {
  return Math.random() * 5000;
};
const playGame = () => {
game.addEventListener("click", () => {
  // if (!gameStart && !gameRestart && !back) {
    gameStart = true;
    console.log(gameStart);
    // console.log(gameRestart)
    // console.log(back)
  }, true)}
  game.removeEventListener("click",playGame,true)
  if (gameStart && !gameRestart && !back) {
    instruction.style.opacity = 0;
    document.body.style.backgroundColor = "red";
    back = true;
    console.log(gameStart)
    console.log(gameRestart)
    console.log(back);
    let createdTime = 0;
    setTimeout(function () {
      document.body.style.backgroundColor = "green";
      instruction.style.opacity = 0;
      createdTime = time.getTime()
      console.log(createdTime);
      back = false
      gameRestart = true
    }, randomDelay());
  }
  // }

  if (back && gameStart) {
    instruction.innerHTML = "Too soon!";
    instruction.style.opacity = 1;
  }
// },true);
playGame()