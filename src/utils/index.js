export const calculateTotalWin = (card_dragon, card_tiger, payload) => {
  const dragonRankNumber = Number(card_dragon?.rank_number);
  const tigerRankNumber = Number(card_tiger?.rank_number);
  let totalWin = 0;

  if (
    dragonRankNumber == tigerRankNumber &&
    card_dragon?.suit == card_dragon?.suit
  ) {
    const suitedTie = payload?.find((p) => p.runner_name === "SuitedTie");
    if (suitedTie) {
      totalWin += suitedTie?.price * suitedTie?.stake;
    }
  } else if (
    dragonRankNumber == tigerRankNumber &&
    card_dragon?.suit != card_dragon?.suit
  ) {
    const tie = payload?.find((p) => p.runner_name === "Tie");
    if (tie) {
      totalWin += tie?.price * tie?.stake;
    }
  } else if (dragonRankNumber > tigerRankNumber) {
    const dragon = payload?.find((p) => p.runner_name === "Dragon");
    if (dragon) {
      totalWin += dragon?.price * dragon?.stake;
    }
  } else if (dragonRankNumber < tigerRankNumber) {
    const tiger = payload?.find((p) => p.runner_name === "Tiger");
    if (tiger) {
      totalWin += tiger?.price * tiger?.stake;
    }
  }

  return totalWin;
};
