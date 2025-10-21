import { useState } from 'react'
import { ethers } from 'ethers'
import { getBridgeQuote, executeBridge, BridgeParams, BridgeQuote } from '@/services/bridgeService'

export function useBridge() {
  const [isLoading, setIsLoading] = useState(false)
  const [quote, setQuote] = useState<BridgeQuote | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [bridgeStatus, setBridgeStatus] = useState<'idle' | 'pending' | 'completed' | 'failed'>('idle')

  const getQuote = async (params: BridgeParams) => {
    setIsLoading(true)
    setError(null)
    
    try {
      const quoteData = await getBridgeQuote(params)
      setQuote(quoteData)
      return quoteData
    } catch (err: any) {
      setError(err.message || 'Failed to get bridge quote')
      return null
    } finally {
      setIsLoading(false)
    }
  }

  const bridge = async (signer: ethers.Signer, params: BridgeParams, bridgeQuote: BridgeQuote) => {
    setIsLoading(true)
    setError(null)
    setBridgeStatus('pending')
    
    try {
      const result = await executeBridge(signer, params, bridgeQuote)
      
      if (result.success) {
        setBridgeStatus('completed')
      } else {
        setBridgeStatus('failed')
      }
      
      return result
    } catch (err: any) {
      setError(err.message || 'Bridge failed')
      setBridgeStatus('failed')
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  const resetBridge = () => {
    setQuote(null)
    setError(null)
    setBridgeStatus('idle')
  }

  return {
    isLoading,
    quote,
    error,
    bridgeStatus,
    getQuote,
    bridge,
    resetBridge,
  }
}
