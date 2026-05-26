interface SentMessageProps {
    msg?: string;
    sentHour?: string;
}

export default function SentMessage({
    msg = "¡Hola! Sí, por favor. He visto que es muy amigable con otros perros. ¿Cómo se comporta en un departamento pequeño?",
    sentHour = "09:43 AM"
}: SentMessageProps) {
    return (
        <div className="flex flex-col items-end self-end max-w-[85%] group">
            <div
                className="bg-primary-container text-on-primary p-4 rounded-2xl rounded-tr-none shadow-md transition-transform hover:scale-[1.01]">
                <p className="font-body-md text-body-md">{msg}</p>
            </div>
            <div className="flex items-center gap-1 mt-1 mr-1">
                <span className="text-label-sm font-label-sm text-on-surface-variant">{sentHour}</span>
            </div>
        </div>
    )
}