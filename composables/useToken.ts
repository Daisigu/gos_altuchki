export const useToken = () => {
    const clearToken = () => {
        return new Promise((resolve) => {
            token.value = null;
            resolve(true)
        })
    }
    const setToken = async (insertableToken: string) => {
        return new Promise((resolve) => {
            token.value = insertableToken;
            resolve(true)
        })
    }
    const token = useCookie('token')
    return {token, clearToken, setToken}
}