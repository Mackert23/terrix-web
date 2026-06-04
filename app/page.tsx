"use client";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

export default function TerrixLanding() {
  const { address, isConnected } = useAccount();

  const [mounted, setMounted] = useState(false);
  const [propiedades, setPropiedades] = useState<any[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {

  async function cargarPropiedades() {

    const { data } = await supabase
      .from("propiedades")
      .select("*")
      .order("id", { ascending: false });

    if (data) {
      setPropiedades(data);
    }

  }

  cargarPropiedades();

}, []);

  return (
    <main className="bg-black text-white min-h-screen overflow-hidden font-sans">

      {/* HERO */}
      <section
        className="relative min-h-screen md:h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/fondo.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#00112d]/40 via-black/10 to-black" />

        {/* Partículas */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-[20%] left-[10%] w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <div className="absolute top-[50%] right-[20%] w-1 h-1 rounded-full bg-white animate-pulse" />
          <div className="absolute bottom-[30%] left-[60%] w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
        </div>

        {/* NAVBAR */}
        <nav className="absolute top-5 left-1/2 -translate-x-1/2 w-[95%] z-50 rounded-3xl backdrop-blur-xl bg-slate-900/20 border border-white/10 px-4 md:px-8 py-4 flex justify-between items-center">

          <div className="flex items-center gap-3">
            <img src="/icono.png" className="w-8 md:w-10" />
            <span className="font-bold text-xl md:text-3xl">TERRIX</span>
          </div>

          <div className="hidden md:flex gap-10 tracking-[.25em] text-sm">
            <button>MENÚ</button>

            <button
              onClick={() =>
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              SOBRE NOSOTROS
            </button>

            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              CONTACTO
            </button>
          </div>

          {mounted && <ConnectButton />}
        </nav>

        {/* TERRIX TITLE */}
        <div className="absolute inset-0 flex justify-center top-20 pointer-events-none">
          <h1 className="text-[26vw] md:text-[18vw] font-black opacity-60 text-transparent bg-gradient-to-b from-white via-white to-slate-200 bg-clip-text drop-shadow-[0_0_80px_rgba(255,255,255,1)] tracking-tight">
            TERRIX
          </h1>
        </div>

        {/* CARD IZQUIERDA */}
        <div className="absolute bottom-44 md:bottom-44 left-1/2 md:left-10 -translate-x-1/2 md:translate-x-0 w-[90%] md:w-[320px] rounded-3xl backdrop-blur-xl bg-[#111]/25 border border-white/10 p-6 shadow-[0_0_60px_rgba(0,255,255,0.15)]">
          <div className="text-cyan-400 text-xs mb-4">● PROPIEDAD TOKENIZADA</div>

          <div className="flex gap-4">
            <img src="/nft.png" className="w-20 h-20 object-contain" />

            <div>
              <h3 className="text-3xl font-bold">NFT CERTIFICADO</h3>
              <p className="text-white/70 mt-2 text-sm leading-7">
                Compra propiedades exclusivas con tecnología blockchain.
              </p>
            </div>
          </div>

          <div className="mt-6 border-t border-white/10 pt-4 text-white/80">
            ✓ VERIFICACIÓN EN CADENA
          </div>
        </div>

        {/* CARD DERECHA */}
        <div className="hidden md:block absolute bottom-44 right-10 w-[300px] rounded-3xl backdrop-blur-xl bg-[#111]/25 border border-white/10 p-6 shadow-[0_0_60px_rgba(0,255,255,0.15)]">
          <div className="text-cyan-400 text-xs">● COMPRA CON CRIPTO</div>

          <div className="space-y-6 mt-5">
            <div className="flex items-center gap-4">
              <img src="/usdt.png" className="w-12 h-12" />
              <div>
                <div className="text-2xl font-bold">USDT</div>
                <div className="text-white/60">Tether Polygon</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <img src="/eth.png" className="w-12 h-12" />
              <div>
                <div className="text-2xl font-bold">ETH</div>
                <div className="text-white/60">Ethereum</div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-4">
            PAGOS 100% SEGUROS 🔒
          </div>
        </div>

        {/* TEXTO CENTRAL */}
        <div className="absolute bottom-32 md:bottom-24 left-1/2 -translate-x-1/2 text-center z-20">
          <div className="tracking-[0.6em] text-[10px] md:text-sm text-white/90">
            WEB3 LUXURY ESTATE
          </div>
          <div className="mt-4 text-2xl animate-bounce">↓</div>
        </div>

        {/* WALLET BLOCK */}
{mounted && isConnected && (
  <div className="absolute bottom-6 right-6 z-30 bg-black/40 backdrop-blur-xl border border-white/10 p-5 rounded-2xl">
    <div className="text-cyan-400 text-sm">
      WALLET CONECTADA
    </div>

    <h3 className="text-xl font-bold mt-2">
      Bienvenido a TERRIX
    </h3>

    <div className="mt-2 text-white/60 break-all text-sm">
      {address}
    </div>
  </div>
)}
      </section>

    

{/* NFT COLLECTION */}

<section className="py-32 px-8 md:px-12 bg-black">

  <div className="mb-16">

    <div className="text-cyan-400 tracking-[.4em]">
      NFT COLLECTION
    </div>

    <h2 className="text-4xl md:text-6xl font-bold mt-4">
      Propiedades Tokenizadas en Argentina
    </h2>

  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

{propiedades.map((propiedad) => (

  <Link
    href={`/propiedad/${propiedad.slug}`}
    key={propiedad.id}
  >
    <div
      className="
      bg-[#0a0a0a]
      rounded-3xl
      overflow-hidden
      border border-white/10
      hover:border-cyan-400/50
      hover:-translate-y-2
      transition-all
      duration-300
      shadow-[0_0_30px_rgba(0,255,255,0.05)]
      "
    >

      <div className="bg-[#050505] p-4 flex justify-center items-center h-[420px]">
        <div className="bg-black flex items-center justify-center p-4 w-full h-full">
          <img
            src={propiedad.imagen}
            className="max-h-full max-w-full object-contain"
            alt={propiedad.nombre}
          />
        </div>
      </div>

      <div className="p-6">

        <div className="text-cyan-400">
          {propiedad.slug}
        </div>

        <h3 className="text-2xl font-bold mt-2">
          {propiedad.nombre}
        </h3>

        <p className="text-white/60 mt-2">
          {propiedad.precio} USDT
        </p>

        <p className="text-white/50 mt-4">
          {propiedad.descripcion}
        </p>

      </div>

    </div>
  </Link>

))}

  </div>

</section>

{/* ABOUT */}

      {/* CONTACTO */}
      <section id="contact" className="py-32 px-8 md:px-10">
        <h2 className="text-3xl md:text-5xl font-bold">
          Habla con TERRIX
        </h2>

        <form
          action="https://formspree.io/f/maqkoeed"
          method="POST"
          className="mt-10 grid gap-5"
        >
          <input name="nombre" placeholder="Nombre" className="bg-[#111] p-5 rounded-xl" />
          <input name="email" type="email" placeholder="Email" className="bg-[#111] p-5 rounded-xl" />
          <textarea name="mensaje" placeholder="Mensaje" className="bg-[#111] p-5 rounded-xl h-40" />

          <button className="bg-cyan-500 text-black rounded-xl p-5 font-bold">
            ENVIAR
          </button>
        </form>
      </section>

    </main>
  );
}