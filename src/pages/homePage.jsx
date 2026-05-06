

import Tekemiset from "../components/tekemiset/tekemiset";
import Hero from "../components/hero/hero";
import Vahennakayttoa from "../components/vahennakayttoa/vahennakayttoa";
import TestiSection from "../components/testi/testiSection";
import OpetellaanYhdessa from "../components/Opetellaan yhdessa/opetellaan";


function Home() {
  return (
    <>
      {/* <p>Kaikki sisältö tänne eli esim Hero osion react viittaus tekemiset ylös vaan siistiin sarakkeeseen! etc. pages/homePage.jsx!</p> */}
      <Hero />
      <Vahennakayttoa />
      <TestiSection />
      <Tekemiset />
      <OpetellaanYhdessa />

    </>
  );
}

export default Home;