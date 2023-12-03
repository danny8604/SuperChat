const PRICE_THRESHOLDS = {
  LOW: 100,
  MEDIUM: 1000,
  HIGH: 10000,
};

export const getPriceLevelClassNameByPrice = (price: number) => {
  if (price >= PRICE_THRESHOLDS.LOW && price < PRICE_THRESHOLDS.MEDIUM)
    return "bg-yellow-400";
  if (price >= PRICE_THRESHOLDS.MEDIUM && price < PRICE_THRESHOLDS.HIGH)
    return "bg-sky-300";
  if (price >= PRICE_THRESHOLDS.HIGH) return "bg-pink-300";

  return "bg-green-400";
};
