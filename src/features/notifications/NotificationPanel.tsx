import { useEffect } from "react";
import type { Notification, NotificationType } from "@/shared/hooks/useNotifications";

// ── Config ───────────────────────────────────────────────────────────────────

const TYPE_META: Record<NotificationType, { icon: string; color: string; bg: string }> = {
  adoption:    { icon: "pets",               color: "text-primary",     bg: "bg-primary/10"          },
  sponsorship: { icon: "volunteer_activism", color: "text-warm-orange", bg: "bg-warm-orange/10"      },
  message:     { icon: "chat",               color: "text-tertiary",    bg: "bg-tertiary/10"         },
  system:      { icon: "info",               color: "text-secondary",   bg: "bg-secondary/10"        },
};

function relativeTime(isoString: string): string {
  const diff = Date.now() - new Date(isoString).getTime();
  const min  = 60_000;
  const hr   = 3_600_000;
  const day  = 86_400_000;

  if (diff < min)        return "Ahora mismo";
  if (diff < hr)         return `Hace ${Math.floor(diff / min)} min`;
  if (diff < 2 * hr)     return "Hace 1 hora";
  if (diff < day)        return `Hace ${Math.floor(diff / hr)} horas`;
  if (diff < 2 * day)    return "Ayer";
  return `Hace ${Math.floor(diff / day)} días`;
}

// ── Props ────────────────────────────────────────────────────────────────────

interface NotificationPanelProps {
  open: boolean;
  onClose: () => void;
  notifications: Notification[];
  onMarkAsRead: (id: string) => void;
  onMarkAllAsRead: () => void;
}

// ── Component ────────────────────────────────────────────────────────────────

export default function NotificationPanel({
  open,
  onClose,
  notifications,
  onMarkAsRead,
  onMarkAllAsRead,
}: NotificationPanelProps) {
  const unread = notifications.filter((n) => !n.isRead);

  // Lock body scroll while open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  return (
    <>
      {/* ── BACKDROP ─────────────────────────────────────────────────────── */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-40 bg-black/40 backdrop-blur-sm
          transition-opacity duration-300
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        aria-hidden="true"
      />

      {/* ── PANEL ────────────────────────────────────────────────────────── */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Notificaciones"
        className={`
          fixed top-0 right-0 z-50 h-full
          w-[92vw] max-w-sm
          bg-surface flex flex-col
          shadow-2xl
          transition-transform duration-300 ease-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* ── HEADER ─────────────────────────────────────────────────────── */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-outline-variant/20 bg-surface-container-lowest flex-shrink-0">
          <div className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-[22px] text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              notifications
            </span>
            <h2 className="font-headline-sm text-headline-sm text-on-surface">
              Notificaciones
            </h2>
            {unread.length > 0 && (
              <span className="px-2 py-0.5 rounded-full bg-primary text-on-primary text-[11px] font-label-sm leading-none">
                {unread.length}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1">
            {unread.length > 0 && (
              <button
                onClick={onMarkAllAsRead}
                className="
                  flex items-center gap-1 px-2.5 py-1.5 rounded-xl
                  text-primary font-label-sm text-[12px]
                  hover:bg-primary/10 transition-colors cursor-pointer
                "
              >
                <span className="material-symbols-outlined text-[16px]">done_all</span>
                Todo visto
              </button>
            )}
            <button
              onClick={onClose}
              aria-label="Cerrar notificaciones"
              className="
                p-2 rounded-full text-on-surface-variant
                hover:bg-surface-container-high transition-colors cursor-pointer
              "
            >
              <span className="material-symbols-outlined text-[22px]">close</span>
            </button>
          </div>
        </div>

        {/* ── LIST ───────────────────────────────────────────────────────── */}
        <div className="flex-1 overflow-y-auto overscroll-contain">
          {notifications.length === 0 ? (
            <EmptyState />
          ) : (
            <ul className="divide-y divide-outline-variant/10">
              {notifications.map((notif) => (
                <NotificationItem
                  key={notif.id}
                  notif={notif}
                  onMarkAsRead={onMarkAsRead}
                />
              ))}
            </ul>
          )}
        </div>

        {/* ── FOOTER ─────────────────────────────────────────────────────── */}
        <div className="px-5 py-4 border-t border-outline-variant/10 bg-surface-container-lowest flex-shrink-0">
          <p className="text-center text-on-surface-variant font-body-sm text-[12px]">
            Las notificaciones se eliminan automáticamente tras 30 días
          </p>
        </div>
      </aside>
    </>
  );
}

// ── Sub-components ───────────────────────────────────────────────────────────

function NotificationItem({
  notif,
  onMarkAsRead,
}: {
  notif: Notification;
  onMarkAsRead: (id: string) => void;
}) {
  const { icon, color, bg } = TYPE_META[notif.type];

  return (
    <li
      className={`
        flex gap-3.5 px-5 py-4 transition-colors duration-150
        ${notif.isRead
          ? "bg-surface"
          : "bg-primary/[0.03] hover:bg-primary/[0.06]"
        }
      `}
    >
      {/* Icon */}
      <div className={`flex-shrink-0 w-10 h-10 rounded-full ${bg} flex items-center justify-center mt-0.5`}>
        <span
          className={`material-symbols-outlined text-[20px] ${color}`}
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          {icon}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 space-y-1">
        <div className="flex items-start justify-between gap-2">
          <p className={`font-body-md text-body-md leading-snug ${notif.isRead ? "text-on-surface-variant" : "text-on-surface font-semibold"}`}>
            {notif.title}
          </p>
          {/* Unread dot */}
          {!notif.isRead && (
            <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-1.5" />
          )}
        </div>

        <p className="text-on-surface-variant font-body-sm text-body-sm leading-relaxed line-clamp-2">
          {notif.body}
        </p>

        <div className="flex items-center justify-between pt-1">
          <span className="text-on-surface-variant font-label-sm text-[11px] tracking-wide">
            {relativeTime(notif.createdAt)}
          </span>

          {!notif.isRead && (
            <button
              onClick={() => onMarkAsRead(notif.id)}
              className="
                flex items-center gap-1 text-[11px] font-label-sm text-primary
                hover:underline transition-colors cursor-pointer
              "
            >
              <span className="material-symbols-outlined text-[14px]">check</span>
              Marcar como visto
            </button>
          )}
        </div>
      </div>
    </li>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6 py-20 text-center gap-4">
      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
        <span
          className="material-symbols-outlined text-[40px] text-primary"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          notifications_off
        </span>
      </div>
      <div className="space-y-1">
        <p className="font-headline-sm text-headline-sm text-on-surface">Sin notificaciones</p>
        <p className="text-on-surface-variant font-body-md text-body-md">Cuando ocurra algo importante, aparecerá aquí</p>
      </div>
    </div>
  );
}
