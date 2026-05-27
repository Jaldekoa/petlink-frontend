import type { PaginationParams } from "./pagination.type"

export type SponsorshipStatus = 'activo' | 'cancelado' | 'pausado'

export interface Sponsorship {
    id: string
    monthlyAmount: number
    status: SponsorshipStatus | null
    startDate: string | null
    endDate: string | null
    createdAt: string
    updatedAt: string
    animal: {
        id: string
        name: string
        species: string
        breed: string | null
        status: string | null
    }
    user: {
        id: string
        username: string
        fullName: string | null
        avatarUrl: string | null
        email: string
    }
}

export interface CreateSponsorshipDTO {
    animalId: string
    monthlyAmount: number
}

export interface UpdateSponsorshipDTO {
    status?: SponsorshipStatus
    monthlyAmount?: number
    endDate?: string
}

export interface SponsorshipFilters extends PaginationParams {
    status?: SponsorshipStatus
    userId?: string
    animalId?: string
}