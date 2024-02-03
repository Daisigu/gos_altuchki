export default defineNuxtRouteMiddleware(async (to, from) => {
    const {session} = await useSession()
    if(session.value.skufTestStatus === 'failed' && to.fullPath !=='/ban'){
        return navigateTo('/ban')
    }
})