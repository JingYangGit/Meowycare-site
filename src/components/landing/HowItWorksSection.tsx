import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SeasonalParticles from "./SeasonalParticles";
import { MessageSquareText, PhoneCall, Sparkles, CalendarCheck, ArrowRight } from "lucide-react";
import { useSeason, Season } from "@/contexts/SeasonContext";

const steps = [
  {
    icon: MessageSquareText,
    step: "1",
    title: "Text me on WhatsApp when you need",
    description: "Send a message anytime you feel stuck or overwhelmed. No appointments needed.",
  },
  {
    icon: PhoneCall,
    step: "2",
    title: "An ADHD Coach will call you to help in minutes",
    description: "Available 9AM–7PM Eastern Time. Response may be delayed outside these hours, but I'll try my best to get back to you.",
  },
  {
    icon: Sparkles,
    step: "3",
    title: "You get unstuck.",
    description: "In just 20 minutes, you'll have clarity and momentum to move forward.",
  },
];

const accentConfig: Record<Season, {
  glow: string;
  hoverBorder: string;
  hoverBg: string;
  hoverShadow: string;
  iconBorder: string;
  iconBg: string;
  iconText: string;
  labelText: string;
  accentText: string;
}> = {
  winter: {
    glow: "bg-purple-600/10",
    hoverBorder: "hover:border-purple-400/30",
    hoverBg: "hover:bg-purple-900/10",
    hoverShadow: "hover:shadow-[0_0_40px_rgba(147,51,234,0.08)]",
    iconBorder: "border-purple-400/30",
    iconBg: "bg-purple-500/10",
    iconText: "text-purple-300",
    labelText: "text-purple-300/70",
    accentText: "text-purple-300",
  },
  spring: {
    glow: "bg-emerald-600/10",
    hoverBorder: "hover:border-emerald-400/30",
    hoverBg: "hover:bg-emerald-900/10",
    hoverShadow: "hover:shadow-[0_0_40px_rgba(52,211,153,0.08)]",
    iconBorder: "border-emerald-400/30",
    iconBg: "bg-emerald-500/10",
    iconText: "text-emerald-300",
    labelText: "text-emerald-300/70",
    accentText: "text-emerald-300",
  },
  summer: {
    glow: "bg-sky-600/10",
    hoverBorder: "hover:border-sky-400/30",
    hoverBg: "hover:bg-sky-900/10",
    hoverShadow: "hover:shadow-[0_0_40px_rgba(56,189,248,0.08)]",
    iconBorder: "border-sky-400/30",
    iconBg: "bg-sky-500/10",
    iconText: "text-sky-300",
    labelText: "text-sky-300/70",
    accentText: "text-sky-300",
  },
  autumn: {
    glow: "bg-amber-600/10",
    hoverBorder: "hover:border-amber-400/30",
    hoverBg: "hover:bg-amber-900/10",
    hoverShadow: "hover:shadow-[0_0_40px_rgba(245,158,11,0.08)]",
    iconBorder: "border-amber-400/30",
    iconBg: "bg-amber-500/10",
    iconText: "text-amber-300",
    labelText: "text-amber-300/70",
    accentText: "text-amber-300",
  },
};

const HowItWorksSection = () => {
  const navigate = useNavigate();
  const { season } = useSeason();
  const a = accentConfig[season];

  return (
    <section className="relative py-24 md:py-32 px-4 bg-[#0D0A08] overflow-hidden">
      <SeasonalParticles />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] ${a.glow} rounded-full filter blur-[120px]`} />
      </div>

      <div className="container max-w-4xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-light text-white/90 text-center mb-20"
        >
          How MeowyCare Works
        </motion.h2>

        <div className="flex flex-col gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative group"
            >
              <div className="flex items-start gap-6 p-8 rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm transition-all duration-500 hover:bg-yellow-500/[0.07] hover:border-yellow-400/30 hover:shadow-[0_0_60px_rgba(255,220,80,0.2),inset_0_0_40px_rgba(255,220,80,0.1)]">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-white/70" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-medium text-white/90">
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="absolute left-[2.9rem] top-full w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-8 py-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm">
            <span className="text-white/90 text-2xl md:text-3xl font-light">$15</span>
            <span className="text-white/40 text-base ml-2">/ session · 20 min</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-8"
        >
          <button
            onClick={() => navigate("/")}
            className={`w-full group flex items-center justify-between gap-4 p-6 rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm transition-all duration-500 hover:bg-yellow-500/[0.07] hover:border-yellow-400/30 hover:shadow-[0_0_60px_rgba(255,220,80,0.2),inset_0_0_40px_rgba(255,220,80,0.1)] text-left`}
          >
            <div className="flex items-start gap-5">
              <div className={`flex-shrink-0 w-12 h-12 rounded-full border ${a.iconBorder} ${a.iconBg} flex items-center justify-center`}>
                <CalendarCheck className={`w-5 h-5 ${a.iconText}`} />
              </div>
              <div className="space-y-1">
                <p className={`text-xs ${a.labelText} font-medium uppercase tracking-widest`}>Also available</p>
                <h3 className="text-xl font-medium text-white/90">ADHD Daily Accountability Service</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Get a real human who gets you to gentle, supportive check-ins with coaching tactics to help you get through your day. <span className={a.accentText}>$50/week →</span>
                </p>
              </div>
            </div>
            <ArrowRight className={`w-5 h-5 text-white/30 flex-shrink-0 group-hover:${a.iconText} group-hover:translate-x-1 transition-all duration-300`} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
