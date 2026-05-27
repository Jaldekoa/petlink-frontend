import type { PaginationParams } from "./pagination.type"


export type UserRole = 'administrador' | 'usuario' | 'trabajador'

export interface User {
    id: string
    username: string
    email: string
    fullName: string | null
    role: UserRole
    description: string | null
    avatarUrl: string | null
    phone: string | null
    isVerified: boolean | null
    createdAt: string
    updatedAt: string
}

export interface CreateUserDTO {
    username: string
    email: string
    password: string
    fullName?: string
    phone?: string
}

export interface UpdateUserDTO {
    username?: string
    email?: string
    fullName?: string
    description?: string
    avatarUrl?: string
    phone?: string
}

export interface UpdateUserAdminDTO extends UpdateUserDTO {
    role?: UserRole
    isVerified?: boolean
}

export interface UserFilters extends PaginationParams {
    role?: UserRole
    isVerified?: boolean
}