const BehindMeowySection = () => {
  return (
    <section className="py-24 md:py-32 px-4 bg-background">
      <div className="container max-w-4xl mx-auto text-center">
        <div className="text-5xl mb-6">✨</div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          Behind Meowy
        </h2>

        <div className="glass-card rounded-3xl p-8 md:p-12 space-y-6">
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            Behind Meowy are <span className="font-semibold text-meowy-accent-purple">real young women</span> — many living in underdeveloped regions where opportunities for women are extremely limited.
          </p>
          
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            When you select Meowy, you're not only improving your own life.
            <br />
            You're also giving another girl the chance to <span className="font-semibold">earn a stable income, gain independence, and build her own future</span>. 💜
          </p>

          <div className="pt-6 border-t border-border/50">
            <p className="text-xl md:text-2xl font-semibold text-gradient">
              Your growth supports hers.
              <br />
              And her care supports you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BehindMeowySection;
