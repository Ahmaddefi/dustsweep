'use client'

import { ReactNode, createContext, useContext, useState } from 'react'
import { ethers } from 'ethers'

interface Web3ContextType {
  provider: ethers.providers.Web3Provider | null
  signer: ethers.Signer | null
  address: string | null
  isConnected: boolean
  isConnecting: boolean
  connectWallet: () => Promise<void>
  disconnect: () => void
}

const Web3Context = createContext<Web3ContextType>({
  provider: null,
  signer: null,
  address: null,
  isConnected: false,
  isConnecting: false,
  connectWallet: async () => {},
  disconnect: () => {},
})

export function Web3Provider({ children }: { children: ReactNode }) {
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null)
  const [signer, setSigner] = useState<ethers.Signer | null>(null)
  const [address, setAddress] = useState<string | null>(null)
  const [isConnecting, setIsConnecting] = useState(false)

  const connectWallet = async () => {
    setIsConnecting(true)
    try {
      // Check if MetaMask is installed
      if (typeof window !== 'undefined' && (window as any).ethereum) {
        const web3Provider = new ethers.providers.Web3Provider((window as any).ethereum)
        
        // Request account access
        const accounts = await (window as any).ethereum.request({ 
          method: 'eth_requestAccounts' 
        })
        
        if (accounts && accounts.length > 0) {
          const web3Signer = web3Provider.getSigner()
          const userAddress = await web3Signer.getAddress()
          
          setProvider(web3Provider)
          setSigner(web3Signer)
          setAddress(userAddress)
          
          console.log('Wallet connected:', userAddress)
        }
      } else {
        alert('Please install MetaMask or another Web3 wallet!')
      }
    } catch (error: any) {
      console.error('Error connecting wallet:', error)
      
      // Handle user rejection
      if (error.code === 4001) {
        alert('Connection request rejected. Please try again.')
      } else {
        alert('Failed to connect wallet. Please try again.')
      }
    } finally {
      setIsConnecting(false)
    }
  }

  const disconnect = () => {
    setProvider(null)
    setSigner(null)
    setAddress(null)
  }

  return (
    <Web3Context.Provider
      value={{
        provider,
        signer,
        address,
        isConnected: !!address,
        isConnecting,
        connectWallet,
        disconnect,
      }}
    >
      {children}
    </Web3Context.Provider>
  )
}

export const useWeb3 = () => useContext(Web3Context)
