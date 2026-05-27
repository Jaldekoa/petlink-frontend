import { apiClient } from "@/shared/lib/apiClient";
import type {
  Animal,
  AnimalFilters,
  AnimalImage,
  CreateAnimalDTO,
  UpdateAnimalDTO,
} from "@/shared/types/animal.types";
import type { PaginatedResponse } from "@/shared/types/pagination.type";

export const getAnimals = (filters?: AnimalFilters) => {
  const query = filters
    ? "?" + new URLSearchParams(filters as any).toString()
    : "";
  return apiClient.get<PaginatedResponse<Animal>>(`/api/animals${query}`);
};

export const getAnimalById = (id: string) =>
  apiClient.get<Animal>(`/api/animals/${id}`);

export const createAnimal = (data: CreateAnimalDTO) =>
  apiClient.post<Animal>("/api/animals", data);

export const updateAnimal = (id: string, data: UpdateAnimalDTO) =>
  apiClient.patch<Animal>(`/api/animals/${id}`, data);

export const deleteAnimal = (id: string) =>
  apiClient.delete(`/api/animals/${id}`);

// Imágenes
export const getAnimalImages = (animalId: string) =>
  apiClient.get<AnimalImage[]>(`/api/animals/${animalId}/images`);

export const addAnimalImage = (
  animalId: string,
  data: { imageUrl: string; isMain?: boolean },
) => apiClient.post<AnimalImage>(`/api/animals/${animalId}/images`, data);

export const deleteAnimalImage = (animalId: string, imageId: string) =>
  apiClient.delete(`/api/animals/${animalId}/images/${imageId}`);

export const setMainImage = (animalId: string, imageId: string) =>
  apiClient.patch<AnimalImage>(
    `/api/animals/${animalId}/images/${imageId}/main`,
  );
