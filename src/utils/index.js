export const calculateTotalWin = (card_dragon, card_tiger, payload) => {
  let totalWin = 0;

  if (
    card_dragon?.rank_number === card_tiger?.rank_number &&
    card_dragon?.suit === card_dragon?.suit
  ) {
    const suitedTie = payload?.find((p) => p.runner_name === "SuitedTie");
    if (suitedTie) {
      totalWin += suitedTie?.price * suitedTie?.stake;
    }
  } else if (
    card_dragon?.rank_number === card_tiger?.rank_number &&
    card_dragon?.suit !== card_dragon?.suit
  ) {
    const tie = payload?.find((p) => p.runner_name === "Tie");
    if (tie) {
      totalWin += tie?.price * tie?.stake;
    }
  } else if (card_dragon?.rank_number > card_tiger?.rank_number) {
    const dragon = payload?.find((p) => p.runner_name === "Dragon");
    if (dragon) {
      totalWin += dragon?.price * dragon?.stake;
    }
  } else if (card_dragon?.rank_number < card_tiger?.rank_number) {
    const tiger = payload?.find((p) => p.runner_name === "Tiger");
    if (tiger) {
      totalWin += tiger?.price * tiger?.stake;
    }
  }

  return totalWin;
};
