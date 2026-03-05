import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Moon, Calendar } from "lucide-react";

const plans = [
  {
    name: "Growth",
    price: "$120",
    originalPrice: "$159",
    period: "/month",
    coverage: "24 Hour",
    icon: Moon,
    bestFor: "You're struggling with multiple deadlines, emotional stress, and an irregular sleep schedule — and you need steady all month support.",
    badge: "Most Popular",
    stripeLink: "https://buy.stripe.com/9B63cnfImg8EbfTgK224005",
  },
  {
    name: "Transform",
    price: "$150",
    originalPrice: "$199",
    period: "/month",
    coverage: "24 Hour",
    icon: Calendar,
    bestFor: "If life has just collapsed in a big way — a breakup, losing your job, relocating — and everything feels chaotic and too heavy to handle alone. This plan gives you the stable, long-term support you need to rebuild your life.",
    badge: null,
    stripeLink: "https://buy.stripe.com/7sYcMX8fU7C85Vz3Xg24006",
  },
];

const sharedFeatures = [
  "Personalized task management",
  "Supportive phone calls whenever you need them",
  "Body-doubling focus sessions",
  "A daily Meowy diary + weekly progress reflection",
  "Unlimited check-ins",
  "Unlimited warm, human-to-human conversation",
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 px-4 bg-gradient-section">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Start Your Journey
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-4 max-w-2xl mx-auto">
          All plans include the same features — the only difference is coverage hours and duration.
        </p>
        <div className="text-center mb-16 max-w-xl mx-auto">
          <div className="inline-block bg-meowy-gradient-teal/30 border border-meowy-accent-teal/30 rounded-full px-6 py-3">
            <p className="text-base font-medium text-foreground">
              ✨ Don't worry — this isn't a recurring subscription.<br />
              <span className="text-meowy-accent-teal">We only charge again if you choose to renew.</span>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <Card 
                key={index} 
                className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                  plan.badge 
                    ? "glass-card border-2 border-primary shadow-xl" 
                    : "glass-card border-0"
                }`}
              >
                {plan.badge && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-sm font-medium px-4 py-1 rounded-bl-lg">
                    {plan.badge}
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {plan.name}
                  </CardTitle>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-gradient">{plan.price}</span>
                    <span className="text-lg text-muted-foreground line-through">{plan.originalPrice}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-3 text-meowy-accent-teal">
                    <IconComponent className="w-4 h-4" />
                    <span className="text-sm font-medium">{plan.coverage}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="min-h-[100px]">
                    <p className="text-sm text-muted-foreground font-medium mb-2">Best for:</p>
                    <p className="text-foreground text-sm leading-relaxed">{plan.bestFor}</p>
                  </div>
                  
                  <Button 
                    className="w-full mt-6 rounded-full bg-meowy-accent-teal hover:bg-meowy-accent-purple text-white"
                    size="lg"
                    asChild
                  >
                    <a href={plan.stripeLink} target="_blank" rel="noopener noreferrer">
                      Get Started
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Shared Features */}
        <div className="mt-16 glass-card rounded-2xl p-8 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-foreground text-center mb-6">
            All plans come with:
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {sharedFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-meowy-gradient-teal/50 flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-meowy-accent-teal" />
                </div>
                <span className="text-foreground text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-muted-foreground mt-12">
          All plans include a 7-day satisfaction guarantee. Cancel anytime.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
