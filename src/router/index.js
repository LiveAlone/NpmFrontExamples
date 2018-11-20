import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/commons/Home.vue';
import Main from '@/components/app/main.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {path: '/', name: '首页', component: Home},
        {path: '/main', name: '主页', component: Main}
    ]
});

