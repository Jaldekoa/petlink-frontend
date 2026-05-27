import type { PaginationParams } from "./pagination.type"

export interface ShelterMemberShelter {
    id: string
    name: string
    logoUrl: string | null
    city: string | null
    country: string | null
}

export interface ShelterMemberUser {
    id: string
    username: string
    fullName: string | null
    avatarUrl: string | null
}

export interface ShelterMember {
    id: string
    role: string | null
    createdAt: string
    shelter: ShelterMemberShelter
    user: ShelterMemberUser
}

export interface CreateShelterMemberDTO {
    shelterId: string
    userId: string
    role?: string
}

export interface UpdateShelterMemberDTO {
    role?: string
}

export interface ShelterMemberFilters extends PaginationParams {
    shelterId?: string
    userId?: string
    role?: string
}