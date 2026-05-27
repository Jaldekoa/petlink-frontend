import { apiClient } from "@/shared/lib/apiClient"
import type { AppNotification, NotificationFilters } from "@/shared/types/notification.types"
import type { PaginatedResponse } from "@/shared/types/pagination.type"


export const getMyNotifications = (filters?: NotificationFilters) => {
    const params = new URLSearchParams()

    if (filters?.page !== undefined) params.set('page', String(filters.page))
    if (filters?.limit !== undefined) params.set('limit', String(filters.limit))
    if (filters?.search) params.set('search', filters.search)
    if (filters?.isRead !== undefined) params.set('isRead', String(filters.isRead))

    const query = params.size ? `?${params.toString()}` : ''
    return apiClient.get<PaginatedResponse<AppNotification>>(`/notifications${query}`)
}

export const markAsRead = (id: string) =>
    apiClient.patch<AppNotification>(`/notifications/${id}/read`)

export const markAllAsRead = () =>
    apiClient.patch<void>('/notifications/read-all')

export const deleteNotification = (id: string) =>
    apiClient.delete(`/notifications/${id}`)

export const deleteAllNotifications = () =>
    apiClient.delete('/notifications/all')
