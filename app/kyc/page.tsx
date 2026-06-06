"use client";

import { useState } from "react";

export default function RegistroPage() {
 const [nombre, setNombre] = useState("");
const [apellido, setApellido] = useState("");
const [email, setEmail] = useState("");

const [dniFrente, setDniFrente] =
  useState<File | null>(null);

const [dniDorso, setDniDorso] =
  useState<File | null>(null);

const [selfie, setSelfie] =
  useState<File | null>(null);
 
    return (
    <main className="bg-black text-white min-h-screen p-10">

      <h1 className="text-5xl font-bold">
        Registro KYC TERRIX
      </h1>

      <div className="grid gap-5 mt-10 max-w-2xl">

        <input
          placeholder="Nombre"
          className="bg-[#111] p-5 rounded-xl"
        />

        <input
          placeholder="Apellido"
          className="bg-[#111] p-5 rounded-xl"
        />

        <input
          placeholder="Email"
          className="bg-[#111] p-5 rounded-xl"
        />

        <div>
          <label>DNI Frente</label>

          <input
            type="file"
            onChange={(e) =>
              setDniFrente(
                e.target.files?.[0] || null
              )
            }
          />
        </div>

        <div>
          <label>DNI Dorso</label>

          <input
            type="file"
            onChange={(e) =>
              setDniDorso(
                e.target.files?.[0] || null
              )
            }
          />
        </div>

        <div>
          <label>Selfie</label>

          <input
            type="file"
            onChange={(e) =>
              setSelfie(
                e.target.files?.[0] || null
              )
            }
          />
        </div>

      </div>

    </main>
  );
}