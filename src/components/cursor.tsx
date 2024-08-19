import React, { useState, useEffect } from 'react';
import './css/cursor.css';

const VirtualCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState(20);
  const [opacity, setOpacity] = useState(0.8);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });
    };

    const handleMouseEnterLink = () => {
      setSize(80); // Increase size
      setOpacity(1); // Full opacity
    };

    const handleMouseLeaveLink = () => {
      setSize(20); // Reset size
      setOpacity(0.8); // Reset transparency
    };

    // Attach event listeners to all links
    const handleMouseEnter = (e) => {
      if (e.target.tagName === 'A') {
        handleMouseEnterLink();
      }
    };

    const handleMouseLeave = (e) => {
      if (e.target.tagName === 'A') {
        handleMouseLeaveLink();
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="virtual-cursor"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        width: `${size}px`,
        height: `${size}px`,
        opacity: opacity, // Apply dynamic opacity
      }}
    />
  );
};

export default VirtualCursor;
