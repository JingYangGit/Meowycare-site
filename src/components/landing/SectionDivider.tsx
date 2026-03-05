const SectionDivider = () => {
  return (
    <div className="relative h-px w-full bg-[#0D0A08]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-2/3 max-w-md h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />
      </div>
    </div>
  );
};

export default SectionDivider;
