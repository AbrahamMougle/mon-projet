import { Link } from "react-router-dom"
import { Card } from "@/components/ui/card"
import { Laptop, Keyboard, Headphones, Bluetooth } from "lucide-react"

const categories = [
  {
    name: "Ordinateurs",
    description: "PC portables et de bureau",
    icon: Laptop,
    href: "/category/computers",
    color: "from-blue-500/10 to-blue-600/10",
  },
  {
    name: "Claviers",
    description: "Mécaniques et sans fil",
    icon: Keyboard,
    href: "/category/keyboards",
    color: "from-purple-500/10 to-purple-600/10",
  },
  {
    name: "Casques",
    description: "Audio haute qualité",
    icon: Headphones,
    href: "/category/headphones",
    color: "from-pink-500/10 to-pink-600/10",
  },
  {
    name: "Bluetooth",
    description: "Accessoires sans fil",
    icon: Bluetooth,
    href: "/category/bluetooth",
    color: "from-cyan-500/10 to-cyan-600/10",
  },
]

export function ProductCategories() {
  return (
    <section className="w-full py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Explorez nos catégories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Trouvez l'équipement tech parfait pour votre setup
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Link key={category.name} to='/' className="group">
                <Card className="h-full p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
