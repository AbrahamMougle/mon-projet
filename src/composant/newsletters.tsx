"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"
import { useState } from "react"

export function Newsletter() {
  

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Mail className="w-8 h-8 text-primary" />
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">Restez informé des nouveautés</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Inscrivez-vous à notre newsletter et recevez en exclusivité nos offres spéciales et les dernières
              nouveautés tech
            </p>
          </div>

          <form  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Votre adresse email"
              required
              className="flex-1 h-12"
            />
            <Button type="submit" size="lg" className="h-12 px-8">
              S'inscrire
            </Button>
          </form>

          <p className="text-xs text-muted-foreground">
            En vous inscrivant, vous acceptez de recevoir nos emails marketing. Vous pouvez vous désinscrire à tout
            moment.
          </p>
        </div>
      </div>
    </section>
  )
}
