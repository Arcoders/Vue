// Vanilla Javascript

const h1 = document.querySelector('h1');
const input = document.querySelector('input');

input.addEventListener('keyup', function(){
    h1.innerHTML = input.value;
});

input.addEventListener('keyup', () => h1.innerHTML = input.value);

new Vue({
  el: 'main',
  data: {
    mensaje: 'Hola mundo!',
  }
});
