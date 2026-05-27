import { useState } from "react";
import { Outlet } from "react-router";
import Header from "@shared/components/main/Header";
import NavBar from "@shared/components/main/NavBar";
import NotificationPanel from "@features/notifications/NotificationPanel";
import { useNotifications } from "@shared/hooks/useNotifications";

export default function MainLayout() {
  const [panelOpen, setPanelOpen] = useState(false);
  const { notifications, notificationCount, markAsRead, markAllAsRead } =
    useNotifications();

  return (
    <>
      <Header
        notificationCount={notificationCount}
        onOpenNotifications={() => setPanelOpen(true)}
      />

      <Outlet />

      <NavBar />

      <NotificationPanel
        open={panelOpen}
        onClose={() => setPanelOpen(false)}
        notifications={notifications}
        onMarkAsRead={markAsRead}
        onMarkAllAsRead={markAllAsRead}
      />
    </>
  );
}
