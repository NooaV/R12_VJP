

import Tekemiset from "../components/tekemiset/tekemiset";
import Hero from "../components/hero/hero";
import Vahennakayttoa from "../components/vahennakayttoa/vahennakayttoa";


function Home() {
  return (
    <>
      {/* <p>Kaikki sisältö tänne eli esim Hero osion react viittaus tekemiset ylös vaan siistiin sarakkeeseen! etc. pages/homePage.jsx!</p> */}
      <Hero />
      <Vahennakayttoa />
      <Tekemiset />

    </>
  );
}

export default Home;