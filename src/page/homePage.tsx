import { TechHero } from "@/composant/techHero"
import { ProductCategories } from "@/composant/productCategory"
export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-1">
        <TechHero />
        <ProductCategories />
        
      </main>
      
    </div>
  )
}
