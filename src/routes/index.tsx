import { createBrowserRouter, redirect } from "react-router";
import Home from "@features/home/home";
import Animals from "@features/animals/animals";
import Search from "@features/search/search";
import Chat from "@features/chat/chat";
import Profile from "@features/profile/profile";
import MainLayout from "@shared/layout/Layout";

import AnimalProfile from "@/features/animal-profile/animalProfile";
import AuthGate from "@/features/auth/AuthGate";
import { isAuthenticated } from "@services/auth.service";

// === Dashboard ===
import DashboardLayout from "@shared/layout/DashboardLayout";
import DashboardHome from "@/features/shelter-dashboard/DashboardHome";
import SheltersManagement from "@/features/shelter-dashboard/shelters/SheltersManagement";
import AnimalsManagement from "@/features/shelter-dashboard/animals/animal";
import UsersManagement from "@/features/shelter-dashboard/users/users";
import RequestsManagement from "@/features/shelter-dashboard/requests/request";
import SponsorshipsManagement from "@/features/shelter-dashboard/sponsorships/sponsorship";
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
    path: "/animals/:animalId",
    element: <MainLayout />,
    children: [{ index: true, element: <AnimalProfile /> }],
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
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    loader: mainLoader,
    children: [
      { index: true, element: <DashboardHome /> },
      { path: "shelters", element: <SheltersManagement /> },
      { path: "animals", element: <AnimalsManagement /> },
      { path: "users", element: <UsersManagement /> },
      { path: "requests", element: <RequestsManagement /> },
      { path: "sponsorships", element: <SponsorshipsManagement /> },
    ],
  },

]);

export default router;
