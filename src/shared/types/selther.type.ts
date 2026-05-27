import type { PaginationParams } from "./pagination.type"

export interface Shelter {
    id: string
    name: string
    description: string | null
    email: string | null
    phone: string | null
    websiteUrl: string | null
    logoUrl: string | null
    coverImageUrl: string | null
    address: string | null
    city: string | null
    country: string | null
    latitude: number | null
    longitude: number | null
    verified: boolean | null
    verifiedAt: string | null
    createdAt: string
    updatedAt: string
}

export interface CreateShelterDTO {
    name: string
    description?: string
    email?: string
    phone?: string
    websiteUrl?: string
    address?: string
    city?: string
    country?: string
    latitude?: number
    longitude?: number
}

export interface UpdateShelterDTO extends Partial<CreateShelterDTO> { }

export interface ShelterFilters extends PaginationParams {
    city?: string
    country?: string
    verified?: boolean
}