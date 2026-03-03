import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router';
import ProductsPage from './pages/ProductsPage.vue';
import ProductDetailsPage from './pages/ProductDetailsPage.vue';
import ShoppingCartPage from './pages/ShoppingCartPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';
import '/src/main.css';

createApp(App)
    .use(VueRouter.createRouter({
        history: VueRouter.createWebHistory(process.env.BASE_URL),
        routes: [
            { path: '/products', component: ProductsPage },
            { path: '/products/:id', component: ProductDetailsPage },
            { path: '/cart', component: ShoppingCartPage },
            {path: '/:pathMatch(.*)*', component: NotFoundPage },
        ]
    }))
    .mount('#app')
