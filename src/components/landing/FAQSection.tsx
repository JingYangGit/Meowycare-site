import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SeasonalParticles from "./SeasonalParticles";

const faqs = [
  {
    question: "How is this different from therapy?",
    answer:
      "Therapy focuses on diagnosing and treating mental health conditions through clinical methods. MeowyCare is an accountability and support service — we help you build structure, stay on track, and reach your goals through 1:1 human companionship. We are not a substitute for therapy. If you're experiencing mental health challenges that require clinical support, we encourage you to seek help from a licensed therapist.",
  },
  {
    question: "Do I need a diagnosis to use MeowyCare?",
    answer:
      "Not at all. Our methods are effective even for people without an ADHD diagnosis. Based on our experience, they can also be helpful for those dealing with anxiety, depression, ASD, and more. Feel free to book a free consultation to learn more.",
  },
  {
    question: "Are you professionally qualified?",
    answer:
      "Yes. We have certified ADHD Coaches to design the structure, and we got advice from scientific researchers, and validated through real-world results with over 3,000 ADHDers.",
  },
  {
    question: "Is this real human support or AI?",
    answer:
      "100% real humans. If we ever introduce AI features in the future, we will clearly inform our users.",
  },
  {
    question: "How can you offer real human support at such a low price?",
    answer:
      "To keep our service affordable while maintaining the highest quality, we built a global team to support ADHDers worldwide. We now have served 3,000+ ADHDers across 7 countries.",
  },
  {
    question: "How long has this service been running?",
    answer:
      "We started in 2023, growing organically through word of mouth. To date, we've supported over 3,000 ADHDers. This year, we expanded our team and began promoting online to reach even more people.",
  },
  {
    question: "What time zones do you support?",
    answer:
      "We currently cover all global time zones. Our most common service hours are in East Asian and US time zones. If you're in a different time zone, simply let us know during onboarding and we'll arrange support for you as soon as possible.",
  },
];

const FAQSection = () => {
  return (
    <section className="relative py-24 md:py-32 px-4 bg-[#0D0A08] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-amber-500/8 rounded-full filter blur-[130px]" />
      </div>
      <SeasonalParticles />
      <div className="container max-w-3xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-light text-white/90 mb-12 text-center"
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-white/[0.08] rounded-xl px-6 bg-white/[0.02] backdrop-blur-sm"
              >
                <AccordionTrigger className="text-white/80 text-left text-base hover:text-white/95 hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/50 text-sm leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
