import type { PaginationParams } from "./pagination.type"

export type AdoptionStatus = 'pendiente' | 'aprovado' | 'rechazado' | 'completado'

export interface Adoption {
    id: string
    status: AdoptionStatus | null
    message: string | null
    statusMessage: string | null
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
        phone: string | null
        email: string
    }
}

export interface CreateAdoptionDTO {
    animalId: string
    message?: string
}

export interface UpdateAdoptionDTO {
    status?: AdoptionStatus
    statusMessage?: string
}

export interface AdoptionFilters extends PaginationParams {
    status?: AdoptionStatus
    userId?: string
    animalId?: string
}