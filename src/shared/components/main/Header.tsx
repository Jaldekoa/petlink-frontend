interface HeaderProps {
  notificationCount?: number;
}

export default function Header({ notificationCount = 5 }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-md shadow-sm">
      <div className="flex items-center px-margin-mobile py-base h-16 w-full max-w-7xl mx-auto">

        {/* Logo izquierda */}
        <div className="flex-1 flex items-center">
          <img src="./favicon.webp" alt="logo de Petlink" className="h-8 w-8 object-contain" />
        </div>

        {/* Título centro */}
        <h1 className="font-headline-md text-headline-md text-primary font-extrabold tracking-tight">
          Petlink
        </h1>

        {/* Acciones derecha */}
        <div className="flex-1 flex items-center justify-end gap-2">
          <button className="relative p-2 text-primary hover:bg-surface-container-high rounded-full transition-colors active:scale-90 duration-200">
            <span className="material-symbols-outlined">notifications</span>
            {notificationCount > 0 && (
              <span className="absolute top-1 right-1 min-w-4 h-4 px-0.5 bg-primary text-on-primary text-[10px] font-label-sm rounded-full flex items-center justify-center leading-none">
                {notificationCount > 99 ? "99+" : notificationCount}
              </span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
}