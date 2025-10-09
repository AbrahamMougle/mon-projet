
import { Link } from "react-router-dom"
import { Menu, ShoppingCart, Store } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { StyledNavLink } from "./styleNavLink"
interface NavigationProps {
  cartItemsCount?: number
}

export default function Navigation({ cartItemsCount = 0 }: NavigationProps) {




  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tight hover:text-primary transition-colors group"
        >
          <Store className="h-6 w-6 group-hover:scale-110 transition-transform" />
          <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">E-Shop</span>
        </Link>

        <div className="hidden md:flex gap-1 text-sm font-medium">
          <Link
            to="/"

          >
            Accueil
          </Link>
          <Link
            to="/product"

          >
            Produits
          </Link>
          <Link
            to="/orders"

          >
            Commandes
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="relative hover:bg-accent"
            aria-label={`Panier avec ${cartItemsCount} article${cartItemsCount > 1 ? "s" : ""}`}
          >
            <Link to="/cart">
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                >
                  {cartItemsCount > 9 ? "9+" : cartItemsCount}
                </Badge>
              )}
            </Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden hover:bg-accent" aria-label="Ouvrir le menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[350px] p-4">
              <SheetHeader className="mb-6 p-0">
                <SheetTitle className="flex items-center gap-2 ">
                  <Link
                    to="/"
                    className="flex items-center gap-2 text-xl font-bold tracking-tight hover:text-primary transition-colors group"
                  >
                    <Store className="h-6 w-6 group-hover:scale-110 transition-transform" />
                    <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">E-Shop</span>
                  </Link>

                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-1">
                <Link
                  to="/"
                >
                  Accueil
                </Link>
                <Link
                  to="/product"

                >
                  Produits
                </Link>
                <Link
                  to="/orders"

                >
                  Commandes
                </Link>
                <Button
            variant="ghost"
            size="icon"
            asChild
            className="relative hover:bg-accent"
            aria-label={`Panier avec ${cartItemsCount} article${cartItemsCount > 1 ? "s" : ""}`}
          >
            <Link to="/cart">
             <div className="flex gap-1">
              <div className="pl-5">Panier</div>
             <div>
               <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-7 h-4 w-4 flex items-center justify-center p-0 text-xs"
                >
                  {cartItemsCount > 9 ? "9+" : cartItemsCount}
                </Badge>
              )}
             </div>
             </div>
            </Link>
          </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
