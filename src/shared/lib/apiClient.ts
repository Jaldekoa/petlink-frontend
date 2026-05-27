const API_URL = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, "") ?? ""

const getAuthHeader = () => ({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
})

const parseResponse = async <T>(res: Response): Promise<T> => {
    if (res.status === 204) return undefined as T

    const text = await res.text()
    if (!text) return undefined as T

    try {
        return JSON.parse(text) as T
    } catch {
        return text as T
    }
}

const getErrorMessage = (data: unknown) => {
    if (data && typeof data === "object") {
        const errorData = data as { error?: unknown; message?: unknown }

        if (typeof errorData.error === "string") return errorData.error
        if (typeof errorData.message === "string") return errorData.message
    }

    if (typeof data === "string" && data) return data

    return "Error en la petición"
}

const request = async <T>(
    endpoint: string,
    options: RequestInit = {},
): Promise<T> => {
    const res = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers: {
            ...getAuthHeader(),
            ...options.headers,
        },
    })
    const data = await parseResponse<T>(res)

    if (!res.ok) throw new Error(getErrorMessage(data))

    return data
}

export const apiClient = {
    get: async <T>(endpoint: string): Promise<T> => {
        const res = await fetch(`${API_URL}${endpoint}`, {
            headers: getAuthHeader()
        })

        if (!res.ok) throw new Error(await res.json().then(d => d.error))
        return res.json()
    },

    post: async <T>(endpoint: string, body?: unknown): Promise<T> => {
        return request<T>(endpoint, {
            method: 'POST',
            body: body !== undefined ? JSON.stringify(body) : undefined
        })
    },

    put: async <T>(endpoint: string, body: unknown): Promise<T> => {
        return request<T>(endpoint, {
            method: 'PUT',
            body: JSON.stringify(body)
        })
    },

    patch: async <T>(endpoint: string, body?: unknown): Promise<T> => {
        return request<T>(endpoint, {
            method: 'PATCH',
            body: body !== undefined ? JSON.stringify(body) : undefined
        })
    },

    delete: async (endpoint: string): Promise<void> => {
        const res = await fetch(`${API_URL}${endpoint}`, {
            method: 'DELETE',
            headers: getAuthHeader()
        })

        if (!res.ok) throw new Error(await res.json().then(d => d.error))
    }
}
