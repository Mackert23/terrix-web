"use client";

import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { supabase } from "@/lib/supabase";

export default function DashboardPage() {

  const { address, isConnected } = useAccount();

  const [kyc, setKyc] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function cargarKYC() {

      if (!address) return;

      const { data } = await supabase
        .from("kyc_requests")
        .select("*")
        .eq("wallet", address)
        .order("id", { ascending: false })
        .limit(1)
        .single();

      if (data) {
        setKyc(data);
      }

      setLoading(false);
    }

    cargarKYC();

  }, [address]);

  if (!isConnected) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Conecta tu wallet
      </main>
    );
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Cargando...
      </main>
    );
  }

 return (

  <main className="min-h-screen bg-black text-white">

```
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#00d4ff15,transparent_50%)] pointer-events-none" />

<div className="relative max-w-7xl mx-auto p-6 md:p-10">

  {/* HEADER */}

  <div className="mb-10">

    <div className="text-cyan-400 tracking-[0.3em] text-sm">
      TERRIX INVESTOR PORTAL
    </div>

    <h1 className="text-5xl md:text-7xl font-black mt-3">
      Dashboard
    </h1>

    <p className="text-white/50 mt-4">
      Gestiona tu identidad, consulta tus inversiones y accede al ecosistema TERRIX.
    </p>

  </div>

  {/* STATS */}

  <div className="grid md:grid-cols-4 gap-6 mb-10">

    <div className="bg-[#111] border border-white/10 rounded-3xl p-6">
      <div className="text-white/50 text-sm">
        NFTs
      </div>
      <div className="text-4xl font-bold mt-2">
        0
      </div>
    </div>

    <div className="bg-[#111] border border-white/10 rounded-3xl p-6">
      <div className="text-white/50 text-sm">
        Propiedades
      </div>
      <div className="text-4xl font-bold mt-2">
        0
      </div>
    </div>

    <div className="bg-[#111] border border-white/10 rounded-3xl p-6">
      <div className="text-white/50 text-sm">
        Estado KYC
      </div>

      <div className="text-2xl font-bold mt-2">

        {kyc?.estado === "aprobado"
          ? "🟢 Verificado"
          : kyc?.estado === "pendiente"
          ? "🟡 Pendiente"
          : "🔴 Sin verificar"}

      </div>
    </div>

    <div className="bg-[#111] border border-white/10 rounded-3xl p-6">
      <div className="text-white/50 text-sm">
        Wallet
      </div>

      <div className="text-sm break-all mt-2 text-cyan-400">
        {address}
      </div>
    </div>

  </div>

  {/* QUICK ACTIONS */}

  <div className="grid md:grid-cols-3 gap-6 mb-10">

    <a
      href="/"
      className="bg-cyan-500 text-black rounded-3xl p-6 font-bold text-center hover:scale-[1.02] transition"
    >
      Explorar Propiedades
    </a>

    <a
      href="https://opensea.io"
      target="_blank"
      className="bg-[#111] border border-white/10 rounded-3xl p-6 font-bold text-center hover:border-cyan-500 transition"
    >
      Ver OpenSea
    </a>

    <a
      href="/registro"
      className="bg-[#111] border border-white/10 rounded-3xl p-6 font-bold text-center hover:border-cyan-500 transition"
    >
      Mi Perfil KYC
    </a>

  </div>

  {/* KYC */}

  {kyc ? (

    <div className="bg-[#111] border border-white/10 rounded-3xl p-8">

      <h2 className="text-3xl font-bold mb-8">
        Perfil del Inversor
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <div className="text-white/50">
            Nombre
          </div>

          <div className="text-xl mt-1">
            {kyc.nombre} {kyc.apellido}
          </div>
        </div>

        <div>
          <div className="text-white/50">
            Email
          </div>

          <div className="text-xl mt-1">
            {kyc.email}
          </div>
        </div>

        <div>
          <div className="text-white/50">
            Estado KYC
          </div>

          <div className="text-xl mt-1 text-cyan-400">
            {kyc.estado}
          </div>
        </div>

        <div>
          <div className="text-white/50">
            Wallet
          </div>

          <div className="text-sm break-all mt-1">
            {address}
          </div>
        </div>

      </div>

    </div>

  ) : (

    <div className="bg-[#111] border border-red-500/30 rounded-3xl p-8">

      <h2 className="text-2xl font-bold text-red-400">
        KYC no encontrado
      </h2>

      <p className="text-white/60 mt-3">
        Esta wallet aún no posee una solicitud KYC registrada.
      </p>

    </div>

  )}

</div>
```

  </main>
);

}