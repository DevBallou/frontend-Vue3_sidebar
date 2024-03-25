import axios from 'axios';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore("auth", {
    state: () => ({
        token: localStorage.getItem('accessToken') || null,
    }),
    getters: {
        loggedIn: (state) => state.token !== null,
    },
    actions: {
        async handleLogin(data) {
            axios.post('/login', {
                email: data.email,
                password: data.password,
            }).then(res => {
                localStorage.setItem('accessToken', res.data.data.access_token)

                console.log(res.data.data.access_token)
            }).catch(error => {
                console.log(error)
            });
            this.router.push({ name: 'Home' });
        },
        async handleLogout() {
            localStorage.clear();
            this.token = null
            console.log('logout');
            this.router.push({ name: 'Login' });
        }
    },
})