export function changeDiscountIntoPercent(discount) {
  return discount / 100;
}

export function calculateDiscount(basePrice, discount) {
  return basePrice * changeDiscountIntoPercent(discount);
}

export function calculateFinalPrice(basePrice, discount) {
  return basePrice - calculateDiscount(basePrice, discount);
}
