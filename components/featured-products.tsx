"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart } from "lucide-react"
import { useState } from "react"

const products = [
  {
    id: 1,
    name: "One Piece Vol. 105",
    category: "Manga",
    price: 8.99,
    image: "/one-piece-manga-volume-cover.jpg",
    badge: "Nuevo",
  },
  {
    id: 2,
    name: "Attack on Titan Final Season",
    category: "Anime",
    price: 49.99,
    image: "/attack-on-titan-blu-ray-box-set.jpg",
    badge: "Popular",
  },
  {
    id: 3,
    name: "Naruto Uzumaki Figura",
    category: "Figuras",
    price: 89.99,
    image: "/naruto-action-figure-collectible.jpg",
    badge: "Exclusivo",
  },
  {
    id: 4,
    name: "Demon Slayer Hoodie",
    category: "Merchandising",
    price: 39.99,
    image: "/demon-slayer-hoodie-anime-clothing.jpg",
    badge: null,
  },
  {
    id: 5,
    name: "Jujutsu Kaisen Vol. 20",
    category: "Manga",
    price: 8.99,
    image: "/jujutsu-kaisen-manga-volume.jpg",
    badge: "Nuevo",
  },
  {
    id: 6,
    name: "My Hero Academia Box Set",
    category: "Manga",
    price: 149.99,
    image: "/my-hero-academia-manga-box-set.jpg",
    badge: "Oferta",
  },
  {
    id: 7,
    name: "Goku Super Saiyan Figura",
    category: "Figuras",
    price: 129.99,
    image: "/goku-super-saiyan-figure-dragon-ball.jpg",
    badge: "Premium",
  },
  {
    id: 8,
    name: "Studio Ghibli Collection",
    category: "Anime",
    price: 199.99,
    image: "/studio-ghibli-collection-blu-ray.jpg",
    badge: "Exclusivo",
  },
]

export function FeaturedProducts() {
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Productos destacados</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Los más vendidos y novedades de la temporada
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden border shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.badge && (
                  <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    {product.badge}
                  </div>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background"
                  onClick={() => toggleFavorite(product.id)}
                >
                  <Heart className={`h-5 w-5 ${favorites.includes(product.id) ? "fill-primary text-primary" : ""}`} />
                </Button>
              </div>
              <div className="p-4 space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{product.category}</p>
                  <h3 className="font-semibold text-base line-clamp-2">{product.name}</h3>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">${product.price}</span>
                  <Button size="sm" className="gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    Añadir
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Ver todos los productos
          </Button>
        </div>
      </div>
    </section>
  )
}
