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
  Search,
  CheckCircle2,
  Loader2,
  Badge as Bridge,
  AlertCircle,
  Info,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function LandingPage() {
  const [isConnecting, setIsConnecting] = useState(false)
  const [walletConnected, setWalletConnected] = useState(false)

  const handleConnectWallet = async () => {
    setIsConnecting(true)
    // Simulate wallet connection
    setTimeout(() => {
      setWalletConnected(true)
      setIsConnecting(false)
    }, 2000)
  }

  if (walletConnected) {
    return <DustDashboard />
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
            onClick={handleConnectWallet}
            disabled={isConnecting}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 py-2 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
          >
            {isConnecting ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
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
            Scan across major EVM chains to discover forgotten tokens and small balances. Convert them into stablecoins
            and bridge to your preferred network.
          </p>
          <Button
            size="lg"
            onClick={handleConnectWallet}
            disabled={isConnecting}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-primary/25 hover:scale-105"
          >
            {isConnecting ? (
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
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
                Automatically detect dust balances across Ethereum, Polygon, Arbitrum, Optimism, Mantle, and BSC
                networks.
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
                Convert scattered dust into USDT, USDC, DAI, or FRAX stablecoins with optimized gas efficiency.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-200 hover:shadow-lg hover:shadow-accent/10">
            <CardHeader className="text-center pb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <CardTitle className="text-xl font-semibold">Secure Bridging</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-muted-foreground leading-relaxed">
                Bridge your consolidated funds to your preferred "home chain" with transparent gas estimates.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16 border-t border-border/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Trusted by DeFi Users</h2>
          <p className="text-muted-foreground text-lg">Professional-grade tool for managing crypto dust</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">6+</div>
            <div className="text-muted-foreground">EVM Chains</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">4</div>
            <div className="text-muted-foreground">Stablecoins</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">$10</div>
            <div className="text-muted-foreground">Min Dust Value</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">24/7</div>
            <div className="text-muted-foreground">Available</div>
          </div>
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

function DustDashboard() {
  const [isScanning, setIsScanning] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedChain, setSelectedChain] = useState("all")
  const [sortBy, setSortBy] = useState("value")
  const [selectedTokens, setSelectedTokens] = useState<string[]>([])
  const [showConvertModal, setShowConvertModal] = useState(false)
  const [selectedStablecoin, setSelectedStablecoin] = useState("USDT")
  const [isConverting, setIsConverting] = useState(false)
  const [conversionStep, setConversionStep] = useState<"select" | "confirm" | "processing" | "success">("select")
  const [convertingTokens, setConvertingTokens] = useState<string[]>([])
  const [showBridgeModal, setShowBridgeModal] = useState(false)
  const [selectedHomeChain, setSelectedHomeChain] = useState("Ethereum")
  const [bridgeStep, setBridgeStep] = useState<"select" | "confirm" | "processing" | "success">("select")
  const [bridgeAmount, setBridgeAmount] = useState(0)
  const [scanProgress, setScanProgress] = useState(0)
  const [lastScanTime, setLastScanTime] = useState<Date | null>(null)
  const [notifications, setNotifications] = useState<
    Array<{ id: string; type: "success" | "error" | "info"; message: string }>
  >([])

  // Mock data for demonstration
  const totalDustValue = 47.83
  const chainData = [
    {
      name: "Ethereum",
      symbol: "ETH",
      dustValue: 23.45,
      tokenCount: 8,
      color: "from-blue-500 to-blue-600",
      icon: "⟠",
      status: "scanned",
    },
    {
      name: "Polygon",
      symbol: "MATIC",
      dustValue: 12.67,
      tokenCount: 5,
      color: "from-purple-500 to-purple-600",
      icon: "⬟",
      status: "scanned",
    },
    {
      name: "Arbitrum",
      symbol: "ARB",
      dustValue: 8.91,
      tokenCount: 3,
      color: "from-blue-400 to-cyan-500",
      icon: "◆",
      status: "scanned",
    },
    {
      name: "Optimism",
      symbol: "OP",
      dustValue: 2.8,
      tokenCount: 2,
      color: "from-red-500 to-pink-500",
      icon: "○",
      status: "scanned",
    },
    {
      name: "Mantle",
      symbol: "MNT",
      dustValue: 0.0,
      tokenCount: 0,
      color: "from-green-500 to-emerald-500",
      icon: "◊",
      status: "scanned",
    },
    {
      name: "BSC",
      symbol: "BNB",
      dustValue: 0.0,
      tokenCount: 0,
      color: "from-yellow-500 to-orange-500",
      icon: "◈",
      status: "scanned",
    },
  ]

  const tokenData = [
    {
      id: "1",
      name: "Uniswap",
      symbol: "UNI",
      chain: "Ethereum",
      balance: "0.0234",
      usdValue: 8.45,
      address: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
    },
    {
      id: "2",
      name: "Chainlink",
      symbol: "LINK",
      chain: "Ethereum",
      balance: "0.156",
      usdValue: 7.23,
      address: "0x514910771af9ca656af840dff83e8264ecf986ca",
    },
    {
      id: "3",
      name: "Aave",
      symbol: "AAVE",
      chain: "Ethereum",
      balance: "0.0089",
      usdValue: 4.67,
      address: "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9",
    },
    {
      id: "4",
      name: "Compound",
      symbol: "COMP",
      chain: "Ethereum",
      balance: "0.0123",
      usdValue: 2.34,
      address: "0xc00e94cb662c3520282e6f5717214004a7f26888",
    },
    {
      id: "5",
      name: "Maker",
      symbol: "MKR",
      chain: "Ethereum",
      balance: "0.0003",
      usdValue: 0.76,
      address: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
    },
    {
      id: "6",
      name: "QuickSwap",
      symbol: "QUICK",
      chain: "Polygon",
      balance: "2.456",
      usdValue: 5.67,
      address: "0x831753dd7087cac61ab5644b308642cc1c33dc13",
    },
    {
      id: "7",
      name: "Polygon",
      symbol: "MATIC",
      chain: "Polygon",
      balance: "8.234",
      usdValue: 4.12,
      address: "0x0000000000000000000000000000000000001010",
    },
    {
      id: "8",
      name: "SushiSwap",
      symbol: "SUSHI",
      chain: "Polygon",
      balance: "0.789",
      usdValue: 1.89,
      address: "0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a",
    },
    {
      id: "9",
      name: "Balancer",
      symbol: "BAL",
      chain: "Polygon",
      balance: "0.234",
      usdValue: 0.99,
      address: "0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3",
    },
    {
      id: "10",
      name: "Arbitrum",
      symbol: "ARB",
      chain: "Arbitrum",
      balance: "12.45",
      usdValue: 6.78,
      address: "0x912ce59144191c1204e64559fe8253a0e49e6548",
    },
    {
      id: "11",
      name: "GMX",
      symbol: "GMX",
      chain: "Arbitrum",
      balance: "0.0156",
      usdValue: 1.23,
      address: "0xfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a",
    },
    {
      id: "12",
      name: "Radiant",
      symbol: "RDNT",
      chain: "Arbitrum",
      balance: "4.567",
      usdValue: 0.9,
      address: "0x3082cc23568ea640225c2467653db90e9250aaa0",
    },
    {
      id: "13",
      name: "Optimism",
      symbol: "OP",
      chain: "Optimism",
      balance: "1.234",
      usdValue: 1.89,
      address: "0x4200000000000000000000000000000000000042",
    },
    {
      id: "14",
      name: "Synthetix",
      symbol: "SNX",
      chain: "Optimism",
      balance: "0.345",
      usdValue: 0.91,
      address: "0x8700daec35af8ff88c16bdf0418774cb3d7599b4",
    },
  ]

  const stablecoins = [
    { symbol: "USDT", name: "Tether USD", description: "Most liquid stablecoin", gasEstimate: 8.5 },
    { symbol: "USDC", name: "USD Coin", description: "Regulated US dollar stablecoin", gasEstimate: 9.2 },
    { symbol: "DAI", name: "Dai Stablecoin", description: "Decentralized stablecoin", gasEstimate: 12.3 },
    { symbol: "FRAX", name: "Frax", description: "Algorithmic stablecoin", gasEstimate: 15.8 },
  ]

  const bridgeChains = [
    {
      name: "Ethereum",
      symbol: "ETH",
      icon: "⟠",
      color: "from-blue-500 to-blue-600",
      bridgeFee: 15.5,
      timeEstimate: "10-15 min",
    },
    {
      name: "Polygon",
      symbol: "MATIC",
      icon: "⬟",
      color: "from-purple-500 to-purple-600",
      bridgeFee: 2.3,
      timeEstimate: "3-5 min",
    },
    {
      name: "Arbitrum",
      symbol: "ARB",
      icon: "◆",
      color: "from-blue-400 to-cyan-500",
      bridgeFee: 8.9,
      timeEstimate: "5-8 min",
    },
    {
      name: "Optimism",
      symbol: "OP",
      icon: "○",
      color: "from-red-500 to-pink-500",
      bridgeFee: 7.2,
      timeEstimate: "5-8 min",
    },
    {
      name: "Base",
      symbol: "BASE",
      icon: "◉",
      color: "from-blue-600 to-indigo-600",
      bridgeFee: 6.8,
      timeEstimate: "4-6 min",
    },
  ]

  const handleRescan = async () => {
    setIsScanning(true)
    setScanProgress(0)

    // Simulate scanning progress with realistic timing
    const chains = ["Ethereum", "Polygon", "Arbitrum", "Optimism", "Mantle", "BSC"]
    for (let i = 0; i < chains.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 800))
      setScanProgress(((i + 1) / chains.length) * 100)
    }

    setLastScanTime(new Date())
    setIsScanning(false)

    addNotification("success", `Found dust across ${chains.length} chains`)
  }

  const addNotification = (type: "success" | "error" | "info", message: string) => {
    const id = Math.random().toString(36).substr(2, 9)
    setNotifications((prev) => [...prev, { id, type, message }])
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id))
    }, 4000)
  }

  const handleConvertSelected = () => {
    if (selectedTokens.length === 0) {
      addNotification("error", "Please select tokens to convert")
      return
    }
    setConvertingTokens(selectedTokens)
    setShowConvertModal(true)
  }

  const handleConvertAll = () => {
    const allTokenIds = tokenData.map((token) => token.id)
    setConvertingTokens(allTokenIds)
    setShowConvertModal(true)
  }

  const filteredAndSortedTokens = tokenData
    .filter((token) => {
      const matchesSearch =
        token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        token.symbol.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesChain = selectedChain === "all" || token.chain === selectedChain
      return matchesSearch && matchesChain
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "value":
          return b.usdValue - a.usdValue
        case "name":
          return a.name.localeCompare(b.name)
        case "chain":
          return a.chain.localeCompare(b.chain)
        default:
          return 0
      }
    })

  const handleTokenSelect = (tokenId: string) => {
    setSelectedTokens((prev) => (prev.includes(tokenId) ? prev.filter((id) => id !== tokenId) : [...prev, tokenId]))
  }

  const handleSelectAll = () => {
    if (selectedTokens.length === filteredAndSortedTokens.length && filteredAndSortedTokens.length > 0) {
      setSelectedTokens([])
    } else {
      setSelectedTokens(filteredAndSortedTokens.map((token) => token.id))
    }
  }

  const selectedTokensValue = filteredAndSortedTokens
    .filter((token) => selectedTokens.includes(token.id))
    .reduce((sum, token) => sum + token.usdValue, 0)

  const handleConvertSingle = (tokenId: string) => {
    setConvertingTokens([tokenId])
    setShowConvertModal(true)
    setConversionStep("select")
  }

  const handleConfirmConversion = () => {
    setConversionStep("processing")
    setIsConverting(true)

    // Simulate conversion process
    setTimeout(() => {
      setConversionStep("success")
      setIsConverting(false)
    }, 3000)
  }

  const handleCloseModal = () => {
    setShowConvertModal(false)
    setConversionStep("select")
    setSelectedStablecoin("USDT")
    setConvertingTokens([])
    if (conversionStep === "success") {
      // Reset selected tokens after successful conversion
      setSelectedTokens([])
    }
  }

  const handleBridgeToEthereum = () => {
    setBridgeAmount(totalDustValue)
    setSelectedHomeChain("Ethereum")
    setShowBridgeModal(true)
    setBridgeStep("select")
  }

  const handleBridgeSelected = () => {
    setBridgeAmount(selectedTokensValue)
    setShowBridgeModal(true)
    setBridgeStep("select")
  }

  const handleConfirmBridge = () => {
    setBridgeStep("processing")

    // Simulate bridge process
    setTimeout(() => {
      setBridgeStep("success")
    }, 4000)
  }

  const handleCloseBridgeModal = () => {
    setShowBridgeModal(false)
    setBridgeStep("select")
    setSelectedHomeChain("Ethereum")
    setBridgeAmount(0)
  }

  const convertingTokensData = tokenData.filter((token) => convertingTokens.includes(token.id))
  const convertingValue = convertingTokensData.reduce((sum, token) => sum + token.usdValue, 0)
  const selectedStablecoinData = stablecoins.find((coin) => coin.symbol === selectedStablecoin)
  const estimatedOutput = convertingValue * 0.97 // 3% slippage
  const totalGasEstimate = selectedStablecoinData?.gasEstimate || 0

  const selectedHomeChainData = bridgeChains.find((chain) => chain.name === selectedHomeChain)
  const bridgeFeeEstimate = selectedHomeChainData?.bridgeFee || 0
  const netBridgeAmount = bridgeAmount - bridgeFeeEstimate

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`px-4 py-3 rounded-lg shadow-lg border backdrop-blur-sm animate-in slide-in-from-right-full duration-300 ${
              notification.type === "success"
                ? "bg-green-500/10 border-green-500/20 text-green-400"
                : notification.type === "error"
                  ? "bg-red-500/10 border-red-500/20 text-red-400"
                  : "bg-blue-500/10 border-blue-500/20 text-blue-400"
            }`}
          >
            <div className="flex items-center space-x-2">
              {notification.type === "success" && <CheckCircle2 className="w-4 h-4" />}
              {notification.type === "error" && <AlertCircle className="w-4 h-4" />}
              {notification.type === "info" && <Info className="w-4 h-4" />}
              <span className="text-sm font-medium">{notification.message}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Dashboard Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Dust Dashboard</h1>
            <p className="text-muted-foreground">
              {lastScanTime ? `Last scan: ${lastScanTime.toLocaleTimeString()}` : "Ready to scan for dust"}
            </p>
          </div>
          <Button
            onClick={handleRescan}
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
                <span>Rescan Chains</span>
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
            <p className="text-sm text-muted-foreground mt-2">Scanning chains for dust tokens...</p>
          </div>
        )}

        {/* Dust Summary Card */}
        <div className="mb-8">
          <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-foreground">${totalDustValue.toFixed(2)}</h2>
                  <p className="text-muted-foreground">Total dust value found</p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>{tokenData.length} tokens</span>
                    <span>•</span>
                    <span>{chainData.filter((c) => c.dustValue > 0).length} chains</span>
                  </div>
                </div>
                <div className="text-right space-y-2">
                  <Button
                    size="lg"
                    onClick={handleConvertAll}
                    disabled={isScanning}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 w-full hover:scale-105 transform"
                  >
                    <ArrowRightLeft className="w-4 h-4 mr-2" />
                    Convert All Dust
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={handleBridgeToEthereum}
                    disabled={isScanning}
                    className="border-accent/20 hover:bg-accent/10 text-accent bg-transparent font-semibold px-6 py-3 rounded-xl transition-all duration-200 w-full hover:scale-105 transform"
                  >
                    <Bridge className="w-4 h-4 mr-2" />
                    Bridge All to Home Chain
                  </Button>
                  <p className="text-xs text-muted-foreground">Est. gas: ~$12.50</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Chain Cards Grid */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">Chains Scanned</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chainData.map((chain, index) => (
              <Card
                key={chain.name}
                className={`bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-200 transform hover:scale-105 ${
                  chain.dustValue > 0 ? "hover:shadow-lg hover:shadow-accent/10 border-accent/20" : ""
                } ${isScanning ? "animate-pulse" : ""}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-10 h-10 bg-gradient-to-br ${chain.color} rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                      >
                        {chain.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg font-semibold">{chain.name}</CardTitle>
                        <CardDescription className="text-sm text-muted-foreground">{chain.symbol}</CardDescription>
                      </div>
                    </div>
                    <Badge
                      variant={chain.dustValue > 0 ? "default" : "secondary"}
                      className={chain.dustValue > 0 ? "bg-accent/20 text-accent border-accent/30" : ""}
                    >
                      {chain.tokenCount} tokens
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Dust Value</span>
                      <span
                        className={`font-semibold ${chain.dustValue > 0 ? "text-accent" : "text-muted-foreground"}`}
                      >
                        ${chain.dustValue.toFixed(2)}
                      </span>
                    </div>
                    {chain.dustValue > 0 && (
                      <div className="w-full bg-muted rounded-full h-1.5">
                        <div
                          className="bg-accent h-1.5 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${(chain.dustValue / totalDustValue) * 100}%` }}
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Token Controls */}
        <div className="mb-6 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <h2 className="text-xl font-semibold text-foreground">Dust Tokens ({tokenData.length})</h2>
            {selectedTokens.length > 0 && (
              <div className="flex items-center space-x-3">
                <Badge variant="secondary" className="bg-accent/20 text-accent">
                  {selectedTokens.length} selected
                </Badge>
                <Button
                  onClick={handleConvertSelected}
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200 hover:scale-105 transform"
                >
                  <ArrowRightLeft className="w-4 h-4 mr-2" />
                  Convert Selected
                </Button>
              </div>
            )}
          </div>

          {/* Enhanced Search and Filter Controls */}
          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search tokens..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-card/50 border-border/50 focus:border-accent/50 transition-all duration-200"
              />
            </div>
            <Select value={selectedChain} onValueChange={setSelectedChain}>
              <SelectTrigger className="w-full md:w-48 bg-card/50 border-border/50">
                <SelectValue placeholder="Filter by chain" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Chains</SelectItem>
                {chainData.map((chain) => (
                  <SelectItem key={chain.name} value={chain.name}>
                    {chain.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-48 bg-card/50 border-border/50">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="value">USD Value</SelectItem>
                <SelectItem value="balance">Balance</SelectItem>
                <SelectItem value="name">Token Name</SelectItem>
                <SelectItem value="chain">Chain</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Token List */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-border">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  <div className="flex items-center">
                    <Checkbox
                      id="select-all"
                      checked={
                        selectedTokens.length === filteredAndSortedTokens.length && filteredAndSortedTokens.length > 0
                      }
                      onCheckedChange={handleSelectAll}
                    />
                    <Label htmlFor="select-all" className="ml-2 cursor-pointer">
                      Token
                    </Label>
                  </div>
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
              {filteredAndSortedTokens.map((token) => (
                <tr key={token.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Checkbox
                        id={`token-${token.id}`}
                        checked={selectedTokens.includes(token.id)}
                        onCheckedChange={() => handleTokenSelect(token.id)}
                      />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-foreground">{token.name}</div>
                        <div className="text-sm text-muted-foreground">{token.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-foreground">{token.chain}</div>
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
          {filteredAndSortedTokens.length === 0 && (
            <div className="py-10 px-4 text-center">
              <p className="text-sm text-muted-foreground">No tokens found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>

      {/* Convert Modal */}
      <Dialog open={showConvertModal} onOpenChange={handleCloseModal}>
        <DialogContent className="sm:max-w-md bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-foreground">
              {conversionStep === "select" && "Convert Dust to Stablecoin"}
              {conversionStep === "confirm" && "Confirm Conversion"}
              {conversionStep === "processing" && "Converting Tokens..."}
              {conversionStep === "success" && "Conversion Successful!"}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {conversionStep === "select" && "Choose the stablecoin to convert your dust into"}
              {conversionStep === "confirm" && "Review the conversion details before proceeding"}
              {conversionStep === "processing" && "Please wait while we convert your tokens"}
              {conversionStep === "success" && "Your tokens have been successfully converted"}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            {/* Conversion Summary */}
            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">Converting Value</span>
                  <span className="font-semibold text-accent">${convertingValue.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">To Stablecoin</span>
                  <span className="font-medium text-foreground">{selectedStablecoin}</span>
                </div>
              </CardContent>
            </Card>

            {conversionStep === "select" && (
              <>
                {/* Stablecoin Selection */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium text-foreground">Select Stablecoin</Label>
                  <RadioGroup value={selectedStablecoin} onValueChange={setSelectedStablecoin}>
                    {stablecoins.map((coin) => (
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
                        <div className="text-right">
                          <div className="text-sm font-medium text-foreground">${coin.gasEstimate}</div>
                          <div className="text-xs text-muted-foreground">est. gas</div>
                        </div>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="flex space-x-3">
                  <Button variant="outline" onClick={handleCloseModal} className="flex-1 bg-transparent">
                    Cancel
                  </Button>
                  <Button
                    onClick={() => setConversionStep("confirm")}
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Continue
                  </Button>
                </div>
              </>
            )}

            {conversionStep === "confirm" && (
              <>
                {/* Conversion Details */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
                    <span className="text-sm text-muted-foreground">Converting Tokens</span>
                    <div className="text-right">
                      <div className="font-medium text-foreground">{convertingTokensData.length} tokens</div>
                      <div className="text-sm text-muted-foreground">Across all chains</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
                    <span className="text-sm text-muted-foreground">Estimated Output</span>
                    <div className="text-right">
                      <div className="font-semibold text-accent">${estimatedOutput.toFixed(2)}</div>
                      <div className="text-xs text-muted-foreground">After 3% slippage</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
                    <span className="text-sm text-muted-foreground">Gas Estimate</span>
                    <div className="text-right">
                      <div className="font-medium text-foreground">${totalGasEstimate.toFixed(2)}</div>
                      <div className="text-xs text-muted-foreground">Network fees</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <Shield className="w-4 h-4 text-blue-500" />
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      Conversion is executed via secure DEX aggregators
                    </p>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button variant="outline" onClick={() => setConversionStep("select")} className="flex-1">
                    Back
                  </Button>
                  <Button
                    onClick={handleConfirmConversion}
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Confirm Conversion
                  </Button>
                </div>
              </>
            )}

            {conversionStep === "processing" && (
              <div className="text-center py-8">
                <div className="relative">
                  <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
                  <Loader2 className="w-6 h-6 animate-spin text-accent absolute top-3 left-1/2 transform -translate-x-1/2" />
                </div>
                <p className="text-foreground font-medium mb-2">Converting tokens...</p>
                <p className="text-sm text-muted-foreground">This may take a few minutes</p>
              </div>
            )}

            {conversionStep === "success" && (
              <>
                <div className="text-center py-6">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Conversion Complete!</h3>
                  <p className="text-muted-foreground mb-4">
                    Successfully converted ${convertingValue.toFixed(2)} to {selectedStablecoin}
                  </p>
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-3">
                    <p className="text-sm text-accent font-medium">Transaction Hash: 0xabcd...ef12</p>
                  </div>
                </div>

                <Button
                  onClick={handleCloseModal}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Done
                </Button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showBridgeModal} onOpenChange={handleCloseBridgeModal}>
        <DialogContent className="sm:max-w-md bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-foreground">
              {bridgeStep === "select" && "Bridge to Home Chain"}
              {bridgeStep === "confirm" && "Confirm Bridge Transaction"}
              {bridgeStep === "processing" && "Bridging Funds..."}
              {bridgeStep === "success" && "Bridge Successful!"}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {bridgeStep === "select" && "Choose your preferred destination chain"}
              {bridgeStep === "confirm" && "Review your bridge details before proceeding"}
              {bridgeStep === "processing" && "Please wait while we process your bridge transaction"}
              {bridgeStep === "success" && "Your funds have been successfully bridged"}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            {/* Bridge Summary */}
            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">Bridging Amount</span>
                  <span className="font-semibold text-accent">${bridgeAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Destination</span>
                  <span className="font-medium text-foreground">{selectedHomeChain}</span>
                </div>
              </CardContent>
            </Card>

            {bridgeStep === "select" && (
              <>
                {/* Home Chain Selection */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium text-foreground">Select Home Chain</Label>
                  <RadioGroup value={selectedHomeChain} onValueChange={setSelectedHomeChain}>
                    {bridgeChains.map((chain) => (
                      <div
                        key={chain.name}
                        className="flex items-center space-x-3 p-3 rounded-lg border border-border/50 hover:bg-accent/5 transition-colors"
                      >
                        <RadioGroupItem value={chain.name} id={chain.name} />
                        <div
                          className={`w-8 h-8 bg-gradient-to-br ${selectedHomeChainData?.color} rounded-lg flex items-center justify-center text-white font-bold text-sm`}
                        >
                          {selectedHomeChainData?.icon}
                        </div>
                        <div className="flex-1">
                          <Label htmlFor={chain.name} className="font-medium text-foreground cursor-pointer">
                            {chain.name}
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Est. time: {selectedHomeChainData?.timeEstimate}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-foreground">
                            ${selectedHomeChainData?.bridgeFee.toFixed(2)}
                          </div>
                          <div className="text-xs text-muted-foreground">bridge fee</div>
                        </div>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="flex space-x-3">
                  <Button variant="outline" onClick={handleCloseBridgeModal} className="flex-1 bg-transparent">
                    Cancel
                  </Button>
                  <Button
                    onClick={() => setBridgeStep("confirm")}
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Continue
                  </Button>
                </div>
              </>
            )}

            {bridgeStep === "confirm" && (
              <>
                {/* Bridge Details */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
                    <span className="text-sm text-muted-foreground">Destination Chain</span>
                    <div className="flex items-center space-x-2">
                      <div
                        className={`w-6 h-6 bg-gradient-to-br ${selectedHomeChainData?.color} rounded flex items-center justify-center text-white font-bold text-xs`}
                      >
                        {selectedHomeChainData?.icon}
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-foreground">{selectedHomeChain}</div>
                        <div className="text-sm text-muted-foreground">{selectedHomeChainData?.timeEstimate}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
                    <span className="text-sm text-muted-foreground">Bridge Amount</span>
                    <div className="text-right">
                      <div className="font-semibold text-accent">${bridgeAmount.toFixed(2)}</div>
                      <div className="text-xs text-muted-foreground">Total value</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
                    <span className="text-sm text-muted-foreground">Bridge Fee</span>
                    <div className="text-right">
                      <div className="font-medium text-foreground">${selectedHomeChainData?.bridgeFee.toFixed(2)}</div>
                      <div className="text-xs text-muted-foreground">Network fee</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-accent/10 border border-accent/20 rounded-lg">
                    <span className="text-sm font-medium text-foreground">You'll Receive</span>
                    <div className="text-right">
                      <div className="font-bold text-accent text-lg">${netBridgeAmount.toFixed(2)}</div>
                      <div className="text-xs text-muted-foreground">On {selectedHomeChain}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <Shield className="w-4 h-4 text-blue-500" />
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      Bridge transactions are secured by cross-chain protocols
                    </p>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button variant="outline" onClick={() => setBridgeStep("select")} className="flex-1">
                    Back
                  </Button>
                  <Button
                    onClick={handleConfirmBridge}
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Confirm Bridge
                  </Button>
                </div>
              </>
            )}

            {bridgeStep === "processing" && (
              <div className="text-center py-8">
                <div className="relative">
                  <Bridge className="w-12 h-12 text-accent mx-auto mb-4" />
                  <Loader2 className="w-6 h-6 animate-spin text-accent absolute top-3 left-1/2 transform -translate-x-1/2" />
                </div>
                <p className="text-foreground font-medium mb-2">Bridging funds...</p>
                <p className="text-sm text-muted-foreground">This may take {selectedHomeChainData?.timeEstimate}</p>
              </div>
            )}

            {bridgeStep === "success" && (
              <>
                <div className="text-center py-6">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Bridge Complete!</h3>
                  <p className="text-muted-foreground mb-4">
                    Successfully bridged ${netBridgeAmount.toFixed(2)} to {selectedHomeChain}
                  </p>
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-3">
                    <p className="text-sm text-accent font-medium">Transaction Hash: 0xabcd...ef12</p>
                  </div>
                </div>

                <Button
                  onClick={handleCloseBridgeModal}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Done
                </Button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
