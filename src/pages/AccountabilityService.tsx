import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import SeasonalParticles from "@/components/landing/SeasonalParticles";
import Navbar from "@/components/landing/Navbar";
import BreathingSphere from "@/components/landing/BreathingSphere";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import Footer from "@/components/landing/Footer";

const WHATSAPP_NUMBER = "14128346931";
const HELP_NOW_MESSAGE = encodeURIComponent("Hi, I need help right now");
const SAVE_FOR_LATER_MESSAGE = encodeURIComponent(
  "Hi, I'd like to join the list. Please reach out when I need help in the future",
);

const AccountabilityService = () => {
  const handleHelpNow = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${HELP_NOW_MESSAGE}`, "_blank");
  };

  const handleSaveForLater = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${SAVE_FOR_LATER_MESSAGE}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#0D0A08] text-white relative overflow-hidden">
      <Navbar />
      <Helmet>
        <title>ADHD In-moment Support – MeowyCare | $15/20min</title>
        <meta
          name="description"
          content="Feel frozen or overwhelmed? Get ADHD support now. Just text me — I'll call you back, and we'll get you moving in 20 minutes. $15 per session."
        />
        <link rel="canonical" href="https://meowycare.com/in-moment" />
      </Helmet>

      <SeasonalParticles />

      {/* Hero with Breathing Sphere */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-2xl">
          <BreathingSphere className="mb-4" />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="text-2xl md:text-4xl font-light tracking-wide text-white/90 leading-tight mt-12"
          >
            Feel frozen or overwhelmed? Get ADHD support now.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.9 }}
            className="text-white/50 text-base md:text-lg leading-relaxed max-w-xl"
          >
            You don't have to lose another day to this. Just text me — I'll call you back, and we'll get you moving in
            20.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.9 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <Button
              onClick={handleHelpNow}
              size="lg"
              className="px-8 py-6 text-base font-medium rounded-full bg-white text-[#0D0A08] hover:bg-yellow-50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(255,220,80,0.3),0_0_100px_rgba(255,200,50,0.15)]"
            >
              <MessageCircle className="w-5 h-5 mr-2" />I need help now
            </Button>

            <Button
              onClick={handleSaveForLater}
              size="lg"
              className="px-8 py-6 text-base font-medium rounded-full bg-white/10 border border-white/20 text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300"
            >
              Save for later
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-white/30 text-sm pt-8"
          >
            MeowyCare: ADHD In-moment Support
          </motion.p>
        </div>
      </section>

      {/* How It Works + Pricing + Daily Accountability link */}
      <HowItWorksSection />

      <Footer />
    </main>
  );
};

export default AccountabilityService;
