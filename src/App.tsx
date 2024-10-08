
import { Analytics } from "@vercel/analytics/react"
// import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Features from './components/Features';
import Footer from "./components/Footer";
import Team from './components/Team';
import Cursor from "./components/cursor";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Cursor/>
      <Home/>
      <Features/>
      <Team/>
      <Footer/>
      <Analytics />
    </div>
  );
}

export default App;
