import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        user: null,
        returnUrl: '/auth/login',
    }),
    persist: true,
    actions: {
        logout() {
            this.user = null;
            localStorage.removeItem('user');
        }
    }
});