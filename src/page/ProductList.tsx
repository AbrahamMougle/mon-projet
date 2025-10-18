import { ProductCard } from "@/composant/ProductCard";
import { useLoaderData } from "react-router-dom";
import fetchData from "@/lib/fetchData";
interface ProductType{
  id:number,
  name:string
  price:number
  image:string
  similarImages:Array<string>
  description:string
  category:'Ordinateurs'|'Claviers'|'Casques'|'Casques'|'Bluetooth'
}
type product={
  products:ProductType[]
}
export async function productLoader() {
  
  return await fetchData<product>('/api/products');
}

export default function ProductListPage() {
  
  const {products} = useLoaderData<typeof productLoader>()
  return (
    <div className="min-h-screen bg-background py-10 px-8">
      <h1 className="text-3xl font-bold text-foreground mb-8 text-center tracking-tight">
        🛍️ Découvrez nos produits
      </h1>

      <div className="grid grid-cols-1 dark:bg-red-500 sm:grid-cols-2 lg:grid-cols-3  gap-8">
        {products.map((product) => (<ProductCard id={product.id} key={product.id} name={product.name} image={product.image} price={product.price} />
          
        ))}
      </div>
    </div>
  );
}
