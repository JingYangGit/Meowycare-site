import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SeasonalParticles from "./SeasonalParticles";
import { X, Check, Minus } from "lucide-react";

const WhyUsSection = () => {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-24 md:py-32 px-4 bg-[#0D0A08] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-cyan-600/8 rounded-full filter blur-[140px]" />
      </div>
      <SeasonalParticles />
      <div className="container max-w-3xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-light text-white/90 text-center mb-6"
        >
          Why nothing else worked
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/60 text-center text-base mb-14 max-w-xl mx-auto"
        >
          ADHD is a performance disorder, not a knowledge disorder. Nothing replaces <span className="text-white/80">real human accountability.</span>
        </motion.p>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-16 rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden transition-all duration-500 hover:bg-yellow-500/[0.06] hover:border-yellow-400/25 hover:shadow-[0_0_60px_rgba(255,220,80,0.15)]"
        >
          <div className="grid grid-cols-4 text-center text-[11px] md:text-sm">
            <div className="p-2 md:p-4 border-b border-white/[0.06]" />
            <div className="p-2 md:p-4 border-b border-white/[0.06] text-white/40 font-medium">AI / Apps</div>
            <div className="p-2 md:p-4 border-b border-white/[0.06] text-white/40 font-medium">Coach</div>
            <div className="p-2 md:p-4 border-b border-white/[0.06] bg-white/[0.03] text-white/80 font-medium">Meowy</div>
            
            {[
              { label: "Personalized", ai: "minus", coach: "check", mc: "check" },
              { label: "Daily support", ai: "x", coach: "x", mc: "check" },
              { label: "No self-initiation", ai: "x", coach: "x", mc: "check" },
              { label: "Emotional support", ai: "x", coach: "minus", mc: "check" },
              { label: "Affordable", ai: "check", coach: "x", mc: "check" },
            ].map((row, i) => (
              <div key={i} className="contents">
                <div className="p-2 md:p-4 border-b border-white/[0.04] text-left text-white/60 text-[11px] md:text-sm">{row.label}</div>
                {[row.ai, row.coach, row.mc].map((val, j) => (
                  <div key={j} className={`p-2 md:p-4 border-b border-white/[0.04] flex items-center justify-center ${j === 2 ? 'bg-white/[0.03]' : ''}`}>
                    {val === "check" ? <Check className="w-4 h-4 text-emerald-400/80" /> :
                     val === "x" ? <X className="w-4 h-4 text-white/20" /> :
                     <Minus className="w-4 h-4 text-white/30" />}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            onClick={scrollToPricing}
            size="lg"
            className="px-8 py-6 text-base font-medium rounded-full bg-white text-[#0D0A08] hover:bg-yellow-50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(255,220,80,0.3),0_0_100px_rgba(255,200,50,0.15)]"
          >
            Start Getting Support
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsSection;
