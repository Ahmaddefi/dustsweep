import { ethers } from 'ethers'
import axios from 'axios'
import { SUPPORTED_CHAINS } from '@/config/chains'
import { TOKEN_LISTS, TokenInfo } from '@/config/tokenList'

// ERC-20 ABI (minimal - just what we need)
const ERC20_ABI = [
  'function balanceOf(address owner) view returns (uint256)',
  'function decimals() view returns (uint8)',
  'function symbol() view returns (string)',
  'function name() view returns (string)',
]

export interface TokenBalance {
  address: string
  name: string
  symbol: string
  balance: string
  decimals: number
  chainId: number
  chainName: string
  usdValue: number
}

// Get native balance (ETH, MATIC, etc.)
async function getNativeBalance(
  provider: ethers.providers.JsonRpcProvider,
  address: string,
  chainId: number
): Promise<number> {
  try {
    const balance = await provider.getBalance(address)
    return parseFloat(ethers.utils.formatEther(balance))
  } catch (error) {
    console.error(`Error getting native balance on chain ${chainId}:`, error)
    return 0
  }
}

// Get ERC-20 token balance
async function getTokenBalance(
  provider: ethers.providers.JsonRpcProvider,
  tokenInfo: TokenInfo,
  walletAddress: string
): Promise<{ balance: string; rawBalance: ethers.BigNumber } | null> {
  try {
    const contract = new ethers.Contract(tokenInfo.address, ERC20_ABI, provider)
    const balance: ethers.BigNumber = await contract.balanceOf(walletAddress)
    
    // Only return if balance > 0
    if (balance.gt(0)) {
      const formattedBalance = ethers.utils.formatUnits(balance, tokenInfo.decimals)
      return { balance: formattedBalance, rawBalance: balance }
    }
    
    return null
  } catch (error) {
    console.error(`Error getting balance for ${tokenInfo.symbol}:`, error)
    return null
  }
}

// Get token price from CoinGecko (simplified)
async function getTokenPrice(symbol: string): Promise<number> {
  try {
    // Map common symbols to CoinGecko IDs
    const priceMap: { [key: string]: string } = {
      ETH: 'ethereum',
      WETH: 'weth',
      MATIC: 'matic-network',
      WMATIC: 'wmatic',
      BNB: 'binancecoin',
      WBNB: 'wbnb',
      ARB: 'arbitrum',
      OP: 'optimism',
      USDT: 'tether',
      USDC: 'usd-coin',
      DAI: 'dai',
      UNI: 'uniswap',
      LINK: 'chainlink',
      AAVE: 'aave',
    }

    const coinId = priceMap[symbol.toUpperCase()]
    if (!coinId) return 0

    const response = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd`,
      { timeout: 5000 }
    )

    return response.data[coinId]?.usd || 0
  } catch (error) {
    console.error(`Error fetching price for ${symbol}:`, error)
    return 0
  }
}

// Scan tokens on a single chain
export async function scanChain(
  chainId: number,
  walletAddress: string
): Promise<{ nativeBalance: number; tokens: TokenBalance[] }> {
  const chain = SUPPORTED_CHAINS.find((c) => c.id === chainId)
  if (!chain) {
    throw new Error(`Chain ${chainId} not supported`)
  }

  try {
    const provider = new ethers.providers.JsonRpcProvider(chain.rpcUrl)
    const tokens: TokenBalance[] = []
    
    // Get native token balance
    const nativeBalance = await getNativeBalance(provider, walletAddress, chainId)
    const nativePrice = await getTokenPrice(chain.symbol)
    const nativeValue = nativeBalance * nativePrice

    if (nativeBalance > 0) {
      tokens.push({
        address: 'native',
        name: chain.name,
        symbol: chain.symbol,
        balance: nativeBalance.toFixed(6),
        decimals: 18,
        chainId: chain.id,
        chainName: chain.name,
        usdValue: nativeValue,
      })
    }

    // Get ERC-20 token balances
    const tokenList = TOKEN_LISTS[chainId] || []
    
    for (const tokenInfo of tokenList) {
      try {
        const tokenBalance = await getTokenBalance(provider, tokenInfo, walletAddress)
        
        if (tokenBalance) {
          const price = await getTokenPrice(tokenInfo.symbol)
          const usdValue = parseFloat(tokenBalance.balance) * price
          
          tokens.push({
            address: tokenInfo.address,
            name: tokenInfo.name,
            symbol: tokenInfo.symbol,
            balance: parseFloat(tokenBalance.balance).toFixed(6),
            decimals: tokenInfo.decimals,
            chainId: chain.id,
            chainName: chain.name,
            usdValue: usdValue,
          })
          
          console.log(`Found ${tokenInfo.symbol} on ${chain.name}: ${tokenBalance.balance} ($${usdValue.toFixed(2)})`)
        }
      } catch (error) {
        // Continue with other tokens if one fails
        console.error(`Error checking ${tokenInfo.symbol} on ${chain.name}:`, error)
      }
    }

    console.log(`${chain.name} scan complete: ${tokens.length} tokens found`)
    
    return { 
      nativeBalance: nativeValue, 
      tokens 
    }
  } catch (error) {
    console.error(`Error scanning ${chain.name}:`, error)
    return { nativeBalance: 0, tokens: [] }
  }
}

// Scan all chains
export async function scanAllChains(walletAddress: string) {
  console.log(`Starting scan for wallet: ${walletAddress}`)
  
  const results = await Promise.allSettled(
    SUPPORTED_CHAINS.map((chain) => scanChain(chain.id, walletAddress))
  )

  const allTokens: TokenBalance[] = []
  let totalValue = 0

  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      allTokens.push(...result.value.tokens)
      totalValue += result.value.nativeBalance
      totalValue += result.value.tokens
        .filter(t => t.address !== 'native')
        .reduce((sum, t) => sum + t.usdValue, 0)
    } else {
      console.error(`Failed to scan chain ${SUPPORTED_CHAINS[index].name}:`, result.reason)
    }
  })

  console.log(`Scan complete: ${allTokens.length} tokens found, total value: $${totalValue.toFixed(2)}`)

  return {
    tokens: allTokens,
    totalValue,
    chainCount: SUPPORTED_CHAINS.length,
  }
}
