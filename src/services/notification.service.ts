import { apiClient } from "@/shared/lib/apiClient"
import type { NotificationFilters } from "@/shared/types/notification.types"
import type { PaginatedResponse } from "@/shared/types/pagination.type"


export const getMyNotifications = (filters?: NotificationFilters) => {
    const query = filters ? '?' + new URLSearchParams(filters as any).toString() : ''
    return apiClient.get<PaginatedResponse<Notification>>(`/notifications${query}`)
}

export const markAsRead = (id: string) =>
    apiClient.patch<Notification>(`/notifications/${id}/read`)

export const markAllAsRead = () =>
    apiClient.patch<void>('/notifications/read-all')

export const deleteNotification = (id: string) =>
    apiClient.delete(`/notifications/${id}`)

export const deleteAllNotifications = () =>
    apiClient.delete('/notifications/all')