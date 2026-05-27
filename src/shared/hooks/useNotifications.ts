import { useEffect, useState } from 'react'
import { useSocket } from './useSocket'
import {
  getMyNotifications,
  markAllAsRead as markAllAsReadRequest,
  markAsRead as markAsReadRequest,
} from '@/services/notification.service'
import type { AppNotification } from '../types/notification.types'

export const useNotifications = (userId?: string) => {
  const [notifications, setNotifications] = useState<AppNotification[]>([])
  const { connect } = useSocket()
  const notificationCount = notifications.filter(n => !n.isRead).length

  useEffect(() => {
    const load = async () => {
      const result = await getMyNotifications()
      setNotifications(result.data)
    }

    load()
  }, [])

  useEffect(() => {
    if (!userId) return

    const activeSocket = connect(userId)

    activeSocket?.on('notification', (notification: AppNotification) => {
      setNotifications(prev => [notification, ...prev])
    })

    return () => {
      activeSocket?.off('notification')
    }
  }, [connect, userId])

  const markAsRead = async (id: string) => {
    const updated = await markAsReadRequest(id)
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === id ? updated : notification,
      ),
    )
  }

  const markAllAsRead = async () => {
    await markAllAsReadRequest()
    setNotifications(prev =>
      prev.map(notification => ({
        ...notification,
        isRead: true,
      })),
    )
  }

  return { notifications, notificationCount, markAsRead, markAllAsRead }
}
