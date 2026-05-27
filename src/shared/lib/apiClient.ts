const API_URL = import.meta.env.VITE_API_URL

const getAuthHeader = () => ({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
})

export const apiClient = {
    get: async <T>(endpoint: string): Promise<T> => {
        const res = await fetch(`${API_URL}${endpoint}`, {
            headers: getAuthHeader()
        })
        if (!res.ok) throw new Error(await res.json().then(d => d.error))
        return res.json()
    },

    post: async <T>(endpoint: string, body: unknown): Promise<T> => {
        const res = await fetch(`${API_URL}${endpoint}`, {
            method: 'POST',
            headers: getAuthHeader(),
            body: JSON.stringify(body)
        })
        if (!res.ok) throw new Error(await res.json().then(d => d.error))
        return res.json()
    },

    put: async <T>(endpoint: string, body: unknown): Promise<T> => {
        const res = await fetch(`${API_URL}${endpoint}`, {
            method: 'PUT',
            headers: getAuthHeader(),
            body: JSON.stringify(body)
        })
        if (!res.ok) throw new Error(await res.json().then(d => d.error))
        return res.json()
    },

    patch: async <T>(endpoint: string, body?: unknown): Promise<T> => {
        const res = await fetch(`${API_URL}${endpoint}`, {
            method: 'PATCH',
            headers: getAuthHeader(),
            body: body ? JSON.stringify(body) : undefined
        })
        if (!res.ok) throw new Error(await res.json().then(d => d.error))
        return res.json()
    },

    delete: async (endpoint: string): Promise<void> => {
        const res = await fetch(`${API_URL}${endpoint}`, {
            method: 'DELETE',
            headers: getAuthHeader()
        })
        if (!res.ok) throw new Error(await res.json().then(d => d.error))
    }
}