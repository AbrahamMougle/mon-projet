"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
export function TechHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-24 lg:py-5">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Nouveautés 2025
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              La technologie
              <span className="block text-primary">à portée de main</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 text-pretty">
              Découvrez notre sélection d'ordinateurs, claviers, casques et accessoires Bluetooth de dernière
              génération.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-base" asChild>
                <Link to="/product">
                  Découvrir la boutique
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent" asChild>
                <Link to="/products">Voir les collections</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Produits</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">24h</div>
                <div className="text-sm text-muted-foreground">Livraison</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">2 ans</div>
                <div className="text-sm text-muted-foreground">Garantie</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
              <img src="/store/photo.jpg" alt="Setup tech moderne" className="w-full h-full object-cover" />

              {/* Floating Cards */}
              <div className="absolute top-8 right-8 bg-card/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🎧</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Casque Pro</div>
                    <div className="text-xs text-muted-foreground">-30% aujourd'hui</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 left-8 bg-card/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <span className="text-2xl">⌨️</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Clavier RGB</div>
                    <div className="text-xs text-muted-foreground">Nouveau</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
