import type { PaginationParams } from "./pagination.type"

export interface AppNotification {
    id: string
    title: string
    body: string | null
    isRead: boolean | null
    createdAt: string
}

export interface NotificationFilters extends PaginationParams {
    isRead?: boolean
}