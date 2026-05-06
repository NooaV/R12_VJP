

import Tekemiset from "../components/tekemiset/tekemiset";
import Hero from "../components/hero/hero";
import Vahennakayttoa from "../components/vahennakayttoa/vahennakayttoa";
import TestiSection from "../components/testi/testiSection";


function Home() {
  return (
    <>
      {/* <p>Kaikki sisältö tänne eli esim Hero osion react viittaus tekemiset ylös vaan siistiin sarakkeeseen! etc. pages/homePage.jsx!</p> */}
      <Vahennakayttoa />
      <TestiSection />
      <Tekemiset />
      <Hero />
    </>
  );
}

export default Home;