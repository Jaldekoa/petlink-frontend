import { apiClient } from "@/shared/lib/apiClient"
import type { Adoption, AdoptionFilters, CreateAdoptionDTO, UpdateAdoptionDTO } from "@/shared/types/adoption.types"
import type { PaginatedResponse } from "@/shared/types/pagination.type"

export const getMyAdoptions = (filters?: AdoptionFilters) => {
    const query = filters ? '?' + new URLSearchParams(filters as any).toString() : ''
    return apiClient.get<PaginatedResponse<Adoption>>(`/adoptions/me${query}`)
}

export const createAdoption = (data: CreateAdoptionDTO) =>
    apiClient.post<Adoption>('/adoptions', data)

export const getAdoptions = (filters?: AdoptionFilters) => {
    const query = filters ? '?' + new URLSearchParams(filters as any).toString() : ''
    return apiClient.get<PaginatedResponse<Adoption>>(`/adoptions${query}`)
}

export const getAdoptionById = (id: string) =>
    apiClient.get<Adoption>(`/adoptions/${id}`)

export const updateAdoption = (id: string, data: UpdateAdoptionDTO) =>
    apiClient.put<Adoption>(`/adoptions/${id}`, data)

export const deleteAdoption = (id: string) =>
    apiClient.delete(`/adoptions/${id}`)