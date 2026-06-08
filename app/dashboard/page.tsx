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
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        Dashboard
      </h1>

      <div className="bg-[#111] border border-white/10 rounded-3xl p-8">

        <h2 className="text-2xl font-bold">
          Wallet
        </h2>

        <p className="text-cyan-400 break-all mt-2">
          {address}
        </p>

      </div>

      {kyc ? (

        <div className="bg-[#111] border border-white/10 rounded-3xl p-8 mt-8">

          <h2 className="text-2xl font-bold mb-6">
            Estado KYC
          </h2>

          <p>
            Nombre:
            <span className="ml-2 text-cyan-400">
              {kyc.nombre} {kyc.apellido}
            </span>
          </p>

          <p className="mt-3">
            Email:
            <span className="ml-2 text-cyan-400">
              {kyc.email}
            </span>
          </p>

          <p className="mt-3">
            Estado:
            <span className="ml-2 text-cyan-400">
              {kyc.estado}
            </span>
          </p>

          <p className="mt-3">
            Verificado:
            <span className="ml-2 text-cyan-400">
              {kyc.kyc_aprobado ? "Sí" : "No"}
            </span>
          </p>

        </div>

      ) : (

        <div className="bg-[#111] border border-red-500/30 rounded-3xl p-8 mt-8">

          <h2 className="text-2xl font-bold text-red-400">
            KYC no encontrado
          </h2>

          <p className="text-white/60 mt-3">
            Esta wallet aún no tiene una solicitud KYC registrada.
          </p>

        </div>

      )}

    </main>
  );
}