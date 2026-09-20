import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
                Tu universo manga y anime
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-xl">
                Descubre la colección más completa de manga, anime y merchandising oficial. Envíos rápidos y productos
                auténticos garantizados.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base">
                Explorar catálogo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent">
                Novedades
              </Button>
            </div>
          </div>

          <div className="relative aspect-square lg:aspect-auto lg:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary to-accent rounded-lg" />
            <img
              src="/anime-manga-collection-display-modern-minimalist.jpg"
              alt="Colección de manga y anime"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
