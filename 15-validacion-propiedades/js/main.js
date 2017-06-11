Vue.component('candidato', {
    props: {
        nombre: {
            type: [String, Array],
            required: true
        },
        correo: {
            type: String,
            default: 'Arcoders@....'
        },
        imagen: String,
        location: {
            type: Object,
            default() {
                return {
                    Nacionalidad: 'Español'
                };
            }
        },
    },
    template: '#candidato-template'
});

new Vue({
    el: 'main',
    mounted() {
        this.obtenerCandidatos();
    },
    data: {
        candidatos: [],
    },
    methods: {
        obtenerCandidatos() {
            axios.get('https://randomuser.me/api/?results=10')
                 .then((respuesta) => {
                    this.candidatos = respuesta.data.results;
                 });
        }
    }
});
