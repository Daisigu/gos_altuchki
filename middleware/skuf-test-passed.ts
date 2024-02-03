export default defineNuxtRouteMiddleware(async (to, from) => {
    const {session, refresh, update, reset} = await useSession()
    if (!session.value.order) {
        update({order: Math.floor(Math.random() * (200000 - 100000 + 1)) + 100000})
    }
    if (session.value.skufTestStatus !== 'success') {
        return abortNavigation()
    }
})