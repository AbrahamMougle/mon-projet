import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Star, Heart, Share2, ShoppingCart, Minus, Plus, Truck, Shield, RotateCcw } from "lucide-react"
import { useParams } from "react-router-dom"
import fetchData from "@/lib/fetchData"
import { useStore } from "../store/store"
// cartItem id name price quantite
type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  similarImages: string[];
  description?: string;
  category?: string;
}



export function ProductDetailPage() {
  const { id } = useParams()
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [loader, setLoader] = useState(true)
  const [productDetail, setProductDetail] = useState<Product>({} as Product);
  const [selectedSize, setSelectedSize] = useState("M")
  const [isWishlisted, setIsWishlisted] = useState(false)

  const { addToCart } = useStore()

  const sizes = ["S", "M", "L", "XL"]
  function handleClickAddCart() {
    addToCart({ ...productDetail }, quantity)
    setQuantity(1)

  }


  useEffect(() => {
    const dataProduct = async () => {
      const product = await fetchData(`/api/products/${id}`)
      setProductDetail(product)
      setLoader(false)
    };

    dataProduct()

  }, []);

  if (loader) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-muted">
              <img
                src={productDetail?.similarImages[selectedImage] || "/placeholder.svg"}// image 1 image 2 image 3 image4 productImages[selectedImage]
                alt="Casque Audio Premium"
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {productDetail?.similarImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}// permet de charger les image 1 2 3 4
                  className={`aspect-square overflow-hidden rounded-lg border-2 transition-colors ${selectedImage === index ? "border-primary" : "border-border"
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
                {productDetail.category}
              </Badge>
              <h1 className="text-3xl font-bold text-balance"> {productDetail.name} </h1>
              <p className="text-lg text-muted-foreground mt-2">
                {productDetail.description}
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
                <Button variant="outline" size="icon" disabled={quantity <= 1}
                  className={quantity <= 1 ? "opacity-50 cursor-not-allowed" : ""} onClick={() => setQuantity(Math.max(1, quantity - 1))}>
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
              <Button size="lg" className="w-full" onClick={() => handleClickAddCart()}>
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
        </div>
      </div>
    </div>
  )
}
