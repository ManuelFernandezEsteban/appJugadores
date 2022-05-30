import { ChampionshipStats } from "./championship-stats.type";

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
  price: number;
  champ: ChampionshipStats;
  cup: ChampionshipStats;
  continent: Omit<ChampionshipStats, 'redCard'>;
}
