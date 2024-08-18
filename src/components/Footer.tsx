import React from 'react';
import './css/Footer.css'; // Import the custom CSS

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="https://github.com/dp-hridayan/ashellyou/" target="_blank" rel="noopener noreferrer" className="footer-link">
          GitHub
        </a>
        <a href="https://buymeacoffee.com/hridayan" className="footer-link">
          Support Us
        </a>
        <a href="https://github.com/DP-Hridayan/aShellYou/graphs/contributors" className="footer-link">
          Team
        </a>
        <a href="https://ashell.vercel.app" className="footer-link">
          Home
        </a>

      </div>
    </footer>
  );
};

export default Footer;
