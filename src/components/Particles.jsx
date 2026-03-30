import React, { useEffect, useRef } from 'react';
import './Particles.css';

const Particles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let mouse = { x: -9999, y: -9999 };

    const GRID_SPACING = 60;
    const GLOW_RADIUS = 180;
    const LINE_COLOR = 'rgba(255,255,255,0.04)';
    const R = 230, G = 43, B = 30; // TED Red

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', onMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cols = Math.ceil(canvas.width / GRID_SPACING) + 1;
      const rows = Math.ceil(canvas.height / GRID_SPACING) + 1;

      // Vertical lines
      for (let c = 0; c < cols; c++) {
        const x = c * GRID_SPACING;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.strokeStyle = LINE_COLOR;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Horizontal lines
      for (let r = 0; r < rows; r++) {
        const y = r * GRID_SPACING;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.strokeStyle = LINE_COLOR;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Intersection nodes with mouse glow
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const nx = c * GRID_SPACING;
          const ny = r * GRID_SPACING;
          const dx = mouse.x - nx;
          const dy = mouse.y - ny;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < GLOW_RADIUS) {
            const strength = 1 - dist / GLOW_RADIUS;
            const nodeRadius = 1.5 + strength * 4;
            const alpha = 0.15 + strength * 0.85;

            // Outer radial glow
            const grd = ctx.createRadialGradient(nx, ny, 0, nx, ny, nodeRadius * 5);
            grd.addColorStop(0, `rgba(${R},${G},${B},${alpha * 0.5})`);
            grd.addColorStop(1, `rgba(${R},${G},${B},0)`);
            ctx.beginPath();
            ctx.arc(nx, ny, nodeRadius * 5, 0, Math.PI * 2);
            ctx.fillStyle = grd;
            ctx.fill();

            // Core bright node
            ctx.beginPath();
            ctx.arc(nx, ny, nodeRadius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${R},${G},${B},${alpha})`;
            ctx.fill();
          } else {
            // Resting dimly-lit dot
            ctx.beginPath();
            ctx.arc(nx, ny, 1, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255,255,255,0.07)';
            ctx.fill();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="particles-canvas" />;
};

export default Particles;
