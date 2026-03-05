import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SeasonalParticles from "./SeasonalParticles";

const availability = [
  {
    month: "March",
    weeks: [
      { label: "Week 1 (Mar 1–7)", status: "full" as const },
      { label: "Week 2 (Mar 8–14)", status: "full" as const },
      { label: "Week 3 (Mar 15–21)", status: "full" as const },
      { label: "Week 4 (Mar 22–31)", status: "available" as const },
    ],
  },
  {
    month: "April",
    weeks: [
      { label: "Week 1 (Apr 1–7)", status: "available" as const },
      { label: "Week 2 (Apr 8–14)", status: "available" as const },
      { label: "Week 3 (Apr 15–21)", status: "available" as const },
      { label: "Week 4 (Apr 22–30)", status: "available" as const },
    ],
  },
];

const NewPricingSection = () => {
  const handleReserve = () => {
    window.location.href = "/onboarding";
  };

  return (
    <section id="pricing" className="relative py-24 md:py-32 px-4 bg-[#0D0A08] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 w-80 h-80 bg-amber-500/8 rounded-full filter blur-[130px]" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-600/8 rounded-full filter blur-[120px]" />
      </div>
      <SeasonalParticles />
      <div className="container max-w-3xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-light text-white/90 text-center mb-16"
        >
          Simple pricing
        </motion.h2>

        {/* Price card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-10 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm text-center mb-10 transition-all duration-500 hover:scale-[1.03] hover:bg-yellow-500/[0.07] hover:border-yellow-400/30 hover:shadow-[0_0_60px_rgba(255,220,80,0.2),inset_0_0_40px_rgba(255,220,80,0.1)]"
        >
          <div className="mb-6">
            <span className="text-5xl md:text-6xl font-light text-white/90">$50</span>
            <span className="text-white/40 text-lg ml-2">/ week</span>
          </div>
          <p className="text-white/70 text-base mb-2">12 hours/day coverage</p>
          <p className="text-white/50 text-sm">1 coaching session = 2 weeks of daily support</p>
        </motion.div>

        {/* Availability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="p-6 rounded-2xl border border-white/[0.04] bg-white/[0.01] mb-12 transition-all duration-500 hover:scale-[1.03] hover:bg-yellow-500/[0.06] hover:border-yellow-400/25 hover:shadow-[0_0_50px_rgba(255,220,80,0.15),inset_0_0_30px_rgba(255,220,80,0.07)]"
        >
          <h3 className="text-white/90 text-xl md:text-2xl font-medium mb-2">Check our availability</h3>
          <p className="text-white/45 text-sm mb-2">To ensure quality, we only take a limited number of clients each week.</p>
          <p className="text-white/45 text-sm mb-8">🌍 If you need support outside US hours, just let us know in the survey.</p>
          <div className="space-y-6">
            {availability.map((month) => (
              <div key={month.month}>
                <p className="text-white/75 text-base font-medium mb-3">{month.month}</p>
                <div className="flex flex-wrap gap-2">
                  {month.weeks.map((week, i) => (
                    <span
                      key={i}
                      className={`text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full border ${
                        week.status === "full"
                          ? "border-white/[0.06] text-white/30 bg-white/[0.01]"
                          : "border-white/20 text-white/75 bg-white/[0.05]"
                      }`}
                    >
                      {week.label} — {week.status === "full" ? "Full" : "Available"}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <Button
            onClick={handleReserve}
            size="lg"
            className="px-10 py-6 text-base font-medium rounded-full bg-white text-[#0D0A08] hover:bg-yellow-50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(255,220,80,0.3),0_0_100px_rgba(255,200,50,0.15)]"
          >
            Reserve Your Spot
          </Button>
          <p className="text-white/50 text-sm">You can get a refund anytime.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewPricingSection;
