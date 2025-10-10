import { Link } from "react-router-dom"
import { Menu, ShoppingCart, Store ,User} from "lucide-react"
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
        {/* Logo */}
        <StyledNavLink
          to="/"
        >
          <Store className="h-6 w-6 group-hover:scale-110 transition-transform" />
          
        </StyledNavLink>

        {/* Liens Desktop */}
        <div className="hidden md:flex justify-center items-center gap-3 text-sm font-medium">
         
          <StyledNavLink to="/product">Produits</StyledNavLink>
          <StyledNavLink to="/orders">Commandes</StyledNavLink>
        </div>

        {/* Icônes & Menu Mobile */}
        <div className="flex items-center justify-center gap-8">
                    <StyledNavLink to="/connecte"><User className="h-6 w-6 group-hover:scale-110 transition-transform" /></StyledNavLink>

          {/* Panier */}
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="relative hover:bg-accent"
            aria-label={`Panier avec ${cartItemsCount} article${cartItemsCount > 1 ? "s" : ""}`}
          >
            <StyledNavLink to="/panier">
              <ShoppingCart className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <Badge
                  className=" absolute top-4  h-4 w-4 flex items-center justify-center p-0 text-xs"
                >
                  {cartItemsCount > 9 ? "9+" : cartItemsCount}
                </Badge>
              )}
            </StyledNavLink>
          </Button>

          {/* Menu mobile */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden hover:bg-accent">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] p-4">
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

              <nav className="flex flex-col space-y-4">
                <StyledNavLink to="/">Accueil</StyledNavLink>
                <StyledNavLink to="/product">Produits</StyledNavLink>
                <StyledNavLink to="/orders">Commandes</StyledNavLink>

                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="relative justify-start hover:bg-accent mt-4"
                  aria-label={
                    `Panier avec  ${cartItemsCount} article${cartItemsCount > 1 ? "s" : ""}}`
                  }
                >
                  <StyledNavLink to="/panier"> 
                  <div className="flex  items-center relative">
                     
                     <div>
                       <ShoppingCart className="h-5 w-5" /> 
                       {cartItemsCount > 0 && 
                       (<Badge
                  
                  className="absolute -top-4 left-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                >
                  {cartItemsCount > 9 ? "9+" : cartItemsCount}
                </Badge>)}
                        </div> 
                        <div className="pl-2">Panier</div> 
                       </div> 
                       </StyledNavLink>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
