import type {TUser} from "~/types/user";

export const useUserStore = defineStore("User", () => {
    const user: Ref<TUser | null> = ref(null);
    const setUserInfo = (userInfo: TUser | null) => {
        return new Promise((resolve, reject) => {
            try {
                user.value = userInfo;
                resolve(userInfo);
            } catch (error) {
                reject(error);
            }
        });
    };
    return { user, setUserInfo };
});