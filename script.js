const input = document.getElementById('inputContador');
const counter = document.getElementById('counter');

input.addEventListener('input', updateCounter); //Cada vez que hay un cambio en el textarea, se cambia actualiza la cantidad de chars

function updateCounter() {
  const text = input.value;
  const characterCount = text.length;
  counter.textContent = characterCount + ' caracteres';
}
