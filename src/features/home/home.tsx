import Hero from "@shared/components/main/Hero";
import Stats from "@shared/components/main/Stats";
import Adoptions from "@shared/components/main/Adoptions";

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
