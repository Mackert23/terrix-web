"use client";

export default function Home() {
  return (
    <main className="relative h-screen overflow-hidden bg-black text-white">

      {/* Fondo mansión */}
      <img
        src="/mansion.jpg"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#07162e]/20 via-transparent to-black/70" />

      {/* Navbar */}
      <nav className="absolute top-5 left-1/2 -translate-x-1/2 z-50
      w-[96%]
      rounded-2xl
      border border-white/10
      bg-blue-950/30
      backdrop-blur-xl
      px-8 py-5">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">

            <img
              src="/logo.png"
              className="w-12"
            />

            <span className="font-bold text-4xl">
              TERRIX
            </span>

          </div>

          <div className="flex gap-14 tracking-[0.2em]">

            <div>MENÚ</div>
            <div>SOBRE NOSOTROS</div>
            <div>CONTACTO</div>

          </div>

          <button
          className="
          px-8
          py-4
          rounded-xl
          bg-white/10
          border
          border-white/20
          backdrop-blur
          hover:scale-105
          duration-500">

            COMPRA EXCLUSIVA ↗

          </button>

        </div>

      </nav>

      {/* TERRIX gigante */}
      <h1 className="
      absolute
      top-[10%]
      left-1/2
      -translate-x-1/2
      text-[18vw]
      font-black
      opacity-30">

        TERRIX

      </h1>

      {/* Card izquierda */}

      <div className="
      absolute
      left-10
      bottom-40
      w-80
      p-8
      rounded-3xl
      bg-black/20
      backdrop-blur-xl">

        <div className="text-cyan-300 text-sm">
          ● PROPIEDAD TOKENIZADA
        </div>

        <h2 className="text-3xl mt-6">

          NFT CERTIFICADO

        </h2>

        <p className="mt-4 text-white/70">

Compra propiedades exclusivas con tecnología blockchain.

        </p>

      </div>

      {/* Card derecha */}

      <div className="
      absolute
      right-10
      bottom-40
      w-72
      p-8
      rounded-3xl
      bg-black/20
      backdrop-blur-xl">

        <div className="text-cyan-300">

COMPRA CON CRIPTO

        </div>

        <div className="mt-6 space-y-4">

          <div>USDT</div>
          <div>ETH</div>

        </div>

      </div>

    </main>
  );
}