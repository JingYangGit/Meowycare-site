import { Check } from "lucide-react";

const painPoints = [
  "Life is broken, overwhelmed, alone and helpless.",
  "All the tasks and emotions make you overwhelmed.",
  "You know what you should do — but starting feels impossible.",
  "You try to push yourself, then burn out, then feel guilty again.",
  "You feel alone in a way that's hard to explain to friends or family.",
];

const IsThisYouSection = () => {
  return (
    <section className="py-24 md:py-32 px-4 bg-gradient-section">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          If you feel like this is yourself:
        </h2>
        <p className="text-muted-foreground text-lg mb-12">
          You're not alone. Many of us feel this way.
        </p>

        <div className="space-y-4 max-w-2xl mx-auto mb-12">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 text-left p-4 rounded-xl bg-card/60 backdrop-blur-sm border border-border/30 hover:bg-card/80 transition-colors duration-200"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-meowy-gradient-teal/50 flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 text-meowy-accent-teal" />
              </div>
              <p className="text-foreground text-lg">{point}</p>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-2xl p-8 inline-block">
          <p className="text-xl md:text-2xl font-semibold text-gradient">
            Meowy is here to help you out.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IsThisYouSection;
