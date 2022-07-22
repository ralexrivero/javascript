document.getElementById("header").innerHTML = "Hello JavaScript!";
const paragraph = document.getElementsByClassName("paragraph");

for (let i = 0; i < paragraph.length; i++) {
    paragraph[i].style.fontSize = "12px";
};

const turnOn = document.getElementById("turn-on")
const turnOff = document.getElementById("turn-off")

turnOn.addEventListener("click", function() {
    document.getElementById("change-image").src="./pic_bulbon.gif";
});

turnOff.addEventListener("click", function() {
    document.getElementById("change-image").src="./pic_bulboff.gif"
});

const btnSwitch = document.getElementById("btn_display");
btnSwitch.addEventListener("click", funSwitchPar);
function funSwitchPar() {
    const par = document.getElementById("paragraph_display");
    if (par.style.display === 'block') {
        par.style.display='none'
    } else {
        par.style.display='block'
    }
}
