import { motion } from "framer-motion";
import BreathingSphere from "./BreathingSphere";
import SeasonalParticles from "./SeasonalParticles";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useSeason, Season } from "@/contexts/SeasonContext";
import { Users } from "lucide-react";

const blobColors: Record<Season, [string, string, string]> = {
  winter: ["bg-purple-600/20", "bg-indigo-600/20", "bg-pink-600/15"],
  spring: ["bg-emerald-600/20", "bg-lime-600/20", "bg-yellow-500/15"],
  summer: ["bg-sky-600/20", "bg-cyan-600/20", "bg-blue-500/15"],
  autumn: ["bg-amber-600/20", "bg-orange-600/20", "bg-red-500/15"],
};

const seasonGradient: Record<Season, string> = {
  winter: "from-purple-300 via-pink-300 to-indigo-300",
  spring: "from-yellow-200 via-lime-300 to-emerald-300",
  summer: "from-sky-200 via-cyan-300 to-blue-300",
  autumn: "from-amber-200 via-orange-300 to-red-300",
};

const seasonIconColor: Record<Season, string> = {
  winter: "text-purple-300",
  spring: "text-emerald-300",
  summer: "text-sky-300",
  autumn: "text-amber-300",
};

const HeroSection = () => {
  const { season } = useSeason();
  const blobs = blobColors[season];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 bg-[#0D0A08]"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 ${blobs[0]} rounded-full mix-blend-screen filter blur-3xl animate-blob opacity-50`} />
        <div className={`absolute top-1/3 right-1/4 w-96 h-96 ${blobs[1]} rounded-full mix-blend-screen filter blur-3xl animate-blob opacity-50`} style={{ animationDelay: "2s" }} />
        <div className={`absolute bottom-1/4 left-1/3 w-72 h-72 ${blobs[2]} rounded-full mix-blend-screen filter blur-3xl animate-blob opacity-40`} style={{ animationDelay: "4s" }} />
      </div>

      <SeasonalParticles />

      <div className="relative z-10 flex flex-col items-center text-center gap-12 md:gap-24 p-4 md:p-6 max-w-2xl">
        <BreathingSphere className="mb-0" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="space-y-8"
        >
          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 text-sm text-white/70 backdrop-blur-md"
          >
            <Users className={`w-4 h-4 ${seasonIconColor[season]}`} />
            3,000+ ADHDers supported
          </motion.div>

          <h1 className="text-xl md:text-4xl font-light tracking-wide text-white/90">
            Human-Powered Daily ADHD{" "}
            <span className={`bg-gradient-to-r ${seasonGradient[season]} bg-clip-text text-transparent font-medium`}>
              Accountability
            </span>
            {" "}& Companionship
          </h1>
          <h2 className="sr-only">
            Real human 1:1 supportive accountability. We help you build structure, reach your goals, and change your life.
          </h2>

          <blockquote className="text-white/70 text-sm md:text-lg leading-relaxed font-normal italic max-w-xl">
            "I'd been procrastinating on one project for 8 months. In my first week with MeowyCare, I finished it. I actually cried."
            <footer className="mt-2 text-sm text-white/50 not-italic">— L., ADHD, 28</footer>
          </blockquote>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              onClick={() => scrollTo("pricing")}
              size="lg"
              className="group relative px-8 py-6 text-base font-medium rounded-full bg-white text-[#0D0A08] hover:bg-yellow-50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(255,220,80,0.3),0_0_100px_rgba(255,200,50,0.15)]"
            >
              Start Getting Support
            </Button>
            
            <Button 
              onClick={() => scrollTo("free-consultation")}
              size="lg"
              className="group relative px-8 py-6 text-base font-medium rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            >
              Book a Free Consultation
            </Button>
          </div>

          <p className="text-white/50 text-sm pt-2">MeowyCare: ADHD Daily Accountability & Companionship</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
