

import Tekemiset from "../components/tekemiset/tekemiset";
import Hero from "../components/hero/hero";



function Home() {
  return (
    <>
      {/* <p>Kaikki sisältö tänne eli esim Hero osion react viittaus tekemiset ylös vaan siistiin sarakkeeseen! etc. pages/homePage.jsx!</p> */}
      <Hero />
      <Tekemiset />

    </>
  );
}

export default Home;