import { PlayerApi } from "src/app/interfaces/player-api.type";
import { Player } from "src/app/interfaces/player.interface";

export const transformPlayersData = (players: PlayerApi[]): Player[] => {
  return players.map(player => {
    const transformedPlayer: Player = {
      id: player.id,
      redCardContinent: player.red_card_continent,
      age: player.age,
      nation: player.nation,
      league: player.league,
      team: player.team,
      goalsSelection: player.goals_selection,
      selectionsNation: player.selections_nation,
      position: player.position,
      price: player.price,
      champ: {
        goal: player.goal_champ,
        assist: player.assist_champ,
        ownGoal: player.own_goal_champ,
        yellowCard: player.yellow_card_champ,
        secondYellowCard: player.second_yellow_card_champ,
        redCard: player.red_card_champ
      },
      cup: {
        goal: player.goal_cup,
        assist: player.assist_cup,
        ownGoal: player.own_goal_cup,
        yellowCard: player.yellow_card_cup,
        secondYellowCard: player.second_yellow_card_cup,
        redCard: player.red_card_cup
      },
      continent: {
        goal: player.goal_continent,
        assist: player.assist_continent,
        ownGoal: player.own_goal_continent,
        yellowCard: player.yellow_card_continent,
        secondYellowCard: player.second_yellow_card_continent,
      },
    }

    return transformedPlayer;
  });
};
