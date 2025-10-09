import { useState } from "react"
import { useStore } from "../store/store"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Package, Truck, CheckCircle2, XCircle, Clock, Search, Filter } from "lucide-react"
import { CartItem } from "@/store/cartSlice"
import { UserInfo } from "@/store/OrderSlice"
type OrderStatus = "pending" | "processing" | "shipped" | "delivered" | "cancelled"

interface OrderWithStatus {
  id: string | number
  date: string
  user:UserInfo
  total: number
  status: OrderStatus
  items: CartItem[];
}

const statusConfig = {
  pending: {
    label: "En attente",
    variant: "secondary" as const,
    icon: Clock,
    color: "text-muted-foreground",
  },
  processing: {
    label: "En préparation",
    variant: "default" as const,
    icon: Package,
    color: "text-chart-4",
  },
  shipped: {
    label: "Expédiée",
    variant: "default" as const,
    icon: Truck,
    color: "text-chart-2",
  },
  delivered: {
    label: "Livrée",
    variant: "default" as const,
    icon: CheckCircle2,
    color: "text-chart-1",
  },
  cancelled: {
    label: "Annulée",
    variant: "destructive" as const,
    icon: XCircle,
    color: "text-destructive",
  },
}

export default function OrdersPage() {
  const orders = useStore((s) => s.orders) as  OrderWithStatus[]

  const [selectedStatus, setSelectedStatus] = useState<OrderStatus | "all">("all")
  const [searchQuery, setSearchQuery] = useState("") 
  const filteredOrders = orders.filter((order) => {
    const matchesStatus = selectedStatus === "all" || order.status === selectedStatus
    const matchesSearch = order.id.toString().includes(searchQuery) || order.user.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesStatus && matchesSearch
  })

  if (orders.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />
          <ShoppingBag className="relative h-24 w-24 text-muted-foreground/40 mb-6" strokeWidth={1.5} />
        </div>
        <h2 className="text-2xl font-semibold mb-2 text-foreground">Aucune commande</h2>
        <p className="text-muted-foreground text-center max-w-sm mb-6">
          Vous n'avez pas encore passé de commande. Découvrez nos produits et commencez vos achats.
        </p>
        <Button size="lg" className="gap-2">
          <ShoppingBag className="h-4 w-4" />
          Découvrir les produits
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-balance">Mes Commandes</h1>
        <p className="text-muted-foreground text-lg">
          Suivez l'état de vos {orders.length} commande{orders.length > 1 ? "s" : ""}
        </p>
      </div>

      <div className="mb-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Rechercher par numéro ou nom..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground placeholder:text-muted-foreground placeholder:italic"
            />
          </div>
          <Button variant="outline" className="gap-2 sm:w-auto bg-transparent">
            <Filter className="h-4 w-4" />
            Filtres
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedStatus === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedStatus("all")}
            className="rounded-full"
          >
            Toutes
          </Button>
          {Object.entries(statusConfig).map(([status, config]) => {
            const Icon = config.icon
            return (
              <Button
                key={status}
                variant={selectedStatus === status ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedStatus(status as OrderStatus)}
                className="rounded-full gap-1.5"
              >
                <Icon className="h-3.5 w-3.5" />
                {config.label}
              </Button>
            )
          })}
        </div>
      </div>

      {filteredOrders.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Aucune commande ne correspond à vos critères.</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {filteredOrders.map((order) => {
            const StatusIcon = statusConfig[order.status]?.icon
            return (
              <Card
                key={order.id}
                className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-border overflow-hidden"
              >
                <div
                  className={`h-1 ${
                    order.status === "delivered"
                      ? "bg-chart-1"
                      : order.status === "shipped"
                        ? "bg-chart-2"
                        : order.status === "processing"
                          ? "bg-chart-4"
                          : order.status === "cancelled"
                            ? "bg-destructive"
                            : "bg-muted"
                  }`}
                />

                <CardHeader className="pb-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-muted/50 ${statusConfig[order.status]?.color}`}>
                        <StatusIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-semibold">Commande #{order.id}</CardTitle>
                        <CardDescription className="text-sm mt-0.5">{order.date}</CardDescription>
                      </div>
                    </div>
                    <Badge variant={statusConfig[order.status]?.variant} className="w-fit gap-1.5">
                      <StatusIcon className="h-3 w-3" />
                      {statusConfig[order.status]?.label}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground">Client:</span>
                    <span className="font-medium text-foreground">{order.user.name}</span>
                  </div>

                  <Separator />

                  <div className="space-y-2.5">
                    <h4 className="text-sm font-medium text-muted-foreground">Articles commandés</h4>
                    {order.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between items-center py-2 px-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-foreground">{item.name}</span>
                          <Badge variant="outline" className="text-xs">
                            × {item.quantity}
                          </Badge>
                        </div>
                        <span className="text-sm font-semibold text-foreground">{item.price} €</span>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  <div className="flex justify-between items-center pt-2">
                    <span className="text-base font-medium text-muted-foreground">Total</span>
                    <span className="text-2xl font-bold text-foreground">{order.total} €</span>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      Voir les détails
                    </Button>
                    {order.status === "delivered" && (
                      <Button variant="default" size="sm" className="flex-1">
                        Commander à nouveau
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      )}
    </div>
  )
}
