'use client';

import { useEffect } from 'react';

export function CustomCursor() {
  useEffect(() => {
    const dot = document.querySelector('.custom-cursor-dot') as HTMLElement;
    const ring = document.querySelector('.custom-cursor-ring') as HTMLElement;

    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dot.style.left = mouseX + 'px';
      dot.style.top = mouseY + 'px';
    });

    function renderCursorLoop() {
      const delayFactor = 0.15;

      ringX += (mouseX - ringX) * delayFactor;
      ringY += (mouseY - ringY) * delayFactor;

      ring.style.left = ringX + 'px';
      ring.style.top = ringY + 'px';

      requestAnimationFrame(renderCursorLoop);
    }

    renderCursorLoop();

    const interactables = document.querySelectorAll('a, button, .bento-card, .clickable');
    interactables.forEach((item) => {
      item.addEventListener('mouseenter', () => ring.classList.add('expand'));
      item.addEventListener('mouseleave', () => ring.classList.remove('expand'));
    });
  }, []);

  return (
    <>
      <div className="custom-cursor-dot"></div>
      <div className="custom-cursor-ring"></div>
    </>
  );
}
