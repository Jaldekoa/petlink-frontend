import Adoptions from "@features/home/components/Adoptions";
import Hero from "@features/home/components/Hero";
import Stats from "@features/home/components/Stats";

function Home() {
  return (
    <main className="mt-20 px-margin-mobile max-w-7xl mx-auto space-y-stack-lg">
      <Hero />
      <Stats />
      <Adoptions />
    </main>
  );
}

export default Home;
