export const useSkufTestStore = defineStore("Skuf Test", () => {
    const isSkufTestModalOpen = ref(false)
    const handleSkufTestFailed = async () => {
        const {session, refresh, update, reset} = await useSession()
        update({skufTestStatus: 'failed'})
        return navigateTo('/ban')
    }
    const handleSkufTestSuccess = async () => {
        const {session, refresh, update, reset} = await useSession()
        update({skufTestStatus: 'success'})
        setTimeout(() => {
            return navigateTo('/waiting-altuchka-room')
        }, 5000)
    }
    return {
        isSkufTestModalOpen,
        handleSkufTestFailed,
        handleSkufTestSuccess
    }
});