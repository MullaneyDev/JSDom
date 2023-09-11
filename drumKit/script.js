document.addEventListener("keydown", play =>{
    if (play.keyCode == 81) {
      document.getElementById("boom").play();
    } else if (play.keyCode == 87) {
      document.getElementById("clap").play();
    } else if (play.keyCode == 69) {
      document.getElementById("hihat").play();
    } else if (play.keyCode == 82) {
      document.getElementById("kick").play();
    } else if (play.keyCode == 84) {
      document.getElementById("openhat").play();
    } else if (play.keyCode == 89) {
      document.getElementById("ride").play();
    } else if (play.keyCode == 85) {
      document.getElementById("snare").play();
    } else if (play.keyCode == 73) {
      document.getElementById("tink").play();
    } else if (play.keyCode == 79) {
      document.getElementById("tom").play();
    }
})

boombutton.addEventListener("click",play => {
    document.getElementById("boom").play();
})
clapbutton.addEventListener("click", (play) => {
  document.getElementById("clap").play();
});
hihatbutton.addEventListener("click", (play) => {
  document.getElementById("hihat").play();
});
kickbutton.addEventListener("click", (play) => {
  document.getElementById("kick").play();
});
openhatbutton.addEventListener("click", (play) => {
  document.getElementById("openhat").play();
});
ridebutton.addEventListener("click", (play) => {
  document.getElementById("ride").play();
});
snarebutton.addEventListener("click", (play) => {
  document.getElementById("snare").play();
});
tinkbutton.addEventListener("click", (play) => {
  document.getElementById("tink").play();
});
tombutton.addEventListener("click", (play) => {
  document.getElementById("tom").play();
});