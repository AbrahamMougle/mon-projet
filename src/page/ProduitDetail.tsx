import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Star, Heart, Share2, ShoppingCart, Minus, Plus, Truck, Shield, RotateCcw } from "lucide-react"

export function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)// mon store va gerer la quantite
  const [selectedSize, setSelectedSize] = useState("M")
  const [isWishlisted, setIsWishlisted] = useState(false)

  const productImages = [
    "/modern-wireless-headphones-front-view.jpg",
    "/modern-wireless-headphones-side-view.jpg",
    "/placeholder-u8o12.png",
    "/placeholder-durna.png",
  ]

  const sizes = ["S", "M", "L", "XL"]

  const reviews = [
    { name: "Marie Dubois", rating: 5, comment: "Qualité exceptionnelle, son cristallin et design élégant." },
    { name: "Pierre Martin", rating: 4, comment: "Très bon produit, confortable pour de longues sessions." },
    { name: "Sophie Laurent", rating: 5, comment: "Dépassé mes attentes, la réduction de bruit est parfaite." },
  ]

  const relatedProducts = [
    { name: "Casque Pro Max", price: "299€", image: "/professional-headphones.jpg" },
    { name: "Écouteurs Sport", price: "149€", image: "/placeholder-8r702.png" },
    { name: "Station de Charge", price: "79€", image: "/charging-station.jpg" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-muted">
              <img
                src={productImages[selectedImage] || "/placeholder.svg"}// image 1 image 2 image 3 image4 
                alt="Casque Audio Premium"
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}// permet de charger les image 1 2 3 4
                  className={`aspect-square overflow-hidden rounded-lg border-2 transition-colors ${
                    selectedImage === index ? "border-primary" : "border-border"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Vue ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                Nouveau
              </Badge>
              <h1 className="text-3xl font-bold text-balance">Casque Audio Premium Pro</h1>
              <p className="text-lg text-muted-foreground mt-2">
                Expérience audio immersive avec réduction de bruit active
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-primary">249€</span>
              <span className="text-lg text-muted-foreground line-through">299€</span>
              <Badge variant="destructive">-17%</Badge>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">(4.8) • 127 avis</span>
            </div>

            {/* Size Selection */}
            <div className="space-y-3">
              <h3 className="font-semibold">Taille</h3>
              <div className="flex space-x-2">
                {sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="space-y-3">
              <h3 className="font-semibold">Quantité</h3>
              <div className="flex items-center space-x-3">
                <Button variant="outline" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-semibold">{quantity}</span>
                <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button size="lg" className="w-full">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Ajouter au panier
              </Button>
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 bg-transparent"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                >
                  <Heart className={`mr-2 h-5 w-5 ${isWishlisted ? "fill-current" : ""}`} />
                  Favoris
                </Button>
                <Button variant="outline" size="lg" className="flex-1 bg-transparent">
                  <Share2 className="mr-2 h-5 w-5" />
                  Partager
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <Separator />
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center space-x-3">
                  <Truck className="h-5 w-5 text-primary" />
                  <span className="text-sm">Livraison gratuite sous 48h</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm">Garantie 2 ans</span>
                </div>
                <div className="flex items-center space-x-3">
                  <RotateCcw className="h-5 w-5 text-primary" />
                  <span className="text-sm">Retour gratuit 30 jours</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="mt-16 space-y-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <div className="prose max-w-none text-pretty">
                <p className="text-muted-foreground leading-relaxed">
                  Le Casque Audio Premium Pro redéfinit votre expérience d'écoute avec sa technologie de réduction de
                  bruit active de pointe. Conçu pour les audiophiles exigeants, il offre une qualité sonore
                  exceptionnelle avec des basses profondes et des aigus cristallins.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Son design ergonomique et ses matériaux premium garantissent un confort optimal même lors de sessions
                  d'écoute prolongées. La batterie longue durée vous accompagne toute la journée, tandis que la
                  connectivité Bluetooth 5.0 assure une connexion stable et rapide.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Reviews */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6">Avis clients</h2>
              <div className="space-y-6">
                {reviews.map((review, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{review.name}</h4>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-pretty">{review.comment}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Related Products */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Produits similaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((product, index) => (
                <Card key={index} className="group cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="aspect-square overflow-hidden rounded-lg bg-muted mb-4">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <h3 className="font-semibold mb-2">{product.name}</h3>
                    <p className="text-lg font-bold text-primary">{product.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
