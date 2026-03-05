import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Users } from "lucide-react";
import { useSeason, Season } from "@/contexts/SeasonContext";

const bannerConfig: Record<Season, {
  border: string;
  gradient: string;
  hoverBorder: string;
  hoverShadow: string;
  glowBg: string;
  iconBg: string;
  iconBorderColor: string;
  iconText: string;
  accentText: string;
  arrowHover: string;
}> = {
  winter: {
    border: "border-purple-500/20",
    gradient: "bg-gradient-to-r from-purple-900/20 via-indigo-900/20 to-pink-900/20",
    hoverBorder: "hover:border-purple-400/40",
    hoverShadow: "hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]",
    glowBg: "bg-purple-500/10",
    iconBg: "bg-purple-500/20",
    iconBorderColor: "border-purple-400/30",
    iconText: "text-purple-300",
    accentText: "text-purple-300",
    arrowHover: "group-hover:text-purple-300",
  },
  spring: {
    border: "border-emerald-500/20",
    gradient: "bg-gradient-to-r from-emerald-900/20 via-lime-900/20 to-yellow-900/20",
    hoverBorder: "hover:border-emerald-400/40",
    hoverShadow: "hover:shadow-[0_0_40px_rgba(52,211,153,0.15)]",
    glowBg: "bg-emerald-500/10",
    iconBg: "bg-emerald-500/20",
    iconBorderColor: "border-emerald-400/30",
    iconText: "text-emerald-300",
    accentText: "text-emerald-300",
    arrowHover: "group-hover:text-emerald-300",
  },
  summer: {
    border: "border-sky-500/20",
    gradient: "bg-gradient-to-r from-sky-900/20 via-cyan-900/20 to-blue-900/20",
    hoverBorder: "hover:border-sky-400/40",
    hoverShadow: "hover:shadow-[0_0_40px_rgba(56,189,248,0.15)]",
    glowBg: "bg-sky-500/10",
    iconBg: "bg-sky-500/20",
    iconBorderColor: "border-sky-400/30",
    iconText: "text-sky-300",
    accentText: "text-sky-300",
    arrowHover: "group-hover:text-sky-300",
  },
  autumn: {
    border: "border-amber-500/20",
    gradient: "bg-gradient-to-r from-amber-900/20 via-orange-900/20 to-red-900/20",
    hoverBorder: "hover:border-amber-400/40",
    hoverShadow: "hover:shadow-[0_0_40px_rgba(245,158,11,0.15)]",
    glowBg: "bg-amber-500/10",
    iconBg: "bg-amber-500/20",
    iconBorderColor: "border-amber-400/30",
    iconText: "text-amber-300",
    accentText: "text-amber-300",
    arrowHover: "group-hover:text-amber-300",
  },
};

const AccountabilityBanner = () => {
  const navigate = useNavigate();
  const { season } = useSeason();
  const c = bannerConfig[season];

  return (
    <section className="relative bg-[#0D0A08] py-6 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        onClick={() => navigate("/accountability")}
        className="max-w-3xl mx-auto cursor-pointer group"
      >
        <div className={`relative overflow-hidden rounded-2xl border backdrop-blur-md p-6 md:p-8 transition-all duration-300 ${c.border} ${c.gradient} ${c.hoverBorder} ${c.hoverShadow}`}>
          <div className={`absolute -top-12 -right-12 w-40 h-40 ${c.glowBg} rounded-full blur-3xl pointer-events-none`} />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className={`w-10 h-10 rounded-full ${c.iconBg} ${c.iconBorderColor} border flex items-center justify-center flex-shrink-0 mt-0.5`}>
                <Users className={`w-5 h-5 ${c.iconText}`} />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-white/90 font-medium text-lg">ADHD Daily Accountability Service</h3>
                  <span className="text-xs bg-amber-500/20 text-amber-300 border border-amber-400/30 rounded-full px-2.5 py-0.5">Waitlist Open</span>
                </div>
                <p className="text-white/50 text-sm leading-relaxed max-w-lg">
                  Get a <span className="text-white/70">real human</span> who gets you to gentle, supportive check-ins with coaching tactics. <span className={c.accentText}>$50/week →</span>
                </p>
              </div>
            </div>

            <ArrowRight className={`w-5 h-5 text-white/30 ${c.arrowHover} group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 hidden md:block`} />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AccountabilityBanner;
