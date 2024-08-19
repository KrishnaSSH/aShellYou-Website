import React, { useEffect } from 'react';

const TeamDrag = () => {
  useEffect(() => {
    const container = document.getElementById('team-container');
    let isDragging = false;
    let startX, scrollLeft;

    if (container) {
      container.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
        container.classList.add('dragging');
      });

      container.addEventListener('mouseleave', () => {
        isDragging = false;
        container.classList.remove('dragging');
      });

      container.addEventListener('mouseup', () => {
        isDragging = false;
        container.classList.remove('dragging');
      });

      container.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed
        container.scrollLeft = scrollLeft - walk;
      });
    }
  }, []);

  return null;
};

export default TeamDrag;
