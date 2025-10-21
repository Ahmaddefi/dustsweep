import type { AppProps } from "next/app"
import { Web3Provider } from "@/components/Web3Provider"
import "../app/globals.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Web3Provider>
      <div className="font-sans dark">
        <Component {...pageProps} />
      </div>
    </Web3Provider>
  )
}
