import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SeasonalParticles from "./SeasonalParticles";

const FreeConsultationSection = () => {
  const navigate = useNavigate();

  return (
    <section id="free-consultation" className="relative py-12 md:py-16 px-4 bg-[#0D0A08] overflow-hidden">
      <SeasonalParticles />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-indigo-600/8 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/6 rounded-full filter blur-[110px]" />
      </div>

      <div className="container max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-6 md:p-10 text-center transition-all duration-300 hover:scale-[1.03] hover:bg-[rgba(255,240,180,0.03)] hover:border-[rgba(255,220,100,0.25)] hover:shadow-[0_0_40px_rgba(255,220,100,0.12),inset_0_0_30px_rgba(255,220,100,0.04)]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 text-xs text-white/60 mb-5"
          >
            <MessageCircle className="w-3.5 h-3.5 flex-shrink-0" />
            Free · 20 min · No commitment
          </motion.div>

          <h2 className="text-xl md:text-3xl font-light text-white/90 mb-3">
            Not sure if it's for you?
          </h2>
          <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-md mx-auto mb-6">
            It's okay. Schedule a 20-minute free chat, and let's make sure if my service is a good fit for you.
          </p>

          <Button
            onClick={() => navigate("/onboarding?mode=consultation")}
            size="lg"
            className="w-full sm:w-auto px-6 md:px-10 py-5 md:py-6 text-sm md:text-base font-medium rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,220,100,0.15)]"
          >
            <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-2 flex-shrink-0" />
            Schedule Free Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeConsultationSection;
