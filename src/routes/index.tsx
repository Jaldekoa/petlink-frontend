import { createBrowserRouter, redirect } from "react-router";
import { authUser } from "@services/auth.services";
import Home from "@features/home/home";
import Animals from "@features/animals/animals";
import Search from "@features/search/search";
import Chat from "@features/chat/chat";
import Profile from "@features/profile/profile";

export async function mainLoader() {
  const isAuthenticated = await authUser();

  if (!isAuthenticated) {
    return redirect("/");
  }

  return isAuthenticated;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/animals",
    element: <Animals />,
    loader: mainLoader,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/chat",
    element: <Chat />,
    loader: mainLoader,
  },
  {
    path: "/profile",
    element: <Profile />,
    loader: mainLoader,
  },
]);

export default router;
