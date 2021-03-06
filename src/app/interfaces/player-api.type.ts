import { Position } from "./position.type";

export interface PlayerApi {
  id: number;
  red_card_continent: number;
  age: number;
  nation: string;
  league: string;
  team: string;
  goals_selection: number;
  selections_nation: number;
  position: Position;
  price: number;
  goal_champ: number;
  assist_champ: number;
  own_goal_champ: number;
  yellow_card_champ: number;
  second_yellow_card_champ: number;
  red_card_champ: number;
  goal_cup: number;
  assist_cup: number;
  own_goal_cup: number;
  yellow_card_cup: number;
  second_yellow_card_cup: number;
  red_card_cup: number;
  goal_continent: number;
  assist_continent: number;
  own_goal_continent: number;
  yellow_card_continent: number;
  second_yellow_card_continent: number;
}
