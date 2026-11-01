export const priceFormatter = (price) => {
  if (price < 0.01) return price.toFixed(8);
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
};

export const marketCapFormatter = (marketCap) => {
  if (marketCap >= 1e12) return `${(marketCap / 1e12).toFixed(2)}T`;
  if (marketCap >= 1e10) return `${(marketCap / 1e10).toFixed(2)}B`;
  if (marketCap >= 1e6) return `${(marketCap / 1e6).toFixed(2)}M`;
  return marketCap.toLocaleString();
};
