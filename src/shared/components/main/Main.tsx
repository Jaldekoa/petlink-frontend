import TopBar from "@/shared/components/main/Header";
import NavBar from "@/shared/components/main/NavBar";
import Animals from "../../../features/animals/Animals"

export default function Main() {
    return (
    <>
    <TopBar />
        <Animals />
    <NavBar />  
    </>
    )
}