import { createBrowserRouter, redirect } from "react-router";
import Home from "@features/home/home";
import Animals from "@features/animals/animals";
import Search from "@features/search/search";
import Chat from "@features/chat/chat";
import Profile from "@features/profile/profile";
import MainLayout from "@shared/layout/Layout";
import AuthGate from "@/features/auth/AuthGate";

import { isAuthenticated } from "@services/auth.service";

export async function mainLoader() {
  const hasAccess = isAuthenticated();

  if (!hasAccess) {
    return redirect("/login");
  }

  return hasAccess;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: "/animals",
    element: <MainLayout />,
    children: [{ index: true, element: <Animals /> }],
    loader: mainLoader,
  },
  {
    path: "/search",
    element: <MainLayout />,
    children: [{ index: true, element: <Search /> }],
  },
  {
    path: "/chat",
    element: <MainLayout />,
    children: [{ index: true, element: <Chat /> }],
    loader: mainLoader,
  },
  {
    path: "/profile",
    element: <MainLayout />,
    children: [{ index: true, element: <Profile /> }],
    loader: mainLoader,
  },

  {
    path: "/login",
    element: <MainLayout />,
    children: [{ index: true, element: <AuthGate /> }],
  },
]);

export default router;
