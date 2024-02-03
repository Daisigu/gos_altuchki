export const useSkufTestStore = defineStore("Skuf Test", () => {
    const isSkufTestModalOpen = ref(false)
    const handleSkufTestFailed = () =>{
        navigateTo('/ban')
    }
    return {
        isSkufTestModalOpen,
        handleSkufTestFailed
    }
});