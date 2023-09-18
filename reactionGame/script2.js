const instruction = document.getElementById("instruction");
const time = new Date();

const randomDelay = () => {
  return Math.random() * 5000;
};

document.addEventListener(
  "click",
  () => {
      let createdTime = 0;
      setTimeout(function () {
        createdTime = time.getTime();
        console.log(createdTime);

      }, randomDelay());
  },
  true
);
        document.removeEventListener("click",setTimeout, true)
