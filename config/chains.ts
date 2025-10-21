export interface Chain {
  id: number
  name: string
  symbol: string
  rpcUrl: string
  icon: string
  color: string
  blockExplorer: string
}

export const SUPPORTED_CHAINS: Chain[] = [
  {
    id: 1,
    name: 'Ethereum',
    symbol: 'ETH',
    rpcUrl: 'https://eth.llamarpc.com',
    icon: '⟠',
    color: 'from-blue-500 to-blue-600',
    blockExplorer: 'https://etherscan.io',
  },
  {
    id: 137,
    name: 'Polygon',
    symbol: 'MATIC',
    rpcUrl: 'https://polygon.llamarpc.com',
    icon: '⬟',
    color: 'from-purple-500 to-purple-600',
    blockExplorer: 'https://polygonscan.com',
  },
  {
    id: 42161,
    name: 'Arbitrum',
    symbol: 'ARB',
    rpcUrl: 'https://arbitrum.llamarpc.com',
    icon: '◆',
    color: 'from-blue-400 to-cyan-500',
    blockExplorer: 'https://arbiscan.io',
  },
  {
    id: 10,
    name: 'Optimism',
    symbol: 'OP',
    rpcUrl: 'https://optimism.llamarpc.com',
    icon: '○',
    color: 'from-red-500 to-pink-500',
    blockExplorer: 'https://optimistic.etherscan.io',
  },
  {
    id: 56,
    name: 'BSC',
    symbol: 'BNB',
    rpcUrl: 'https://bsc.llamarpc.com',
    icon: '◈',
    color: 'from-yellow-500 to-orange-500',
    blockExplorer: 'https://bscscan.com',
  },
]
