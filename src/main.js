import Vue from 'vue';
import App from '@/components/app/app.vue'
import router from '@/router';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element, {size: 'medium'});

const app = new Vue({
    el: '#app',
    router, 
    render: h => h(App)
});
