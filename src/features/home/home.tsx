import Main from "@components/main/Main";
import Adoptions from "./components/Adoptions";
import Hero from "./components/Hero";
import Stats from "./components/Stats";

function Home() {
  return (
    <Main>
      <Hero />
      <Stats />
      <Adoptions />
    </Main>
  );
}

export default Home;
