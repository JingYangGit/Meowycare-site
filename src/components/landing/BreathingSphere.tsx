import { cn } from "@/lib/utils";
import { motion, useAnimationControls } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useSeason, Season } from "@/contexts/SeasonContext";

interface BreathingSphereProps {
  className?: string;
}

const seasonStyles: Record<Season, {
  gradient: string;
  shadow: string;
  blob1: string;
  blob2: string;
  ripple: string;
}> = {
  winter: {
    gradient: "from-purple-300 via-pink-200 to-indigo-300",
    shadow: "0 0 60px rgba(232, 180, 255, 0.6)",
    blob1: "bg-purple-600/20",
    blob2: "bg-indigo-600/20",
    ripple: "rgba(168, 130, 255, 0.06)",
  },
  spring: {
    gradient: "from-yellow-200 via-lime-200 to-emerald-300",
    shadow: "0 0 60px rgba(180, 220, 100, 0.6)",
    blob1: "bg-emerald-500/20",
    blob2: "bg-lime-500/20",
    ripple: "rgba(140, 200, 80, 0.06)",
  },
  summer: {
    gradient: "from-sky-200 via-cyan-100 to-blue-300",
    shadow: "0 0 60px rgba(120, 200, 255, 0.6)",
    blob1: "bg-sky-500/20",
    blob2: "bg-cyan-500/20",
    ripple: "rgba(100, 180, 240, 0.06)",
  },
  autumn: {
    gradient: "from-amber-300 via-orange-200 to-red-300",
    shadow: "0 0 60px rgba(240, 160, 80, 0.6)",
    blob1: "bg-amber-500/20",
    blob2: "bg-orange-500/20",
    ripple: "rgba(220, 140, 60, 0.06)",
  },
};

const BreathingSphere = ({ className }: BreathingSphereProps) => {
  const [isBreathingIn, setIsBreathingIn] = useState(true);
  const controls = useAnimationControls();
  const startTimeRef = useRef<number>(Date.now());
  const { season } = useSeason();

  useEffect(() => {
    controls.start({
      scale: [1, 1.25, 1],
      opacity: [0.7, 1, 0.7],
      filter: ["blur(8px)", "blur(0px)", "blur(8px)"],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.4, 1]
      }
    });

    const syncBreathText = () => {
      const elapsed = (Date.now() - startTimeRef.current) % 10000;
      const shouldBeBreathingIn = elapsed < 4000;
      setIsBreathingIn(shouldBeBreathingIn);
    };

    const interval = setInterval(syncBreathText, 100);
    return () => clearInterval(interval);
  }, [controls]);

  const s = seasonStyles[season];

  return (
    <div className={cn("relative flex flex-col items-center justify-center", className)}>
      {/* Ripples */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-white/10"
            style={{
              width: `${300 + i * 150}px`,
              height: `${300 + i * 150}px`,
              animation: `ripple-expand 8s ease-out infinite`,
              animationDelay: `${i * 2.5}s`,
              opacity: 0,
            }}
          />
        ))}
        <div
          className="absolute rounded-full"
          style={{
            width: `400px`,
            height: `400px`,
            background: `radial-gradient(circle, transparent 50%, ${s.ripple} 70%, transparent 100%)`,
            animation: `ripple-expand 10s ease-out infinite`,
            animationDelay: `1s`,
            opacity: 0,
          }}
        />
      </div>

      <div className={`absolute w-80 h-80 md:w-[420px] md:h-[420px] rounded-full ${s.blob1} mix-blend-screen filter blur-3xl animate-blob opacity-50`} />
      <div 
        className={`absolute w-72 h-72 md:w-96 md:h-96 rounded-full ${s.blob2} mix-blend-screen filter blur-3xl animate-blob opacity-50`}
        style={{ animationDelay: "2s" }} 
      />
      
      <motion.div
        animate={controls}
        className={`w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br ${s.gradient}`}
        style={{ boxShadow: s.shadow }}
      />

      <motion.p
        key={isBreathingIn ? "in" : "out"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 0.5 }}
        className="absolute -bottom-16 text-white/70 text-sm md:text-base tracking-[0.3em] font-light"
        style={{ fontFamily: "'Quicksand', sans-serif" }}
      >
        {isBreathingIn ? "Breathe in" : "Breathe out"}
      </motion.p>
    </div>
  );
};

export default BreathingSphere;
