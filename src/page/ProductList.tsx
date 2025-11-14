import { ProductCard } from "@/composant/ProductCard";
import { useLoaderData } from "react-router-dom";
import { supabase } from "@/supabaseClient";

interface ProductType {
  id: number,
  name: string
  price: number
  image: string
  similarImages: Array<string>
  description: string
  category: 'Ordinateurs' | 'Claviers' | 'Casques' | 'Casques' | 'Bluetooth'
}
export async function productLoader() {
  const { data, error } = await supabase
    .from('products')
    .select('*');

  if (error) {
    throw error
  }
  return data as ProductType[];
}

export default function ProductListPage() {

  const products = useLoaderData<typeof productLoader>()
  return (
    <div className="min-h-screen bg-background py-10 px-8">
      <h1 className="text-3xl font-bold text-foreground mb-8 text-center tracking-tight">
        🛍️ Découvrez nos produits
      </h1>

      <div className="grid grid-cols-1 dark:bg-red-500 sm:grid-cols-2 lg:grid-cols-3  gap-8">
        {products?.map((product) => (<ProductCard id={product.id} key={product.id} name={product.name} image={product.image} price={product.price} />

        ))}
      </div>
    </div>
  );
}
