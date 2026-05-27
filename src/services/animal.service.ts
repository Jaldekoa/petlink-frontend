import { apiClient } from "@/shared/lib/apiClient"
import type { Animal, AnimalFilters, AnimalImage, CreateAnimalDTO, UpdateAnimalDTO } from "@/shared/types/animal.types"
import type { PaginatedResponse } from "@/shared/types/pagination.type"

export const getAnimals = (filters?: AnimalFilters) => {
    const query = filters ? '?' + new URLSearchParams(filters as any).toString() : ''
    return apiClient.get<PaginatedResponse<Animal>>(`/animals${query}`)
}

export const getAnimalById = (id: string) =>
    apiClient.get<Animal>(`/animals/${id}`)

export const createAnimal = (data: CreateAnimalDTO) =>
    apiClient.post<Animal>('/animals', data)

export const updateAnimal = (id: string, data: UpdateAnimalDTO) =>
    apiClient.patch<Animal>(`/animals/${id}`, data)

export const deleteAnimal = (id: string) =>
    apiClient.delete(`/animals/${id}`)

// Imágenes
export const getAnimalImages = (animalId: string) =>
    apiClient.get<AnimalImage[]>(`/animals/${animalId}/images`)

export const addAnimalImage = (animalId: string, data: { imageUrl: string, isMain?: boolean }) =>
    apiClient.post<AnimalImage>(`/animals/${animalId}/images`, data)

export const deleteAnimalImage = (animalId: string, imageId: string) =>
    apiClient.delete(`/animals/${animalId}/images/${imageId}`)

export const setMainImage = (animalId: string, imageId: string) =>
    apiClient.patch<AnimalImage>(`/animals/${animalId}/images/${imageId}/main`)