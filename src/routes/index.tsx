import { createBrowserRouter, redirect } from "react-router";
import Home from "@features/home/home";
import Animals from "@features/animals/Animals";
import Search from "@features/search/search";
import Chat from "@features/chat/chat";
import Profile from "@features/profile/profile";
import MainLayout from "@shared/layout/Layout";
import AnimalProfile from "@/features/animal-profile/animalProfile";

export async function mainLoader() {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return redirect("/");
  }

  return isAuthenticated;
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
    path: "/animal-profile",
    element: <MainLayout />,
    children: [{ index: true, element: <AnimalProfile /> }],
    loader: mainLoader,
  },
]);

export default router;
