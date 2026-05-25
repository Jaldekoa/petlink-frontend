
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Adoptions from "./components/Adoptions";

function Home() {
  return (
    <>
       <main className="mt-20 px-margin-mobile max-w-7xl mx-auto space-y-stack-lg">
            <Hero />
            <Stats />
            <Adoptions />
        </main>
    </>
  )
}

export default Home