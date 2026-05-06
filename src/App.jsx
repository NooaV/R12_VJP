import { useState } from 'react'
import './App.css'

import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";
import Tekemiset from "./components/tekemiset/tekemiset";
import Hero from "./components/hero/hero";

import Home from "./pages/homePage";
import FaktaTieto from "./pages/faktaTietoPage";
import Quiz from "./pages/kyselyPage";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
 
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh"}}>
      <Header />
      <main style ={{flex: 1}}>
        <ScrollToTop />
        <Routes>
          <Route path ="/" element={<Home />} />
          <Route path ="/faktatieto" element={<FaktaTieto/>} />
          <Route path ="/kysely" element={<Quiz/>} />
        </Routes>
      </main>

      <Footer />
    </div>

  );
}
      

export default App;
