const h1 = document.createElement('h1');
h1.innerText = 'Type into the input to make this text change';

const input = document.createElement('input');
input.setAttribute('type', 'text');

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener('change', function() {
  console.log(input.value);
  h1.innerText = `You entered the value: ${input.value}`;
});
