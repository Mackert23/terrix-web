export default function PropertyPage() {

return (

<main className="bg-black min-h-screen text-white p-10">

<div className="grid md:grid-cols-2 gap-16">

<div>

<img
src="/estate1.jpg"
className="rounded-3xl w-full"
/>

</div>

<div>

<div className="text-cyan-400">
NFT #001
</div>

<h1 className="text-6xl font-black mt-4">

Villa Dubai

</h1>

<p className="text-white/60 mt-6">

Propiedad exclusiva tokenizada en blockchain.

</p>

<div className="mt-10 space-y-4">

<div>
Precio: 450.000 USDT
</div>

<div>
Blockchain: Polygon
</div>

<div>
Propietario: 0x8f....21ab
</div>

</div>

<button className="mt-10 bg-cyan-500 text-black px-10 py-5 rounded-2xl font-bold">

COMPRAR NFT

</button>

</div>

</div>

</main>

)

}