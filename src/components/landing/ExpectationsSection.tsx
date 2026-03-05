import { motion } from "framer-motion";
import { TrendingUp, CalendarCheck, ShieldCheck, Sparkles } from "lucide-react";
import { useSeason, Season } from "@/contexts/SeasonContext";

const expectations = [
  {
    icon: TrendingUp,
    bold: "Your productivity doubles",
    rest: " without sacrificing your physical or mental health.",
  },
  {
    icon: CalendarCheck,
    bold: "You build a healthy routine",
    rest: " and create real structure in your life.",
  },
  {
    icon: ShieldCheck,
    bold: "Your chances of losing control drop by 90%.",
    rest: " You won't lose another day to it.",
  },
  {
    icon: Sparkles,
    bold: "You understand yourself better,",
    rest: " accept yourself more, and feel confident taking control of your life.",
  },
];

const accentConfig: Record<Season, { iconText: string; iconBg: string; iconBorder: string }> = {
  winter: { iconText: "text-purple-300", iconBg: "bg-purple-500/10", iconBorder: "border-purple-400/20" },
  spring: { iconText: "text-emerald-300", iconBg: "bg-emerald-500/10", iconBorder: "border-emerald-400/20" },
  summer: { iconText: "text-sky-300", iconBg: "bg-sky-500/10", iconBorder: "border-sky-400/20" },
  autumn: { iconText: "text-amber-300", iconBg: "bg-amber-500/10", iconBorder: "border-amber-400/20" },
};

const ExpectationsSection = () => {
  const { season } = useSeason();
  const a = accentConfig[season];

  return (
    <section className="relative py-24 md:py-32 px-4 bg-[#0D0A08] overflow-hidden">
      <div className="container max-w-3xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-light text-white/90 text-center mb-14"
        >
          What you can expect
        </motion.h2>

        <div className="space-y-5">
          {expectations.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-start gap-4"
              >
                <div className={`flex-shrink-0 w-10 h-10 rounded-full ${a.iconBg} border ${a.iconBorder} flex items-center justify-center mt-0.5`}>
                  <Icon className={`w-[18px] h-[18px] ${a.iconText}`} />
                </div>
                <p className="text-white/70 text-sm md:text-base leading-relaxed pt-2">
                  <span className="text-white font-semibold">{item.bold}</span>
                  {item.rest}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExpectationsSection;
