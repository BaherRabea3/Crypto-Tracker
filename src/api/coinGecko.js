const BaseUrl = "https://api.coingecko.com/api/v3";

export const fetchCryptoData = async () => {
  const response = await fetch(
    `${BaseUrl}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`,
  );

  if (!response.ok) {
    throw new Error("Fail to fetch crypto.");
  }

  return response.json();
};

export const fetchCoinData = async (id) => {
  const response = await fetch(
    `${BaseUrl}/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
  );

  if (!response.ok) {
    throw new Error("Fail to fetch crypto.");
  }

  return response.json();
};
export const fetchChartData = async (id) => {
  const response = await fetch(
    `${BaseUrl}/coins/${id}/market_chart?vs_currency=usd&days=7`,
  );

  if (!response.ok) {
    throw new Error("Fail to fetch crypto.");
  }

  return response.json();
};
