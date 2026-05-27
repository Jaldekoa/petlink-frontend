import { createBrowserRouter } from "react-router";
import Home from "@features/home/Home";
import Animals from "@features/animals/Animals";
import Search from "@features/search/search";
import Chat from "@features/chat/chat";
import Profile from "@features/profile/profile";
import MainLayout from "@/shared/layout/Layout";

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
  },
  {
    path: "/profile",
    element: <MainLayout />,
    children: [{ index: true, element: <Profile /> }],
    
  },
]);

export default router;
