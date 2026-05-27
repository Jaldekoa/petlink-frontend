import type { UserRole } from './user.types'

export interface LoginDTO {
    email: string
    password: string
}

export interface RegisterDTO {
    username: string
    email: string
    password: string
    passwordRepeat: string
    fullName?: string
    phone?: string
}

export interface AuthResponse {
    message: string
    token: string
}

export interface TokenPayload {
    userId: string
    email: string
    role: UserRole
    username: string
}