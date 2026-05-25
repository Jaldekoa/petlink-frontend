import Hero from "@components/main/Hero";
import Stats from "./Stats";
import Adoptions from "./Adoptions";

export default function Main() {
    return (
        <main className="mt-20 px-margin-mobile max-w-7xl mx-auto space-y-stack-lg">
            <Hero />
            <Stats />
            <Adoptions />
        </main>
    );
}
