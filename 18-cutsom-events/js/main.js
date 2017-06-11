Vue.component('alerta', {
    props: ['tipo', 'posicion'],
    template: `
                <section class="alerta" :class="[tipo, posicion]">
                <header class="alerta_header">
                    <a href="#" @click="ocultarModal">Cerrar</a>
                    <slot name="header">
                    Hola
                    </slot>
                </header>
                <div class="alerta_contenido">
                    <slot>
                    lorem ipsum dolor sit amet, cuerpo de la alerta y ...
                    </slot>
                </div>
                <footer class="alerta_footer">
                    <slot name="footer">
                    Este es el texto del footer
                    </slot>
                </footer>
                </section>
                `,
    methods: {
        ocultarModal() {
            this.$emit('ocultar');
        }
    }
});

new Vue({
    el: 'main',
    data: {
        mostrarExito: false,
        mostrarError: false,
        mostrarAdvertencia: false
    }
});
