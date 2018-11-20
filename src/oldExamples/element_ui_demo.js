import Vue from  'vue';
import App from '@/element_ui_demo.vue';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);

var MainCtrl = new Vue({
    el:'#main',
    data:{
        message:'Hello world'
    },
    components: { App }
})