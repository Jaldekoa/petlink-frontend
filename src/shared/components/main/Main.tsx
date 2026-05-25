import TopBar from "@/shared/components/main/Header";
import NavBar from "@/shared/components/main/NavBar";
import Home from "../../../features/home/Home"

export default function Main() {
    return (
    <>
    <TopBar />
        <Home />
    <NavBar />  
    </>
    )
}