export function changeDiscountIntoPercent(discount) {
  return discount / 100;
}

export function calculateDiscount(basePrice, discount) {
  return basePrice * changeDiscountIntoPercent(discount);
}

export function calculateFinalPrice(basePrice, discount) {
  return basePrice - calculateDiscount(basePrice, discount);
}

export function calcSummaryPrices(gamesData) {
  let sumOfBasicGamesPrice = 0.0;
  let sumOfGamesDiscount = 0.0;
  let sumOfGamesEndPrice = 0.0;

  gamesData.forEach((game) => {
    sumOfBasicGamesPrice += game.baseGamePrice;
    sumOfGamesDiscount += calculateDiscount(game.baseGamePrice, game.discount);
    sumOfGamesEndPrice += calculateFinalPrice(
      game.baseGamePrice,
      game.discount,
    );
  });

  return Array.of(
    `PLN ${sumOfBasicGamesPrice.toFixed(2)}`,
    `-PLN ${sumOfGamesDiscount.toFixed(2)}`,
    `PLN ${sumOfGamesEndPrice.toFixed(2)}`,
  );
}
