import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Quote } from "lucide-react";
import SeasonalParticles from "./SeasonalParticles";

interface Testimonial {
  tagline: string;
  fullQuote: string;
}

const testimonials: Testimonial[] = [
  {
    tagline: "The best decision I've made",
    fullQuote: "Signing up for accountability coaching was hands down the best decision I've made. I've dealt with perfectionism and procrastination my whole life. Having someone there to keep me on track meant I'd just do the thing before my brain had time to spiral. Those little 'it's okay, you got this, tomorrow's a new day' messages slowly rewired how I talk to myself.",
  },
  {
    tagline: "She's like a teammate leveling up with me",
    fullQuote: "Over the past 6 months, she's never been just a 'check-in bot.' She's more like a teammate leveling up with me. Her daily reminders always come with so much energy, and when I hit a wall, she's even more determined to find solutions than I am. I kicked my procrastination habit and built routines that'll stick for life.",
  },
  {
    tagline: "I became more confident",
    fullQuote: "After 6 months together, I finally understand what 'professional yet warm' really means. She remembers my little habits, my goals, even knows which days I'm likely to feel low. She never guilt-trips me for missing a day. Instead, she helps me figure out why and adjust my pace. I didn't just hit my goals — I became more confident.",
  },
  {
    tagline: "My productivity literally doubled",
    fullQuote: "After 6+ months together, she completely cured my chronic procrastination. She checks in on time every day and adjusts my plan based on how I'm actually feeling. It's never cold or robotic — more like a thoughtful friend. My productivity literally doubled. Highly recommend for anyone who wants to build real discipline!",
  },
  {
    tagline: "I'm making progress, and that matters",
    fullQuote: "I always thought I just had really bad procrastination until I realized it might actually be ADHD. After one month with my accountability coach, I can honestly say she was incredibly thorough. That feeling of checking things off is like waking up on a lazy morning with nothing hanging over you. I still have rough days, but I'm making progress, and that matters.",
  },
  {
    tagline: "Once I started moving, everything felt better",
    fullQuote: "I've been using MeowyCare for over 6 months now. Whether it's waking me up or making sure I actually start studying, she doesn't just nudge me once and disappear. She makes sure I'm actually up and going. With her support, I made it through my last year of college smoothly. Before, I'd just lie in bed scrolling my phone all day feeling guilty. Once I started moving, everything felt better.",
  },
  {
    tagline: "A little ray of sunshine ☀️",
    fullQuote: "My accountability coach is both responsible and patient. She never mechanically pushes for progress. Instead, she adapts her approach based on where I'm at. Those little words of encouragement after completing a task really keep me going. My study efficiency went up and I procrastinate way less!",
  },
  {
    tagline: "Tried multiple platforms, keep coming back",
    fullQuote: "I've tried multiple platforms and I keep coming back to MeowyCare. The coaching quality speaks for itself! Accurate study progress tracking, patient reminders, practical to-do suggestions, and genuinely useful study methods.",
  },
  {
    tagline: "Zero anxiety, zero fear",
    fullQuote: "With other study accountability services, I'd always be too scared to admit I got distracted or couldn't focus. But with my coach, I'm totally honest, because I know we can work through it together. She's been such a huge help! Literally zero anxiety, zero fear.",
  },
  {
    tagline: "Renewed RIGHT after my exam!",
    fullQuote: "This week was rough with exams. My mood and energy were all over the place. But every time I opened up, she was incredibly patient and encouraging. Even with everything going on, I still got a lot done under her guidance. I'm especially grateful for her encouragement the night before my exam. That's why I renewed my plan RIGHT after the test!",
  },
  {
    tagline: "No more drifting on autopilot",
    fullQuote: "Not sure if I have ADHD, but I definitely have a serious problem with getting started on things. She nudges me to make a daily plan and keeps me on top of my studying and daily life. I feel like I'm actually getting things done every day now. No more drifting through life on autopilot.",
  },
  {
    tagline: "The luckiest thing in my academic life",
    fullQuote: "I used to be so inconsistent with studying. Classic on-again, off-again. But ever since I started coaching, I'm a whole different person! My attention span is terrible. I'll zone out mid-lecture thinking about random stuff. But my coach always catches it and gently pulls me back. It's like having a big sister whisper 'hey, pay attention!' without making it awkward.",
  },
  {
    tagline: "Efficiency skyrocketed",
    fullQuote: "My efficiency skyrocketed this week. Her communication style is so upbeat and positive. She genuinely tracks where I am in my plan, step by step. She cares without adding pressure. She helped me find the motivation to set goals and actually follow through. I renewed for another month without hesitation!",
  },
  {
    tagline: "She truly understands my ADHD",
    fullQuote: "When I first started, I was completely overwhelmed by physical anxiety symptoms. Headaches, chest tightness, trouble breathing. Over these 4 months, she's been so much more than a coach. She's been a real companion, someone who truly understands my ADHD. She adapts to however I'm doing that day, guiding me to do what I can without any pressure.",
  },
  {
    tagline: "Life feels like an RPG game",
    fullQuote: "I've renewed my plan so many times! Life honestly feels like an RPG game now. Watching my progress stack up little by little is so satisfying! I love the work-rest rhythm we've built too!",
  },
  {
    tagline: "Getting better, bit by bit",
    fullQuote: "I'm the type of person who loves making plans but totally loses steam halfway through. My follow-through got noticeably better. I even had energy to study on two consecutive weekends! I'm still far from having superhuman discipline, but I'm getting better, bit by bit. What we need is long-term consistency.",
  },
  {
    tagline: "A positive energy angel ❤️",
    fullQuote: "I almost NEVER leave reviews, but I have to say this — she is truly, truly amazing. Bubbly, sweet, kind, empathetic. She always makes me feel so energized. Even when I'm dreading a task, her vibe somehow gets me pumped to do it. And if I don't finish everything I planned? She still encourages me.",
  },
  {
    tagline: "Zero AI vibes, 100% real human energy",
    fullQuote: "Zero AI vibes, 100% real human energy. Her push game is strong, way better than other services I've tried that only give you generic positive affirmations. When I hit a roadblock, she actually helps me think through solutions.",
  },
  {
    tagline: "Just start, and the anxiety fades",
    fullQuote: "She truly gets ADHD. She helps me build a plan, prioritize, and stay organized instead of bouncing between tasks. I used to be trapped in anxiety-driven physical symptoms. Her coaching taught me something important: just start with what you can do, and the anxiety fades.",
  },
  {
    tagline: "The progress is small, but it's real",
    fullQuote: "Anyone living abroad with low energy knows how impossibly hard it is to start anything once you're stuck in decision paralysis. I went from zero exercise to slowly building a little routine. After work, I used to spiral into anxiety, but having someone there makes it feel less overwhelming. The progress is small. But it's real and it's solid.",
  },
  {
    tagline: "I can actually be THIS productive?!",
    fullQuote: "Wait... I can actually be THIS productive?? The experience was incredible. She helped me plan my time and kept cheering me on. I was fired up every single day and barely got distracted. Who knew I had it in me!",
  },
  {
    tagline: "Like being caught by something soft and safe",
    fullQuote: "As someone with ADHD and severe procrastination, having accountability coaching genuinely boosted my study efficiency so much. When I'm in a slump, she gives me timely encouragement. It feels like being caught by something soft and safe. It's really wonderful!",
  },
  {
    tagline: "Don't give up on your day",
    fullQuote: "Sometimes when I feel like I messed up or unexpected things throw off my plan, I get hit with this wave of frustration and want to give up entirely. But with my coach there, I can talk it through, adjust, and make the most of the rest of my day instead of writing it off. Don't give up on your day.",
  },
  {
    tagline: "I realized I CAN take action",
    fullQuote: "Having someone beside me honestly makes me so much more motivated. She talks to me in such a warm and gentle way, never forcing me to do a million things. Through this whole experience, I realized I actually CAN take action. Slowly, gradually, I can get things done. After one week, I renewed without a second thought!",
  },
  {
    tagline: "Got into grad school!! ❤️",
    fullQuote: "My life used to feel like sand slipping through my fingers. But since starting accountability coaching last October, everything changed. I learned to adjust my goals based on reality. And because I actually completed things, I understand my own abilities better now! I even scored high enough on IELTS to get into grad school!! The results really do show. It truly works.",
  },
  {
    tagline: "300+ days straight",
    fullQuote: "Over a year of accountability coaching! 300+ days straight without a single break! Whether it's a messy daily schedule or a goal that feels impossible to push forward, she helps me sort it all out. Life feels so much more structured now and my mindset is way more stable.",
  },
  {
    tagline: "Like unlocking a cheat code",
    fullQuote: "A lifesaver for anyone with no sense of time! Having my coach is like unlocking a cheat code! She checks in periodically to remind me to take breaks AND to get back on track. My brain isn't a chaotic mess anymore, and my work rhythm is actually sustainable now.",
  },
  {
    tagline: "Focused energy is contagious",
    fullQuote: "I love the feeling of having someone persistently (lovingly!) keeping tabs on me. I also opted for the online study room feature. Everyone's focused energy is contagious and makes me want to push a little longer. Super effective for anyone wanting a consistent routine!",
  },
];

// Seeded pseudo-random for consistent layout
const seededRandom = (seed: number) => {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
};

// Distribute into 3 rows
const ROW_COUNT = 3;
const rows = Array.from({ length: ROW_COUNT }, (_, i) =>
  testimonials.filter((_, idx) => idx % ROW_COUNT === i)
);

const FloatingTestimonials = () => {
  const [selected, setSelected] = useState<Testimonial | null>(null);

  // Generate stable font size variation per bubble
  const fontSizes = useMemo(() => {
    const sizes = ["text-sm", "text-base", "text-lg"];
    return rows.map((row, rowIdx) =>
      [...row, ...row].map((_, i) => sizes[Math.floor(seededRandom(rowIdx * 500 + i) * sizes.length)])
    );
  }, []);

  return (
    <section className="py-20 md:py-28 px-4 bg-[#0D0A08] overflow-hidden relative">
      <SeasonalParticles />
      {/* Ambient glow blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-600/[0.06] rounded-full filter blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-amber-500/[0.05] rounded-full filter blur-[120px]" />
      </div>

      <div className="container max-w-6xl mx-auto text-center mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-light text-white/80 mb-4"
        >
          Words from real people
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/40 text-base"
        >
          Tap any bubble to read their full story
        </motion.p>
      </div>

      <div className="relative space-y-4 md:space-y-5">
        {rows.map((row, rowIdx) => (
          <div
            key={rowIdx}
            className="overflow-hidden"
          >
            <motion.div
              className="flex items-center w-max gap-4"
              animate={{
                x: rowIdx % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 60 + rowIdx * 15,
                  ease: "linear",
                },
              }}
            >
              {[...row, ...row].map((t, i) => {
                const fontSize = fontSizes[rowIdx][i];
                return (
                  <motion.button
                    key={i}
                    onClick={() => setSelected(t)}
                    className={`group relative flex-shrink-0 px-5 py-3 md:px-6 md:py-3.5 rounded-full 
                      border border-white/[0.07] bg-white/[0.03]
                      text-white/70 ${fontSize} font-medium
                      transition-all duration-500 cursor-pointer select-none
                      hover:bg-yellow-500/[0.1] hover:border-yellow-400/35
                      hover:shadow-[0_0_50px_rgba(255,220,80,0.2),inset_0_0_30px_rgba(255,220,80,0.08)]
                      hover:text-yellow-50
                      active:scale-95`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="relative z-10 whitespace-nowrap">
                      "{t.tagline}"
                    </span>
                  </motion.button>
                );
              })}
            </motion.div>
          </div>
        ))}
      </div>

      {/* Expanded testimonial modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-xl w-full rounded-2xl border border-yellow-500/20 
                bg-[#1a1510] p-8 md:p-10
                shadow-[0_0_80px_rgba(255,220,80,0.12)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-white/40 hover:text-white/80 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <Quote className="w-8 h-8 text-yellow-500/40 mb-4" />
              
              <p className="text-yellow-200/90 font-semibold text-lg mb-4">
                "{selected.tagline}"
              </p>

              <blockquote className="text-white/80 text-base leading-relaxed italic">
                "{selected.fullQuote}"
              </blockquote>

              <div className="mt-6 text-right">
                <span className="text-yellow-500/50 text-sm">— MeowyCare Client</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FloatingTestimonials;
