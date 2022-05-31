import { ChampionshipStats } from "./championship-stats.type";
import { PositionSimplified } from "./position-simplified.enum";

export interface Player {
  id: number;
  redCardContinent: number;
  age: number;
  nation: string;
  league: string;
  team: string;
  goalsSelection: number;
  selectionsNation: number;
  position: string;
  positionSimplified: PositionSimplified;
  price: number;
  champ: ChampionshipStats;
  cup: ChampionshipStats;
  continent: Omit<ChampionshipStats, 'redCard'>;
}
