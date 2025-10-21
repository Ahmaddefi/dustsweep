"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Wallet,
  Zap,
  ArrowRightLeft,
  Shield,
  TrendingUp,
  RefreshCw,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Bridge as BridgeIcon,
} from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useWallet } from "@/hooks/useWallet"
import { useTokenScanner } from "@/hooks/useTokenScanner"
import { useWeb3 } from "@/components/Web3Provider"
import { SUPPORTED_CHAINS } from "@/config/chains"
import { STABLECOINS } from "@/config/stablecoins"

export default function LandingPage() {
  const { address, isConnected, isConnecting, connectWallet } = useWallet()

  if (isConnected && address) {
    return <DustDashboard address={address} />
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">DustSweep</span>
          </div>
          <Button
            onClick={connectWallet}
            disabled={isConnecting}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 py-2 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
          >
            {isConnecting ? (
              <div className="flex items-center space-x-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Connecting...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Wallet className="w-4 h-4" />
                <span>Connect Wallet</span>
              </div>
            )}
          </Button>
        </div>
      </header>
{/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge
            variant="secondary"
            className="mb-6 px-4 py-2 text-sm font-medium bg-accent/10 text-accent border-accent/20"
          >
            Professional DeFi Tool
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-balance mb-6 bg-gradient-to-r from-foreground via-accent to-primary bg-clip-text text-transparent">
            Find and Recover Your Lost Crypto Dust
          </h1>
          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto leading-relaxed">
            Scan across major EVM chains to discover forgotten tokens. Convert them into stablecoins and bridge to your preferred network.
          </p>
          <Button
            size="lg"
            onClick={connectWallet}
            disabled={isConnecting}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-primary/25 hover:scale-105"
          >
            {isConnecting ? (
              <div className="flex items-center space-x-3">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Connecting Wallet...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Wallet className="w-5 h-5" />
                <span>Start Sweeping Dust</span>
              </div>
            )}
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-200 hover:shadow-lg hover:shadow-accent/10">
            <CardHeader className="text-center pb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <CardTitle className="text-xl font-semibold">Multi-Chain Scanning</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-muted-foreground leading-relaxed">
                Automatically detect dust balances across Ethereum, Polygon, Arbitrum, Optimism, and BSC networks.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-200 hover:shadow-lg hover:shadow-accent/10">
            <CardHeader className="text-center pb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <ArrowRightLeft className="w-6 h-6 text-accent" />
              </div>
              <CardTitle className="text-xl font-semibold">Smart Conversion</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-muted-foreground leading-relaxed">
                Convert scattered dust into USDT, USDC, or DAI stablecoins with optimized gas efficiency.
              </CardDescription>
            </CardContent>
          </Card>
<Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-200 hover:shadow-lg hover:shadow-accent/10">
            <CardHeader className="text-center pb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <CardTitle className="text-xl font-semibold">Cross-Chain Bridge</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-muted-foreground leading-relaxed">
                Bridge your funds to any supported chain with transparent fees and fast transfers.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">© 2024 DustSweep. Professional crypto dust recovery tool.</p>
        </div>
      </footer>
    </div>
  )
}

function DustDashboard({ address }: { address: string }) {
  const { tokens, totalValue, isScanning, scanProgress, lastScanTime, scanWallet } = useTokenScanner()
  const { signer } = useWeb3()
  const [hasScanned, setHasScanned] = useState(false)
  const [selectedTokens, setSelectedTokens] = useState<string[]>([])
  const [showConvertModal, setShowConvertModal] = useState(false)
  const [showBridgeModal, setShowBridgeModal] = useState(false)
  const [selectedStablecoin, setSelectedStablecoin] = useState('USDT')
  const [convertStep, setConvertStep] = useState<'select' | 'confirm' | 'processing' | 'success'>('select')

  const handleScan = async () => {
    await scanWallet(address)
    setHasScanned(true)
  }

  const handleTokenSelect = (tokenId: string) => {
    setSelectedTokens((prev) =>
      prev.includes(tokenId) ? prev.filter((id) => id !== tokenId) : [...prev, tokenId]
    )
  }

  const handleSelectAll = () => {
    if (selectedTokens.length === tokens.length) {
      setSelectedTokens([])
    } else {
      setSelectedTokens(tokens.map((_, idx) => `${idx}`))
    }
  }

  const handleConvertSelected = () => {
    if (selectedTokens.length === 0) {
      alert('Please select tokens to convert')
      return
    }
    setShowConvertModal(true)
    setConvertStep('select')
  }

  const handleConvertAll = () => {
    setSelectedTokens(tokens.map((_, idx) => `${idx}`))
    setShowConvertModal(true)
    setConvertStep('select')
  }

  const handleBridgeAll = () => {
    setShowBridgeModal(true)
  }

  const selectedTokensData = tokens.filter((_, idx) => selectedTokens.includes(`${idx}`))
  const selectedValue = selectedTokensData.reduce((sum, token) => sum + token.usdValue, 0)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Dashboard Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Dust Dashboard</h1>
            <p className="text-muted-foreground">
              Connected: {address.slice(0, 6)}...{address.slice(-4)}
              {lastScanTime && <span className="ml-2">• Last scan: {lastScanTime.toLocaleTimeString()}</span>}
            </p>
          </div>
          <Button
            onClick={handleScan}
            disabled={isScanning}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-6 py-2 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent/25 mt-4 md:mt-0"
          >
            {isScanning ? (
              <div className="flex items-center space-x-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Scanning... {Math.round(scanProgress)}%</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <RefreshCw className="w-4 h-4" />
                <span>{hasScanned ? 'Rescan' : 'Start Scan'}</span>
              </div>
            )}
          </Button>
</div>

        {isScanning && (
          <div className="mb-6">
            <div className="bg-muted rounded-full h-2 overflow-hidden">
              <div
                className="bg-accent h-full transition-all duration-500 ease-out"
                style={{ width: `${scanProgress}%` }}
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Scanning for tokens across {SUPPORTED_CHAINS.length} chains...
            </p>
          </div>
        )}

        {!hasScanned && !isScanning && (
          <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20 backdrop-blur-sm mb-8">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Scan! 🔍</h2>
              <p className="text-muted-foreground mb-6">
                Click "Start Scan" to search for tokens across Ethereum, Polygon, Arbitrum, Optimism, and BSC.
              </p>
              <Button onClick={handleScan} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <RefreshCw className="w-5 h-5 mr-2" />
                Start Scanning Now
              </Button>
            </CardContent>
          </Card>
        )}

        {hasScanned && !isScanning && (
          <>
            {/* Dust Summary Card */}
            <div className="mb-8">
              <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold text-foreground">${totalValue.toFixed(2)}</h2>
                      <p className="text-muted-foreground">Total dust value found</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>{tokens.length} tokens</span>
                        <span>•</span>
                        <span>{SUPPORTED_CHAINS.length} chains scanned</span>
                      </div>
                    </div>
                    {tokens.length > 0 && (
                      <div className="space-y-2">
                        <Button
                          size="lg"
                          onClick={handleConvertAll}
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 hover:scale-105 transform"
                        >
                          <ArrowRightLeft className="w-4 h-4 mr-2" />
                          Convert All Dust
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          onClick={handleBridgeAll}
                          className="w-full border-accent/20 hover:bg-accent/10 text-accent bg-transparent font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:scale-105 transform"
                        >
                          <BridgeIcon className="w-4 h-4 mr-2" />
                          Bridge to Home Chain
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Token List */}
            {tokens.length > 0 && (
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-foreground">Found Tokens ({tokens.length})</h2>
                  {selectedTokens.length > 0 && (
                    <div className="flex items-center space-x-3">
                      <Badge variant="secondary" className="bg-accent/20 text-accent">
                        {selectedTokens.length} selected (${selectedValue.toFixed(2)})
                      </Badge>
                      <Button onClick={handleConvertSelected} size="sm" className="bg-primary hover:bg-primary/90">
                        <ArrowRightLeft className="w-4 h-4 mr-2" />
                        Convert Selected
                      </Button>
                    </div>
                  )}
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-border">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          <Checkbox
                            checked={selectedTokens.length === tokens.length && tokens.length > 0}
                            onCheckedChange={handleSelectAll}
                          />
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Token
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Chain
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Balance
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          USD Value
                        </th>
                      </tr>
</thead>
                    <tbody className="bg-background divide-y divide-border">
                      {tokens.map((token, idx) => (
                        <tr key={`${token.chainId}-${token.address}-${idx}`} className="hover:bg-muted/20">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Checkbox
                              checked={selectedTokens.includes(`${idx}`)}
                              onCheckedChange={() => handleTokenSelect(`${idx}`)}
                            />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-foreground">{token.name}</div>
                            <div className="text-sm text-muted-foreground">{token.symbol}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-foreground">{token.chainName}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right">
                            <div className="text-sm text-foreground">{token.balance}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right">
                            <div className="text-sm font-semibold text-accent">${token.usdValue.toFixed(2)}</div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {tokens.length === 0 && (
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-8 text-center">
                  <p className="text-muted-foreground">No tokens found on scanned chains.</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Your wallet appears to be empty on these networks.
                  </p>
                </CardContent>
              </Card>
            )}
          </>
        )}
      </div>

      {/* Convert Modal */}
      <ConvertModal
        isOpen={showConvertModal}
        onClose={() => setShowConvertModal(false)}
        tokens={selectedTokensData}
        totalValue={selectedValue}
        step={convertStep}
        setStep={setConvertStep}
        selectedStablecoin={selectedStablecoin}
        setSelectedStablecoin={setSelectedStablecoin}
      />

      {/* Bridge Modal */}
      <BridgeModal
        isOpen={showBridgeModal}
        onClose={() => setShowBridgeModal(false)}
        totalValue={totalValue}
        walletAddress={address}
      />
    </div>
  )
}

function ConvertModal({
  isOpen,
  onClose,
  tokens,
  totalValue,
  step,
  setStep,
  selectedStablecoin,
  setSelectedStablecoin,
}: {
  isOpen: boolean
  onClose: () => void
  tokens: any[]
  totalValue: number
  step: 'select' | 'confirm' | 'processing' | 'success'
  setStep: (step: 'select' | 'confirm' | 'processing' | 'success') => void
  selectedStablecoin: string
  setSelectedStablecoin: (coin: string) => void
}) {
  const handleConfirm = async () => {
    setStep('processing')
    setTimeout(() => {
      setStep('success')
    }, 3000)
  }

  const estimatedOutput = totalValue * 0.97

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground">
            {step === 'select' && 'Convert Dust to Stablecoin'}
            {step === 'confirm' && 'Confirm Conversion'}
            {step === 'processing' && 'Converting Tokens...'}
            {step === 'success' && 'Conversion Successful!'}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {step === 'select' && 'Choose the stablecoin to convert your dust into'}
            {step === 'confirm' && 'Review the conversion details'}
            {step === 'processing' && 'Please wait while we convert your tokens'}
            {step === 'success' && 'Your tokens have been successfully converted'}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <Card className="bg-accent/5 border-accent/20">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">Converting Value</span>
                <span className="font-semibold text-accent">${totalValue.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Tokens Selected</span>
                <span className="font-medium text-foreground">{tokens.length}</span>
              </div>
            </CardContent>
          </Card>

          {step === 'select' && (
            <>
              <div className="space-y-3">
                <Label className="text-sm font-medium text-foreground">Select Stablecoin</Label>
                <RadioGroup value={selectedStablecoin} onValueChange={setSelectedStablecoin}>
                  {STABLECOINS.map((coin) => (
                    <div
                      key={coin.symbol}
                      className="flex items-center space-x-3 p-3 rounded-lg border border-border/50 hover:bg-accent/5 transition-colors"
                    >
                      <RadioGroupItem value={coin.symbol} id={coin.symbol} />
                      <div className="flex-1">
                        <Label htmlFor={coin.symbol} className="font-medium text-foreground cursor-pointer">
                          {coin.name} ({coin.symbol})
                        </Label>
                        <p className="text-sm text-muted-foreground">{coin.description}</p>
                      </div>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="flex space-x-3">
                <Button variant="outline" onClick={onClose} className="flex-1 bg-transparent">
                  Cancel
                </Button>
                <Button onClick={() => setStep('confirm')} className="flex-1 bg-primary hover:bg-primary/90">
                  Continue
                </Button>
              </div>
            </>
          )}

          {step === 'confirm' && (
            <>
<div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
                  <span className="text-sm text-muted-foreground">Estimated Output</span>
                  <div className="text-right">
                    <div className="font-semibold text-accent">${estimatedOutput.toFixed(2)}</div>
                    <div className="text-xs text-muted-foreground">After 3% slippage</div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                  <AlertCircle className="w-4 h-4 text-yellow-500" />
                  <p className="text-sm text-yellow-600 dark:text-yellow-400">
                    This is a demo. Real swaps require 1inch API key.
                  </p>
                </div>
              </div>

              <div className="flex space-x-3">
                <Button variant="outline" onClick={() => setStep('select')} className="flex-1">
                  Back
                </Button>
                <Button onClick={handleConfirm} className="flex-1 bg-primary hover:bg-primary/90">
                  Confirm (Demo)
                </Button>
              </div>
            </>
          )}

          {step === 'processing' && (
            <div className="text-center py-8">
              <Loader2 className="w-12 h-12 animate-spin text-accent mx-auto mb-4" />
              <p className="text-foreground font-medium">Converting tokens...</p>
            </div>
          )}

          {step === 'success' && (
            <>
              <div className="text-center py-6">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Conversion Complete!</h3>
                <p className="text-muted-foreground">
                  Successfully converted ${totalValue.toFixed(2)} to {selectedStablecoin}
                </p>
              </div>

              <Button onClick={onClose} className="w-full bg-primary hover:bg-primary/90">
                Done
              </Button>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

function BridgeModal({
  isOpen,
  onClose,
  totalValue,
  walletAddress,
}: {
  isOpen: boolean
  onClose: () => void
  totalValue: number
  walletAddress: string
}) {
  const [step, setStep] = useState<'select' | 'confirm' | 'processing' | 'success'>('select')
  const [selectedChain, setSelectedChain] = useState('1')

  const bridgeChains = [
    { id: '1', name: 'Ethereum', icon: '⟠', color: 'from-blue-500 to-blue-600', bridgeFee: 15.5, timeEstimate: '10-15 min' },
    { id: '137', name: 'Polygon', icon: '⬟', color: 'from-purple-500 to-purple-600', bridgeFee: 2.3, timeEstimate: '3-5 min' },
    { id: '42161', name: 'Arbitrum', icon: '◆', color: 'from-blue-400 to-cyan-500', bridgeFee: 8.9, timeEstimate: '5-8 min' },
    { id: '10', name: 'Optimism', icon: '○', color: 'from-red-500 to-pink-500', bridgeFee: 7.2, timeEstimate: '5-8 min' },
    { id: '56', name: 'BSC', icon: '◈', color: 'from-yellow-500 to-orange-500', bridgeFee: 4.5, timeEstimate: '3-5 min' },
  ]

  const selectedChainData = bridgeChains.find((c) => c.id === selectedChain)
  const netAmount = totalValue - (selectedChainData?.bridgeFee || 0)

  const handleConfirm = () => {
    setStep('processing')
    setTimeout(() => setStep('success'), 4000)
  }

  const handleClose = () => {
    onClose()
    setStep('select')
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground">
            {step === 'select' && 'Bridge to Home Chain'}
            {step === 'confirm' && 'Confirm Bridge'}
            {step === 'processing' && 'Bridging Funds...'}
            {step === 'success' && 'Bridge Successful!'}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {step === 'select' && 'Choose your preferred destination chain'}
            {step === 'confirm' && 'Review bridge details before proceeding'}
            {step === 'processing' && 'Processing your bridge transaction'}
            {step === 'success' && 'Your funds have been successfully bridged'}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <Card className="bg-accent/5 border-accent/20">
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Bridging Amount</span>
                <span className="font-semibold text-accent">${totalValue.toFixed(2)}</span>
              </div>
            </CardContent>
          </Card>

          {step === 'select' && (
            <>
              <div className="space-y-3">
                <Label className="text-sm font-medium text-foreground">Select Destination Chain</Label>
                <RadioGroup value={selectedChain} onValueChange={setSelectedChain}>
                  {bridgeChains.map((chain) => (
                    <div key={chain.id} className="flex items-center space-x-3 p-3 rounded-lg border border-border/50 hover:bg-accent/5 transition-colors">
                      <RadioGroupItem value={chain.id} id={chain.id} />
                      <div className={`w-8 h-8 bg-gradient-to-br ${chain.color} rounded-lg flex items-center justify-center text-white font-bold text-sm`}>
{chain.icon}
                      </div>
                      <div className="flex-1">
                        <Label htmlFor={chain.id} className="font-medium text-foreground cursor-pointer">
                          {chain.name}
                        </Label>
                        <p className="text-sm text-muted-foreground">Est: {chain.timeEstimate}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-foreground">${chain.bridgeFee.toFixed(2)}</div>
                        <div className="text-xs text-muted-foreground">fee</div>
                      </div>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="flex space-x-3">
                <Button variant="outline" onClick={handleClose} className="flex-1 bg-transparent">
                  Cancel
                </Button>
                <Button onClick={() => setStep('confirm')} className="flex-1 bg-primary hover:bg-primary/90">
                  Continue
                </Button>
              </div>
            </>
          )}

          {step === 'confirm' && (
            <>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
                  <span className="text-sm text-muted-foreground">Destination</span>
                  <div className="flex items-center space-x-2">
                    <div className={`w-6 h-6 bg-gradient-to-br ${selectedChainData?.color} rounded flex items-center justify-center text-white font-bold text-xs`}>
                      {selectedChainData?.icon}
                    </div>
                    <span className="font-medium text-foreground">{selectedChainData?.name}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
                  <span className="text-sm text-muted-foreground">Bridge Fee</span>
                  <span className="font-medium text-foreground">${selectedChainData?.bridgeFee.toFixed(2)}</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-accent/10 border border-accent/20 rounded-lg">
                  <span className="text-sm font-medium text-foreground">You'll Receive</span>
                  <div className="text-right">
                    <div className="font-bold text-accent text-lg">${netAmount.toFixed(2)}</div>
                    <div className="text-xs text-muted-foreground">On {selectedChainData?.name}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                  <AlertCircle className="w-4 h-4 text-yellow-500" />
                  <p className="text-sm text-yellow-600 dark:text-yellow-400">
                    This is a demo. Real bridges require Socket API key.
                  </p>
                </div>
              </div>

              <div className="flex space-x-3">
                <Button variant="outline" onClick={() => setStep('select')} className="flex-1">
                  Back
                </Button>
                <Button onClick={handleConfirm} className="flex-1 bg-primary hover:bg-primary/90">
                  Confirm Bridge (Demo)
                </Button>
              </div>
            </>
          )}

          {step === 'processing' && (
            <div className="text-center py-8">
              <div className="relative">
                <BridgeIcon className="w-12 h-12 text-accent mx-auto mb-4" />
                <Loader2 className="w-6 h-6 animate-spin text-accent absolute top-3 left-1/2 transform -translate-x-1/2" />
              </div>
              <p className="text-foreground font-medium mb-2">Bridging funds...</p>
              <p className="text-sm text-muted-foreground">This may take {selectedChainData?.timeEstimate}</p>
            </div>
          )}

          {step === 'success' && (
            <>
              <div className="text-center py-6">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Bridge Complete!</h3>
                <p className="text-muted-foreground mb-4">
                  Successfully bridged ${netAmount.toFixed(2)} to {selectedChainData?.name}
                </p>
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-3">
                  <p className="text-sm text-accent font-medium">Transaction Hash: 0xabcd...ef12</p>
                </div>
              </div>

              <Button onClick={handleClose} className="w-full bg-primary hover:bg-primary/90">
                Done
              </Button>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
