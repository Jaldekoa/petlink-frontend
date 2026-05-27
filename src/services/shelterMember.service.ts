import { apiClient } from "@/shared/lib/apiClient"
import type { PaginatedResponse } from "@/shared/types/pagination.type"
import type { CreateShelterMemberDTO, ShelterMember, ShelterMemberFilters, UpdateShelterMemberDTO } from "@/shared/types/seltherMember.type"

export const getShelterMembers = (filters?: ShelterMemberFilters) => {
    const query = filters ? '?' + new URLSearchParams(filters as any).toString() : ''
    return apiClient.get<PaginatedResponse<ShelterMember>>(`/shelter-members${query}`)
}

export const getShelterMemberById = (id: string) =>
    apiClient.get<ShelterMember>(`/shelter-members/${id}`)

export const getMembersByShelter = (shelterId: string) =>
    apiClient.get<ShelterMember[]>(`/shelter-members/shelter/${shelterId}`)

export const getSheltersByUser = (userId: string) =>
    apiClient.get<ShelterMember[]>(`/shelter-members/user/${userId}`)

export const createShelterMember = (data: CreateShelterMemberDTO) =>
    apiClient.post<ShelterMember>('/shelter-members', data)

export const updateShelterMember = (id: string, data: UpdateShelterMemberDTO) =>
    apiClient.put<ShelterMember>(`/shelter-members/${id}`, data)

export const deleteShelterMember = (id: string) =>
    apiClient.delete(`/shelter-members/${id}`)