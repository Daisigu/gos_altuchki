import { useUserStore } from "~/stores/useUserStore";

export const useAuthStore = defineStore("Authorization", () => {
    const isAuth = computed(() => {
        return !!useUserStore().user;
    });
    return { isAuth };
});