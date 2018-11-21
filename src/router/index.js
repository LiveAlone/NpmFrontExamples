import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/commons/Home.vue';
import Main from '@/components/app/main.vue'
import Layout from '@/components/app/layout.vue'
import WebpackOfficialDocs from '@/components/webpack/officialDocs'

Vue.use(Router);

export default new Router({
    routes: [
        {path: '/', name: '首页', component: Home},
        {
            path: '/',
            component: Layout,
            children: [
                {path: '/main', name: '主页', component: Main},
                {path: '/webpack_official_docs', name: 'webpack官方文档内容', component: WebpackOfficialDocs},
                {path:'/*', name: '拦截', component: Main}
            ]
        }
    ]
});

