import { apiClient } from "@/shared/lib/apiClient"
import type { PaginatedResponse } from "@/shared/types/pagination.type"
import type { CreateShelterDTO, Shelter, ShelterFilters, UpdateShelterDTO } from "@/shared/types/selther.type"

export const getShelters = (filters?: ShelterFilters) => {
    const query = filters ? '?' + new URLSearchParams(filters as any).toString() : ''
    return apiClient.get<PaginatedResponse<Shelter>>(`/shelters${query}`)
}

export const getShelterById = (id: string) =>
    apiClient.get<Shelter>(`/shelters/${id}`)

export const createShelter = (data: CreateShelterDTO) =>
    apiClient.post<Shelter>('/shelters', data)

export const updateShelter = (id: string, data: UpdateShelterDTO) =>
    apiClient.put<Shelter>(`/shelters/${id}`, data)

export const deleteShelter = (id: string) =>
    apiClient.delete(`/shelters/${id}`)