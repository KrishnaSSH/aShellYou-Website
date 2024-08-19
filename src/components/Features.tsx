import React from 'react';
import './css/Features.css'; 

const features = [
  {
    title: 'Modern Design',
    description: 'Features a modern Material Design 3 user interface.',
  },
  {
    title: 'OTG Support',
    description: 'Run commands on other devices via OTG connection.',
  },
  {
    title: 'Easy To Use with Guides',
    description: 'Provides examples of common ADB commands.',
  },
  {
    title: 'Bookmarks',
    description: 'Bookmark frequently used commands.',
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="features-container"> 
      <h2 className="features-heading">Features</h2>
      {features.map((feature, index) => (
        <div className="feature-item" key={index}>
          <h3 className="feature-title">{feature.title}</h3>
          <p className="feature-description">{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
