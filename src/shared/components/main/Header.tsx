interface HeaderProps {
  notificationCount?: number;
  onOpenNotifications?: () => void;
}

export default function Header({
  notificationCount,
  onOpenNotifications,
}: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/90  backdrop-blur-md shadow-sm">
      <div className="flex justify-between items-center px-margin-mobile py-base h-16 w-full max-w-7xl mx-auto">
        <div className="flex items-center">
          <img
            src="/favicon.webp"
            alt="logo de Petlink"
            className="h-8 w-8 object-contain"
          />
        </div>

        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-headline-md text-headline-md-mobile md:text-headline-md text-primary font-extrabold tracking-tight">
          Petlink
        </h1>

        <div className="relative flex items-center gap-2">
          <button
            onClick={onOpenNotifications}
            aria-label={
              notificationCount && notificationCount > 0
                ? `${notificationCount} notificaciones sin leer`
                : "Ver notificaciones"
            }
            className="material-symbols-outlined p-2 text-primary hover:bg-surface-container-high rounded-full transition-colors active:scale-90 duration-200"
          >
            <span
              className="material-symbols-outlined"
              style={{
                fontVariationSettings:
                  notificationCount && notificationCount > 0
                    ? "'FILL' 1"
                    : "'FILL' 0",
                color:
                  notificationCount && notificationCount > 0
                    ? "var(--color-primary)"
                    : undefined,
              }}
            >
              notifications
            </span>

            {notificationCount && (
              <span className="absolute top-1 right-1 min-w-4 h-4 px-0.5 bg-primary text-on-primary text-[10px] font-label-sm rounded-full flex items-center justify-center leading-none">
                {notificationCount > 99 ? "+99" : notificationCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
