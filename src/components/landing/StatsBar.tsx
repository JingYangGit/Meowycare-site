import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const stats = [
  { value: "3,000+", label: "ADHDers helped", link: null },
  { value: "5.0", label: "out of 5.0 · 445 reviews", link: null },
  { value: "✦", label: "Science backed", link: "/blog/why-human-accountability-works-for-adhd" },
];

const StatsBar = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-12 md:py-16 px-4 bg-[#0D0A08]">
      <div className="container max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 md:gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              onClick={() => stat.link && navigate(stat.link)}
              className={`text-center p-4 md:p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-all duration-500 hover:scale-[1.05] hover:bg-yellow-500/[0.07] hover:border-yellow-400/30 hover:shadow-[0_0_60px_rgba(255,220,80,0.2),inset_0_0_40px_rgba(255,220,80,0.1)] ${stat.link ? "cursor-pointer" : ""}`}
            >
              <p className="text-2xl md:text-4xl font-light text-white/90 mb-1">{stat.value}</p>
              <p className="text-white/50 text-xs md:text-sm">
                {stat.label}
                {stat.link && <span className="ml-1 text-yellow-400/50">→</span>}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsBar;
