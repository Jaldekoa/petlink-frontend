export default function DateDivider({ date }: { date: string }) {
    return (
        <div className="flex justify-center my-2">
            <span
                className="bg-surface-container-high px-4 py-1 rounded-full text-label-sm font-label-sm text-on-surface-variant">{date}</span>
        </div>
    )
}