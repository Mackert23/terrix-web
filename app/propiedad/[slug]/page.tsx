"use client";

import { use } from "react";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default function PropertyPage({
  params,
}: Props) {

  const { slug } = use(params);

  const propiedades = {
    "villa-dubai": {
      nombre: "Villa Dubai",
      precio: "450.000 USDT",
      imagen: "/estate1.jpg",
      descripcion:
        "Villa de lujo tokenizada en Dubai con vista al mar.",
    },

    "miami-mansion": {
      nombre: "Miami Mansion",
      precio: "820.000 USDT",
      imagen: "/estate2.jpg",
      descripcion:
        "Mansión premium ubicada frente a la playa de Miami.",
    },

    "penthouse-ba": {
      nombre: "Penthouse BA",
      precio: "210.000 USDT",
      imagen: "/estate3.jpg",
      descripcion:
        "Penthouse exclusivo en Buenos Aires.",
    },
  };

  const propiedad =
    propiedades[slug as keyof typeof propiedades];

  if (!propiedad) {
    return (
      <main className="min-h-screen bg-black text-white p-10">
        Propiedad no encontrada
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <img
        src={propiedad.imagen}
        className="rounded-3xl w-full max-w-5xl"
      />

      <h1 className="text-6xl font-bold mt-8">
        {propiedad.nombre}
      </h1>

      <div className="text-cyan-400 text-3xl mt-4">
        {propiedad.precio}
      </div>

      <p className="text-white/60 mt-6 max-w-2xl">
        {propiedad.descripcion}
      </p>

      <button
        onClick={() => {

          const wallet =
            (window as any).ethereum?.selectedAddress;

          if (!wallet) {
            alert("Conectá una wallet");
            return;
          }

          alert(
            `NFT reservado por: ${wallet}`
          );

        }}
        className="mt-10 bg-cyan-500 text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
      >
        COMPRAR NFT
      </button>

    </main>
  );
}