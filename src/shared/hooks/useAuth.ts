export const useAuth = () => {
    const getToken = () => localStorage.getItem('token')

    const setToken = (token: string) => localStorage.setItem('token', token)

    const removeToken = () => localStorage.removeItem('token')

    const getAuthHeader = () => ({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getToken()}`
    })

    const isAuthenticated = () => !!getToken()

    return { getToken, setToken, removeToken, getAuthHeader, isAuthenticated }
}