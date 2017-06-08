
const vm = new Vue({
  el: 'main',
  data: {
    mensaje: 'Hola mundo',
    nuevaTarea: null,
    tareas: [
      'Aprender Vue.js',
      'Aprender ES6',
      'Publicar algo todos los días'
    ],
    masTareas: [
        {
          titulo: 'Aprender Vue.js ok-23',
          prioridad: true,
          antiguedad: 23
        },
        {
          titulo: 'Aprender ES6 no-135',
          prioridad: false,
          antiguedad: 135
        },
        {
          titulo: 'Publicar algo todos los días ok-378',
          prioridad: true,
          antiguedad: 378
        }
    ]
  },
  methods: {
    agregarTarea() {
      this.tareas.unshift(this.nuevaTarea);
      this.nuevaTarea = null;
    }
  },
  computed: {
    mensaje_al_reves() {
      return this.mensaje.split('').reverse().join('');
    },
    tareasConPrioridad() {
        return this.masTareas.filter((tarea) => tarea.prioridad);
    },
    tareasPorAntiguedad() {
      return this.masTareas.sort((a, b) => b.antiguedad - a.antiguedad);
    }
  }
});

// Vanilla Javascript

// function agregarTarea() {
//   const input = document.querySelector('input[type=text]');
//   vm.tareas.unshift(input.value);
//   input.value = '';
// }
