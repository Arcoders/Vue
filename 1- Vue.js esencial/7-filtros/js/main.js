
Vue.filter('alreves', (valor) => valor.split('').reverse().join(''));

new Vue({
  el: 'main',
  data: {
    busqueda: '',
    minimo: 5,
    films: [{
      titulo: 'Trio mágico',
      genero: 'Cosas Guarras',
      puntuacion: 9
    },
    {
      titulo: 'El cojo batman',
      genero: 'Pelea',
      puntuacion: 7,
    },
    {
      titulo: 'Pequeño pero matón',
      genero: 'Risa',
      puntuacion: 10
    },
    {
      titulo: 'Drama y amor',
      genero: 'Bghini nbghik',
      puntuacion: 2
    }
  ]
  },
  computed: {
    mejoresFilms() {
      return this.films.filter((film) => film.puntuacion >= this.minimo);
    },
    buscarFilm() {
      return this.films.filter((film) => film.titulo.toLowerCase().includes(this.busqueda.toLowerCase()));
    }
  }
});
