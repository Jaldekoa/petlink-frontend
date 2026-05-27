import { useCallback, useState } from 'react'
import { io, Socket } from 'socket.io-client'

let socket: Socket | undefined

export const useSocket = () => {
    const [currentSocket, setCurrentSocket] = useState(socket)

    const connect = useCallback((userId: string) => {
        if (socket?.connected) {
            socket.emit('join', userId)
            setCurrentSocket(socket)
            return socket
        }

        socket = io(import.meta.env.VITE_SOCKET_URL)
        socket.emit('join', userId)
        setCurrentSocket(socket)
        return socket
    }, [])

    const disconnect = useCallback(() => {
        socket?.disconnect()
        socket = undefined
        setCurrentSocket(undefined)
    }, [])

    return { socket: currentSocket, connect, disconnect }
}
