import { useState } from 'react'
import { ethers } from 'ethers'
import { getSwapQuote, executeSwap, SwapParams, SwapQuote } from '@/services/swapService'

export function useSwap() {
  const [isLoading, setIsLoading] = useState(false)
  const [quote, setQuote] = useState<SwapQuote | null>(null)
  const [error, setError] = useState<string | null>(null)

  const getQuote = async (params: SwapParams) => {
    setIsLoading(true)
    setError(null)
    
    try {
      const quoteData = await getSwapQuote(params)
      setQuote(quoteData)
      return quoteData
    } catch (err: any) {
      setError(err.message || 'Failed to get quote')
      return null
    } finally {
      setIsLoading(false)
    }
  }

  const swap = async (signer: ethers.Signer, params: SwapParams) => {
    setIsLoading(true)
    setError(null)
    
    try {
      const result = await executeSwap(signer, params)
      return result
    } catch (err: any) {
      setError(err.message || 'Swap failed')
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  const resetQuote = () => {
    setQuote(null)
    setError(null)
  }

  return {
    isLoading,
    quote,
    error,
    getQuote,
    swap,
    resetQuote,
  }
}
