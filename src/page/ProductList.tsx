import { ProductCard } from "@/composant/ProductCard";
import { useLoaderData } from "react-router-dom";
interface ProductType{
  id:number,
  name:string
  price:number
  image:string
  imageSmilaire:Array<string>
  description:'string'
  category:'Ordinateurs'|'Claviers'|'Casques'|'Casques'|'Bluetooth'
}
export  async function fetchData():Promise<ProductType[]> {
   const res= await fetch("/api/products")
   const dataJson= await res.json()
  return dataJson.products 
}
export default function ProductListPage() {
  const dataProduct=useLoaderData<typeof fetchData>()
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-10 px-8">
      <h1 className="text-3xl font-bold text-slate-800 mb-8 text-center tracking-tight">
        🛍️ Découvrez nos produits
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
        {dataProduct.map((product) => (<ProductCard id={product.id} key={product.id} name={product.name} image={product.image} price={product.price} />
          
        ))}
      </div>
    </div>
  );
}
