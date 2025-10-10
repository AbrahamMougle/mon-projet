import { Link } from "react-router-dom"
export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    
        <div className="grid grid-cols-2 grid-row-2 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">À PROPOS</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-foreground transition-colors">
                  Notre histoire
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-foreground transition-colors">
                  Carrières
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-foreground transition-colors">
                  Durabilité
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">SUPPORT</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-foreground transition-colors">
                  Livraison
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-foreground transition-colors">
                  Retours
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">LÉGAL</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/privacy" className="hover:text-foreground transition-colors">
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-foreground transition-colors">
                  Conditions
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:text-foreground transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">RESTEZ CONNECTÉ</h3>
            <p className="text-sm text-muted-foreground">
              Nous créons des produits qui transforment magnifiquement votre maison
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 Maison. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-foreground transition-colors">
              Instagram
            </Link>
            <Link to="#" className="hover:text-foreground transition-colors">
              Facebook
            </Link>
            <Link to="#" className="hover:text-foreground transition-colors">
              Pinterest
            </Link>
          </div>
        </div>
        
      </div>
    </footer>
  )
}
