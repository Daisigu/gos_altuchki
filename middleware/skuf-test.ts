export default defineNuxtRouteMiddleware(async (to, from) => {
    const {session, refresh, update, reset} = await useSession()
    if (session.value?.skufTestStatus === 'success') {
        return navigateTo('/waiting-altuchka-room')
    }
})