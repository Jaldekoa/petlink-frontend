import { Link } from 'react-router'

export default function ButtonNavigation({ title, icon, href }: { title: string, icon: string, href: string }) {
    return (
        <Link to={href}
            className="w-full flex items-center justify-between p-5 bg-white rounded-4xl shadow-sm hover:bg-surface-container-low transition-all active:scale-95 group">
            <div className="flex items-center gap-4">
                <div
                    className="w-12 h-12 rounded-full bg-secondary-container/50 flex items-center justify-center group-hover:bg-secondary-container transition-colors">
                    <span className="material-symbols-outlined text-secondary"
                        data-icon={icon}>{icon}</span>
                </div>
                <span className="font-label-md text-label-md text-on-surface">{title}</span>
            </div>
            <span className="material-symbols-outlined text-outline" data-icon="chevron_right">chevron_right</span>
        </Link>
    )
}