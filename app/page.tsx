"use client";

import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

export default function TerrixLanding() {
  const { address, isConnected } = useAccount();

  return (
    <main className="bg-black text-white min-h-screen overflow-hidden font-sans">

      {/* HERO */}
      <section
        className="relative min-h-screen md:h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/fondo.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#00112d]/70 via-black/20 to-black" />

        {/* Navbar */}
        <nav className="absolute top-5 left-1/2 -translate-x-1/2 w-[95%] z-50 rounded-3xl backdrop-blur-xl bg-slate-900/30 border border-white/10 px-4 md:px-8 py-4 flex justify-between items-center">

          <div className="flex items-center gap-3">
            <img src="/icono.png" className="w-8 md:w-10"/>
            <span className="font-bold text-xl md:text-3xl">
              TERRIX
            </span>
          </div>

          <div className="hidden md:flex gap-10 tracking-[.25em] text-sm">

            <button
              onClick={() =>
                document.getElementById("about")
                ?.scrollIntoView({behavior:"smooth"})
              }
            >
              SOBRE
            </button>

            <button
              onClick={() =>
                document.getElementById("contact")
                ?.scrollIntoView({behavior:"smooth"})
              }
            >
              CONTACTO
            </button>

          </div>

          <ConnectButton />

        </nav>

        {/* Título */}
        <div className="absolute inset-0 flex justify-center top-24 md:top-20 pointer-events-none">

          <h1 className="
          text-[26vw]
          md:text-[18vw]
          font-black
          opacity-40
          text-transparent
          bg-gradient-to-b
          from-white
          via-white
          to-slate-300
          bg-clip-text
          drop-shadow-[0_0_50px_rgba(255,255,255,0.8)]">

            TERRIX

          </h1>

        </div>

      </section>

      {/* NFT COLLECTION */}

      <section className="py-32 px-8 md:px-12 bg-black">

        <div className="mb-16">

          <div className="text-cyan-400 tracking-[.4em]">
            NFT COLLECTION
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            Propiedades Tokenizadas
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* NFT 1 */}

          <div className="bg-[#111] rounded-3xl overflow-hidden border border-white/10 hover:scale-105 transition">

            <img
            src="/estate1.jpg"
            className="h-[300px] w-full object-cover"
            />

            <div className="p-6">

              <div className="text-cyan-400">
                NFT #001
              </div>

              <h3 className="text-2xl font-bold mt-2">
                Villa Dubai
              </h3>

              <p className="text-white/60 mt-2">
                450.000 USDT
              </p>

              <Link href="/propiedad/villa-dubai">

                <button className="mt-6 bg-cyan-500 text-black px-6 py-3 rounded-xl font-bold">

                  VER PROPIEDAD

                </button>

              </Link>

            </div>

          </div>

          {/* NFT 2 */}

          <div className="bg-[#111] rounded-3xl overflow-hidden border border-white/10 hover:scale-105 transition">

            <img
            src="/estate2.jpg"
            className="h-[300px] w-full object-cover"
            />

            <div className="p-6">

              <div className="text-cyan-400">
                NFT #002
              </div>

              <h3 className="text-2xl font-bold mt-2">
                Miami Mansion
              </h3>

              <p className="text-white/60 mt-2">
                820.000 USDT
              </p>

              <Link href="/propiedad/miami-mansion">

                <button className="mt-6 bg-cyan-500 text-black px-6 py-3 rounded-xl font-bold">

                  VER PROPIEDAD

                </button>

              </Link>

            </div>

          </div>

          {/* NFT 3 */}

          <div className="bg-[#111] rounded-3xl overflow-hidden border border-white/10 hover:scale-105 transition">

            <img
            src="/estate3.jpg"
            className="h-[300px] w-full object-cover"
            />

            <div className="p-6">

              <div className="text-cyan-400">
                NFT #003
              </div>

              <h3 className="text-2xl font-bold mt-2">
                Penthouse BA
              </h3>

              <p className="text-white/60 mt-2">
                210.000 USDT
              </p>

              <Link href="/propiedad/penthouse-ba">

                <button className="mt-6 bg-cyan-500 text-black px-6 py-3 rounded-xl font-bold">

                  VER PROPIEDAD

                </button>

              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* Wallet */}

      {isConnected && (

      <section className="py-10 px-8 md:px-12">

        <div className="bg-[#111] border border-cyan-500/30 rounded-3xl p-6">

          <div className="text-cyan-400">
            WALLET CONECTADA
          </div>

          <h3 className="text-2xl font-bold mt-4">
            Bienvenido a TERRIX
          </h3>

          <div className="mt-4 text-white/60 break-all">
            {address}
          </div>

        </div>

      </section>

      )}

      {/* ABOUT */}

      <section
      id="about"
      className="py-32 px-8 md:px-12 bg-[#050505]">

        <h2 className="text-4xl md:text-6xl font-bold">

          El futuro del patrimonio digital

        </h2>

        <p className="text-white/60 text-lg mt-8 max-w-3xl">

          TERRIX conecta propiedades exclusivas con blockchain y NFTs.

        </p>

      </section>

      {/* CONTACTO */}

      <section
      id="contact"
      className="py-32 px-8 md:px-10">

        <h2 className="text-3xl md:text-5xl font-bold">
          Habla con TERRIX
        </h2>

        <form
        action="https://formspree.io/f/maqkoeed"
        method="POST"
        className="mt-10 grid gap-5">

          <input
          name="nombre"
          placeholder="Nombre"
          className="bg-[#111] p-5 rounded-xl"
          />

          <input
          name="email"
          type="email"
          placeholder="Email"
          className="bg-[#111] p-5 rounded-xl"
          />

          <textarea
          name="mensaje"
          placeholder="Mensaje"
          className="bg-[#111] p-5 rounded-xl h-40"
          />

          <button
          type="submit"
          className="bg-cyan-500 text-black rounded-xl p-5 font-bold">

            ENVIAR

          </button>

        </form>

      </section>

    </main>
  );
}