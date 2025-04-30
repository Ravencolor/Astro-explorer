"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ChevronLeft, Info } from "lucide-react"
import { ChevronRight, Moon, Star, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const stars = [
  {
    id: "soleil",
    name: "Le Soleil",
    type: "Naine jaune (G2V)",
    temperature: 5778, // en Kelvin
    mass: 1, // masse solaire
    radius: 1, // rayon solaire
    age: 4.6, // en milliards d'années
    color: "#FDB813",
    description: "Notre étoile, au centre du système solaire, fournit l'énergie nécessaire à la vie sur Terre.",
  },
  {
    id: "sirius",
    name: "Sirius",
    type: "Étoile blanche (A1V)",
    temperature: 9940,
    mass: 2.02,
    radius: 1.71,
    age: 0.242,
    color: "#F8F7FF",
    description: "L'étoile la plus brillante du ciel nocturne, située dans la constellation du Grand Chien.",
  },
  {
    id: "betelgeuse",
    name: "Bételgeuse",
    type: "Supergéante rouge (M1-2)",
    temperature: 3500,
    mass: 11.6,
    radius: 887,
    age: 0.008,
    color: "#FF4500",
    description:
      "Une supergéante rouge dans la constellation d'Orion, qui pourrait exploser en supernova dans un futur relativement proche.",
  },
  {
    id: "proxima-centauri",
    name: "Proxima Centauri",
    type: "Naine rouge (M5.5V)",
    temperature: 3042,
    mass: 0.122,
    radius: 0.154,
    age: 4.85,
    color: "#FF6347",
    description:
      "L'étoile la plus proche de notre système solaire, abritant au moins une planète potentiellement habitable.",
  },
  {
    id: "vega",
    name: "Véga",
    type: "Étoile blanche (A0V)",
    temperature: 9602,
    mass: 2.135,
    radius: 2.362,
    age: 0.455,
    color: "#F8F7FF",
    description: "Une des étoiles les plus brillantes du ciel nocturne, située dans la constellation de la Lyre.",
  },
]

export default function EtoilesPage() {
  const [selectedStar, setSelectedStar] = useState(stars[0])
  const [temperature, setTemperature] = useState(5778)
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    // Définir la taille du canvas
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Effacer le canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Dessiner l'étoile
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2

    // Calculer la couleur en fonction de la température
    const starColor = getStarColorFromTemperature(temperature)

    // Dessiner le cercle de l'étoile
    ctx.beginPath()
    ctx.arc(centerX, centerY, 100, 0, Math.PI * 2)
    ctx.fillStyle = starColor
    ctx.fill()

    // Ajouter un effet de lueur
    const gradient = ctx.createRadialGradient(centerX, centerY, 100, centerX, centerY, 200)
    gradient.addColorStop(0, starColor)
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

    ctx.beginPath()
    ctx.arc(centerX, centerY, 200, 0, Math.PI * 2)

    ctx.fillStyle = gradient
    ctx.fill()

    // Ajouter des éruptions solaires aléatoires
    for (let i = 0; i < 8; i++) {
      const angle = Math.random() * Math.PI * 2
      const length = 30 + Math.random() * 50

      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(centerX + Math.cos(angle) * (100 + length), centerY + Math.sin(angle) * (100 + length))
      ctx.strokeStyle = starColor
      ctx.lineWidth = 3 + Math.random() * 5
      ctx.stroke()
    }
  }, [temperature])

  // Fonction pour obtenir la couleur d'une étoile en fonction de sa température
  const getStarColorFromTemperature = (temp) => {
    if (temp < 3500) return "#FF4500" // Rouge
    if (temp < 5000) return "#FF8C00" // Orange
    if (temp < 6000) return "#FDB813" // Jaune
    if (temp < 7500) return "#F8F7FF" // Blanc
    if (temp < 10000) return "#CAE1FF" // Bleu clair
    return "#6495ED" // Bleu
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 font-bold">
            <Star className="h-6 w-6 text-yellow-400" />
            <span>AstroExplorer</span>
          </Link>
          <nav className="hidden space-x-6 md:flex">
            <Link href="/planetes" className="text-foreground/60 transition-colors hover:text-foreground">
              Planètes
            </Link>
            <Link href="/etoiles" className="text-foreground/60 transition-colors hover:text-foreground">
              Étoiles
            </Link>
            <Link href="/galaxies" className="text-foreground/60 transition-colors hover:text-foreground">
              Galaxies
            </Link>
            <Link href="/phenomenes" className="text-foreground/60 transition-colors hover:text-foreground">
              Phénomènes
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="md:hidden">
            Menu
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-8">
          <h1 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">Les Étoiles et Leurs Caractéristiques</h1>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <div className="grid gap-4">
                {stars.map((star) => (
                  <Card
                    key={star.id}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      selectedStar.id === star.id ? "ring-2 ring-primary ring-offset-2" : ""
                    }`}
                    onClick={() => {
                      setSelectedStar(star)
                      setTemperature(star.temperature)
                    }}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full" style={{ backgroundColor: star.color }} />
                        <div>
                          <p className="font-medium">{star.name}</p>
                          <p className="text-xs text-muted-foreground">{star.type}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>{selectedStar.name}</CardTitle>
                  <CardDescription>{selectedStar.type}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="aspect-video overflow-hidden rounded-md bg-black">
                    <canvas ref={canvasRef} className="h-full w-full" />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="mb-2 flex items-center justify-between">
                        <label className="text-sm font-medium">Température: {temperature.toLocaleString()} K</label>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-6 w-6">
                                <Info className="h-4 w-4" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>La température de surface détermine la couleur de l&apos;étoile</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <Slider
                        value={[temperature]}
                        min={3000}
                        max={12000}
                        step={100}
                        onValueChange={(value) => setTemperature(value[0])}
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="rounded-lg bg-muted p-3">
                        <div className="text-sm text-muted-foreground">Masse</div>
                        <div className="text-lg font-semibold">{selectedStar.mass} M☉</div>
                      </div>
                      <div className="rounded-lg bg-muted p-3">
                        <div className="text-sm text-muted-foreground">Rayon</div>
                        <div className="text-lg font-semibold">{selectedStar.radius} R☉</div>
                      </div>
                      <div className="rounded-lg bg-muted p-3">
                        <div className="text-sm text-muted-foreground">Âge</div>
                        <div className="text-lg font-semibold">{selectedStar.age} Ga</div>
                      </div>
                    </div>

                    <p>{selectedStar.description}</p>

                    <Button>Explorer en détail</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t bg-zinc-50 py-8 dark:bg-zinc-950">
        <div className="container text-center text-sm text-zinc-600 dark:text-zinc-400">
          <p>© 2024 AstroExplorer. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}
