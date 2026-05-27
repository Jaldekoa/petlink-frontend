import { apiClient } from "@/shared/lib/apiClient";
import type { Like, ToggleLikeResponse } from "@/shared/types/like.types";

export const getMyLikes = () => apiClient.get<Like[]>("/api/likes/me");

export const toggleLike = (animalId: string) =>
  apiClient.post<ToggleLikeResponse>(`/likes/${animalId}`, {});

export const getLikeCount = (animalId: string) =>
  apiClient.get<number>(`/api/likes/${animalId}/count`);
