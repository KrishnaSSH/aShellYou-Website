import React from 'react';
import './css/Home.css'; 
import mockupImage from '../assets/mockup.svg'; 

const Home = () => (
  <>
  <div className="container">
  <div className="home-container">
    <img src={mockupImage} alt="Mockup" className="mockup" />
  </div>
  <div className="text">Run ADB commands on your device or on other devices</div>
  </div>

  <section id="home" className="home-container"></section>

  </>
);

export default Home;