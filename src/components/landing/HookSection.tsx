const HookSection = () => {
  return (
    <section id="hook" className="py-24 md:py-32 px-4 bg-gradient-section">
      <div className="container max-w-4xl mx-auto text-center">
        {/* AI crossed out, Human handwritten effect */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
          <span className="relative inline-block">
            {/* Handwritten "Human" above */}
            <span 
              className="absolute -top-10 md:-top-14 left-1/2 -translate-x-1/2 text-4xl md:text-5xl lg:text-6xl text-meowy-accent-teal font-handwritten transform -rotate-2"
              style={{ fontFamily: "'Caveat', cursive", fontWeight: 600 }}
            >
              Human
            </span>
            {/* Crossed out "AI" */}
            <span className="relative text-muted-foreground/60">
              AI
              <span className="absolute left-0 right-0 top-1/2 h-0.5 bg-muted-foreground/60 transform -rotate-6" />
            </span>
          </span>
          {" "}Powered ADHD{" "}
          <span className="text-gradient">Accountability and Companion</span>
          <br />
          to rebuild your life.
        </h2>
        
        <div className="space-y-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 mt-12">
          <p className="italic">
            If your life feels messy, stuck, or broken…
          </p>
          <p className="font-medium text-foreground">
            Meowy is here to help you out.
          </p>
          <p>
            Reorganise your life under the support of real people who really care about you.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-8 md:p-10 max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl font-semibold text-foreground mb-4">
            A community extremely supportive of{" "}
            <span className="text-meowy-accent-teal">women</span> &{" "}
            <span className="text-meowy-accent-purple">non-binary</span> groups.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HookSection;
