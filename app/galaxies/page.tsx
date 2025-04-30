"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { ChevronRight, Moon, Star, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const galaxies = [
  {
    id: "voie-lactee",
    name: "Voie Lactée",
    type: "Spirale barrée",
    distance: "0",
    diameter: "100 000 années-lumière",
    stars: "200-400 milliards",
    description:
      "Notre galaxie, qui abrite notre système solaire. Vue de la Terre, elle apparaît comme une bande laiteuse dans le ciel nocturne.",
    facts: [
      "Le centre de la Voie Lactée abrite un trou noir supermassif appelé Sagittarius A*",
      "Notre galaxie se déplace à environ 600 km/s dans l'espace",
      "Il faut environ 225-250 millions d'années au Soleil pour compléter une orbite autour du centre galactique",
    ],
  },
  {
    id: "andromede",
    name: "Andromède (M31)",
    type: "Spirale",
    distance: "2,5 millions d'années-lumière",
    diameter: "220 000 années-lumière",
    stars: "1 000 milliards",
    description:
      "La galaxie spirale la plus proche de la nôtre et la plus grande du Groupe Local. Elle est visible à l'œil nu dans un ciel sombre.",
    facts: [
      "Andromède et la Voie Lactée sont en collision et fusionneront dans environ 4,5 milliards d'années",
      "Elle contient plus d'étoiles que notre galaxie",
      "Elle a été mentionnée pour la première fois par l'astronome perse Al-Sufi en 964",
    ],
  },
  {
    id: "triangulum",
    name: "Triangulum (M33)",
    type: "Spirale",
    distance: "2,7 millions d'années-lumière",
    diameter: "60 000 années-lumière",
    stars: "40 milliards",
    description: "La troisième plus grande galaxie du Groupe Local, après Andromède et la Voie Lactée.",
    facts: [
      "Elle est l'un des objets les plus éloignés visibles à l'œil nu dans des conditions idéales",
      "Elle contient l'une des plus grandes régions de formation d'étoiles connues, NGC 604",
      "Elle orbite probablement autour de la galaxie d'Andromède",
    ],
  },
  {
    id: "sombrero",
    name: "Sombrero (M104)",
    type: "Spirale",
    distance: "29,3 millions d'années-lumière",
    diameter: "50 000 années-lumière",
    stars: "100 milliards",
    description:
      "Une galaxie spirale remarquable pour son noyau brillant et son disque de poussière proéminent qui lui donne l'apparence d'un sombrero.",
    facts: [
      "Elle possède l'un des plus grands trous noirs supermassifs jamais mesurés",
      "Son bulbe central est inhabituellement grand",
      "Elle contient environ 2 000 amas globulaires, soit 10 fois plus que la Voie Lactée",
    ],
  },
]

export default function GalaxiesPage() {
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
          <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Les Galaxies</h1>
          <p className="mb-8 text-xl text-muted-foreground">
            Explorez les vastes îles d&apos;étoiles qui peuplent notre univers
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {galaxies.map((galaxy) => (
              <GalaxyCard key={galaxy.id} galaxy={galaxy} />
            ))}
          </div>

          <div className="mt-16">
            <h2 className="mb-6 text-2xl font-bold">Simulation Interactive</h2>
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video w-full">
                  <GalaxySimulation />
                </div>
              </CardContent>
            </Card>
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

function GalaxyCard({ galaxy }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video bg-black">
        <GalaxyAnimation type={galaxy.type} />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
          <h3 className="text-xl font-bold">{galaxy.name}</h3>
          <p className="text-sm text-zinc-300">{galaxy.type}</p>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Distance</p>
            <p className="font-medium">{galaxy.distance}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Diamètre</p>
            <p className="font-medium">{galaxy.diameter}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Étoiles</p>
            <p className="font-medium">{galaxy.stars}</p>
          </div>
        </div>
        <p className="mb-4 text-muted-foreground">{galaxy.description}</p>
        <Button variant="outline" className="w-full">
          Voir en détail
        </Button>
      </CardContent>
    </Card>
  )
}

function GalaxyAnimation({ type }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    // Définir la taille du canvas
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Paramètres de la galaxie
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const galaxyRadius = Math.min(centerX, centerY) * 0.8

    // Fonction d'animation
    let rotation = 0
    const animate = () => {
      // Effacer le canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Dessiner le noyau galactique
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, galaxyRadius * 0.2)
      gradient.addColorStop(0, "rgba(255, 255, 200, 0.8)")
      gradient.addColorStop(1, "rgba(255, 255, 200, 0.1)")

      ctx.beginPath()
      ctx.arc(centerX, centerY, galaxyRadius * 0.2, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()

      // Dessiner les bras spiraux
      const numArms = type.includes("barrée") ? 2 : 4
      const numStars = 2000

      for (let i = 0; i < numStars; i++) {
        // Paramètres de l'étoile
        const armIndex = Math.floor(Math.random() * numArms)
        const distance = Math.random() * galaxyRadius
        const angle = (armIndex / numArms) * Math.PI * 2 + (distance / galaxyRadius) * Math.PI * 2 + rotation

        // Position de l'étoile
        const x = centerX + Math.cos(angle) * distance
        const y = centerY + Math.sin(angle) * distance

        // Couleur de l'étoile (plus bleue à l'extérieur, plus jaune à l'intérieur)
        const brightness = 150 + Math.floor(Math.random() * 105)
        const red = brightness
        const green = brightness
        const blue = Math.min(255, brightness + (distance / galaxyRadius) * 50)

        // Dessiner l'étoile
        ctx.beginPath()
        ctx.arc(x, y, 1 + Math.random(), 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${0.5 + Math.random() * 0.5})`
        ctx.fill()
      }

      // Ajouter une barre centrale si c'est une galaxie barrée
      if (type.includes("barrée")) {
        ctx.save()
        ctx.translate(centerX, centerY)
        ctx.rotate(rotation)

        const barGradient = ctx.createLinearGradient(-galaxyRadius * 0.5, 0, galaxyRadius * 0.5, 0)
        barGradient.addColorStop(0, "rgba(255, 255, 200, 0)")
        barGradient.addColorStop(0.5, "rgba(255, 255, 200, 0.3)")
        barGradient.addColorStop(1, "rgba(255, 255, 200, 0)")

        ctx.beginPath()
        ctx.rect(-galaxyRadius * 0.5, -galaxyRadius * 0.1, galaxyRadius, galaxyRadius * 0.2)
        ctx.fillStyle = barGradient
        ctx.fill()

        ctx.restore()
      }

      // Mettre à jour la rotation
      rotation += 0.001

      // Continuer l'animation
      requestAnimationFrame(animate)
    }

    // Démarrer l'animation
    animate()

    // Nettoyer
    return () => {
      // Rien à nettoyer ici car requestAnimationFrame s'arrêtera naturellement
    }
  }, [type])

  return <canvas ref={canvasRef} className="h-full w-full" />
}

function GalaxySimulation() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    // Définir la taille du canvas
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Paramètres de la simulation
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const galaxyRadius = Math.min(centerX, centerY) * 0.4

    // Créer deux galaxies
    const galaxy1 = {
      x: centerX - galaxyRadius,
      y: centerY,
      radius: galaxyRadius,
      rotation: 0,
      stars: [],
    }

    const galaxy2 = {
      x: centerX + galaxyRadius,
      y: centerY,
      radius: galaxyRadius * 0.8,
      rotation: Math.PI / 4,
      stars: [],
    }

    // Générer des étoiles pour chaque galaxie
    const generateStars = (galaxy, numStars, numArms) => {
      for (let i = 0; i < numStars; i++) {
        const armIndex = Math.floor(Math.random() * numArms)
        const distance = Math.random() * galaxy.radius
        const angle = (armIndex / numArms) * Math.PI * 2 + (distance / galaxy.radius) * Math.PI * 2

        galaxy.stars.push({
          distance,
          angle,
          brightness: 150 + Math.floor(Math.random() * 105),
        })
      }
    }

    generateStars(galaxy1, 1500, 2)
    generateStars(galaxy2, 1200, 3)

    // Variables pour l'animation de collision
    let time = 0
    const collisionDuration = 500
    const collisionStart = 100

    // Fonction d'animation
    const animate = () => {
      // Effacer le canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Mettre à jour la position des galaxies pour la collision
      if (time > collisionStart && time < collisionStart + collisionDuration) {
        const progress = (time - collisionStart) / collisionDuration
        const distance = galaxyRadius * 2 * (1 - progress)

        galaxy1.x = centerX - distance / 2
        galaxy2.x = centerX + distance / 2
      }

      // Dessiner les galaxies
      const drawGalaxy = (galaxy) => {
        // Dessiner le noyau
        const gradient = ctx.createRadialGradient(galaxy.x, galaxy.y, 0, galaxy.x, galaxy.y, galaxy.radius * 0.2)
        gradient.addColorStop(0, "rgba(255, 255, 200, 0.8)")
        gradient.addColorStop(1, "rgba(255, 255, 200, 0.1)")

        ctx.beginPath()
        ctx.arc(galaxy.x, galaxy.y, galaxy.radius * 0.2, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Dessiner les étoiles
        for (const star of galaxy.stars) {
          const angle = star.angle + galaxy.rotation

          // Ajouter des perturbations pendant la collision
          let distortionX = 0
          let distortionY = 0

          if (time > collisionStart + collisionDuration * 0.5) {
            const collisionProgress = (time - (collisionStart + collisionDuration * 0.5)) / (collisionDuration * 0.5)
            const distortionFactor = Math.min(1, collisionProgress) * 0.5

            // Plus de distorsion pour les étoiles extérieures
            const distortionStrength = (star.distance / galaxy.radius) * distortionFactor

            distortionX = (Math.random() - 0.5) * galaxy.radius * distortionStrength
            distortionY = (Math.random() - 0.5) * galaxy.radius * distortionStrength
          }

          // Position de l'étoile
          const x = galaxy.x + Math.cos(angle) * star.distance + distortionX
          const y = galaxy.y + Math.sin(angle) * star.distance + distortionY

          // Couleur de l'étoile
          const red = star.brightness
          const green = star.brightness
          const blue = Math.min(255, star.brightness + (star.distance / galaxy.radius) * 50)

          // Dessiner l'étoile
          ctx.beginPath()
          ctx.arc(x, y, 1 + Math.random(), 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${0.5 + Math.random() * 0.5})`
          ctx.fill()
        }
      }

      drawGalaxy(galaxy1)
      drawGalaxy(galaxy2)

      // Mettre à jour la rotation
      galaxy1.rotation += 0.002
      galaxy2.rotation += 0.0015

      // Mettre à jour le temps
      time++
      if (time > collisionStart + collisionDuration + 200) {
        time = 0 // Recommencer la simulation
      }

      // Continuer l'animation
      requestAnimationFrame(animate)
    }

    // Démarrer l'animation
    animate()
  }, [])

  return <canvas ref={canvasRef} className="h-full w-full" />
}
