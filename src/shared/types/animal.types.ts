import type { PaginationParams } from "./pagination.type"

export type AnimalSex = 'male' | 'female'
export type AnimalStatus = 'available' | 'reserved' | 'adopted' | 'medical_hold'

export interface AnimalImage {
  id: string
  animalId: string
  imageUrl: string
  isMain: boolean | null
  createdAt: string
}

export interface Animal {
  id: string
  shelterId: string
  name: string
  species: string
  breed: string | null
  sex: AnimalSex | null
  birthDate: string | null
  weight: number | null
  description: string | null
  status: AnimalStatus | null
  vaccinated: boolean | null
  sterilized: boolean | null
  goodWithAnimals: boolean | null
  goodWithKids: boolean | null
  energyLevel: string | null
  arrivalDate: string | null
  createdAt: string
  updatedAt: string
  images: AnimalImage[]
  shelter: {
    name: string
    city: string | null
  }
}

export interface CreateAnimalDTO {
  shelterId: string
  name: string
  species: string
  breed?: string
  sex?: AnimalSex
  birthDate?: string
  weight?: number
  description?: string
  vaccinated?: boolean
  sterilized?: boolean
  goodWithAnimals?: boolean
  goodWithKids?: boolean
  energyLevel?: string
}

export interface UpdateAnimalDTO extends Partial<CreateAnimalDTO> {
  status?: AnimalStatus
}

export interface AnimalFilters extends PaginationParams {
  species?: string
  status?: AnimalStatus
  shelterId?: string
  sex?: AnimalSex
  goodWithKids?: boolean
  goodWithAnimals?: boolean
}