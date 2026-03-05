import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Season = "winter" | "spring" | "summer" | "autumn";

const SEASONS: Season[] = ["winter", "spring", "summer", "autumn"];

interface SeasonContextType {
  season: Season;
  toggleSeason: () => void;
}

const SeasonContext = createContext<SeasonContextType>({
  season: "winter",
  toggleSeason: () => {},
});

export const useSeason = () => useContext(SeasonContext);

export const SeasonProvider = ({ children }: { children: ReactNode }) => {
  const [season, setSeason] = useState<Season>(() => {
    const saved = localStorage.getItem("meowy-season");
    return SEASONS.includes(saved as Season) ? (saved as Season) : "spring";
  });

  useEffect(() => {
    localStorage.setItem("meowy-season", season);
  }, [season]);

  const toggleSeason = () => {
    setSeason((s) => {
      const idx = SEASONS.indexOf(s);
      return SEASONS[(idx + 1) % SEASONS.length];
    });
  };

  return (
    <SeasonContext.Provider value={{ season, toggleSeason }}>
      {children}
    </SeasonContext.Provider>
  );
};
