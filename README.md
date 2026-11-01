# Crypto Tracker

A React dashboard for exploring cryptocurrency prices and market data. Browse the leading coins by market capitalization, search and sort the market, and open a coin to inspect its recent price history and key statistics.

## Features

- Browse up to 100 cryptocurrencies with price, market cap, trading volume, rank, and 24-hour change.
- Search by coin name or symbol.
- Sort the market by rank, name, price, 24-hour change, or market cap.
- Switch between grid and list layouts.
- View an individual coin's price, 24-hour high and low, market cap, volume, and supply.
- Explore a seven-day price chart for a selected coin.
- Get market data from the public [CoinGecko API](https://www.coingecko.com/en/api).

## Built with

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/)
- [Recharts](https://recharts.org/)
- [CoinGecko API](https://www.coingecko.com/en/api)

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) (current LTS version recommended)
- npm

### Installation

```bash
git clone https://github.com/BaherRabea3/Crypto-Tracker.git
cd Crypto-Tracker
npm install
```

### Run locally

```bash
npm run dev
```

Open the local URL printed by Vite in your terminal.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint. |

## Project structure

```text
src/
├── api/
│   └── coinGecko.js       # CoinGecko market, coin, and chart requests
├── components/
│   └── CryptoCard.jsx     # Reusable cryptocurrency card
├── Pages/
│   ├── Home.jsx           # Searchable, sortable market overview
│   └── CoinDetails.jsx    # Coin statistics and seven-day chart
├── utils/
│   └── formatter.js       # Price and market-cap formatting
├── App.jsx                # Application routes
├── index.css              # Application styles
└── main.jsx               # React entry point
```

## Data and API limits

Market information is requested directly from CoinGecko's public API; this project does not require an API key or a backend service. API availability and request limits are controlled by CoinGecko, so data may be temporarily unavailable or rate-limited.

## Deployment

Build the app with `npm run build` and deploy the generated `dist/` directory to a static hosting provider. Because coin details use client-side routes, configure the host to serve `index.html` for application routes such as `/coin/bitcoin`.

---

Cryptocurrency market data is provided for informational purposes only and is not financial advice.
