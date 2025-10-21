import axios from 'axios'
import { ethers } from 'ethers'

const SOCKET_API_BASE = 'https://api.socket.tech/v2'
const SOCKET_API_KEY = 'YOUR_API_KEY' // We'll use a demo key

export interface BridgeQuote {
  fromChainId: number
  toChainId: number
  fromToken: string
  toToken: string
  fromAmount: string
  toAmount: string
  estimatedTime: string // in seconds
  bridgeFee: string
  gasFee: string
  totalFee: string
  route: any
}

export interface BridgeParams {
  fromChainId: number
  toChainId: number
  fromTokenAddress: string
  toTokenAddress: string
  amount: string
  userAddress: string
  recipient?: string // Optional, defaults to userAddress
}

// Get supported chains for bridging
export async function getSupportedBridgeChains(): Promise<any[]> {
  try {
    const response = await axios.get(`${SOCKET_API_BASE}/supported/chains`, {
      headers: {
        'API-KEY': SOCKET_API_KEY,
        'Accept': 'application/json',
      },
    })
    return response.data.result || []
  } catch (error) {
    console.error('Error fetching supported chains:', error)
    return []
  }
}

// Get bridge quote
export async function getBridgeQuote(params: BridgeParams): Promise<BridgeQuote | null> {
  try {
    const {
      fromChainId,
      toChainId,
      fromTokenAddress,
      toTokenAddress,
      amount,
      userAddress,
    } = params

    const queryParams = {
      fromChainId: fromChainId.toString(),
      toChainId: toChainId.toString(),
      fromTokenAddress,
      toTokenAddress,
      fromAmount: amount,
      userAddress,
      uniqueRoutesPerBridge: 'true',
      sort: 'output',
      singleTxOnly: 'true',
    }

    const response = await axios.get(`${SOCKET_API_BASE}/quote`, {
      params: queryParams,
      headers: {
        'API-KEY': SOCKET_API_KEY,
        'Accept': 'application/json',
      },
      timeout: 15000,
    })

    if (response.data && response.data.result && response.data.result.routes?.length > 0) {
      const bestRoute = response.data.result.routes[0]
      
      return {
        fromChainId,
        toChainId,
        fromToken: fromTokenAddress,
        toToken: toTokenAddress,
        fromAmount: amount,
        toAmount: bestRoute.toAmount,
        estimatedTime: bestRoute.serviceTime?.toString() || '300',
        bridgeFee: bestRoute.totalUserTx?.[0]?.protocolFees?.feesInUsd || '0',
        gasFee: bestRoute.totalUserTx?.[0]?.gasFees?.feesInUsd || '0',
        totalFee: bestRoute.totalGasFeesInUsd || '0',
        route: bestRoute,
      }
    }

    return null
  } catch (error: any) {
    console.error('Error getting bridge quote:', error.response?.data || error.message)
    return null
  }
}

// Get bridge transaction data
export async function getBridgeTransaction(params: BridgeParams, route: any) {
  try {
    const response = await axios.post(
      `${SOCKET_API_BASE}/build-tx`,
      {
        route,
      },
      {
        headers: {
          'API-KEY': SOCKET_API_KEY,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      }
    )

    return response.data.result
  } catch (error: any) {
    console.error('Error getting bridge transaction:', error.response?.data || error.message)
    throw new Error('Failed to get bridge transaction')
  }
}

// Execute bridge
export async function executeBridge(
  signer: ethers.Signer,
  params: BridgeParams,
  quote: BridgeQuote
): Promise<{ hash: string; success: boolean }> {
  try {
    // Get the bridge transaction data
    const txData = await getBridgeTransaction(params, quote.route)

    // Send the transaction
    const tx = await signer.sendTransaction({
      to: txData.txTarget,
      data: txData.txData,
      value: txData.value || '0',
      gasLimit: txData.gasLimit || '500000',
    })

    console.log('Bridge transaction sent:', tx.hash)

    // Wait for confirmation
    const receipt = await tx.wait()

    console.log('Bridge confirmed:', receipt.transactionHash)

    return {
      hash: receipt.transactionHash,
      success: receipt.status === 1,
    }
  } catch (error: any) {
    console.error('Error executing bridge:', error)
    throw new Error(error.message || 'Bridge failed')
  }
}

// Check bridge status
export async function checkBridgeStatus(txHash: string, fromChainId: number, toChainId: number) {
  try {
    const response = await axios.get(`${SOCKET_API_BASE}/bridge-status`, {
      params: {
        transactionHash: txHash,
        fromChainId: fromChainId.toString(),
        toChainId: toChainId.toString(),
      },
      headers: {
        'API-KEY': SOCKET_API_KEY,
        'Accept': 'application/json',
      },
    })

    return response.data.result
  } catch (error) {
    console.error('Error checking bridge status:', error)
    return null
  }
}

// Simplified bridge for demo - bridges USDT/USDC between chains
export async function simpleBridge(
  fromChainId: number,
  toChainId: number,
  tokenSymbol: string,
  amount: string,
  userAddress: string
): Promise<BridgeQuote | null> {
  // Map of common stablecoin addresses
  const stablecoinAddresses: { [key: string]: { [chainId: number]: string } } = {
    USDT: {
      1: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      137: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
      42161: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
      10: '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58',
      56: '0x55d398326f99059fF775485246999027B3197955',
    },
    USDC: {
      1: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      137: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
      42161: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
      10: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
      56: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
    },
  }

  const fromToken = stablecoinAddresses[tokenSymbol]?.[fromChainId]
  const toToken = stablecoinAddresses[tokenSymbol]?.[toChainId]

  if (!fromToken || !toToken) {
    console.error(`Token ${tokenSymbol} not supported on these chains`)
    return null
  }

  return getBridgeQuote({
    fromChainId,
    toChainId,
    fromTokenAddress: fromToken,
    toTokenAddress: toToken,
    amount,
    userAddress,
  })
}
