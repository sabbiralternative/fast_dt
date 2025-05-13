export const findWinner = (card_dragon, card_tiger) => {
  if (
    card_dragon?.rank_number === card_tiger?.rank_number &&
    card_dragon?.suit === card_dragon?.suit
  ) {
    return {
      dragonCard: true,
      tigerCard: true,
      suitTieBetSlip: true,
    };
  } else if (
    card_dragon?.rank_number === card_tiger?.rank_number &&
    card_dragon?.suit !== card_dragon?.suit
  ) {
    return {
      dragonCard: true,
      tigerCard: true,
      tieBetSlip: true,
    };
  } else if (card_dragon?.rank_number > card_tiger?.rank_number) {
    return {
      dragonCard: true,
      tigerCard: false,
      dragonBetSlip: true,
    };
  } else if (card_dragon?.rank_number < card_tiger?.rank_number) {
    return {
      dragonCard: false,
      tigerCard: true,
      tigerBetSlip: true,
    };
  }
};
