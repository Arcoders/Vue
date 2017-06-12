Vue.component('lista-tareas', {
    template: `
                <div>
                    <h1><slot></slot></h1>
                    <ul>
                        <tarea v-for="tarea in tareas" :tarea="tarea"></tarea>
                    </ul>
                    <hr>
                </div>
              `,
    data() {
        return {
            tareas: [
                'Finalizar sección Componentes',
                'Iniciar workflow con Vue CLI y webpack',
                'Terminar de estudiar la documnentación de Vue',
                'Seguir jugando con Vue Router y grabar el primer vídeo'
            ]
        };
    }
});

Vue.component('tarea', {
    props: ['tarea'],
    template: `<li>{{ tarea }}</li>`
});

Vue.component('contacto', {
    template: `
                <div>
                    <h2>Ismael Haytam</h2>
                    <a href="mailto:arcoders@gmail.com">Arcoder Contact</a>
                    <hr>
                </div>
              `
});

Vue.component('bio', {
    template: `
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              `
});

new Vue({
    el: 'main',
    data: {
        seleccionado: 'lista-tareas'
    }
});
