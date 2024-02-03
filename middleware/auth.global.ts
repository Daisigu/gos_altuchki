import type {TUser} from "~/types/user";

export default defineNuxtRouteMiddleware(async () => {
    const token = useToken().token.value;
    if (!token || useUserStore().user) return;
    const user: TUser = {
        email: 'j124j124jasjf@mail.ru',
        name: 'test',
        id: 1,
    }
    await useUserStore().setUserInfo(user);
});