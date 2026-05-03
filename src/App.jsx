import { useState } from 'react'
import './App.css'

import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";
import Tekemiset from "./components/tekemiset/tekemiset";

import Home from "./pages/homePage";
import FaktaTieto from "./pages/faktaTietoPage";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
 
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh"}}>
      <Header />

      <main style ={{flex: 1}}>
        <Routes>
          <Route path ="/" element={<Home />} />
          <Route path ="/faktatieto" element={<FaktaTieto/>} />

        </Routes>
      </main>

      <Footer />
    </div>

  );
}
      

export default App;
