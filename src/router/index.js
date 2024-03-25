import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuthStore } from '@/stores/auth';

const routes = [
    { path: '/', name: 'Home', component: HomeView, meta: { requiresAuth: true } },
    { path: "/login", name: 'Login', component: () => import("../components/LoginView.vue") },
    // { path: "/register", name: 'Register', component: () => import("../components/Register.vue") },
    { path: '/users', name: 'user', component: () => import('../views/UserView.vue'), meta: { requiresAuth: true } },
    { path: '/chauffeur', name: 'Chauffeur', component: () => import('../components/chauffeur/ChauffeurList.vue'), meta: { requiresAuth: true } },
    { path: '/vehicule', name: 'Vehicule', component: () => import('../components/vehicule/VehiculeList.vue'), meta: { requiresAuth: true } },
    { path: "/:pathMatch(.*)*", name: 'NotFound', component: () => import("../views/NotFound.vue") },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

router.beforeEach((to, from) => {
    if (to.meta.requiresAuth && !useAuthStore.loggedIn) {
        // need to login if not already logged in
        return { name: 'Login' }
    }
});

export default router
