"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";
import { supabase } from "@/lib/supabase";

export default function AdminPage() {
const router = useRouter();

const { address, isConnected } = useAccount();

const ADMIN_WALLET =
"0x57984fCdB19d66174FcDE3F39F6fa3Da18e8118E";

useEffect(() => {

  if (!isConnected) {
    router.push("/");
    return;
  }

  if (
    address?.toLowerCase() !==
    ADMIN_WALLET.toLowerCase()
  ) {
    router.push("/");
  }

}, [address, isConnected, router]);


  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");
  const [descripcion, setDescripcion] = useState("");

  async function crearPropiedad() {

    const { error } = await supabase
      .from("propiedades")
      .insert([
        {
          nombre,
          precio,
          imagen,
          descripcion,
        },
      ]);

    if (error) {
      alert("Error");
      console.log(error);
      return;
    }

    alert("Propiedad creada");

    setNombre("");
    setPrecio("");
    setImagen("");
    setDescripcion("");
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        PANEL ADMIN TERRIX
      </h1>

      <div className="grid gap-5 max-w-2xl">

        <input
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="bg-[#111] p-5 rounded-xl"
        />

        <input
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          className="bg-[#111] p-5 rounded-xl"
        />

        <input
          placeholder="Imagen URL"
          value={imagen}
          onChange={(e) => setImagen(e.target.value)}
          className="bg-[#111] p-5 rounded-xl"
        />

        <textarea
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          className="bg-[#111] p-5 rounded-xl h-40"
        />

        <button
          onClick={crearPropiedad}
          className="bg-cyan-500 text-black p-5 rounded-xl font-bold"
        >
          CREAR PROPIEDAD
        </button>

      </div>

    </main>
  );
}