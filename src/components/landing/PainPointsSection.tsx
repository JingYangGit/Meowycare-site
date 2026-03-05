import { motion } from "framer-motion";
import SeasonalParticles from "./SeasonalParticles";


const painPoints = [
  { icon: "📱", bold: "Can't stop scrolling", rest: " for hours. You hate it, but you can't pull away." },
  { icon: "😩", bold: "Severe procrastination.", rest: " Never starting until the last minute. Exhausted, and still not feeling good about it." },
  { icon: "🎓", bold: "Struggling to meet graduation requirements.", rest: " Deadlines keep passing." },
  { icon: "💼", bold: "Got fired", rest: " because of missed deadlines or always being late. Not because you can't do the job." },
  { icon: "🌀", bold: "Life is in chaos.", rest: " You want to change, but don't know where to start." },
];

const PainPointsSection = () => {
  return (
    <section className="relative py-20 md:py-28 px-4 bg-[#0D0A08] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-emerald-600/8 rounded-full filter blur-[140px]" />
      </div>
      <SeasonalParticles />
      <div className="container max-w-3xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-light text-white/90 text-center mb-12"
        >
          Sound familiar?
        </motion.h2>

        <div className="grid gap-3 mb-16">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-4 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-all duration-500 hover:bg-yellow-500/[0.07] hover:border-yellow-400/30 hover:shadow-[0_0_60px_rgba(255,220,80,0.2),inset_0_0_40px_rgba(255,220,80,0.1)]"
            >
              <span className="text-xl flex-shrink-0">{point.icon}</span>
              <p className="text-white/75 text-sm md:text-base">
                <span className="text-white font-semibold">{point.bold}</span>
                {point.rest}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-white/50 text-center text-lg mb-16 italic"
        >
          And no one around you can truly help…
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-white font-medium text-xl md:text-2xl mb-3">
            MeowyCare is designed for you ✨
          </p>
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            With a 1-on-1 human accountability coach, we help you build life structure, change habits, and achieve your goals!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPointsSection;
