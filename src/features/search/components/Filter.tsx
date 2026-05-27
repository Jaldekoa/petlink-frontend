interface FilterProps {
  title: string;
  icon?: string;
  isActive?: boolean;
  onClick?: () => void;
}

export default function Filter({ title, icon, isActive = false, onClick }: FilterProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-label-md whitespace-nowrap shadow-md active:scale-95 transition-all ${
        isActive
          ? "bg-primary text-on-primary"
          : "bg-surface-container-high text-on-surface-variant hover:bg-surface-container"
      }`}
    >
      {icon && (
        <span className="material-symbols-outlined text-[20px]">{icon}</span>
      )}
      {title}
    </button>
  );
}
