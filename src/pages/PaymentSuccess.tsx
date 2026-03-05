import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name") || "there";

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-section" />
      <Helmet>
        <title>Payment Successful | MeowyCare ADHD Accountability</title>
        <meta
          name="description"
          content="Your payment to MeowyCare was successful. We'll reach out on WhatsApp before your ADHD accountability service starts."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://meowycare.com/payment-success" />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 glass-card rounded-3xl p-10 md:p-14 max-w-md text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <CheckCircle className="w-16 h-16 mx-auto mb-6 text-[hsl(var(--meowy-accent-teal))]" />
        </motion.div>
        <h1 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
          Welcome aboard, {name}! 🎉
        </h1>
        <p className="text-muted-foreground mb-2">
          Your payment was successful. We're so excited to start this journey with you!
        </p>
        <p className="text-sm text-muted-foreground/70 mb-8">
          We'll reach out to you on WhatsApp before your service starts. Keep an eye out for a message from Sunny 💜
        </p>
        <Button
          onClick={() => navigate("/")}
          className="rounded-xl bg-[hsl(var(--meowy-accent-purple))] hover:bg-[hsl(var(--meowy-purple-deep))] text-white px-8"
        >
          Back to Home
        </Button>
      </motion.div>
    </div>
  );
};

export default PaymentSuccess;
