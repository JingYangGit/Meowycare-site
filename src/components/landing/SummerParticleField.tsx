import { useEffect, useRef } from "react";

interface Bubble {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  wobble: number;
  wobbleSpeed: number;
  hue: number; // 190-220 for ocean blue range
}

const SummerParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bubblesRef = useRef<Bubble[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const count = 50;
    bubblesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 4 + 2,
      speedX: (Math.random() - 0.5) * 0.2,
      speedY: -(Math.random() * 0.3 + 0.1), // float upward
      opacity: Math.random() * 0.4 + 0.2,
      wobble: Math.random() * Math.PI * 2,
      wobbleSpeed: Math.random() * 0.015 + 0.005,
      hue: Math.random() * 30 + 190, // 190-220 ocean blue
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mouse = mouseRef.current;
      const avoidRadius = 100;

      bubblesRef.current.forEach((b) => {
        b.wobble += b.wobbleSpeed;
        const wobbleX = Math.sin(b.wobble) * 0.6;

        // Mouse avoidance
        const dx = b.x - mouse.x;
        const dy = b.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < avoidRadius && dist > 0) {
          const force = (avoidRadius - dist) / avoidRadius;
          b.x += (dx / dist) * force * 5;
          b.y += (dy / dist) * force * 5;
        }

        b.x += b.speedX + wobbleX;
        b.y += b.speedY;

        // Wrap
        if (b.y < -20) { b.y = canvas.height + 20; b.x = Math.random() * canvas.width; }
        if (b.x < -20) b.x = canvas.width + 20;
        if (b.x > canvas.width + 20) b.x = -20;

        // Outer glow - soft light spot
        const gradient = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.size * 5);
        gradient.addColorStop(0, `hsla(${b.hue}, 70%, 75%, ${b.opacity * 0.3})`);
        gradient.addColorStop(1, `hsla(${b.hue}, 70%, 75%, 0)`);
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.size * 5, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Bubble ring
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.size, 0, Math.PI * 2);
        ctx.strokeStyle = `hsla(${b.hue}, 60%, 85%, ${b.opacity * 0.6})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();

        // Highlight dot
        ctx.beginPath();
        ctx.arc(b.x - b.size * 0.3, b.y - b.size * 0.3, b.size * 0.25, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(0, 0%, 100%, ${b.opacity * 0.7})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  );
};

export default SummerParticleField;
