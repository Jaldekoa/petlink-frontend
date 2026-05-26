interface FilterProps {
    title: string;
    icon?: string;
}

export default function Filter({ title, icon }: FilterProps) {
    return (
        <button
            className="flex items-center gap-2 px-6 py-2.5 bg-primary text-on-primary rounded-full font-label-md whitespace-nowrap shadow-md active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-[20px]">{icon}</span> {title}
        </button>
    )
}