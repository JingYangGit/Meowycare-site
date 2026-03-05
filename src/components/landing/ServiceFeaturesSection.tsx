import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SeasonalParticles from "./SeasonalParticles";
import { useSeason, Season } from "@/contexts/SeasonContext";

/* ── Custom SVG icons for each module ── */
const SleepIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
    <path d="M15 4l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" opacity="0.6" />
  </svg>
);

const SelfCareIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 21c-4-4-8-6.5-8-10a4 4 0 0 1 8-1 4 4 0 0 1 8 1c0 3.5-4 6-8 10z" />
    <path d="M12 13v4" opacity="0.5" />
    <path d="M10 15h4" opacity="0.5" />
  </svg>
);

const FocusIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="3" />
    <circle cx="12" cy="12" r="8" opacity="0.4" />
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" opacity="0.3" />
  </svg>
);

const EmotionalIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
    <path d="M8 12s1 2 4 2 4-2 4-2" opacity="0.5" />
  </svg>
);

const features = [
  {
    icon: SleepIcon,
    title: "Sleep & Wake Schedule",
    description:
      "Morning texts until you're actually up. Evening reminders to wind down. We help you build and maintain a sleep routine — the foundation everything else depends on.",
  },
  {
    icon: SelfCareIcon,
    title: "Self-Care Reminders",
    description:
      "Eat, drink water, take your meds... Anything you tend to forget, just tell us, and we'll remind you.",
  },
  {
    icon: FocusIcon,
    title: "Tasks & Focus",
    description:
          "Struggling to start? We break it down into tiny steps and walk you through them one by one.\n\nLost focus? We gently pull you back.\nStuck for hours scrolling? We catch it before it spirals.\n\nWe also offer virtual body doubling sessions to help you build momentum!",
  },
  {
    icon: EmotionalIcon,
    title: "Emotional Support",
    description:
      "Share anything — good days, bad days, everything in between. We listen, we chat, no judgment. A safe space where you're seen, supported, and reminded of how far you've come.",
  },
];

const accentConfig: Record<Season, { iconBg: string; iconBorder: string; iconText: string; hoverGlow: string }> = {
  winter: {
    iconBg: "bg-purple-500/10",
    iconBorder: "border-purple-400/20",
    iconText: "text-purple-300",
    hoverGlow: "group-hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]",
  },
  spring: {
    iconBg: "bg-emerald-500/10",
    iconBorder: "border-emerald-400/20",
    iconText: "text-emerald-300",
    hoverGlow: "group-hover:shadow-[0_0_20px_rgba(52,211,153,0.15)]",
  },
  summer: {
    iconBg: "bg-sky-500/10",
    iconBorder: "border-sky-400/20",
    iconText: "text-sky-300",
    hoverGlow: "group-hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]",
  },
  autumn: {
    iconBg: "bg-amber-500/10",
    iconBorder: "border-amber-400/20",
    iconText: "text-amber-300",
    hoverGlow: "group-hover:shadow-[0_0_20px_rgba(251,191,36,0.15)]",
  },
};

const ServiceFeaturesSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { season } = useSeason();
  const a = accentConfig[season];

  return (
    <section id="how-we-help" className="relative py-24 md:py-32 px-4 bg-[#0D0A08] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-pink-600/8 rounded-full filter blur-[130px]" />
      </div>
      <SeasonalParticles />
      <div className="container max-w-3xl mx-auto relative z-10">
        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-light text-white/90 text-center mb-6"
        >
          How ADHD daily accountability works
        </motion.h2>

        {/* Overview paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/50 text-center text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-4"
        >
          <span className="text-white/80 font-medium">Sunny, your accountability coach</span>, will proactively check in with you, chat, and remind you via{" "}
          <span className="text-white/80 font-medium">WhatsApp</span>.
          We can also call you if necessary (you don't have to pick up).
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-white/40 text-center text-sm mb-14 max-w-md mx-auto"
        >
          No apps, no setup. Just open WhatsApp.
        </motion.p>

        {/* "A typical day" subheading */}
        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl font-light text-white/70 text-center mb-8"
        >
          A typical day looks like:
        </motion.h3>

        {/* Expandable modules */}
        <div className="space-y-3">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + i * 0.08 }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={`w-full text-left p-5 md:p-6 rounded-2xl border transition-all duration-500 group ${
                    isOpen
                      ? "border-yellow-400/30 bg-yellow-500/[0.07] shadow-[0_0_60px_rgba(255,220,80,0.2),inset_0_0_40px_rgba(255,220,80,0.1)]"
                      : "border-white/[0.06] bg-white/[0.02] hover:bg-yellow-500/[0.07] hover:border-yellow-400/30 hover:shadow-[0_0_60px_rgba(255,220,80,0.2),inset_0_0_40px_rgba(255,220,80,0.1)]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-full ${a.iconBg} border ${a.iconBorder} flex items-center justify-center ${a.hoverGlow} transition-all duration-300`}
                      >
                        <Icon className={`w-[18px] h-[18px] ${a.iconText}`} />
                      </div>
                      <h4 className="text-white/80 text-base md:text-lg font-medium group-hover:text-white/90 transition-colors">
                        {feature.title}
                      </h4>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {!isOpen && (
                        <span className="text-white/25 text-xs hidden sm:inline">tap to expand</span>
                      )}
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-white/30 text-xl"
                      >
                        +
                      </motion.span>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-white/55 text-sm leading-relaxed pt-4 pl-14 whitespace-pre-line">
                          {feature.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-white/40 text-center text-sm mt-10 max-w-md mx-auto leading-relaxed"
        >
          <span className="text-white/70 text-base md:text-lg font-medium">Every plan is tailored to you. You choose what you need, and we build your routine around it.</span>
          <br />
          <span className="text-white/50 mt-1 inline-block">Your needs change? We adapt.</span>
        </motion.p>
      </div>
    </section>
  );
};

export default ServiceFeaturesSection;
