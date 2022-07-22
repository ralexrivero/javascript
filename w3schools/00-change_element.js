document.getElementById("header").innerHTML = "Hello JavaScript!";
const paragraph = document.getElementsByClassName("paragraph");

for (let i in paragraph) {
    paragraph[i].style.fontSize = "12px";
};
