"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useAccount } from "wagmi";

export default function AdminKYC() {
  const { address, isConnected } = useAccount();

  const ADMIN_WALLET =
    "0x57984fCdB19d66174FcDE3F39F6fa3Da18e8118E";

  const [solicitudes, setSolicitudes] = useState<any[]>([]);

  async function cargarSolicitudes() {
    const { data, error } = await supabase
      .from("kyc_requests")
      .select("*")
      .order("id", { ascending: false });

    if (!error && data) {
      setSolicitudes(data);
    }
  }

  async function aprobar(id: number) {
    await supabase
      .from("kyc_requests")
      .update({
        estado: "aprobado",
        kyc_aprobado: true,
      })
      .eq("id", id);

    cargarSolicitudes();
  }

  async function rechazar(id: number) {
    await supabase
      .from("kyc_requests")
      .update({
        estado: "rechazado",
        kyc_aprobado: false,
      })
      .eq("id", id);

    cargarSolicitudes();
  }

  useEffect(() => {
    cargarSolicitudes();
  }, []);

  // Wallet no conectada
  if (!isConnected) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center text-3xl font-bold">
        Conecta tu wallet
      </main>
    );
  }

  // Wallet incorrecta
  if (
    address?.toLowerCase() !==
    ADMIN_WALLET.toLowerCase()
  ) {
    return (
      <main className="min-h-screen bg-black text-red-500 flex items-center justify-center text-3xl font-bold">
        Acceso denegado
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        Solicitudes KYC
      </h1>

      <div className="space-y-8">

        {solicitudes.map((s) => (

          <div
            key={s.id}
            className="bg-[#111] border border-white/10 rounded-3xl p-8"
          >

            <div className="flex justify-between items-start">

              <div>

                <h2 className="text-3xl font-bold">
                  {s.nombre} {s.apellido}
                </h2>

                <p className="text-white/60 mt-2">
                  {s.email}
                </p>

                <p className="text-white/60">
                  {s.domicilio}
                </p>

                <p className="text-cyan-400 break-all mt-2">
                  Wallet: {s.wallet}
                </p>

                <p className="mt-4">
                  Estado:
                  <span className="text-cyan-400 ml-2">
                    {s.estado}
                  </span>
                </p>

              </div>

            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-8">

              <a
                href={
                  supabase.storage
                    .from("kyc")
                    .getPublicUrl(s.dni_frente)
                    .data.publicUrl
                }
                target="_blank"
                className="bg-cyan-500 text-black p-4 rounded-xl text-center font-bold"
              >
                DNI Frente
              </a>

              <a
                href={
                  supabase.storage
                    .from("kyc")
                    .getPublicUrl(s.dni_dorso)
                    .data.publicUrl
                }
                target="_blank"
                className="bg-cyan-500 text-black p-4 rounded-xl text-center font-bold"
              >
                DNI Dorso
              </a>

              <a
                href={
                  supabase.storage
                    .from("kyc")
                    .getPublicUrl(s.selfie)
                    .data.publicUrl
                }
                target="_blank"
                className="bg-cyan-500 text-black p-4 rounded-xl text-center font-bold"
              >
                Selfie
              </a>

            </div>

            <div className="flex gap-4 mt-8">

              <button
                onClick={() => aprobar(s.id)}
                className="bg-green-500 text-black px-6 py-3 rounded-xl font-bold"
              >
                APROBAR
              </button>

              <button
                onClick={() => rechazar(s.id)}
                className="bg-red-500 text-white px-6 py-3 rounded-xl font-bold"
              >
                RECHAZAR
              </button>

            </div>

          </div>

        ))}

      </div>

    </main>
  );
}