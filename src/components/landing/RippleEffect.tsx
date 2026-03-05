import { cn } from "@/lib/utils";

interface RippleEffectProps {
  className?: string;
}

const RippleEffect = ({ className }: RippleEffectProps) => {
  return (
    <div className={cn("absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden", className)}>
      {/* Ripple rings emanating from center */}
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-white/10"
          style={{
            width: `${280 + i * 140}px`,
            height: `${280 + i * 140}px`,
            animation: `ripple-expand 5s ease-out infinite`,
            animationDelay: `${i * 1.25}s`,
            opacity: 0,
          }}
        />
      ))}
      
      {/* Inner glow ripples */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`glow-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${320 + i * 160}px`,
            height: `${320 + i * 160}px`,
            background: `radial-gradient(circle, transparent 60%, rgba(168, 130, 255, 0.08) 80%, transparent 100%)`,
            animation: `ripple-expand 6s ease-out infinite`,
            animationDelay: `${i * 2}s`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
};

export default RippleEffect;
