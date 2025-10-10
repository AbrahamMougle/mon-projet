import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useStore } from "@/store/store"


interface ProductCardProps {
  id: number 
  image: string
  name: string
  price: number
  
}

export function ProductCard({ id, image, name, price}: ProductCardProps) {
  const addToCart=useStore((state)=>state.addToCart)
  return (
    <div className=" group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-lg  ">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="object-cover transition-transform duration-300 group-hover:scale-105 "
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-4">
        <h3 className="text-lg font-semibold text-foreground line-clamp-2">{name}</h3>

        <p className="text-2xl font-bold text-primary">{price.toFixed(2)} €</p>

        {/* Buttons */}
        <div className="flex gap-2">
          <Button onClick={() => {
                  addToCart({ id, name, price });
                }} className="flex-1 gap-2" size="sm" >
            <ShoppingCart className="h-4 w-4" />
            Ajouter
          </Button>
          <Button asChild variant="outline" className="flex-1 bg-transparent" size="sm">
            <Link to={`/product/${id}`}>Voir détail</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
