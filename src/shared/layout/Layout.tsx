import NavBar from "@shared/components/main/NavBar";
import Header from '@shared/components/main/Header';
import { Outlet } from 'react-router'

export default function MainLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <NavBar />
        </>
    )
}