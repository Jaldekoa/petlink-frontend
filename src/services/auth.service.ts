import type { AuthResponse, LoginDTO, RegisterDTO } from "@/shared/types/auth.types"

const API_URL = import.meta.env.VITE_API_URL

export const login = async (data: LoginDTO): Promise<AuthResponse> => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  if (!res.ok) throw new Error(await res.json().then(d => d.error))
  return res.json()
}

export const register = async (data: RegisterDTO): Promise<{ message: string }> => {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  if (!res.ok) throw new Error(await res.json().then(d => d.error))
  return res.json()
}
