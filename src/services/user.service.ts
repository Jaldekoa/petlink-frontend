import { apiClient } from "@/shared/lib/apiClient"
import type { PaginatedResponse } from "@/shared/types/pagination.type"
import type { CreateUserDTO, UpdateUserAdminDTO, UpdateUserDTO, User, UserFilters } from "@/shared/types/user.types"

export const getMe = () =>
    apiClient.get<User>('/users/me')

export const updateMe = (data: UpdateUserDTO) =>
    apiClient.put<User>('/users/me', data)

export const deleteMe = () =>
    apiClient.delete('/users/me')

export const getUsers = (filters?: UserFilters) => {
    const query = filters ? '?' + new URLSearchParams(filters as any).toString() : ''
    return apiClient.get<PaginatedResponse<User>>(`/users${query}`)
}

export const getUserById = (id: string) =>
    apiClient.get<User>(`/users/${id}`)

export const createUser = (data: CreateUserDTO) =>
    apiClient.post<User>('/users', data)

export const updateUser = (id: string, data: UpdateUserAdminDTO) =>
    apiClient.put<User>(`/users/${id}`, data)

export const deleteUser = (id: string) =>
    apiClient.delete(`/users/${id}`)