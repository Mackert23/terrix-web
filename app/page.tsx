"use client";

export default function TerrixLanding() {
  const goToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="bg-black text-white min-h-screen overflow-hidden font-sans">

      {/* HERO */}
      <section
        className="relative min-h-screen md:h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/fondo.jpg')",
        }}
      >
        <div className="
absolute
inset-0
bg-gradient-to-b
from-[#00112d]/70
via-black/20
to-black
"/>

        {/* partículas */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-[20%] left-[10%] w-2 h-2 rounded-full bg-cyan-400 animate-ping"/>
          <div className="absolute top-[50%] right-[20%] w-1 h-1 rounded-full bg-white animate-pulse"/>
          <div className="absolute bottom-[30%] left-[60%] w-2 h-2 rounded-full bg-cyan-300 animate-pulse"/>
        </div>

        {/* NAVBAR */}
        <nav className="absolute top-5 left-1/2 -translate-x-1/2 w-[95%] z-50 rounded-3xl backdrop-blur-xl bg-slate-900/30 border border-white/10 px-4 md:px-8 py-4 flex justify-between items-center">

          <div className="flex items-center gap-3">
            <img
              src="/icono.png"
              className="w-8 md:w-10"
            />

            <span className="font-bold text-xl md:text-3xl">
              TERRIX
            </span>
          </div>

          <div className="hidden md:flex gap-10 tracking-[.25em] text-sm">

            <button>
              MENÚ
            </button>

            <button
            onClick={()=>
            document.getElementById("about")
            ?.scrollIntoView({
            behavior:"smooth"
            })
            }
            >
            SOBRE NOSOTROS
            </button>

            <button
            onClick={()=>
            document.getElementById("contact")
            ?.scrollIntoView({
            behavior:"smooth"
            })
            }
            >
            CONTACTO
            </button>

          </div>

          <button className="px-4 md:px-8 py-3 md:py-4 text-xs md:text-base rounded-full border border-white/20 bg-gradient-to-r from-slate-700 to-neutral-600 hover:scale-105 transition-all shadow-2xl">

            COMPRA EXCLUSIVA ↗

          </button>

        </nav>

        {/* TERRIX GIGANTE */}
        <div className="absolute inset-0 flex justify-center top-24 md:top-20 pointer-events-none">

          <h1 className="
          text-[26vw]
          md:text-[18vw]
          font-black
          opacity-40
          text-white
          bg-gradient-to-b
          from-white
          via-white
          to-slate-300
          text-transparent
          bg-clip-text
          drop-shadow-[0_0_50px_rgba(255,255,255,0.8)]
          tracking-tight
          select-none">

          TERRIX

          </h1>

        </div>

        {/* CARD IZQ */}

        <div className="
        absolute
        bottom-10
        md:bottom-44
        left-1/2
        md:left-10
        -translate-x-1/2
        md:translate-x-0
        w-[90%]
        md:w-[320px]
        rounded-3xl
        backdrop-blur-xl
        bg-[#111]/30
        shadow-[0_0_50px_rgba(0,255,255,0.08)]
        border
        border-white/10
        p-6">

          <div className="text-cyan-400 text-xs mb-4">
            ● PROPIEDAD TOKENIZADA
          </div>

          <h3 className="text-3xl font-bold">
            NFT CERTIFICADO
          </h3>

          <p className="text-white/70 mt-4 leading-8">

            Compra propiedades exclusivas con blockchain y escritura digital.

          </p>

        </div>


        {/* CARD DERECHA */}

        <div className="
        hidden md:block
        absolute
        bottom-44
        right-10
        w-[280px]
        rounded-3xl
        backdrop-blur-xl
        bg-[#111]/30
        shadow-[0_0_50px_rgba(0,255,255,0.08)]
        border
        border-white/10
        p-6">

          <div className="text-cyan-400 text-xs">
            ● COMPRA CON CRIPTO
          </div>

          <div className="space-y-4 mt-5">

            <div>

              <div className="text-2xl font-bold">
                USDT
              </div>

              <div className="text-white/60">
                Polygon
              </div>

            </div>

            <div>

              <div className="text-2xl font-bold">
                ETH
              </div>

              <div className="text-white/60">
                Ethereum
              </div>

            </div>

          </div>

        </div>

        {/* TEXTO CENTRAL */}

        <div className="
        absolute
        bottom-32
        md:bottom-24
        left-1/2
        -translate-x-1/2
        text-center
        z-20">

        <div className="
        tracking-[0.6em]
        text-[10px]
        md:text-sm
        text-white/70">

        WEB3 LUXURY ESTATE

        </div>

        <div className="
        mt-6
        tracking-[0.3em]
        text-[10px]
        md:text-xs
        text-white/50">

        SCROLL DOWN

        </div>

        <div className="mt-4 text-2xl md:text-3xl animate-bounce">
        ↓
        </div>

        </div>

      </section>

      {/* ABOUT */}

      <section
      id="about"
      className="py-32 px-8 md:px-12 bg-[#050505]">

        <div className="max-w-5xl">

          <div className="text-cyan-400 tracking-[.4em] mb-5">
            ABOUT
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8">

            El futuro del patrimonio digital

          </h2>

          <p className="text-white/60 text-lg md:text-xl leading-10">

            TERRIX conecta propiedades exclusivas con tecnología blockchain.
            Compra terrenos, mansiones y bienes raíces premium mediante activos digitales,
            NFTs certificados y contratos inteligentes.

          </p>

        </div>

      </section>

      {/* VIDEO */}

      <section className="relative h-screen">

        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover opacity-40"
        >
          <source
          src="/mansion-video.mp4"
          type="video/mp4"
          />
        </video>

      </section>

      {/* CONTACTO */}

      <section
      id="contact"
      className="py-32 px-8 md:px-10">

        <div className="max-w-4xl">

          <div className="text-cyan-400 tracking-[.4em]">
            CONTACTO
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mt-5">
            Habla con TERRIX
          </h2>

          <form
action="https://formspree.io/f/maqkoeed"
method="POST"

className="mt-10 grid gap-5"
>

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
className="bg-cyan-500 text-black rounded-xl p-5 font-bold hover:scale-105 transition"
>
ENVIAR
</button>

</form>


          </div>


      </section>

    </main>
  );
}