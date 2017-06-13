Vue.component('clave', {
    props: ['clave'],
    template: `<input :value="clave" @input="comprobarClave($event.target.value)" ref="pass">`,
    methods: {
        comprobarClave(clave) {
            if (this.noValidas.includes(clave)) {
                this.$refs.pass.value = clave = null;
            }
            this.$emit('input', clave);
        }
    },
    data() {
        return {
            noValidas: ['abc', 'admin', '123456', 'root']
        };
    }
});

new Vue({
    el: 'main',
    data: {
        clave: 'Tikchbila'
    }
});
