import { useEffect, useRef } from "react";

interface Leaf {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
  wobble: number;
  wobbleSpeed: number;
  hue: number; // 10-40 for amber-red range
}

const AutumnParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const leavesRef = useRef<Leaf[]>([]);
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

    const count = 45;
    leavesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 6 + 3,
      speedX: (Math.random() - 0.3) * 0.4, // slight rightward drift
      speedY: Math.random() * 0.4 + 0.15, // fall down
      opacity: Math.random() * 0.5 + 0.3,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.015,
      wobble: Math.random() * Math.PI * 2,
      wobbleSpeed: Math.random() * 0.01 + 0.005,
      hue: Math.random() * 30 + 10, // 10 (red) to 40 (amber)
    }));

    const drawLeaf = (x: number, y: number, size: number, rotation: number, opacity: number, hue: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.globalAlpha = opacity;

      // Maple-like leaf shape
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.bezierCurveTo(-size * 0.5, -size * 0.7, -size * 0.8, -size * 0.2, -size * 0.3, 0);
      ctx.bezierCurveTo(-size * 0.7, size * 0.3, -size * 0.4, size * 0.7, 0, size * 0.5);
      ctx.bezierCurveTo(size * 0.4, size * 0.7, size * 0.7, size * 0.3, size * 0.3, 0);
      ctx.bezierCurveTo(size * 0.8, -size * 0.2, size * 0.5, -size * 0.7, 0, -size);
      ctx.closePath();

      ctx.fillStyle = `hsla(${hue}, 80%, 55%, 0.9)`;
      ctx.fill();

      // Stem
      ctx.beginPath();
      ctx.moveTo(0, size * 0.5);
      ctx.lineTo(0, size * 0.9);
      ctx.strokeStyle = `hsla(${hue + 10}, 50%, 40%, 0.7)`;
      ctx.lineWidth = 0.5;
      ctx.stroke();

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mouse = mouseRef.current;
      const avoidRadius = 100;

      leavesRef.current.forEach((leaf) => {
        leaf.wobble += leaf.wobbleSpeed;
        const wobbleX = Math.sin(leaf.wobble) * 0.8;

        // Mouse avoidance
        const dx = leaf.x - mouse.x;
        const dy = leaf.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < avoidRadius && dist > 0) {
          const force = (avoidRadius - dist) / avoidRadius;
          leaf.x += (dx / dist) * force * 6;
          leaf.y += (dy / dist) * force * 6;
        }

        leaf.x += leaf.speedX + wobbleX;
        leaf.y += leaf.speedY;
        leaf.rotation += leaf.rotationSpeed;

        // Wrap
        if (leaf.y > canvas.height + 20) {
          leaf.y = -20;
          leaf.x = Math.random() * canvas.width;
        }
        if (leaf.x < -20) leaf.x = canvas.width + 20;
        if (leaf.x > canvas.width + 20) leaf.x = -20;

        drawLeaf(leaf.x, leaf.y, leaf.size, leaf.rotation, leaf.opacity, leaf.hue);
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

export default AutumnParticleField;
