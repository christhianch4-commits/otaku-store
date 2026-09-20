"use client"

import { ShoppingCart, Search, Menu, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [cartCount] = useState(0)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2">
              <div className="text-2xl font-bold tracking-tight text-foreground">
                OTAKU<span className="text-muted-foreground">STORE</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a
                href="#manga"
                className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
              >
                Manga
              </a>
              <a
                href="#anime"
                className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
              >
                Anime
              </a>
              <a
                href="#figuras"
                className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
              >
                Figuras
              </a>
              <a
                href="#merchandising"
                className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
              >
                Merchandising
              </a>
            </nav>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Buscar productos..." className="w-full pl-10 bg-secondary border-0" />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden lg:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <a
                    href="#manga"
                    className="text-lg font-medium text-foreground hover:text-muted-foreground transition-colors"
                  >
                    Manga
                  </a>
                  <a
                    href="#anime"
                    className="text-lg font-medium text-foreground hover:text-muted-foreground transition-colors"
                  >
                    Anime
                  </a>
                  <a
                    href="#figuras"
                    className="text-lg font-medium text-foreground hover:text-muted-foreground transition-colors"
                  >
                    Figuras
                  </a>
                  <a
                    href="#merchandising"
                    className="text-lg font-medium text-foreground hover:text-muted-foreground transition-colors"
                  >
                    Merchandising
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
