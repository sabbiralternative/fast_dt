export const findWinner = (card_dragon, card_tiger) => {
  const dragonRankNumber = Number(card_dragon?.rank_number);
  const tigerRankNumber = Number(card_tiger?.rank_number);
  if (
    dragonRankNumber == tigerRankNumber &&
    card_dragon?.suit == card_dragon?.suit
  ) {
    return {
      dragonCard: true,
      tigerCard: true,
      suitTieBetSlip: true,
    };
  } else if (
    dragonRankNumber == tigerRankNumber &&
    card_dragon?.suit != card_dragon?.suit
  ) {
    return {
      dragonCard: true,
      tigerCard: true,
      tieBetSlip: true,
    };
  } else if (dragonRankNumber > tigerRankNumber) {
    return {
      dragonCard: true,
      tigerCard: false,
      dragonBetSlip: true,
    };
  } else if (dragonRankNumber < tigerRankNumber) {
    return {
      dragonCard: false,
      tigerCard: true,
      tigerBetSlip: true,
    };
  }
};
