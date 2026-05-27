interface HeaderProps {
  notificationCount?: number;
  onOpenNotifications?: () => void;
}

export default function Header({
  notificationCount = 0,
  onOpenNotifications,
}: HeaderProps) {
  const hasNotifications = notificationCount > 0;

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
              hasNotifications
                ? `${notificationCount} notificaciones sin leer`
                : "Ver notificaciones"
            }
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-primary hover:bg-surface-container-high transition-colors active:scale-90 duration-200"
          >
            <span
              className="material-symbols-outlined text-[24px] leading-none"
              style={{
                fontVariationSettings:
                  hasNotifications ? "'FILL' 1" : "'FILL' 0",
                color: hasNotifications ? "var(--color-primary)" : undefined,
              }}
            >
              notifications
            </span>

            {hasNotifications && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-surface bg-primary px-1 text-[10px] font-label-sm leading-none text-on-primary shadow-sm">
                {notificationCount > 99 ? "+99" : notificationCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
