import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SeasonalParticles from "./SeasonalParticles";

const TeamSection = () => {
  const handleReserve = () => {
    window.location.href = "/onboarding";
  };

  return (
    <section className="relative py-24 md:py-32 px-4 bg-[#0D0A08] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-emerald-500/8 rounded-full filter blur-[130px]" />
      </div>
      <SeasonalParticles />
      <div className="container max-w-3xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-light text-white/90 mb-8"
        >
          Our team
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white/60 text-base max-w-xl mx-auto mb-14"
        >
          A trained, full-time team with full benefits. We keep costs low globally — without compromising care.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Button
            onClick={handleReserve}
            size="lg"
            className="px-10 py-6 text-base font-medium rounded-full bg-white text-[#0D0A08] hover:bg-yellow-50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(255,220,80,0.3),0_0_100px_rgba(255,200,50,0.15)]"
          >
            Start Getting Support
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
