interface HeaderProps {
  unreadCount?: number;
  onOpenNotifications?: () => void;
}

export default function Header({ unreadCount = 0, onOpenNotifications }: HeaderProps) {
  return (
    <header className="top-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-md shadow-sm">
      <div className="flex items-center px-margin-mobile py-base h-16 w-full max-w-7xl mx-auto">

        {/* Logo */}
        <div className="flex-1 flex items-center">
          <img src="./favicon.webp" alt="Logo de Petlink" className="h-8 w-8 object-contain" />
        </div>

        {/* Title */}
        <h1 className="font-headline-md text-headline-md text-primary font-extrabold tracking-tight">
          Petlink
        </h1>

        {/* Actions */}
        <div className="flex-1 flex items-center justify-end">
          <button
            onClick={onOpenNotifications}
            aria-label={
              unreadCount > 0
                ? `${unreadCount} notificaciones sin leer`
                : "Ver notificaciones"
            }
            className="
              relative p-2 text-on-surface-variant
              hover:bg-surface-container-high hover:text-primary
              rounded-full transition-all duration-200
              active:scale-90 cursor-pointer
            "
          >
            <span
              className="material-symbols-outlined text-[24px]"
              style={{
                fontVariationSettings: unreadCount > 0 ? "'FILL' 1" : "'FILL' 0",
                color: unreadCount > 0 ? "var(--color-primary)" : undefined,
              }}
            >
              notifications
            </span>

            {unreadCount > 0 && (
              <span className="
                absolute top-1 right-1
                min-w-[16px] h-[16px] px-[3px]
                bg-primary text-on-primary
                text-[10px] font-semibold leading-none
                rounded-full flex items-center justify-center
              ">
                {unreadCount > 99 ? "99+" : unreadCount}
              </span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
}
