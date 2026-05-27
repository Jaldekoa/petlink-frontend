import { useCallback } from 'react'
import { io, Socket } from 'socket.io-client'

let socket: Socket | undefined

export const useSocket = () => {
    const connect = useCallback((userId: string) => {
        if (socket?.connected) return
        socket = io(import.meta.env.VITE_SOCKET_URL)
        socket.emit('join', userId)
    }, [])

    const disconnect = useCallback(() => {
        socket?.disconnect()
    }, [])

    return { socket, connect, disconnect }
}
