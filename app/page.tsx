 export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen overflow-hidden">

      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:"url('/images/mansion.jpg')"
        }}
      >

        <div className="absolute inset-0 bg-black/50"/>

        <nav className="absolute top-5 left-1/2 -translate-x-1/2 w-[95%] rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 px-8 py-4 flex justify-between items-center z-50">

          <div className="flex items-center gap-4">

            <img
              src="/images/logo.png"
              alt="Terrix"
              className="w-12 h-12 object-contain"
            />

            <div className="font-bold text-3xl">
              TERRIX
            </div>

          </div>

          <div className="hidden md:flex gap-10 tracking-[.3em] text-sm">

            <button>MENÚ</button>
            <button>SOBRE NOSOTROS</button>
            <button>CONTACTO</button>

          </div>

          <button className="px-8 py-4 rounded-full bg-white text-black hover:scale-105 transition">

            COMPRA EXCLUSIVA ↗

          </button>

        </nav>

        <div className="absolute inset-0 flex items-center justify-center">

          <h1 className="text-[18vw] font-black opacity-20">
            TERRIX
          </h1>

        </div>

        <div className="absolute bottom-20 left-10 max-w-md rounded-3xl backdrop-blur-xl bg-black/20 border border-white/10 p-8">

          <div className="text-cyan-400 mb-3">
            ● NFT CERTIFICADO
          </div>

          <h2 className="text-4xl font-bold">

            WEB3 ESTATE

          </h2>

          <p className="text-white/70 mt-4 leading-8">

            Compra propiedades premium mediante
            USDT y ETH usando blockchain.

          </p>

        </div>

      </section>

    </main>
  )
}