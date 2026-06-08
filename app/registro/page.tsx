"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useAccount } from "wagmi";

export default function RegistroPage() {

  const { address } = useAccount();

  console.log("Wallet:", address);

  const [dniFrente, setDniFrente] =
  useState<File | null>(null);

const [dniDorso, setDniDorso] =
  useState<File | null>(null);

const [selfie, setSelfie] =
  useState<File | null>(null);

  const [nombre, setNombre] = useState("");
const [apellido, setApellido] = useState("");
const [email, setEmail] = useState("");
const [direccion, setDireccion] = useState("");

async function enviarKYC() {
  if (!address) {
  alert("Debes conectar una wallet");
  return;
}
  if (!dniFrente || !dniDorso || !selfie) {
    alert("Debes subir todos los documentos");
    return;
  }

  const timestamp = Date.now();

  const { error: errorFrente } =
  await supabase.storage
    .from("kyc")
    .upload(
      `${timestamp}-frente-${dniFrente.name}`,
      dniFrente
    );

if (errorFrente) {
  console.log("ERROR FRENTE:", errorFrente);

  alert(
    errorFrente.message ||
    JSON.stringify(errorFrente)
  );

  return;
}

  const { error: errorDorso } =
    await supabase.storage
      .from("kyc")
      .upload(
        `${timestamp}-dorso-${dniDorso.name}`,
        dniDorso
      );

  if (errorDorso) {
    alert("Error subiendo DNI Dorso");
    console.log(errorDorso);
    return;
  }

  const { error: errorSelfie } =
    await supabase.storage
      .from("kyc")
      .upload(
        `${timestamp}-selfie-${selfie.name}`,
        selfie
      );

  if (errorSelfie) {
  alert("Error subiendo Selfie");
  console.log(errorSelfie);
  return;
}
console.log("Voy a guardar en kyc_requests");
const { error: errorDB } =
  await supabase
  .from("kyc_requests")
  .insert([
    {
      nombre,
      apellido,
      email,
      direccion,

      wallet: address,

      dni_frente: `${timestamp}-frente-${dniFrente.name}`,
      dni_dorso: `${timestamp}-dorso-${dniDorso.name}`,
      selfie: `${timestamp}-selfie-${selfie.name}`,

      estado: "pendiente",
    },
  ]);

if (errorDB) {
  console.log("ERROR DB:", errorDB);

  alert(
    errorDB.message ||
    JSON.stringify(errorDB)
  );

  return;
}


setDniFrente(null);
setDniDorso(null);
setSelfie(null);

  alert(
  "✅ Verificación enviada correctamente. Nuestro equipo revisará la documentación."
);

}

  return (
  <main className="min-h-screen bg-black text-white">

    {/* Fondo */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#00d4ff22,transparent_50%)] pointer-events-none" />

    <div className="relative max-w-4xl mx-auto px-6 py-20">

      {/* Header */}
      <div className="text-center mb-16">

        <div className="inline-block px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm tracking-widest">
          TERRIX IDENTITY
        </div>

        <h1 className="text-5xl md:text-7xl font-black mt-6">
          Verificación KYC
        </h1>

        <p className="text-white/50 mt-6 text-lg max-w-2xl mx-auto">
          Complete la verificación de identidad para acceder a
          propiedades tokenizadas y operaciones seguras dentro de TERRIX.
        </p>

      </div>

      {/* Card */}
      <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_60px_rgba(0,255,255,.08)]">

        <div className="grid md:grid-cols-2 gap-6">

          <input
  placeholder="Nombre"
  value={nombre}
  onChange={(e) => setNombre(e.target.value)}
  className="bg-[#111] border border-white/10 rounded-2xl p-5 outline-none focus:border-cyan-500"
/>

          <input
  placeholder="Apellido"
  value={apellido}
  onChange={(e) => setApellido(e.target.value)}
  className="bg-[#111] border border-white/10 rounded-2xl p-5 outline-none focus:border-cyan-500"
/>

          <input
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="bg-[#111] border border-white/10 rounded-2xl p-5 outline-none focus:border-cyan-500"
/>

        <input
  placeholder="Domicilio"
  value={direccion}
  onChange={(e) => setDireccion(e.target.value)}
  className="bg-[#111] border border-white/10 rounded-2xl p-5 outline-none focus:border-cyan-500"
/>

        </div>

        {/* Uploads */}
        <div className="mt-10 grid md:grid-cols-3 gap-6">

          <div className="border border-dashed border-white/20 rounded-3xl p-6 text-center hover:border-cyan-500 transition">

            <div className="text-4xl mb-4">🪪</div>

            <h3 className="font-bold">
              DNI Frente
            </h3>

            <p className="text-white/50 text-sm mt-2">
              Foto clara del frente del documento.
            </p>

            <input
  type="file"
  className="mt-5 w-full text-sm"
  onChange={(e) => {
    const archivo = e.target.files?.[0];

    if (archivo) {
      setDniFrente(archivo);
    }
  }}
/>

          </div>

          <div className="border border-dashed border-white/20 rounded-3xl p-6 text-center hover:border-cyan-500 transition">

            <div className="text-4xl mb-4">🪪</div>

                    <p className="text-white/50 text-sm mt-2">
              Foto clara del reverso del documento.
            </p>

            <input
  type="file"
  className="mt-5 w-full text-sm"
  onChange={(e) => {
    const archivo = e.target.files?.[0];

    if (archivo) {
      setDniDorso(archivo);
    }
  }}
/>

          </div>

          <div className="border border-dashed border-white/20 rounded-3xl p-6 text-center hover:border-cyan-500 transition">

            <div className="text-4xl mb-4">📸</div>

            <h3 className="font-bold">
              Selfie
            </h3>

            <p className="text-white/50 text-sm mt-2">
              Foto del rostro para validación biométrica.
            </p>

            <input
  type="file"
  className="mt-5 w-full text-sm"
  onChange={(e) => {
    const archivo = e.target.files?.[0];

    if (archivo) {
      setSelfie(archivo);
    }
  }}
/>

          </div>

        </div>

        {/* Seguridad */}
        <div className="mt-10 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5">

          <div className="font-bold text-cyan-400">
            🔒 Seguridad y Privacidad
          </div>

          <p className="text-white/60 mt-2">
            Tus documentos serán almacenados de forma segura
            para validar identidad y cumplir con regulaciones KYC.
          </p>

        </div>

        {/* Botón */}
        <button
          onClick={enviarKYC}
          className="
          w-full
          mt-10
          bg-cyan-500
          hover:bg-cyan-400
          text-black
          font-bold
          py-5
          rounded-2xl
          text-lg
          transition
          "
        >
          ENVIAR VERIFICACIÓN
        </button>

      </div>

    </div>

  </main>
);
}