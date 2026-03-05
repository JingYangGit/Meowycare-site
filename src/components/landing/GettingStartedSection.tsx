import { motion } from "framer-motion";
import { CreditCard, ClipboardList, UserCheck, MessageCircle } from "lucide-react";
import { useSeason, Season } from "@/contexts/SeasonContext";

const steps = [
  {
    icon: CreditCard,
    step: "1",
    title: "Make your payment",
    description: "Choose a plan and complete payment to get started.",
  },
  {
    icon: ClipboardList,
    step: "2",
    title: "Complete a short questionnaire",
    description: "Tell us about your routines, challenges, and goals so we can understand you.",
  },
  {
    icon: UserCheck,
    step: "3",
    title: "We create your personalized plan",
    description: "We pair you with Sunny, your accountability coach, and build a plan just for you.",
  },
  {
    icon: MessageCircle,
    step: "4",
    title: "Your companion reaches out",
    description: "Sunny contacts you 2 days before your service starts — so you're never left wondering.",
  },
];

const accentConfig: Record<Season, { gradient: string; iconBg: string; iconBorder: string; iconText: string; stepText: string; lineColor: string }> = {
  winter: {
    gradient: "from-purple-500/20 to-purple-600/5",
    iconBg: "bg-purple-500/10",
    iconBorder: "border-purple-400/30",
    iconText: "text-purple-300",
    stepText: "text-purple-400/60",
    lineColor: "from-purple-400/30 to-transparent",
  },
  spring: {
    gradient: "from-emerald-500/20 to-emerald-600/5",
    iconBg: "bg-emerald-500/10",
    iconBorder: "border-emerald-400/30",
    iconText: "text-emerald-300",
    stepText: "text-emerald-400/60",
    lineColor: "from-emerald-400/30 to-transparent",
  },
  summer: {
    gradient: "from-sky-500/20 to-sky-600/5",
    iconBg: "bg-sky-500/10",
    iconBorder: "border-sky-400/30",
    iconText: "text-sky-300",
    stepText: "text-sky-400/60",
    lineColor: "from-sky-400/30 to-transparent",
  },
  autumn: {
    gradient: "from-amber-500/20 to-amber-600/5",
    iconBg: "bg-amber-500/10",
    iconBorder: "border-amber-400/30",
    iconText: "text-amber-300",
    stepText: "text-amber-400/60",
    lineColor: "from-amber-400/30 to-transparent",
  },
};

const GettingStartedSection = () => {
  const { season } = useSeason();
  const a = accentConfig[season];

  return (
    <section className="relative py-24 md:py-32 px-4 bg-[#0D0A08] overflow-hidden">
      <div className="container max-w-3xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-light text-white/90 text-center mb-4"
        >
          How it works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/40 text-center text-base mb-16 max-w-lg mx-auto"
        >
          After you sign up, here's exactly what happens — no surprises.
        </motion.p>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className={`absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b ${a.lineColor}`} />

          <div className="flex flex-col gap-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12, duration: 0.5 }}
                  className="flex items-start gap-5 md:gap-6 relative"
                >
                  {/* Icon circle */}
                  <div className={`relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full border ${a.iconBorder} ${a.iconBg} flex items-center justify-center backdrop-blur-sm`}>
                    <Icon className={`w-5 h-5 md:w-6 md:h-6 ${a.iconText}`} />
                  </div>

                  {/* Content */}
                  <div className="pt-1 md:pt-3 space-y-1">
                    <span className={`text-xs font-medium uppercase tracking-widest ${a.stepText}`}>
                      Step {step.step}
                    </span>
                    <h3 className="text-lg md:text-xl font-medium text-white/90">
                      {step.title}
                    </h3>
                    <p className="text-white/45 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingStartedSection;
