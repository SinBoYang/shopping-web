import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

import TheLogin from './components/views/TheLogin.vue';
import TheRegister from './components/views/TheRegister.vue';
import TheProducts from './components/views/TheProduct.vue';
import TheCart from './components/views/TheCart.vue';
import TheHome from './components/views/TheHome.vue'; // 引入首頁組件

const app = createApp(App);
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: TheHome }, // 設置首頁路由
        { path: '/login', component: TheLogin },
        { path: '/register', component: TheRegister },
        { path: '/products', component: TheProducts },
        { path: '/cart', component: TheCart }
    ]
});
app.use(router);
app.mount('#app');

