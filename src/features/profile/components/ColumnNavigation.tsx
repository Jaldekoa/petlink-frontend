import ButtonNavigation from "./ButtonNavigation"

export default function ColumnNavigation({ columnList }: { columnList: Record<string, string>[] }) {
    return (
        <div className="space-y-4">
            {columnList.map(el => <ButtonNavigation title={el.title} icon={el.icon} href={el.href} />)}
        </div>
    )
}