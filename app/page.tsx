export default function TerrixPage() {
  const scrollToSection = (id:string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <section className="relative h-screen overflow-hidden">
        <img
          src="/mansion.jpg"
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-pulse"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/60 via-black/30 to-black"></div>

        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] backdrop-blur-xl border border-white/10 rounded-2xl bg-black/20 p-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/logo.png" className="w-12"/>
            <span className="text-3xl font-bold">TERRIX</span>
          </div>

          <div className="flex gap-10 text-sm">
            <button onClick={()=>scrollToSection('menu')} className="hover:text-cyan-400 transition">MENÚ</button>
            <button onClick={()=>scrollToSection('about')} className="hover:text-cyan-400 transition">SOBRE NOSOTROS</button>
            <button onClick={()=>scrollToSection('contact')} className="hover:text-cyan-400 transition">CONTACTO</button>
          </div>

          <button className="px-6 py-3 rounded-xl bg-white/10 hover:bg-cyan-500 transition">
            COMPRA EXCLUSIVA
          </button>
        </nav>

        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h1 className="text-[18vw] font-black opacity-20 tracking-tight animate-pulse">
            TERRIX
          </h1>

          <p className="tracking-[12px] mt-6 text-sm animate-bounce">
            WEB3 LUXURY ESTATE
          </p>
        </div>
      </section>

      <section id="menu" className="min-h-screen p-20 bg-zinc-950">
        <h2 className="text-5xl font-bold mb-8">Propiedades</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1,2,3].map((x)=>(
            <div key={x} className="rounded-3xl overflow-hidden bg-white/5 hover:scale-105 transition duration-500">
              <img src="/mansion.jpg" className="h-72 w-full object-cover"/>
              <div className="p-6">
                <h3 className="text-2xl">Mansión NFT #{x}</h3>
                <p className="text-zinc-400">Propiedad tokenizada premium</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="min-h-screen p-20 bg-black text-center">
        <h2 className="text-6xl font-bold mb-10">Sobre Nosotros</h2>
        <p className="max-w-4xl mx-auto text-zinc-300 text-xl leading-9">
          TERRIX combina real estate premium con blockchain y NFTs para crear una nueva forma de invertir.
        </p>
      </section>

      <section id="contact" className="min-h-screen p-20 bg-zinc-950 text-center">
        <h2 className="text-6xl font-bold mb-10">Contacto</h2>

        <div className="max-w-xl mx-auto bg-white/5 p-8 rounded-3xl">
          <input placeholder="Nombre" className="w-full p-4 mb-4 bg-black rounded-xl"/>
          <input placeholder="Email" className="w-full p-4 mb-4 bg-black rounded-xl"/>
          <textarea placeholder="Mensaje" className="w-full p-4 h-40 bg-black rounded-xl"/>

          <button className="mt-6 px-10 py-4 rounded-xl bg-cyan-500 hover:scale-105 transition">
            Enviar
          </button>
        </div>
      </section>
    </div>
  )
}
