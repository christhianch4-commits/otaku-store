import { Card } from "@/components/ui/card"

const categories = [
  {
    name: "Manga",
    description: "Últimos lanzamientos y clásicos",
    image: "/manga-books-collection-japanese-comics.jpg",
    href: "#manga",
  },
  {
    name: "Anime",
    description: "Series, películas y box sets",
    image: "/anime-blu-ray-collection-japanese-animation.jpg",
    href: "#anime",
  },
  {
    name: "Figuras",
    description: "Figuras coleccionables premium",
    image: "/anime-figures-collectibles-display.jpg",
    href: "#figuras",
  },
  {
    name: "Merchandising",
    description: "Ropa, accesorios y más",
    image: "/anime-merchandise-clothing-accessories.jpg",
    href: "#merchandising",
  },
]

export function Categories() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Explora por categoría</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Encuentra exactamente lo que buscas en nuestra amplia selección
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <a key={category.name} href={category.href} className="group">
              <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
