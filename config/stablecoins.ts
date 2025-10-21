export interface Stablecoin {
  symbol: string
  name: string
  description: string
  addresses: { [chainId: number]: string }
}

export const STABLECOINS: Stablecoin[] = [
  {
    symbol: 'USDT',
    name: 'Tether USD',
    description: 'Most liquid stablecoin',
    addresses: {
      1: '0xdAC17F958D2ee523a2206206994597C13D831ec7',    // Ethereum
      137: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',  // Polygon
      42161: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9', // Arbitrum
      10: '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58',   // Optimism
      56: '0x55d398326f99059fF775485246999027B3197955',   // BSC
    },
  },
  {
    symbol: 'USDC',
    name: 'USD Coin',
    description: 'Regulated US dollar stablecoin',
    addresses: {
      1: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      137: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
      42161: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
      10: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
      56: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
    },
  },
  {
    symbol: 'DAI',
    name: 'Dai Stablecoin',
    description: 'Decentralized stablecoin',
    addresses: {
      1: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      137: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
      42161: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
      10: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
      56: '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
    },
  },
]

export function getStablecoinAddress(symbol: string, chainId: number): string | undefined {
  const stablecoin = STABLECOINS.find((s) => s.symbol === symbol)
  return stablecoin?.addresses[chainId]
}
