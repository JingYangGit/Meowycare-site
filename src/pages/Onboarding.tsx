import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { format, isWeekend, isBefore, startOfDay } from "date-fns";
import { CalendarIcon, Loader2, Sparkles, MessageCircle, Search, ArrowLeft, CreditCard, Calendar as CalendarIconOutline } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { useNavigate, useSearchParams } from "react-router-dom";
import SeasonalParticles from "@/components/landing/SeasonalParticles";
import { Helmet } from "react-helmet-async";

const SOURCE_OPTIONS = [
  { value: "ai_recommend", label: "AI Recommend", icon: Sparkles },
  { value: "google", label: "Google", icon: Search },
  { value: "reddit", label: "Reddit", icon: MessageCircle },
  { value: "tiktok", label: "TikTok", icon: null },
  { value: "instagram", label: "Instagram", icon: null },
  { value: "others", label: "Others", icon: null },
];

const TIMEZONES = [
  { value: "America/New_York", label: "Eastern Time (ET) UTC-5" },
  { value: "America/Chicago", label: "Central Time (CT) UTC-6" },
  { value: "America/Denver", label: "Mountain Time (MT) UTC-7" },
  { value: "America/Los_Angeles", label: "Pacific Time (PT) UTC-8" },
  { value: "America/Anchorage", label: "Alaska Time (AKT) UTC-9" },
  { value: "Pacific/Honolulu", label: "Hawaii Time (HT) UTC-10" },
  { value: "Europe/London", label: "London (GMT) UTC+0" },
  { value: "Europe/Paris", label: "Central Europe (CET) UTC+1" },
  { value: "Europe/Helsinki", label: "Eastern Europe (EET) UTC+2" },
  { value: "Asia/Dubai", label: "Dubai (GST) UTC+4" },
  { value: "Asia/Kolkata", label: "India (IST) UTC+5:30" },
  { value: "Asia/Bangkok", label: "Bangkok (ICT) UTC+7" },
  { value: "Asia/Shanghai", label: "China (CST) UTC+8" },
  { value: "Asia/Tokyo", label: "Japan (JST) UTC+9" },
  { value: "Australia/Sydney", label: "Sydney (AEST) UTC+10" },
  { value: "Pacific/Auckland", label: "New Zealand (NZST) UTC+12" },
];

const EARLIEST_START = new Date(2025, 2, 23);
const CALENDLY_LINK = "https://cal.com/meowycare-adhd/20min";

const Onboarding = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isConsultation = searchParams.get("mode") === "consultation";
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [source, setSource] = useState("");
  const [otherSource, setOtherSource] = useState("");
  const [startDate, setStartDate] = useState<Date>();
  const [timezone, setTimezone] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const effectiveSource = source === "others" ? (otherSource.trim() || "others") : source;
  const isFormValid = name.trim().length > 0 && whatsapp.trim().length > 5 && source.length > 0 && (source !== "others" || otherSource.trim().length > 0) && !!startDate && timezone.length > 0;

  const disableDate = (date: Date) => {
    return isWeekend(date) || isBefore(startOfDay(date), startOfDay(EARLIEST_START));
  };

  const handleCheckout = async () => {
    if (!isFormValid) return;

    const isInsidePreviewFrame = window.self !== window.top;
    const checkoutTab = isInsidePreviewFrame
      ? window.open("about:blank", "_blank", "noopener,noreferrer")
      : null;

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: {
          name: name.trim(),
          whatsapp: whatsapp.trim(),
          source: effectiveSource,
          startDate: startDate?.toISOString(),
          timezone,
        },
      });

      if (error) throw error;
      if (!data?.url) throw new Error("Payment link not available");

      if (checkoutTab) {
        checkoutTab.location.href = data.url;
      } else {
        window.location.href = data.url;
      }
    } catch (err: any) {
      checkoutTab?.close();
      toast({
        title: "Something went wrong",
        description: err.message || "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0D0A08] overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-600/10 rounded-full filter blur-[130px]" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-amber-500/8 rounded-full filter blur-[120px]" />
      </div>
      <SeasonalParticles />

      <Helmet>
        <title>{isConsultation ? "Free ADHD Accountability Consultation | MeowyCare" : "Join MeowyCare ADHD Daily Accountability | Onboarding"}</title>
        <meta
          name="description"
          content={
            isConsultation
              ? "Book a free 20-minute chat to see if MeowyCare's ADHD daily accountability is right for you."
              : "Reserve your spot for MeowyCare's ADHD daily accountability service. Share your details so we can pair you with the right support."
          }
        />
        <link rel="canonical" href={isConsultation ? "https://meowycare.com/onboarding?mode=consultation" : "https://meowycare.com/onboarding"} />
      </Helmet>

      <div className="relative z-10 container max-w-2xl mx-auto px-4 py-16 md:py-24">
        {/* Back button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-white/50 hover:text-white/80 transition-colors mb-12 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-light text-white/90 mb-4">
            {isConsultation ? "Book a Free Chat ☕" : "Reserve Your Spot ✨"}
          </h1>
          <p className="text-white/50 text-base max-w-md mx-auto">
            {isConsultation
              ? "Fill in the details below so we can prepare for your free consultation."
              : "Fill in the details below so we can pair you with the right support."}
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-6 md:p-10 space-y-8"
        >
          {/* Name */}
          <div className="space-y-2">
            <label className="text-white/70 text-sm block">Your preferred name</label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Luna"
              maxLength={50}
              className="h-12 rounded-xl bg-white/[0.05] border-white/[0.1] text-white placeholder:text-white/30 focus:border-white/30 focus:ring-white/10"
            />
          </div>

          {/* WhatsApp */}
          <div className="space-y-2">
            <label className="text-white/70 text-sm block">WhatsApp number or account 💬</label>
            <p className="text-white/40 text-xs">We'll use WhatsApp to stay connected with you daily.</p>
            <Input
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              placeholder="e.g. +1 234 567 8900"
              maxLength={30}
              className="h-12 rounded-xl bg-white/[0.05] border-white/[0.1] text-white placeholder:text-white/30 focus:border-white/30 focus:ring-white/10"
            />
          </div>

          {/* Source */}
          <div className="space-y-2">
            <label className="text-white/70 text-sm block">How did you find us? 🐱</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {SOURCE_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setSource(opt.value)}
                  className={cn(
                    "flex items-center gap-2 p-3 rounded-xl border text-sm font-medium transition-all text-left",
                    source === opt.value
                      ? "border-white/30 bg-white/[0.1] text-white/90"
                      : "border-white/[0.08] bg-white/[0.02] text-white/50 hover:bg-white/[0.05] hover:text-white/70"
                  )}
                >
                  {opt.icon && <opt.icon className="w-4 h-4 shrink-0" />}
                  {opt.label}
                </button>
              ))}
            </div>
            {source === "others" && (
              <Input
                value={otherSource}
                onChange={(e) => setOtherSource(e.target.value)}
                placeholder="Please tell us where you found us"
                maxLength={100}
                className="mt-3 h-12 rounded-xl bg-white/[0.05] border-white/[0.1] text-white placeholder:text-white/30 focus:border-white/30 focus:ring-white/10"
              />
            )}
          </div>

          {/* Date & Timezone row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Start Date */}
            <div className="space-y-2">
              <label className="text-white/70 text-sm block">Preferred start date 📅</label>
              <p className="text-white/40 text-xs">Mon–Fri service. Earliest: March 23, 2025</p>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full h-12 rounded-xl justify-start text-left font-normal bg-white/[0.05] border-white/[0.1] hover:bg-white/[0.08] text-white",
                      !startDate && "text-white/30"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {startDate ? format(startDate, "MMM d, yyyy") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={setStartDate}
                    disabled={disableDate}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                    defaultMonth={EARLIEST_START}
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Timezone */}
            <div className="space-y-2">
              <label className="text-white/70 text-sm block">Your timezone 🌍</label>
              <p className="text-white/40 text-xs">So we check in at the right time.</p>
              <Select value={timezone} onValueChange={setTimezone}>
                <SelectTrigger className="h-12 rounded-xl bg-white/[0.05] border-white/[0.1] text-white data-[placeholder]:text-white/30">
                  <SelectValue placeholder="Select timezone" />
                </SelectTrigger>
                <SelectContent>
                  {TIMEZONES.map((tz) => (
                    <SelectItem key={tz.value} value={tz.value}>
                      {tz.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {isConsultation ? (
            <>
              {/* Primary: Book Free Chat */}
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-6 md:p-8 text-center transition-all duration-500 hover:bg-yellow-500/[0.05] hover:border-yellow-400/20 flex flex-col justify-between">
                <div>
                  <h3 className="text-white/90 text-lg font-medium mb-2">Book your free chat</h3>
                  <p className="text-white/50 text-sm mb-6">20 minutes · No commitment · Just a friendly conversation.</p>
                </div>
                <Button
                  onClick={() => window.open(CALENDLY_LINK, "_blank")}
                  disabled={!isFormValid}
                  size="lg"
                  className="w-full px-6 py-6 text-base font-medium rounded-full bg-white text-[#0D0A08] hover:bg-yellow-50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(255,220,80,0.3),0_0_100px_rgba(255,200,50,0.15)] disabled:opacity-40 disabled:hover:scale-100"
                >
                  <CalendarIconOutline className="w-5 h-5 mr-2" />
                  Schedule Free Chat
                </Button>
                <p className="text-white/30 text-xs mt-3">Free · 20 minutes · No commitment</p>
              </div>

              {/* Secondary: Reserve Spot */}
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.01] backdrop-blur-sm p-6 md:p-8 text-center flex flex-col justify-between">
                <div>
                  <h3 className="text-white/80 text-lg font-medium mb-2">Ready to start right away?</h3>
                  <p className="text-white/45 text-sm mb-6">Reserve your seat — $50/week. Refund anytime.</p>
                </div>
                <Button
                  onClick={handleCheckout}
                  disabled={!isFormValid || isLoading}
                  size="lg"
                  variant="outline"
                  className="w-full px-6 py-6 text-base font-medium rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-all duration-300 hover:scale-105"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <CreditCard className="w-5 h-5 mr-2" />
                      Reserve Your Spot
                    </>
                  )}
                </Button>
                <p className="text-white/30 text-xs mt-3">You can get a refund anytime.</p>
              </div>
            </>
          ) : (
            <>
              {/* Primary: Reserve Spot */}
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-6 md:p-8 text-center transition-all duration-500 hover:bg-yellow-500/[0.05] hover:border-yellow-400/20 flex flex-col justify-between">
                <div>
                  <h3 className="text-white/90 text-lg font-medium mb-2">Ready to start?</h3>
                  <p className="text-white/50 text-sm mb-6">Reserve your seat — $50/week. Refund anytime.</p>
                </div>
                <Button
                  onClick={handleCheckout}
                  disabled={!isFormValid || isLoading}
                  size="lg"
                  className="w-full px-6 py-6 text-base font-medium rounded-full bg-white text-[#0D0A08] hover:bg-yellow-50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(255,220,80,0.3),0_0_100px_rgba(255,200,50,0.15)] disabled:opacity-40 disabled:hover:scale-100"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <CreditCard className="w-5 h-5 mr-2" />
                      Reserve Your Spot
                    </>
                  )}
                </Button>
                <p className="text-white/30 text-xs mt-3">You can get a refund anytime.</p>
              </div>

              {/* Secondary: Free Chat */}
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.01] backdrop-blur-sm p-6 md:p-8 text-center flex flex-col justify-between">
                <div>
                  <h3 className="text-white/80 text-lg font-medium mb-2">Not sure if it's for you?</h3>
                  <p className="text-white/45 text-sm mb-6">
                    It's okay. Schedule a 20-minute free chat, and let's make sure if my service is a good fit for you.
                  </p>
                </div>
                <Button
                  onClick={() => window.open(CALENDLY_LINK, "_blank")}
                  size="lg"
                  variant="outline"
                  className="w-full px-6 py-6 text-base font-medium rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-all duration-300 hover:scale-105"
                >
                  <CalendarIconOutline className="w-5 h-5 mr-2" />
                  Book a Free Chat
                </Button>
                <p className="text-white/30 text-xs mt-3">Free · 20 minutes · No commitment</p>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Onboarding;
