import { useState } from 'react'
import './App.css'

import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";
import Tekemiset from "./components/tekemiset/tekemiset";


function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh"}}>
      <Header />

      <main style ={{flex: 1}}>
        <p>Kaikki sisältö tänne mainin sisään! App.jsx!</p>
        <Tekemiset />
      </main>

      <Footer />
    </div>


      
  );
}
      

export default App;
