import { useEffect, useState } from "react";
import { ProductCard } from "@/composant/ProductCard";
interface ProductType{
  id:number,
  name:string
  price:number
  image:string
  imageSmilaire:Array<string>
  description:'string'
  category:'Ordinateurs'|'Claviers'|'Casques'|'Casques'|'Bluetooth'
}

export default function ProductListPage() {
  const [pro,setPro]=useState<ProductType[]>()
  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setPro(data.products))
      .catch((err) => console.error("Erreur de chargement :", err));
  }, []);
  if (!pro) {
    return <div>loading</div>
    
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-10 px-8">
      <h1 className="text-3xl font-bold text-slate-800 mb-8 text-center tracking-tight">
        🛍️ Découvrez nos produits
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
        {pro.map((product) => (<ProductCard id={product.id} key={product.id} name={product.name} image={product.image} price={product.price} />
          
        ))}
      </div>
    </div>
  );
}
