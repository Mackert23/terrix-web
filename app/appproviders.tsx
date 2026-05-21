"use client";

import "@rainbow-me/rainbowkit/styles.css";

import {
  getDefaultConfig,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";

import { WagmiProvider } from "wagmi";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { mainnet, polygon } from "wagmi/chains";

const config = getDefaultConfig({
  appName: "Terrix",
  projectId: "terrix-web",
  chains: [mainnet, polygon],
});

const queryClient = new QueryClient();

export default function Providers({
 children
}:{
 children: React.ReactNode
}) {

return(

<WagmiProvider config={config}>

<QueryClientProvider client={queryClient}>

<RainbowKitProvider>

{children}

</RainbowKitProvider>

</QueryClientProvider>

</WagmiProvider>

)

}