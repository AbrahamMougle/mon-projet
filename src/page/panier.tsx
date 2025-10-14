import { useStore } from "../store/store"
import { Trash2, ShoppingCart } from "lucide-react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"

export default function CartPage() {
  const { cart, clearCart, cartTotal, createOrder, removeFromCart } = useStore()

  const handleCreateOrder = () => {
    
    const fakeUser = {
      id: "u1",
      name: "Abraham",
      email: "abraham@example.com"
    }// ces donner sont pour celyi qui passe la commande b

    createOrder(cart, fakeUser)
    clearCart()
    toast.success("✅ Commande enregistrée avec succès !")
  }

  if (cart.length === 0)// pas de commande 
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <ShoppingCart className="h-12 w-12 text-gray-400 mb-3" />
        <p className="text-gray-500 text-lg">Votre panier est vide.</p>
      </div>
    )
// dans les cas contraire  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">🛒 Votre panier</h1>

      <div className="grid gap-4 max-w-2xl mx-auto">
        {cart.map((item) => (
          <Card key={item.id} className="shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">{item.name}</CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="h-5 w-5" />
              </Button>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <p className="text-gray-600">
                {item.price} € × {item.quantity}
              </p>
              <Badge variant="secondary" className="text-sm">
                Sous-total : {(item.price * item.quantity)} €
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-6" />

      <div className="max-w-2xl mx-auto text-right space-y-4">
        <p className="text-xl font-semibold">
          Total : <span className="text-foreground">{cartTotal().toFixed(2)} €</span>
        </p>

        <Button
          onClick={handleCreateOrder}
        >
          Passer la commande
        </Button>
      </div>
    </div>
  )
}
