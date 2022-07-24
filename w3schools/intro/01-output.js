const mainTitle = document.getElementById('mainTitle');
mainTitle.innerHTML = '<h1>Main title from JavaScript</h1>';

const btnAlert = document.getElementById('btnAlert');
btnAlert.addEventListener('click', function () {
  window.alert('This an alert!');
});

console.log('Here!\nThis is a debugging message');

const printPage = document.getElementById('printPage');
printPage.addEventListener('click', function () {
  window.print();
});
