import axios from 'axios'
import { ethers } from 'ethers'

const ONEINCH_API_BASE = 'https://api.1inch.dev/swap/v6.0'
const ONEINCH_API_KEY = 'demo-api-key' // We'll use demo for now

export interface SwapQuote {
  fromToken: string
  toToken: string
  fromAmount: string
  toAmount: string
  estimatedGas: string
  protocols: string[]
}

export interface SwapParams {
  chainId: number
  fromTokenAddress: string
  toTokenAddress: string
  amount: string
  fromAddress: string
  slippage: number // percentage (1 = 1%)
}

// Get swap quote (estimate without executing)
export async function getSwapQuote(params: SwapParams): Promise<SwapQuote | null> {
  try {
    const { chainId, fromTokenAddress, toTokenAddress, amount, fromAddress, slippage } = params

    // Build query parameters
    const queryParams = new URLSearchParams({
      src: fromTokenAddress,
      dst: toTokenAddress,
      amount: amount,
      from: fromAddress,
      slippage: slippage.toString(),
      disableEstimate: 'false',
      allowPartialFill: 'false',
    })

    const url = `${ONEINCH_API_BASE}/${chainId}/quote?${queryParams}`

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${ONEINCH_API_KEY}`,
        accept: 'application/json',
      },
      timeout: 10000,
    })

    if (response.data) {
      return {
        fromToken: response.data.fromToken.address,
        toToken: response.data.toToken.address,
        fromAmount: response.data.fromTokenAmount,
        toAmount: response.data.toTokenAmount,
        estimatedGas: response.data.estimatedGas || '0',
        protocols: response.data.protocols || [],
      }
    }

    return null
  } catch (error: any) {
    console.error('Error getting swap quote:', error.response?.data || error.message)
    return null
  }
}

// Get swap transaction data
export async function getSwapTransaction(params: SwapParams) {
  try {
    const { chainId, fromTokenAddress, toTokenAddress, amount, fromAddress, slippage } = params

    const queryParams = new URLSearchParams({
      src: fromTokenAddress,
      dst: toTokenAddress,
      amount: amount,
      from: fromAddress,
      slippage: slippage.toString(),
      disableEstimate: 'true',
      allowPartialFill: 'false',
    })

    const url = `${ONEINCH_API_BASE}/${chainId}/swap?${queryParams}`

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${ONEINCH_API_KEY}`,
        accept: 'application/json',
      },
      timeout: 10000,
    })

    return response.data.tx
  } catch (error: any) {
    console.error('Error getting swap transaction:', error.response?.data || error.message)
    throw new Error('Failed to get swap transaction')
  }
}

// Execute swap
export async function executeSwap(
  signer: ethers.Signer,
  params: SwapParams
): Promise<{ hash: string; success: boolean }> {
  try {
    // Get the swap transaction data
    const txData = await getSwapTransaction(params)

    // Send the transaction
    const tx = await signer.sendTransaction({
      to: txData.to,
      data: txData.data,
      value: txData.value || '0',
      gasLimit: txData.gas || '500000',
    })

    console.log('Swap transaction sent:', tx.hash)

    // Wait for confirmation
    const receipt = await tx.wait()

    console.log('Swap confirmed:', receipt.transactionHash)

    return {
      hash: receipt.transactionHash,
      success: receipt.status === 1,
    }
  } catch (error: any) {
    console.error('Error executing swap:', error)
    throw new Error(error.message || 'Swap failed')
  }
}

// Get token approval status
export async function checkTokenApproval(
  tokenAddress: string,
  ownerAddress: string,
  spenderAddress: string,
  provider: ethers.providers.Provider
): Promise<boolean> {
  try {
    const ERC20_ABI = ['function allowance(address owner, address spender) view returns (uint256)']
    const contract = new ethers.Contract(tokenAddress, ERC20_ABI, provider)
    const allowance = await contract.allowance(ownerAddress, spenderAddress)
    return allowance.gt(0)
  } catch (error) {
    console.error('Error checking approval:', error)
    return false
  }
}

// Approve token spending
export async function approveToken(
  tokenAddress: string,
  spenderAddress: string,
  amount: string,
  signer: ethers.Signer
): Promise<boolean> {
  try {
    const ERC20_ABI = ['function approve(address spender, uint256 amount) returns (bool)']
    const contract = new ethers.Contract(tokenAddress, ERC20_ABI, signer)
    
    const tx = await contract.approve(spenderAddress, amount)
    console.log('Approval transaction sent:', tx.hash)
    
    const receipt = await tx.wait()
    console.log('Approval confirmed:', receipt.transactionHash)
    
    return receipt.status === 1
  } catch (error) {
    console.error('Error approving token:', error)
    return false
  }
}
