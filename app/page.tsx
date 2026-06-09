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
  const [kycAprobado, setKycAprobado] = useState(false);
  const [loadingKyc, setLoadingKyc] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {

  async function verificarKYC() {

    if (!address) {
      setLoadingKyc(false);
      return;
    }

    const { data, error } = await supabase
  .from("kyc_requests")
  .select("estado, wallet")
  .eq("wallet", address);

console.log("KYC:", data);
console.log("ERROR:", error);

if (
  data &&
  data.some((item) => item.estado === "aprobado")
) {
  setKycAprobado(true);
}

    setLoadingKyc(false);
  }

  verificarKYC();

}, [address]);

<div className="text-yellow-400 text-xs mt-2">
  KYC: {kycAprobado ? "APROBADO" : "NO APROBADO"}
</div>

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

        
       <nav
  className="
  absolute
  top-4
  left-1/2
  -translate-x-1/2
  w-[95%]
  z-50
  rounded-3xl
  backdrop-blur-xl
  bg-slate-900/20
  border
  border-white/10
  px-4
  py-4
  "
>
  <div
    className="
    flex
    flex-col
    md:flex-row
    items-center
    justify-between
    gap-4
    "
  >
    {/* LOGO */}
    <div className="flex items-center gap-3">
      <img
        src="/icono.png"
        alt="Terrix"
        className="w-10 h-10 object-contain"
      />

      <span className="font-bold text-2xl md:text-3xl">
        TERRIX
      </span>
    </div>

    {/* MENÚ DESKTOP */}
    <div className="hidden md:flex gap-10 tracking-[.25em] text-sm">
      <button>MENÚ</button>

      <button
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        SOBRE NOSOTROS
      </button>

      <button
        onClick={() =>
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        CONTACTO
      </button>
    </div>

    {/* BOTONES */}
    <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">

      <Link
        href="/dashboard"
        className="
        w-full
        md:w-auto
        text-center
        px-6
        py-3
        rounded-xl
        border
        border-cyan-500/40
        text-cyan-400
        font-bold
        "
      >
        Dashboard
      </Link>

      <div className="w-full md:w-auto flex justify-center">
        <ConnectButton />
      </div>

    </div>
  </div>
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
  <div className="absolute bottom-6 right-6 z-30 bg-black/40 backdrop-blur-xl border border-white/10 p-5 rounded-2xl w-[320px]">

    <div className="text-cyan-400 text-sm">
      WALLET CONECTADA
    </div>

    <h3 className="text-xl font-bold mt-2">
      Bienvenido a TERRIX
    </h3>

    <div className="mt-2 text-white/60 break-all text-sm">
      {address}
    </div>

    {!loadingKyc && !kycAprobado && (
  <Link
    href="/registro"
    className="
    mt-5
    block
    text-center
    bg-cyan-500
    hover:bg-cyan-400
    text-black
    font-bold
    py-3
    rounded-xl
    transition
    "
  >
    COMPLETAR KYC
  </Link>
)}

{!loadingKyc && kycAprobado && (
  <div
    className="
    mt-5
    text-center
    bg-green-500/20
    border
    border-green-500/40
    text-green-400
    font-bold
    py-3
    rounded-xl
    "
  >
    ✅ KYC VERIFICADO
  </div>
)}

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

<section
  id="about"
  className="py-32 px-8 md:px-12 bg-[#050505]"
></section>


  <div className="max-w-7xl mx-auto">

    <div className="text-cyan-400 tracking-[.4em]">
      SOBRE TERRIX
    </div>

    <h2 className="text-4xl md:text-6xl font-bold mt-4">
      Transformando el mercado inmobiliario con Blockchain
    </h2>
<div className="grid md:grid-cols-4 gap-6 mt-16">

  <div className="bg-[#0a0a0a] p-6 rounded-3xl">
    <div className="text-4xl font-bold text-cyan-400">
      Web3
    </div>
    <div className="text-white/60 mt-2">
      Infraestructura Blockchain
    </div>
  </div>

  <div className="bg-[#0a0a0a] p-6 rounded-3xl">
    <div className="text-4xl font-bold text-cyan-400">
      NFTs
    </div>
    <div className="text-white/60 mt-2">
      Certificados Digitales
    </div>
  </div>

  <div className="bg-[#0a0a0a] p-6 rounded-3xl">
    <div className="text-4xl font-bold text-cyan-400">
      KYC
    </div>
    <div className="text-white/60 mt-2">
      Verificación Segura
    </div>
  </div>

  <div className="bg-[#0a0a0a] p-6 rounded-3xl">
    <div className="text-4xl font-bold text-cyan-400">
      Global
    </div>
    <div className="text-white/60 mt-2">
      Acceso Internacional
    </div>
  </div>

</div>
    <p className="text-white/60 mt-8 max-w-4xl text-lg leading-9">
      TERRIX es una plataforma Web3 que permite comprar propiedades
      utilizando criptomonedas y representarlas mediante NFTs certificados.

      Nuestro objetivo es eliminar barreras geográficas, reducir
      intermediarios y crear un mercado inmobiliario más transparente,
      rápido y global.
    </p>

    <div className="grid md:grid-cols-3 gap-8 mt-20">

      <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8">
        <div className="text-5xl mb-4">🌎</div>

        <h3 className="text-2xl font-bold">
          Alcance Global
        </h3>

        <p className="text-white/60 mt-4">
          Compra propiedades desde cualquier parte del mundo utilizando blockchain.
        </p>
      </div>

      <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8">
        <div className="text-5xl mb-4">🔒</div>

        <h3 className="text-2xl font-bold">
          Transparencia
        </h3>

        <p className="text-white/60 mt-4">
          Todas las operaciones quedan registradas y verificadas en blockchain.
        </p>
      </div>

      <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8">
        <div className="text-5xl mb-4">🏡</div>

        <h3 className="text-2xl font-bold">
          NFTs Certificados
        </h3>

        <p className="text-white/60 mt-4">
          Cada propiedad puede estar representada mediante un NFT único.
        </p>
      </div>

    </div>

  </div>

  
<section className="py-32 px-8 md:px-12 bg-[#050505]">

  <div className="max-w-7xl mx-auto">

    <div className="text-cyan-400 tracking-[.4em]">

    
      ROADMAP
    </div>

    <h2 className="text-4xl md:text-6xl font-bold mt-4">
      El futuro de TERRIX
    </h2>

    <p className="text-white/60 mt-6 max-w-3xl text-lg">
      Estamos construyendo el ecosistema inmobiliario Web3 más accesible
      de Latinoamérica.
    </p>

    <div className="mt-20 space-y-8">

      <div className="bg-[#0a0a0a] border border-cyan-500/20 rounded-3xl p-8">
        <div className="text-cyan-400 font-bold text-xl">
          FASE 1 · MVP
        </div>

        <ul className="mt-4 space-y-2 text-white/70">
          <li>✓ Landing Web</li>
          <li>✓ Dashboard de usuario</li>
          <li>✓ Sistema KYC</li>
          <li>✓ Marketplace inicial</li>
        </ul>
      </div>

      <div className="bg-[#0a0a0a] border border-cyan-500/20 rounded-3xl p-8">
        <div className="text-cyan-400 font-bold text-xl">
          FASE 2 · Blockchain
        </div>

        <ul className="mt-4 space-y-2 text-white/70">
          <li>• Smart Contracts</li>
          <li>• NFTs certificados</li>
          <li>• Integración OpenSea</li>
          <li>• Wallet Investor Dashboard</li>
        </ul>
      </div>

      <div className="bg-[#0a0a0a] border border-cyan-500/20 rounded-3xl p-8">
        <div className="text-cyan-400 font-bold text-xl">
          FASE 3 · Expansión
        </div>

        <ul className="mt-4 space-y-2 text-white/70">
          <li>• Alianzas inmobiliarias</li>
          <li>• Propiedades internacionales</li>
          <li>• Tokenización masiva</li>
          <li>• Comunidad VIP</li>
        </ul>
      </div>

      <div className="bg-[#0a0a0a] border border-cyan-500/20 rounded-3xl p-8">
        <div className="text-cyan-400 font-bold text-xl">
          FASE 4 · Ecosistema Global
        </div>

        <ul className="mt-4 space-y-2 text-white/70">
          <li>• Marketplace global</li>
          <li>• Financiamiento Web3</li>
          <li>• DAO inmobiliaria</li>
          <li>• Expansión internacional</li>
        </ul>
      </div>

    </div>

  </div>

</section>

{/* FAQ */}

<section className="py-32 px-8 md:px-12 bg-[#050505]">

  <div className="max-w-5xl mx-auto">

    <div className="text-cyan-400 tracking-[.4em]">
      FAQ
    </div>

    <h2 className="text-4xl md:text-6xl font-bold mt-4">
      Preguntas Frecuentes
    </h2>

    <div className="mt-16 space-y-6">

      <div className="bg-[#0a0a0a] rounded-3xl p-8 border border-white/10">
        <h3 className="text-2xl font-bold">
          ¿Qué es TERRIX?
        </h3>

        <p className="text-white/60 mt-4">
          TERRIX es una plataforma Web3 enfocada en conectar el mercado inmobiliario con tecnología blockchain.
        </p>
      </div>

      <div className="bg-[#0a0a0a] rounded-3xl p-8 border border-white/10">
        <h3 className="text-2xl font-bold">
          ¿Necesito una wallet?
        </h3>

        <p className="text-white/60 mt-4">
          Sí. Para acceder a funcionalidades Web3 necesitas conectar una wallet compatible como MetaMask.
        </p>
      </div>

      <div className="bg-[#0a0a0a] rounded-3xl p-8 border border-white/10">
        <h3 className="text-2xl font-bold">
          ¿Qué es el proceso KYC?
        </h3>

        <p className="text-white/60 mt-4">
          El proceso KYC verifica la identidad del usuario para operar de forma segura dentro de la plataforma.
        </p>
      </div>

      <div className="bg-[#0a0a0a] rounded-3xl p-8 border border-white/10">
        <h3 className="text-2xl font-bold">
          ¿Puedo comprar propiedades con criptomonedas?
        </h3>

        <p className="text-white/60 mt-4">
          Ese es uno de los objetivos principales de TERRIX. Actualmente estamos desarrollando la infraestructura necesaria para habilitar este proceso.
        </p>
      </div>

    </div>

  </div>

</section>

{/* COMO FUNCIONA */}

<section className="py-32 px-8 md:px-12 bg-black">

  <div className="max-w-7xl mx-auto">

    <div className="text-cyan-400 tracking-[.4em]">
      CÓMO FUNCIONA
    </div>

    <h2 className="text-4xl md:text-6xl font-bold mt-4">
      Compra propiedades con tecnología blockchain
    </h2>

    <div className="grid md:grid-cols-4 gap-8 mt-20">

      <div className="bg-[#0a0a0a] rounded-3xl p-8 border border-white/10">
        <div className="text-5xl mb-5">👛</div>
        <h3 className="text-2xl font-bold">
          Conecta tu Wallet
        </h3>
        <p className="text-white/60 mt-4">
          Accede a TERRIX utilizando tu wallet Web3.
        </p>
      </div>

      <div className="bg-[#0a0a0a] rounded-3xl p-8 border border-white/10">
        <div className="text-5xl mb-5">🛡️</div>
        <h3 className="text-2xl font-bold">
          Completa KYC
        </h3>
        <p className="text-white/60 mt-4">
          Verificamos tu identidad para operar de forma segura.
        </p>
      </div>

      <div className="bg-[#0a0a0a] rounded-3xl p-8 border border-white/10">
        <div className="text-5xl mb-5">🏡</div>
        <h3 className="text-2xl font-bold">
          Explora Propiedades
        </h3>
        <p className="text-white/60 mt-4">
          Descubre oportunidades inmobiliarias tokenizadas.
        </p>
      </div>

      <div className="bg-[#0a0a0a] rounded-3xl p-8 border border-white/10">
        <div className="text-5xl mb-5">🚀</div>
        <h3 className="text-2xl font-bold">
          Invierte
        </h3>
        <p className="text-white/60 mt-4">
          Compra utilizando criptomonedas y recibe tu NFT certificado.
        </p>
      </div>

    </div>

  </div>

</section>

{/* POR QUE TERRIX */}

<section className="py-32 px-8 md:px-12 bg-[#050505]">

  <div className="max-w-7xl mx-auto">

    <div className="text-cyan-400 tracking-[.4em]">
      CONFIANZA Y SEGURIDAD
    </div>

    <h2 className="text-4xl md:text-6xl font-bold mt-4">
      ¿Por qué confiar en TERRIX?
    </h2>

    <p className="text-white/60 mt-6 max-w-3xl text-lg">
      Combinamos tecnología blockchain, verificación de identidad y activos
      inmobiliarios para construir una experiencia transparente y segura.
    </p>

    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">

      <div className="bg-[#0a0a0a] rounded-3xl p-8 border border-white/10">
        <div className="text-5xl mb-5">🔒</div>

        <h3 className="text-2xl font-bold">
          KYC Verificado
        </h3>

        <p className="text-white/60 mt-4">
          Todos los usuarios pasan por un proceso de validación de identidad.
        </p>
      </div>

      <div className="bg-[#0a0a0a] rounded-3xl p-8 border border-white/10">
        <div className="text-5xl mb-5">⛓️</div>

        <h3 className="text-2xl font-bold">
          Blockchain
        </h3>

        <p className="text-white/60 mt-4">
          Las operaciones quedan registradas en una red pública y auditable.
        </p>
      </div>

      <div className="bg-[#0a0a0a] rounded-3xl p-8 border border-white/10">
        <div className="text-5xl mb-5">🏡</div>

        <h3 className="text-2xl font-bold">
          Activos Reales
        </h3>

        <p className="text-white/60 mt-4">
          El foco de TERRIX son propiedades reales respaldadas por documentación.
        </p>
      </div>

      <div className="bg-[#0a0a0a] rounded-3xl p-8 border border-white/10">
        <div className="text-5xl mb-5">🌍</div>

        <h3 className="text-2xl font-bold">
          Acceso Global
        </h3>

        <p className="text-white/60 mt-4">
          Inversores de cualquier país pueden participar utilizando criptomonedas.
        </p>
      </div>

    </div>

  </div>

</section>


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

{/* FOOTER */}

<footer
  id="contact"
  className="border-t border-white/10 bg-black px-8 md:px-12 py-20"
>

  <div className="max-w-7xl mx-auto">

    <div className="grid md:grid-cols-3 gap-12">

      <div>

        <h3 className="text-3xl font-bold">
          TERRIX
        </h3>

        <p className="text-white/60 mt-4 leading-8">
          Tokenized Real Estate.
          Construyendo el futuro del mercado inmobiliario mediante blockchain y Web3.
        </p>

      </div>

      <div>

        <h4 className="font-bold text-xl">
          Navegación
        </h4>

        <div className="flex flex-col gap-3 mt-4 text-white/60">

          <a href="#about">Sobre Nosotros</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/registro">KYC</a>

        </div>

      </div>

      <div>

        <h4 className="font-bold text-xl">
          Contacto
        </h4>

        <div className="flex flex-col gap-3 mt-4 text-white/60">

          <span>Buenos Aires, Argentina</span>

          <a
            href="https://x.com"
            target="_blank"
          >
            X / Twitter
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
          >
            LinkedIn
          </a>

        </div>

      </div>

    </div>

    <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/40">

      © 2026 TERRIX · All Rights Reserved

    </div>

  </div>

</footer>



    </main>


  );
}