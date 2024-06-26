import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import p5 from 'p5';

const P5Canvas: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const sketch = (p: p5) => {
      let cursorX = 0;
      let cursorY = 0;
      let prevCursorX = 0;
      let prevCursorY = 0;
      let colorR = 0;
      let colorG = 0;
      let colorB = 0;
      let canvas: p5.Renderer;

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, document.body.clientHeight);
      };

      p.setup = () => {
        p.noFill();
        canvas = p.createCanvas(p.windowWidth, document.body.clientHeight-120);
        canvas.position(0, 0);
        (canvas.elt as HTMLElement).style.zIndex = '2';
        p.strokeWeight(2);
      };

      p.draw = () => {
        cursorX = p.mouseX;
        cursorY = p.mouseY;

        // Color animation
        colorR = (colorR + 1) % 256;
        colorG = (colorG + 5) % 256;
        colorB = (colorB + 9) % 256;
        p.stroke(colorR, colorG, colorB);

        // Line animation
        p.line(prevCursorX, prevCursorY, cursorX, cursorY);
        prevCursorX = cursorX;
        prevCursorY = cursorY;
      };
    };

    const p5Instance = new p5(sketch);

    return () => {
      p5Instance.remove();
    };
  }, [location]);

  return null;
};

export default P5Canvas;
