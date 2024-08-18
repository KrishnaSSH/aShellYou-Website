// import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Features from './components/Features';
// import Team from './components/Team';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <Features/>
      {/* <Team/> */}
    </div>
  );
}

export default App;
