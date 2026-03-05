import { useEffect, useRef } from "react";

interface Snowflake {
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
}

const ParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const snowflakesRef = useRef<Snowflake[]>([]);
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

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Initialize snowflakes
    const snowflakeCount = 80;
    snowflakesRef.current = Array.from({ length: snowflakeCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 8 + 1.5, // More varied: 1.5 to 9.5
      speedX: (Math.random() - 0.5) * 0.2,
      speedY: Math.random() * 0.4 + 0.15, // Slower: 0.15 to 0.55
      opacity: Math.random() * 0.6 + 0.3,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.008, // Slower rotation
      wobble: Math.random() * Math.PI * 2,
      wobbleSpeed: Math.random() * 0.008 + 0.004, // Slower wobble
    }));

    const drawSnowflake = (x: number, y: number, size: number, rotation: number, opacity: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.globalAlpha = opacity;

      // Draw 6-pointed snowflake
      ctx.strokeStyle = "rgba(255, 255, 255, 0.9)";
      ctx.lineWidth = size * 0.15;
      ctx.lineCap = "round";

      for (let i = 0; i < 6; i++) {
        ctx.save();
        ctx.rotate((Math.PI / 3) * i);
        
        // Main branch
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -size);
        ctx.stroke();

        // Small branches
        ctx.beginPath();
        ctx.moveTo(0, -size * 0.4);
        ctx.lineTo(-size * 0.25, -size * 0.6);
        ctx.moveTo(0, -size * 0.4);
        ctx.lineTo(size * 0.25, -size * 0.6);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, -size * 0.7);
        ctx.lineTo(-size * 0.15, -size * 0.85);
        ctx.moveTo(0, -size * 0.7);
        ctx.lineTo(size * 0.15, -size * 0.85);
        ctx.stroke();

        ctx.restore();
      }

      // Center dot
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.1, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
      ctx.fill();

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;
      const avoidRadius = 120;

      snowflakesRef.current.forEach((flake) => {
        // Wobble effect
        flake.wobble += flake.wobbleSpeed;
        const wobbleX = Math.sin(flake.wobble) * 0.5;

        // Mouse avoidance
        const dx = flake.x - mouse.x;
        const dy = flake.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < avoidRadius && distance > 0) {
          const force = (avoidRadius - distance) / avoidRadius;
          const angle = Math.atan2(dy, dx);
          flake.x += Math.cos(angle) * force * 8;
          flake.y += Math.sin(angle) * force * 8;
        }

        // Update position
        flake.x += flake.speedX + wobbleX;
        flake.y += flake.speedY;
        flake.rotation += flake.rotationSpeed;

        // Wrap around edges
        if (flake.y > canvas.height + 20) {
          flake.y = -20;
          flake.x = Math.random() * canvas.width;
        }
        if (flake.x < -20) flake.x = canvas.width + 20;
        if (flake.x > canvas.width + 20) flake.x = -20;

        // Draw snowflake
        drawSnowflake(flake.x, flake.y, flake.size, flake.rotation, flake.opacity);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
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

export default ParticleField;
