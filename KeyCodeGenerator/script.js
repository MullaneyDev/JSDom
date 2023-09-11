const keyCode = document.getElementById("keyCode");
const keyName = document.getElementById("item4");
const keyCode2 = document.getElementById("item5");
const keyCode3 = document.getElementById("item6");
const grid = document.getElementsByClassName("gridContainer");

document.addEventListener("keyup", (event) => {
    let name = event.key;
    let code = event.code;
    let keycode = event.keyCode;
    // keyCode.innerText = `Key pressed ${name}\n Key code value :${code}\n key code value :${keycode}`; - used when testing
    keyName.innerText = `${name}`;
    keyCode2.innerText = `${code}`;
    keyCode3.innerText = `${keycode}`;
});