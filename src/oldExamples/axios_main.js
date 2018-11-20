import Vue from  'vue';
import App from '@/axios_component.vue';

var MainCtrl = new Vue({
    el:'#main',
    data:{
        message:'Hello world'
    },
    components: { App }
})