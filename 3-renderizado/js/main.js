const vm = new Vue({
  el: 'main',
  data: {
    amigos: ['Abdou', 'Victor', 'Mariela', 'Mohammed'],
    tareas: [
      {nombre: 'Hacer la compra', prioridad: 'Baja'},
      {nombre: 'Aprender Vue y Firebase', prioridad: 'Alta'},
      {nombre: 'Ir al gimnasio', prioridad: 'Media'}
    ],
    persona: {
      nombre: 'Ismael',
      profession: 'Dev',
      ciudad: 'Valencia'
    }
  },
});
