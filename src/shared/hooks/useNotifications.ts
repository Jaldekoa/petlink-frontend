import { useState, useCallback, useEffect } from "react";

// ── Types ────────────────────────────────────────────────────────────────────

export type NotificationType = "adoption" | "sponsorship" | "message" | "system";

export interface Notification {
  id: string;
  title: string;
  body: string;
  isRead: boolean;
  createdAt: string; // ISO string
  type: NotificationType;
}

// ── Mock data (representa lo que enviará el backend) ─────────────────────────

const now = Date.now();
const ago = (ms: number) => new Date(now - ms).toISOString();
const min = 60_000;
const hr  = 3_600_000;
const day = 86_400_000;

const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: "notif-1",
    title: "Solicitud de adopción aprobada",
    body: "Tu solicitud para adoptar a Nala ha sido aprobada. Contacta con la protectora para los siguientes pasos.",
    isRead: false,
    createdAt: ago(25 * min),
    type: "adoption",
  },
  {
    id: "notif-2",
    title: "Mensaje de la protectora",
    body: "La Protectora Madrid tiene novedades sobre tu apadrinado Mochi. Revisa tu chat.",
    isRead: false,
    createdAt: ago(2 * hr),
    type: "message",
  },
  {
    id: "notif-3",
    title: "Pago de apadrinamiento procesado",
    body: "El pago mensual de 15 € por Kira se ha realizado correctamente. ¡Gracias por tu apoyo!",
    isRead: false,
    createdAt: ago(5 * hr),
    type: "sponsorship",
  },
  {
    id: "notif-4",
    title: "¡Nuevo animal disponible!",
    body: "Max, un golden de 3 años, acaba de llegar a la Protectora Valencia. ¡Puede ser tu compañero!",
    isRead: false,
    createdAt: ago(1 * day),
    type: "system",
  },
  {
    id: "notif-5",
    title: "Recordatorio de apadrinamiento",
    body: "Tu apadrinamiento de Luna se renueva en 5 días. Asegúrate de tener saldo suficiente.",
    isRead: true,
    createdAt: ago(2 * day),
    type: "sponsorship",
  },
  {
    id: "notif-6",
    title: "Solicitud de adopción recibida",
    body: "Hemos recibido tu solicitud para adoptar a Bruno. Te notificaremos cuando sea revisada.",
    isRead: true,
    createdAt: ago(3 * day),
    type: "adoption",
  },
];

// ── Storage ──────────────────────────────────────────────────────────────────

const STORAGE_KEY = "petlink_notifications";

function loadFromStorage(): Notification[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return MOCK_NOTIFICATIONS;
    return JSON.parse(raw) as Notification[];
  } catch {
    return MOCK_NOTIFICATIONS;
  }
}

function saveToStorage(notifications: Notification[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notifications));
  } catch {
    // ignore storage errors
  }
}

// ── Hook ─────────────────────────────────────────────────────────────────────

export function useNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>(loadFromStorage);

  useEffect(() => {
    saveToStorage(notifications);
  }, [notifications]);

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const markAsRead = useCallback((id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
    );
  }, []);

  const markAllAsRead = useCallback(() => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
  }, []);

  // Simulate receiving a new notification from the backend (WebSocket event)
  const pushNotification = useCallback((notif: Omit<Notification, "id" | "createdAt">) => {
    const newNotif: Notification = {
      ...notif,
      id: `notif-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    setNotifications((prev) => [newNotif, ...prev]);
  }, []);

  return { notifications, unreadCount, markAsRead, markAllAsRead, pushNotification };
}
