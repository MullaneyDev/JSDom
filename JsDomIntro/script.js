//Activity 1

const face = document.getElementById("face");
const button = document.getElementById("hideMe");

button.addEventListener('click', () => {
    if (face.style.display === "none"){
        face.style.display = "block";
        button.textContent = "Hide me!";
    }else {
        face.style.display = "none"
        button.textContent = "Show me!";
    };
});


//Activity 2

const imgChange = document.getElementById("imgChange");
const imgInput = document.getElementById("imgInput");
const imgSubmit = document.getElementById("imgSubmit");

imgSubmit.addEventListener('click', () => {
    imgChange.src = imgInput.value;
    imgInput.value = ""
});


// Activity 3

const headers = document.getElementsByClassName("activityHead");
const colourInput = document.getElementById("headerChange");
const colourSubmit = document.getElementById("colourSubmit");

colourSubmit.addEventListener('click', () =>{
    for (let header of headers){
      header.style.color = colourInput.value;  
    } colourInput.value = ""; 
});


// Activity 4

const mouseCo = document.getElementById("mouseCo")
document.addEventListener('click', (event =>{
    mouseCo.innerText = `Screen X/Y: ${event.screenX},${event.screenY}
        Client X/Y: ${event.clientX},${event.clientY}`;
}))