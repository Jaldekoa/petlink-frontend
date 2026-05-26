interface ReceivedMessageProps {
    msg?: string;
    receivedHour?: string;
}

export default function ReceivedMessage({
    msg = "¡Hola! Qué alegría que te intereses en Bruno. Es un perro muy especial y cariñoso. ¿Te gustaría saber algo más sobre su proceso de adopción?",
    receivedHour = "09:41 AM"
}: ReceivedMessageProps) {
    return (
        <div className="flex flex-col items-start max-w-[85%] group">
            <div
                className="bg-surface-container-low text-on-surface p-4 rounded-2xl rounded-tl-none shadow-sm transition-transform hover:scale-[1.01]">
                <p className="font-body-md text-body-md">{msg}</p>
            </div>
            <span className="text-label-sm font-label-sm text-on-surface-variant mt-1 ml-1">{receivedHour}</span>
        </div>
    )
}