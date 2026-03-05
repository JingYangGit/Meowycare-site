import { useSeason } from "@/contexts/SeasonContext";
import ParticleField from "./ParticleField";
import SpringParticleField from "./SpringParticleField";
import SummerParticleField from "./SummerParticleField";
import AutumnParticleField from "./AutumnParticleField";

const SeasonalParticles = () => {
  const { season } = useSeason();
  switch (season) {
    case "spring": return <SpringParticleField />;
    case "summer": return <SummerParticleField />;
    case "autumn": return <AutumnParticleField />;
    default: return <ParticleField />;
  }
};

export default SeasonalParticles;
