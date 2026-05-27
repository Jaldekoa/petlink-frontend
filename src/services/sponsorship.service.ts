import { apiClient } from "@/shared/lib/apiClient";
import type { PaginatedResponse } from "@/shared/types/pagination.type";
import type {
  CreateSponsorshipDTO,
  Sponsorship,
  SponsorshipFilters,
  UpdateSponsorshipDTO,
} from "@/shared/types/sponsorship.types";

export const getMySponsorships = (filters?: SponsorshipFilters) => {
  const query = filters
    ? "?" + new URLSearchParams(filters as any).toString()
    : "";
  return apiClient.get<PaginatedResponse<Sponsorship>>(
    `/sponsorship/me${query}`,
  );
};

export const createSponsorship = (data: CreateSponsorshipDTO) =>
  apiClient.post<Sponsorship>("/sponsorship", data);

export const cancelSponsorship = (id: string) =>
  apiClient.patch<Sponsorship>(`/sponsorship/me/${id}/cancel`);

export const getSponsorships = (filters?: SponsorshipFilters) => {
  const query = filters
    ? "?" + new URLSearchParams(filters as any).toString()
    : "";
  return apiClient.get<PaginatedResponse<Sponsorship>>(`/sponsorship${query}`);
};

export const getSponsorshipById = (id: string) =>
  apiClient.get<Sponsorship>(`/sponsorship/${id}`);

export const updateSponsorship = (id: string, data: UpdateSponsorshipDTO) =>
  apiClient.put<Sponsorship>(`/sponsorship/${id}`, data);

export const deleteSponsorship = (id: string) =>
  apiClient.delete(`/sponsorship/${id}`);
