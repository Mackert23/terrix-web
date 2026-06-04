import { supabase } from "@/lib/supabase";

export default async function PropiedadPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data: propiedad } = await supabase
    .from("propiedades")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!propiedad) {
    return (
      <main className="bg-black text-white min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">
          Propiedad no encontrada
        </h1>
      </main>
    );
  }

  return (
    <main className="bg-black text-white min-h-screen">

      <div className="max-w-7xl mx-auto px-8 py-20">

        <div className="grid md:grid-cols-2 gap-12">

          <div className="bg-[#0a0a0a] rounded-3xl border border-white/10 p-8">
            <img
              src={propiedad.imagen}
              alt={propiedad.nombre}
              className="w-full rounded-2xl object-contain"
            />
          </div>

          <div>

            <div className="text-cyan-400 tracking-[.3em]">
              {propiedad.slug}
            </div>

            <h1 className="text-5xl font-bold mt-4">
              {propiedad.nombre}
            </h1>

            <div className="text-3xl mt-6 font-bold">
              {propiedad.precio} USDT
            </div>

            <p className="text-white/60 mt-8 leading-8">
              {propiedad.descripcion}
            </p>

            <a
  href="https://opensea.io/"
  target="_blank"
  rel="noopener noreferrer"
  className="
  inline-block
  mt-10
  bg-cyan-500
  text-black
  px-10
  py-5
  rounded-2xl
  font-bold
  hover:scale-105
  transition
  "
>
  COMPRAR NFT
</a>

          </div>

        </div>

      </div>

    </main>
  );
}