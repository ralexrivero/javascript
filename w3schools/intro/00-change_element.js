document.getElementById('header').innerHTML = 'Hello JavaScript!';
const paragraph = document.getElementsByClassName('paragraph');

for (let i = 0; i < paragraph.length; i++) {
  paragraph[i].style.fontSize = '12px';
}

const turnOn = document.getElementById('turn-on');
const turnOff = document.getElementById('turn-off');

turnOn.addEventListener('click', function () {
  document.getElementById('change-image').src = './pic_bulbon.gif';
});

turnOff.addEventListener('click', function () {
  document.getElementById('change-image').src = './pic_bulboff.gif';
});

function funSwitchPar () {
  const par = document.getElementById('paragraph_display');
  if (par.style.display === 'block') {
    par.style.display = 'none';
  } else {
    par.style.display = 'block';
  }
}
const btnSwitch = document.getElementById('btn_display');
btnSwitch.addEventListener('click', funSwitchPar);

function funChangeText () {
  document.getElementById('change_paragraph').innerHTML = 'Paragraph has been changed successfully';
}

let count = 0;

const clickCount = document.getElementById('btn_counter');
clickCount.addEventListener('click', function () {
  count += 1;
  document.getElementById('counter').innerHTML = `Total: ${count}`;
});
