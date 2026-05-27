import { apiClient } from "@/shared/lib/apiClient"
import type { PaginatedResponse } from "@/shared/types/pagination.type"
import type { CreateSponsorshipDTO, Sponsorship, SponsorshipFilters, UpdateSponsorshipDTO } from "@/shared/types/sponsorship.types"

export const getMySponsorships = (filters?: SponsorshipFilters) => {
    const query = filters ? '?' + new URLSearchParams(filters as any).toString() : ''
    return apiClient.get<PaginatedResponse<Sponsorship>>(`/sponsorships/me${query}`)
}

export const createSponsorship = (data: CreateSponsorshipDTO) =>
    apiClient.post<Sponsorship>('/sponsorships', data)

export const cancelSponsorship = (id: string) =>
    apiClient.patch<Sponsorship>(`/sponsorships/me/${id}/cancel`)


export const getSponsorships = (filters?: SponsorshipFilters) => {
    const query = filters ? '?' + new URLSearchParams(filters as any).toString() : ''
    return apiClient.get<PaginatedResponse<Sponsorship>>(`/sponsorships${query}`)
}

export const getSponsorshipById = (id: string) =>
    apiClient.get<Sponsorship>(`/sponsorships/${id}`)

export const updateSponsorship = (id: string, data: UpdateSponsorshipDTO) =>
    apiClient.put<Sponsorship>(`/sponsorships/${id}`, data)

export const deleteSponsorship = (id: string) =>
    apiClient.delete(`/sponsorships/${id}`)