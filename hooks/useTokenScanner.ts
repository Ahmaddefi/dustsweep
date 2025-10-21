import { useState, useCallback } from 'react'
import { scanAllChains, TokenBalance } from '@/services/tokenScanner'

export function useTokenScanner() {
  const [tokens, setTokens] = useState<TokenBalance[]>([])
  const [totalValue, setTotalValue] = useState(0)
  const [isScanning, setIsScanning] = useState(false)
  const [scanProgress, setScanProgress] = useState(0)
  const [lastScanTime, setLastScanTime] = useState<Date | null>(null)

  const scanWallet = useCallback(async (address: string) => {
    setIsScanning(true)
    setScanProgress(0)

    try {
      // Simulate progress updates
      const progressInterval = setInterval(() => {
        setScanProgress((prev) => Math.min(prev + 20, 90))
      }, 500)

      const results = await scanAllChains(address)

      clearInterval(progressInterval)
      setScanProgress(100)

      setTokens(results.tokens)
      setTotalValue(results.totalValue)
      setLastScanTime(new Date())
    } catch (error) {
      console.error('Error scanning wallet:', error)
    } finally {
      setIsScanning(false)
      setTimeout(() => setScanProgress(0), 1000)
    }
  }, [])

  return {
    tokens,
    totalValue,
    isScanning,
    scanProgress,
    lastScanTime,
    scanWallet,
  }
}
