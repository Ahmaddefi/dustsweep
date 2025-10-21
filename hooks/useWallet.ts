import { useWeb3 } from '@/components/Web3Provider'

export function useWallet() {
  const { address, isConnected, isConnecting, connectWallet, disconnect } = useWeb3()

  return {
    address,
    isConnected,
    isConnecting,
    connectWallet,
    disconnect,
  }
}
