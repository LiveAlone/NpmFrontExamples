import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const User = {
  // 支持router 路由模板方式, 支持模板路由id 方式
  template: '<div class="user"><h2>User {{ $route.params.id }}</h2><router-view></router-view></div>'
};

const UserHome = { template: '<div>Home</div>' };
const UserProfile = { template: '<div>Profile</div>' };
const UserPosts = { template: '<div>Posts</div>' };

const router = new VueRouter({
  routes: [
    {
      path: '/user/:id', 
      component: User,
      children:[
        {path:'', component: UserHome},
        {path:'profile', component: UserProfile},
        {path:'Posts', component: UserPosts}
      ]
    }
  ]
});

const app = new Vue({router}).$mount('#app');
