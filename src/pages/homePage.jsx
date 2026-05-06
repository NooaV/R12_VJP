

import Tekemiset from "../components/tekemiset/tekemiset";
import Hero from "../components/hero/hero";
import Vahennakayttoa from "../components/vahennakayttoa/vahennakayttoa";
import TestiSection from "../components/testi/testiSection";
import OpetellaanYhdessa from "../components/Opetellaan yhdessa/opetellaan";
import HeroTop from "../components/herotop/herotop";


function Home() {
  return (
    <>
      {/* <p>Kaikki sisältö tänne eli esim Hero osion react viittaus tekemiset ylös vaan siistiin sarakkeeseen! etc. pages/homePage.jsx!</p> */}
      <HeroTop />
      <Vahennakayttoa />
      <TestiSection />
      <Tekemiset />
      <OpetellaanYhdessa />
      <Hero />
    </>
  );
}

export default Home;