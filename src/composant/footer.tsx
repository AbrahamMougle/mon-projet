"use client"

import { Link } from "react-router-dom"
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">VotreMarque</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Votre destination pour des produits de qualité exceptionnelle. Nous nous engageons à offrir la meilleure
              expérience d'achat en ligne.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Boutique</h4>
            <ul className="space-y-3">
              {[
                { label: "Nouveautés", href: "/nouveautes" },
                { label: "Meilleures Ventes", href: "/meilleures-ventes" },
                { label: "Promotions", href: "/promotions" },
                { label: "Collections", href: "/collections" },
                { label: "Carte Cadeau", href: "/carte-cadeau" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Service Client</h4>
            <ul className="space-y-3">
              {[
                { label: "Mon Compte", href: "/compte" },
                { label: "Suivi de Commande", href: "/suivi" },
                { label: "Livraison & Retours", href: "/livraison" },
                { label: "FAQ", href: "/faq" },
                { label: "Nous Contacter", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                <span>
                  123 Rue du Commerce
                  <br />
                  75001 Paris, France
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <a href="tel:+2290163215162" className="hover:text-foreground transition-colors">
                  2290163215162
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <a href="abrahammougle76@gmail.com" className="hover:text-foreground transition-colors">
                  abrahammougle76@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="mx-auto max-w-2xl text-center">
            <h4 className="text-lg font-semibold text-foreground mb-2">Restez Informé</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Inscrivez-vous à notre newsletter pour recevoir nos offres exclusives
            </p>
            <form className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 rounded-lg border border-input bg-background px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                required
              />
              <button
                type="submit"
                className="rounded-lg bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:scale-105"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">© {currentYear} VotreMarque. Tous droits réservés.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/mentions-legales"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Mentions Légales
              </Link>
              <Link
                to='/'
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Confidentialité
              </Link>
              <Link to='/' className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                CGV
              </Link>
              <Link to='/' className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
