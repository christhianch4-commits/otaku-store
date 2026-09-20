import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">No te pierdas nada</h2>
          <p className="text-lg text-primary-foreground/80">
            Suscríbete a nuestro newsletter y recibe las últimas novedades, ofertas exclusivas y lanzamientos antes que
            nadie.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="tu@email.com"
              className="bg-primary-foreground text-foreground border-0 flex-1"
            />
            <Button type="submit" variant="secondary" size="lg">
              Suscribirse
            </Button>
          </form>
          <p className="text-sm text-primary-foreground/60">Puedes cancelar tu suscripción en cualquier momento</p>
        </div>
      </div>
    </section>
  )
}
