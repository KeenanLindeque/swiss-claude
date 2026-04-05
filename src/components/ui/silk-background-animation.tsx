'use client';

import { useEffect, useRef } from 'react';

interface SilkBackgroundProps {
  colorR?: number;
  colorG?: number;
  colorB?: number;
  speed?: number;
  scale?: number;
  noiseIntensity?: number;
}

export function SilkBackground({
  colorR = 22,
  colorG = 42,
  colorB = 82,
  speed = 0.02,
  scale = 2,
  noiseIntensity = 0.8,
}: SilkBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const pixelRatio = 0.5;
    let time = 0;
    let offscreen: HTMLCanvasElement;
    let offCtx: CanvasRenderingContext2D;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      offscreen = document.createElement('canvas');
      offscreen.width = Math.floor(canvas.width * pixelRatio);
      offscreen.height = Math.floor(canvas.height * pixelRatio);
      offCtx = offscreen.getContext('2d')!;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const noise = (x: number, y: number) => {
      const G = 2.71828;
      const rx = G * Math.sin(G * x);
      const ry = G * Math.sin(G * y);
      return (rx * ry * (1 + x)) % 1;
    };

    const animate = () => {
      if (!offCtx) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const w = offscreen.width;
      const h = offscreen.height;

      const imageData = offCtx.createImageData(w, h);
      const data = imageData.data;

      for (let x = 0; x < w; x++) {
        for (let y = 0; y < h; y++) {
          const u = (x / w) * scale;
          const v = (y / h) * scale;

          const tOffset = speed * time;
          const tex_x = u;
          const tex_y = v + 0.03 * Math.sin(8.0 * tex_x - tOffset);

          const pattern =
            0.6 +
            0.4 *
              Math.sin(
                5.0 *
                  (tex_x +
                    tex_y +
                    Math.cos(3.0 * tex_x + 5.0 * tex_y) +
                    0.02 * tOffset) +
                  Math.sin(20.0 * (tex_x + tex_y - 0.1 * tOffset))
              );

          const rnd = noise(x, y);
          const intensity = Math.max(0, pattern - (rnd / 15.0) * noiseIntensity);

          const index = (y * w + x) * 4;
          data[index] = Math.floor(colorR * intensity);
          data[index + 1] = Math.floor(colorG * intensity);
          data[index + 2] = Math.floor(colorB * intensity);
          data[index + 3] = 255;
        }
      }

      offCtx.putImageData(imageData, 0, 0);

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(offscreen, 0, 0, canvas.width, canvas.height);

      time += 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [colorR, colorG, colorB, speed, scale, noiseIntensity]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
    />
  );
}
