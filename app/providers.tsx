"use client";

import "@rainbow-me/rainbowkit/styles.css";

import {
  getDefaultConfig,
  RainbowKitProvider
} from "@rainbow-me/rainbowkit";

import {
  WagmiProvider
} from "wagmi";

import {
  QueryClientProvider,
  QueryClient
} from "@tanstack/react-query";

import { mainnet } from "wagmi/chains";

const config = getDefaultConfig({
  appName: "Terrix",
  projectId: "2ee69484cc7837db7a26303d1a873c8c",
  chains: [mainnet],
});

const queryClient = new QueryClient();

export default function Providers({
  children,
}:{
  children: React.ReactNode
}) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}