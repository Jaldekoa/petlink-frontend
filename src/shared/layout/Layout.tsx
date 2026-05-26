import { Outlet } from 'react-router'
import Header from "@/shared/components/main/Header";
import NavBar from "@/shared/components/main/NavBar";

export default function MainLayout() {
    return (
        <>
            <Header  />
            <Outlet />
            <NavBar />
        </>
    )
}