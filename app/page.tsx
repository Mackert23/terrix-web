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

{/* Overlay más suave para recuperar brillo */}
<div className="absolute inset-0 bg-gradient-to-b from-[#00112d]/40 via-black/10 to-black" />

{/* Partículas */}
<div className="absolute inset-0 opacity-40">

<div className="absolute top-[20%] left-[10%] w-2 h-2 rounded-full bg-cyan-400 animate-ping"/>

<div className="absolute top-[50%] right-[20%] w-1 h-1 rounded-full bg-white animate-pulse"/>

<div className="absolute bottom-[30%] left-[60%] w-2 h-2 rounded-full bg-cyan-300 animate-pulse"/>

</div>

{/* Navbar */}

<nav className="absolute top-5 left-1/2 -translate-x-1/2 w-[95%] z-50 rounded-3xl backdrop-blur-xl bg-slate-900/20 border border-white/10 px-4 md:px-8 py-4 flex justify-between items-center">

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

<ConnectButton/>

</nav>

{/* TERRIX gigante con MUCHO más brillo */}

<div className="absolute inset-0 flex justify-center top-20 pointer-events-none">

<h1
className="
text-[26vw]
md:text-[18vw]
font-black
opacity-60
text-transparent
bg-gradient-to-b
from-white
via-white
to-slate-200
bg-clip-text
drop-shadow-[0_0_80px_rgba(255,255,255,1)]
tracking-tight
"
>

TERRIX

</h1>

</div>


{/* CARD IZQUIERDA */}

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
bg-[#111]/25
border
border-white/10
p-6
shadow-[0_0_60px_rgba(0,255,255,0.15)]
">

<div className="text-cyan-400 text-xs mb-4">

● PROPIEDAD TOKENIZADA

</div>

<div className="flex gap-4">

<img
src="/nft.png"
className="w-20 h-20 object-contain"
/>

<div>

<h3 className="text-3xl font-bold">
NFT CERTIFICADO
</h3>

<p className="text-white/70 mt-2 text-sm leading-7">

Compra propiedades exclusivas
con tecnología blockchain.

</p>

</div>

</div>

<div className="mt-6 border-t border-white/10 pt-4 text-white/80">

✓ VERIFICACIÓN EN CADENA

</div>

</div>



{/* CARD DERECHA */}

<div className="
hidden md:block
absolute
bottom-44
right-10
w-[300px]
rounded-3xl
backdrop-blur-xl
bg-[#111]/25
border
border-white/10
p-6
shadow-[0_0_60px_rgba(0,255,255,0.15)]
">

<div className="text-cyan-400 text-xs">

● COMPRA CON CRIPTO

</div>


<div className="space-y-6 mt-5">

<div className="flex items-center gap-4">

<img
src="/usdt.png"
className="w-12 h-12"
/>

<div>

<div className="text-2xl font-bold">
USDT
</div>

<div className="text-white/60">
Tether Polygon
</div>

</div>

</div>


<div className="flex items-center gap-4">

<img
src="/eth.png"
className="w-12 h-12"
/>

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

<div className="mt-8 border-t border-white/10 pt-4">

PAGOS 100% SEGUROS 🔒

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
text-white/90">

WEB3 LUXURY ESTATE

</div>

<div className="
mt-6
tracking-[0.3em]
text-[10px]
md:text-xs
text-white/60">

SCROLL DOWN

</div>

<div className="mt-4 text-2xl animate-bounce">

↓

</div>

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