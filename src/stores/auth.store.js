import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        user: null,
        returnUrl: '/auth/login',
    }),
    getters: {
        IsLoggedIn() {
            return this.user? true: false;
        },
      },
    persist: true,
    actions: {
        logout() {
            this.user = null;
            localStorage.removeItem('user');
        }
    }
});