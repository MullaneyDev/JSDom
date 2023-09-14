const instruction = document.getElementById("instruction");
let gameStart = false;

const randomDelay = () => {
  return Math.random() * 5000;
};

document.addEventListener("click", () => {
  gameStart = true;
  if ((gameStart = true)) {
    instruction.style.opacity = 0;
    document.body.style.backgroundColor = "red";

    setTimeout(function () {
      document.body.style.backgroundColor = "green";
      let createdTime = getMilliseconds();
    }, randomDelay());

    document.addEventListener("click", () => {
      if (document.body.style.backgroundColor == "red") {
        instruction.innerHTML = "Too soon!";
        instruction.style.opacity = 1;
      }
      if (document.body.style.backgroundColor == "green") {
        time = getMilliseconds() - createdTime;
        instruction.innerHTML = `${time}`;
        instruction.style.opacity = 1;
      }
    });
  }
  gameStart = false;
});
