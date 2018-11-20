import Vue from  'vue';
import App from '@/vue_component_p.vue';

var MainCtrl = new Vue({
    el:'#main',
    data:{
        message:'Hello world'
    },
    components: { App }
})