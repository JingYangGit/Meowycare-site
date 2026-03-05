import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Clock, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import SeasonalParticles from "@/components/landing/SeasonalParticles";

const tocItems = [
  { id: "doing-problem", label: "You have a doing problem" },
  { id: "what-helps", label: "So what actually helps?" },
  { id: "why-apps-fail", label: "Why apps fail" },
  { id: "real-person", label: "Why a real person changes everything" },
  { id: "research", label: "The research backs this up" },
  { id: "traditional-coaching", label: "What about traditional ADHD coaching?" },
  { id: "daily-accountability", label: "What daily accountability looks like" },
  { id: "not-alone", label: "You don't have to build the scaffolding alone" },
];

const BlogPost = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // pick the one closest to top
          const top = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActiveSection(top.target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    tocItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) {
        sectionRefs.current[id] = el;
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen bg-[#0D0A08] relative">
      <Helmet>
        <title>Why Human Accountability Works for ADHD (And Why Apps Don't) | MeowyCare</title>
        <meta name="description" content="After working with 3,000+ ADHDers, we understand why apps fail and human accountability works. Learn about external scaffolding, executive function, and daily support." />
        <link rel="canonical" href="https://meowycare.com/blog/why-human-accountability-works-for-adhd" />
        <meta property="og:title" content="Why Human Accountability Works for ADHD (And Why Apps Don't)" />
        <meta property="og:description" content="After working with 3,000+ ADHDers, we understand why apps fail and human accountability works. Learn about external scaffolding, executive function, and daily support." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://meowycare.com/blog/why-human-accountability-works-for-adhd" />
        <meta property="og:image" content="https://meowycare.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Why Human Accountability Works for ADHD (And Why Apps Don't)" />
        <meta name="twitter:description" content="After working with 3,000+ ADHDers, we understand why apps fail and human accountability works." />
        <meta name="twitter:image" content="https://meowycare.com/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Why Human Accountability Works for ADHD (And Why Apps Don't)",
          "description": "After working with 3,000+ ADHDers, we understand why apps fail and human accountability works.",
          "author": { "@type": "Organization", "name": "MeowyCare" },
          "publisher": { "@type": "Organization", "name": "MeowyCare" },
          "datePublished": "2026-03-01",
          "url": "https://meowycare.com/blog/why-human-accountability-works-for-adhd"
        })}</script>
      </Helmet>
      <Navbar />
      <SeasonalParticles />

      {/* Ambient blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/6 w-[500px] h-[500px] bg-yellow-600/[0.03] rounded-full blur-[180px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-emerald-600/[0.03] rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 pt-24 pb-20">
        {/* Header */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 mb-12">
          <motion.button
            onClick={() => navigate("/")}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-1.5 text-white/40 hover:text-white/70 transition-colors text-sm mb-8"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to home
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] text-white/60 text-xs">
                <Clock className="w-3.5 h-3.5" />
                8 min read
              </span>
              <span className="text-white/30 text-xs">March 2026</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-white/90 leading-tight mb-6">
              Why Human Accountability Works for ADHD{" "}
              <span className="text-white/50">(And Why Apps Don't)</span>
            </h1>
          </motion.div>
        </div>

        {/* Body: TOC + Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex gap-12 justify-center">
          {/* Sticky TOC — desktop only */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="hidden lg:block w-56 flex-shrink-0"
          >
            <div className="sticky top-24">
              <p className="text-white/30 text-xs uppercase tracking-widest mb-4">
                In this article
              </p>
              <nav className="space-y-1">
                {tocItems.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    className={`block w-full text-left text-sm py-1.5 pl-3 border-l-2 transition-all duration-300 ${
                      activeSection === id
                        ? "border-yellow-400/70 text-white/90"
                        : "border-white/[0.06] text-white/35 hover:text-white/60 hover:border-white/20"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </nav>
            </div>
          </motion.aside>

          {/* Article content */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-3xl w-full prose-invert"
          >
            {/* Intro */}
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              You've probably tried more productivity tools than you can count.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-6">
              Notion. Todoist. Forest. Pomodoro timers. Habit trackers. AI assistants. You set them up, feel great for about three days, and then forget they exist.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-6">
              For a long time, you thought the problem was you. Not disciplined enough. Not trying hard enough. If you just found the right app, the right system, the right hack, everything would click.
            </p>
            <p className="text-white/70 text-base leading-relaxed mb-6 italic">
              It never clicked.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-12">
              After working with 3,000+ people with ADHD, we finally understand why. And it has nothing to do with discipline.
            </p>

            {/* Section 1 */}
            <h2
              id="doing-problem"
              className="text-2xl sm:text-3xl font-light text-white/90 mb-6 scroll-mt-24"
            >
              You don't have an information problem.{" "}
              <span className="text-yellow-300/80">You have a doing problem.</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-4">
              Dr. Russell Barkley, one of the most respected ADHD researchers in the world, says something that changes how you think about ADHD once you hear it:
            </p>
            <blockquote className="border-l-2 border-yellow-400/40 pl-5 py-2 my-8 bg-yellow-500/[0.03] rounded-r-xl">
              <p className="text-white/80 text-lg italic font-light">
                "ADHD is a performance disorder, not a knowledge disorder."
              </p>
            </blockquote>
            <p className="text-white/60 text-base leading-relaxed mb-4">
              You already know you should start that assignment. You already know you should eat lunch. You already know you should go to bed before 3am. The information is all there. The problem is the gap between knowing and doing.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-4">
              That gap is not laziness. It's <strong className="text-white/80">executive function</strong>.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-4">
              Executive function is the set of mental skills your brain uses to plan, start tasks, manage time, control impulses, and regulate emotions. For people with ADHD, these skills don't work the way they're supposed to. Not because you're broken, but because your brain is wired differently.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-12">
              This is why productivity advice feels so useless. "Just make a to-do list." "Just break it into smaller tasks." "Just set a timer." You know all of this already. Knowing was never the problem.
            </p>

            {/* Section 2 */}
            <h2
              id="what-helps"
              className="text-2xl sm:text-3xl font-light text-white/90 mb-6 scroll-mt-24"
            >
              So what actually helps?
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-4">
              Barkley's answer is something called <strong className="text-white/80">external scaffolding</strong>.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-4">
              If your brain's internal system for planning, starting, and following through doesn't work reliably, you need to build those systems outside of yourself. Think of it like glasses for someone with poor vision. You're not fixing the eyes. You're giving them a tool that does what the eyes can't.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-4">
              External scaffolding can be a lot of things: alarms, calendars, sticky notes, visual timers, checklists. And yes, apps.
            </p>
            <p className="text-white/70 text-base leading-relaxed mb-12 italic">
              But here's the catch.
            </p>

            {/* Section 3 */}
            <h2
              id="why-apps-fail"
              className="text-2xl sm:text-3xl font-light text-white/90 mb-6 scroll-mt-24"
            >
              Why apps fail
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-4">
              Most productivity apps are built on one assumption: that you'll remember to open them.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-4">
              Think about that. An app sits on your phone and waits for you to initiate. It sends you a notification. You swipe it away. It reminds you again. You ignore it. Eventually you forget the app exists entirely.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-4">
              This is not a design flaw. It's a fundamental mismatch with how ADHD works. The number one thing ADHD makes hard is <strong className="text-white/80">initiation</strong> — the ability to start something on your own. And apps require exactly that.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-4">
              We've talked to people who had dozens of productivity apps on their phone. They spent more energy deciding which app to open than actually doing anything. That's not productivity. That's a new form of being stuck.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-12">
              Apps also can't adapt. They don't know you had a terrible morning. They don't know you're spiraling. They don't know that the reason you can't start isn't because the task is hard, but because you're overwhelmed by something completely unrelated. They just send the same notification on schedule, whether you need a gentle nudge or a complete task breakdown.
            </p>

            {/* Section 4 */}
            <h2
              id="real-person"
              className="text-2xl sm:text-3xl font-light text-white/90 mb-6 scroll-mt-24"
            >
              Why a real person changes everything
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-4">
              Here's what we've seen work, over and over, across thousands of users:
            </p>
            <p className="text-white/80 text-lg leading-relaxed mb-6 font-medium">
              A real person who shows up for you every day.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-6">
              Not a therapist. Not necessarily a traditional coach. Just someone trained in ADHD support who checks in on you, helps you plan your day, pulls you back when you drift, breaks things down when you're stuck, and celebrates with you when you get something done.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-4">
              Why does this work when apps don't?
            </p>

            <div className="space-y-6 mb-12">
              {[
                {
                  title: "You can't swipe away a person.",
                  body: 'When someone texts you "good morning, what\'s your plan today?" you respond. Not because you have to, but because there\'s a real human on the other end who cares. That social connection creates a gentle pull that no notification can replicate.',
                },
                {
                  title: "A person comes to you.",
                  body: "You don't have to initiate anything. You don't have to remember to open an app. You don't have to build the system. Someone reaches out to you, proactively, and meets you where you are. For a brain that struggles with initiation, this is everything.",
                },
                {
                  title: "A person adapts.",
                  body: "Bad day? They notice. They adjust. Maybe today isn't the day for task lists. Maybe today you just need someone to listen. An app can't make that call. A person can.",
                },
                {
                  title: "A person makes it real.",
                  body: 'When you tell someone "I\'m going to finish this report by 3pm," it becomes a commitment, not just a note on a list. Knowing someone will check in later gives you just enough external pressure to actually start. Researchers call this "externalizing motivation." We call it having someone in your corner.',
                },
                {
                  title: "A person sees your progress.",
                  body: "ADHD brains are terrible at recognizing their own progress. You'll finish five tasks and only remember the one you didn't do. A good accountability partner holds up a mirror and says \"look at everything you did today.\" Over time, that rebuilds something ADHD often destroys: your confidence in yourself.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-all duration-500 hover:bg-yellow-500/[0.04] hover:border-yellow-400/20"
                >
                  <p className="text-white/90 font-medium mb-2">{item.title}</p>
                  <p className="text-white/55 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>

            {/* Section 5 */}
            <h2
              id="research"
              className="text-2xl sm:text-3xl font-light text-white/90 mb-6 scroll-mt-24"
            >
              The research backs this up
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-4">
              This isn't just our experience. Research consistently supports that external accountability is one of the most effective strategies for managing ADHD in daily life.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-4">
              Barkley's model of ADHD centers on the idea that people with ADHD need to externalize the executive functions their brain can't reliably perform internally. His recommendation is to build support structures at the "point of performance" — meaning exactly when and where you need to act, not hours or days later in a coaching session.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-4">
              Studies on ADHD coaching have shown meaningful improvements in self-management, goal achievement, and quality of life — with benefits that stick even months after the coaching period ends. A key factor is the regular, consistent check-ins that create a rhythm and external structure.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-12">
              Research on executive function interventions also shows that externalizing reminders, breaking tasks into steps, and having someone to report to significantly improves follow-through for people with ADHD.
            </p>

            {/* Section 6 */}
            <h2
              id="traditional-coaching"
              className="text-2xl sm:text-3xl font-light text-white/90 mb-6 scroll-mt-24"
            >
              What about traditional ADHD coaching?
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-4">
              Traditional ADHD coaching is effective. But there's a gap.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-4">
              A typical coaching session is one hour per week and costs $150 to $250. That's valuable time. But what happens between sessions? You're on your own. And for someone with ADHD, "on your own" is exactly where things fall apart.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-12">
              You leave the session with a great plan. By Wednesday, you've forgotten half of it. By Friday, you're back to square one. Not because the coaching was bad, but because ADHD doesn't take days off. You need support every day, not once a week.
            </p>

            {/* Section 7 */}
            <h2
              id="daily-accountability"
              className="text-2xl sm:text-3xl font-light text-white/90 mb-6 scroll-mt-24"
            >
              What daily accountability actually looks like
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-6">
              We pair you with Sunny, your ADHD accountability coach, who works with you every day through WhatsApp. Sunny texts you, chats with you, and calls you if needed.
            </p>
            <p className="text-white/70 text-base leading-relaxed mb-4 font-medium">
              A typical day:
            </p>

            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8 mb-6 space-y-4">
              {[
                "In the morning, Sunny texts you until you're actually out of bed, and helps you plan your day.",
                "During the day, Sunny reminds you to eat, drink water, and take your meds.",
                "When you're working, Sunny checks in to make sure you haven't been scrolling for two hours.",
                "If you're stuck, Sunny helps break the task down, or body doubles with you on a video call until you build enough momentum.",
                "If you're having a bad day, Sunny listens. No judgment. No toxic positivity. Just real support.",
                "And every time you finish something, even something small, Sunny celebrates with you.",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-400/60 flex-shrink-0" />
                  <p className="text-white/60 text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            <p className="text-white/70 text-base leading-relaxed mb-12">
              All of this for <strong className="text-yellow-300/80">$50 a week</strong>. One coaching session equals two full weeks of daily support.
            </p>

            {/* Section 8 */}
            <h2
              id="not-alone"
              className="text-2xl sm:text-3xl font-light text-white/90 mb-6 scroll-mt-24"
            >
              You don't have to build the scaffolding alone
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-4">
              If you've tried every app, every planner, every system, and nothing sticks — it's not your fault. Those tools weren't designed for how your brain works. They all assume you can initiate on your own. You need something that comes to you.
            </p>
            <p className="text-white/70 text-base leading-relaxed mb-8">
              You don't need another app. You don't need more productivity advice. You need someone who shows up for you every single day and helps you build a life that works.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-16">
              <button
                onClick={() => navigate("/onboarding")}
                className="px-8 py-3.5 rounded-full bg-white text-[#0D0A08] font-medium text-sm hover:bg-white/90 transition-all"
              >
                Start Getting Support
              </button>
              <button
                onClick={() => window.open("https://cal.com/meowycare/consultation", "_blank")}
                className="px-8 py-3.5 rounded-full border border-white/20 text-white/70 font-medium text-sm hover:bg-white/[0.06] transition-all"
              >
                Book a Free Consultation
              </button>
            </div>

            {/* References */}
            <div className="border-t border-white/[0.06] pt-10">
              <h3 className="text-lg font-light text-white/60 mb-6">References</h3>
              <div className="space-y-3 text-white/35 text-xs leading-relaxed">
                <p>Barkley, R. A. (1997). Behavioral inhibition, sustained attention, and executive functions: Constructing a unifying theory of ADHD. <em>Psychological Bulletin</em>, 121(1), 65-94.</p>
                <p>Barkley, R. A. (2012). <em>Executive Functions: What They Are, How They Work, and Why They Evolved</em>. Guilford Press.</p>
                <p>Barkley, R. A. (2015). <em>Attention Deficit Hyperactivity Disorder: A Handbook for Diagnosis and Treatment</em> (4th ed.). Guilford Press.</p>
                <p>Kubik, J. A. (2010). Efficacy of ADHD coaching for adults with ADHD. <em>Journal of Attention Disorders</em>, 13(5), 442-453.</p>
                <p>García Ron, A. et al. (2016). Pilot study of the efficacy of empowering patients through coaching as a complementary therapy in ADHD. <em>Anales de Pediatría</em>, 84(4), 228-233.</p>
              </div>
            </div>
          </motion.article>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default BlogPost;
