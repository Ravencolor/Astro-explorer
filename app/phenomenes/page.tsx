"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ChevronLeft, Play } from "lucide-react"
import { ChevronRight, Moon, Star, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const phenomena = [
  {
    id: "trou-noir",
    name: "Trou Noir",
    description:
      "Un objet céleste si dense que rien, pas même la lumière, ne peut échapper à son attraction gravitationnelle.",
    longDescription:
      "Les trous noirs se forment lorsqu'une étoile massive s'effondre sur elle-même à la fin de sa vie. La gravité y est si intense qu'elle déforme l'espace-temps environnant. Bien que nous ne puissions pas les voir directement, nous pouvons observer leurs effets sur les étoiles et la matière environnantes.",
    facts: [
      "L'horizon des événements est la limite au-delà de laquelle rien ne peut s'échapper",
      "Les trous noirs supermassifs se trouvent au centre de la plupart des galaxies",
      "Le trou noir le plus proche de la Terre se trouve à environ 1 500 années-lumière",
    ],
  },
  {
    id: "supernova",
    name: "Supernova",
    description: "L'explosion cataclysmique d'une étoile en fin de vie, libérant une quantité d'énergie phénoménale.",
    longDescription:
      "Une supernova se produit lorsqu'une étoile massive épuise son combustible nucléaire et s'effondre sous sa propre gravité, ou lorsqu'une naine blanche accumule trop de matière d'une étoile compagnon. L'explosion qui en résulte est si brillante qu'elle peut surpasser toute une galaxie pendant quelques jours ou semaines.",
    facts: [
      "Une supernova peut brièvement briller plus que des milliards d'étoiles combinées",
      "Les éléments lourds comme l'or et l'uranium sont créés lors des supernovas",
      "La dernière supernova visible à l'œil nu depuis la Terre a été observée en 1987",
    ],
  },
  {
    id: "pulsar",
    name: "Pulsar",
    description: "Une étoile à neutrons en rotation rapide qui émet des faisceaux de rayonnement électromagnétique.",
    longDescription:
      "Les pulsars sont des étoiles à neutrons hautement magnétisées qui tournent très rapidement. Ils émettent des faisceaux de rayonnement qui balayent l'espace comme un phare. Lorsque ces faisceaux passent dans notre ligne de visée, nous détectons des impulsions régulières de radiation, d'où leur nom.",
    facts: [
      "Certains pulsars tournent plus de 700 fois par seconde",
      "Les pulsars sont parmi les horloges les plus précises de l'univers",
      "Le premier pulsar a été découvert en 1967 par Jocelyn Bell Burnell",
    ],
  },
  {
    id: "onde-gravitationnelle",
    name: "Onde Gravitationnelle",
    description: "Des ondulations dans le tissu de l'espace-temps causées par des événements cosmiques violents.",
    longDescription:
      "Les ondes gravitationnelles sont des perturbations dans la courbure de l'espace-temps qui se propagent comme des vagues. Elles sont produites par des événements cataclysmiques comme la fusion de trous noirs ou d'étoiles à neutrons. Prédites par Einstein en 1916, elles n'ont été détectées directement qu'en 2015.",
    facts: [
      "Les ondes gravitationnelles voyagent à la vitesse de la lumière",
      "Leur détection a ouvert une nouvelle ère d'astronomie multi-messager",
      "Les détecteurs LIGO et Virgo peuvent mesurer des variations plus petites que le noyau d'un atome",
    ],
  },
]

export default function PhenomenesPage() {
  const [selectedPhenomenon, setSelectedPhenomenon] = useState(phenomena[0])
  const [activeTab, setActiveTab] = useState("description")

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
          <h1 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">Phénomènes Cosmiques Extraordinaires</h1>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <div className="grid gap-4">
                {phenomena.map((phenomenon) => (
                  <Card
                    key={phenomenon.id}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      selectedPhenomenon.id === phenomenon.id ? "ring-2 ring-primary ring-offset-2" : ""
                    }`}
                    onClick={() => {
                      setSelectedPhenomenon(phenomenon)
                      setActiveTab("description")
                    }}
                  >
                    <CardContent className="p-4">
                      <div>
                        <p className="font-medium">{phenomenon.name}</p>
                        <p className="text-xs text-muted-foreground line-clamp-2">{phenomenon.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>{selectedPhenomenon.name}</CardTitle>
                  <CardDescription>{selectedPhenomenon.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6 aspect-video overflow-hidden rounded-lg bg-black">
                    <PhenomenonAnimation id={selectedPhenomenon.id} />
                  </div>

                  <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="mb-4">
                      <TabsTrigger value="description">Description</TabsTrigger>
                      <TabsTrigger value="faits">Faits intéressants</TabsTrigger>
                      <TabsTrigger value="simulation">Simulation</TabsTrigger>
                    </TabsList>
                    <TabsContent value="description" className="space-y-4">
                      <p>{selectedPhenomenon.longDescription}</p>
                      <Button>En savoir plus</Button>
                    </TabsContent>
                    <TabsContent value="faits" className="space-y-4">
                      <ul className="space-y-2">
                        {selectedPhenomenon.facts.map((fact, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2 text-primary">•</span>
                            {fact}
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                    <TabsContent value="simulation" className="space-y-4">
                      <div className="flex items-center justify-center rounded-lg bg-muted p-8">
                        <Button size="lg" className="gap-2">
                          <Play className="h-4 w-4" />
                          Lancer la simulation interactive
                        </Button>
                      </div>
                      <p className="text-center text-sm text-muted-foreground">
                        La simulation vous permettra d&apos;explorer ce phénomène en détail avec des contrôles
                        interactifs.
                      </p>
                    </TabsContent>
                  </Tabs>
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

function PhenomenonAnimation({ id }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    // Définir la taille du canvas
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2

    // Fonction d'animation selon le phénomène
    const animations = {
      "trou-noir": () => {
        let frame = 0

        const animate = () => {
          // Effacer le canvas
          ctx.clearRect(0, 0, canvas.width, canvas.height)

          // Dessiner le fond étoilé
          for (let i = 0; i < 200; i++) {
            const x = Math.random() * canvas.width
            const y = Math.random() * canvas.height
            const radius = Math.random() * 1.5

            ctx.beginPath()
            ctx.arc(x, y, radius, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(255, 255, 255, ${0.5 + Math.random() * 0.5})`
            ctx.fill()
          }

          // Dessiner le disque d'accrétion
          const diskRadius = 100
          const blackHoleRadius = 30

          // Effet de distorsion gravitationnelle
          for (let i = 0; i < 360; i += 5) {
            const angle = (i * Math.PI) / 180
            const distortionFactor = 1 + 0.2 * Math.sin(frame / 20)

            for (let r = blackHoleRadius; r < diskRadius; r += 2) {
              const x = centerX + Math.cos(angle + r / 30) * r * distortionFactor
              const y = centerY + Math.sin(angle + r / 30) * r

              // Couleur basée sur la température (plus rouge à l'intérieur, plus bleu à l'extérieur)
              const normalizedRadius = (r - blackHoleRadius) / (diskRadius - blackHoleRadius)
              const red = 255
              const green = Math.floor(100 + normalizedRadius * 155)
              const blue = Math.floor(normalizedRadius * 255)

              ctx.beginPath()
              ctx.arc(x, y, 1.5, 0, Math.PI * 2)
              ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${0.7 - normalizedRadius * 0.5})`
              ctx.fill()
            }
          }

          // Dessiner le trou noir
          ctx.beginPath()
          ctx.arc(centerX, centerY, blackHoleRadius, 0, Math.PI * 2)
          ctx.fillStyle = "black"
          ctx.fill()

          // Effet de lentille gravitationnelle
          const gradient = ctx.createRadialGradient(
            centerX,
            centerY,
            blackHoleRadius,
            centerX,
            centerY,
            blackHoleRadius * 1.5,
          )
          gradient.addColorStop(0, "rgba(0, 0, 0, 0.8)")
          gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

          ctx.beginPath()
          ctx.arc(centerX, centerY, blackHoleRadius * 1.5, 0, Math.PI * 2)
          ctx.fillStyle = gradient
          ctx.fill()

          frame++
          requestAnimationFrame(animate)
        }

        animate()
      },
      supernova: () => {
        let frame = 0
        let explosionPhase = 0
        const maxPhase = 120

        const animate = () => {
          // Effacer le canvas
          ctx.clearRect(0, 0, canvas.width, canvas.height)

          // Dessiner le fond étoilé
          for (let i = 0; i < 200; i++) {
            const x = Math.random() * canvas.width
            const y = Math.random() * canvas.height
            const radius = Math.random() * 1.5

            ctx.beginPath()
            ctx.arc(x, y, radius, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(255, 255, 255, ${0.5 + Math.random() * 0.5})`
            ctx.fill()
          }

          if (explosionPhase < maxPhase) {
            // Phase d'explosion
            const progress = explosionPhase / maxPhase
            const explosionRadius = progress * 150

            // Étoile qui explose
            const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, explosionRadius)

            if (progress < 0.3) {
              // Phase initiale: l'étoile devient plus brillante
              gradient.addColorStop(0, "rgba(255, 255, 200, 1)")
              gradient.addColorStop(0.5, "rgba(255, 200, 100, 0.8)")
              gradient.addColorStop(1, "rgba(255, 100, 50, 0)")
            } else if (progress < 0.7) {
              // Phase d'expansion: explosion violente
              gradient.addColorStop(0, "rgba(255, 255, 255, 1)")
              gradient.addColorStop(0.3, "rgba(255, 200, 50, 0.9)")
              gradient.addColorStop(0.6, "rgba(255, 100, 50, 0.7)")
              gradient.addColorStop(0.8, "rgba(200, 50, 50, 0.5)")
              gradient.addColorStop(1, "rgba(100, 50, 100, 0)")
            } else {
              // Phase finale: refroidissement
              gradient.addColorStop(0, "rgba(200, 200, 255, 0.9)")
              gradient.addColorStop(0.4, "rgba(150, 150, 200, 0.7)")
              gradient.addColorStop(0.7, "rgba(100, 100, 150, 0.5)")
              gradient.addColorStop(1, "rgba(50, 50, 100, 0)")
            }

            ctx.beginPath()
            ctx.arc(centerX, centerY, explosionRadius, 0, Math.PI * 2)
            ctx.fillStyle = gradient
            ctx.fill()

            // Particules éjectées
            for (let i = 0; i < 50; i++) {
              const angle = Math.random() * Math.PI * 2
              const distance = explosionRadius * (0.5 + Math.random() * 0.5)
              const particleSize = 1 + Math.random() * 3

              const x = centerX + Math.cos(angle) * distance
              const y = centerY + Math.sin(angle) * distance

              ctx.beginPath()
              ctx.arc(x, y, particleSize, 0, Math.PI * 2)
              ctx.fillStyle = `rgba(255, ${100 + Math.random() * 155}, ${Math.random() * 100}, ${0.8 - progress * 0.5})`
              ctx.fill()
            }

            explosionPhase++
          } else if (frame % 200 === 0) {
            // Réinitialiser l'explosion périodiquement
            explosionPhase = 0
          }

          frame++
          requestAnimationFrame(animate)
        }

        animate()
      },
      pulsar: () => {
        let frame = 0

        const animate = () => {
          // Effacer le canvas
          ctx.clearRect(0, 0, canvas.width, canvas.height)

          // Dessiner le fond étoilé
          for (let i = 0; i < 200; i++) {
            const x = Math.random() * canvas.width
            const y = Math.random() * canvas.height
            const radius = Math.random() * 1.5

            ctx.beginPath()
            ctx.arc(x, y, radius, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(255, 255, 255, ${0.5 + Math.random() * 0.5})`
            ctx.fill()
          }

          // Dessiner l'étoile à neutrons
          const neutronStarRadius = 30

          ctx.beginPath()
          ctx.arc(centerX, centerY, neutronStarRadius, 0, Math.PI * 2)
          ctx.fillStyle = "rgb(200, 220, 255)"
          ctx.fill()

          // Dessiner le champ magnétique
          const rotationAngle = frame * 0.05

          ctx.save()
          ctx.translate(centerX, centerY)
          ctx.rotate(rotationAngle)

          // Lignes de champ magnétique
          for (let i = 0; i < 36; i += 4) {
            const angle = (i * Math.PI) / 18

            ctx.beginPath()
            ctx.moveTo(0, 0)
            ctx.quadraticCurveTo(
              100 * Math.cos(angle + Math.PI / 4),
              100 * Math.sin(angle + Math.PI / 4),
              200 * Math.cos(angle),
              200 * Math.sin(angle),
            )
            ctx.strokeStyle = `rgba(100, 150, 255, ${0.3 - 0.3 * Math.abs(Math.sin(angle))})`
            ctx.lineWidth = 1
            ctx.stroke()
          }

          // Faisceaux d'émission
          const beamWidth = Math.PI / 8
          const beamLength = 300

          // Premier faisceau
          ctx.beginPath()
          ctx.moveTo(0, 0)
          ctx.arc(0, 0, neutronStarRadius, -beamWidth / 2, beamWidth / 2)
          ctx.lineTo(beamLength, (beamWidth / 2) * beamLength)
          ctx.lineTo(beamLength, (-beamWidth / 2) * beamLength)
          ctx.closePath()

          const beamGradient = ctx.createLinearGradient(0, 0, beamLength, 0)
          beamGradient.addColorStop(0, "rgba(200, 220, 255, 0.8)")
          beamGradient.addColorStop(0.2, "rgba(150, 180, 255, 0.6)")
          beamGradient.addColorStop(1, "rgba(100, 150, 255, 0)")

          ctx.fillStyle = beamGradient
          ctx.fill()

          // Deuxième faisceau (opposé)
          ctx.beginPath()
          ctx.moveTo(0, 0)
          ctx.arc(0, 0, neutronStarRadius, Math.PI - beamWidth / 2, Math.PI + beamWidth / 2)
          ctx.lineTo(-beamLength, (beamWidth / 2) * beamLength)
          ctx.lineTo(-beamLength, (-beamWidth / 2) * beamLength)
          ctx.closePath()

          const beamGradient2 = ctx.createLinearGradient(0, 0, -beamLength, 0)
          beamGradient2.addColorStop(0, "rgba(200, 220, 255, 0.8)")
          beamGradient2.addColorStop(0.2, "rgba(150, 180, 255, 0.6)")
          beamGradient2.addColorStop(1, "rgba(100, 150, 255, 0)")

          ctx.fillStyle = beamGradient2
          ctx.fill()

          ctx.restore()

          frame++
          requestAnimationFrame(animate)
        }

        animate()
      },
      "onde-gravitationnelle": () => {
        let frame = 0

        const animate = () => {
          // Effacer le canvas
          ctx.clearRect(0, 0, canvas.width, canvas.height)

          // Dessiner le fond étoilé
          for (let i = 0; i < 200; i++) {
            const x = Math.random() * canvas.width
            const y = Math.random() * canvas.height
            const radius = Math.random() * 1.5

            ctx.beginPath()
            ctx.arc(x, y, radius, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(255, 255, 255, ${0.5 + Math.random() * 0.5})`
            ctx.fill()
          }

          // Dessiner la grille de l'espace-temps
          const gridSize = 20
          const gridWidth = canvas.width / gridSize
          const gridHeight = canvas.height / gridSize

          // Paramètres de l'onde
          const waveSpeed = 0.05
          const waveAmplitude = 5
          const waveFrequency = 0.2

          // Source de l'onde (deux trous noirs en orbite)
          const orbitRadius = 30
          const orbitSpeed = 0.03
          const orbitAngle = frame * orbitSpeed

          const blackHole1X = centerX + Math.cos(orbitAngle) * orbitRadius
          const blackHole1Y = centerY + Math.sin(orbitAngle) * orbitRadius

          const blackHole2X = centerX - Math.cos(orbitAngle) * orbitRadius
          const blackHole2Y = centerY - Math.sin(orbitAngle) * orbitRadius

          // Dessiner la grille déformée
          for (let i = 0; i <= gridSize; i++) {
            for (let j = 0; j <= gridSize; j++) {
              const baseX = i * gridWidth
              const baseY = j * gridHeight

              // Calculer la distance depuis la source
              const dx1 = baseX - blackHole1X
              const dy1 = baseY - blackHole1Y
              const distance1 = Math.sqrt(dx1 * dx1 + dy1 * dy1)

              const dx2 = baseX - blackHole2X
              const dy2 = baseY - blackHole2Y
              const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2)

              // Déformation due aux trous noirs
              let deformX = 0
              let deformY = 0

              if (distance1 > 0) {
                const strength1 = 500 / distance1
                deformX += (dx1 / distance1) * strength1
                deformY += (dy1 / distance1) * strength1
              }

              if (distance2 > 0) {
                const strength2 = 500 / distance2
                deformX += (dx2 / distance2) * strength2
                deformY += (dy2 / distance2) * strength2
              }

              // Ajouter l'effet d'onde gravitationnelle
              const wavePhase = frame * waveSpeed - (distance1 + distance2) * waveFrequency
              const waveEffect = Math.sin(wavePhase) * waveAmplitude * Math.exp(-(distance1 + distance2) / 300)

              deformX += (waveEffect * (baseX - centerX)) / canvas.width
              deformY += (waveEffect * (baseY - centerY)) / canvas.height

              // Position finale du point de la grille
              const finalX = baseX - deformX
              const finalY = baseY - deformY

              // Dessiner le point de la grille
              ctx.beginPath()
              ctx.arc(finalX, finalY, 1, 0, Math.PI * 2)
              ctx.fillStyle = "rgba(100, 150, 255, 0.7)"
              ctx.fill()
            }
          }

          // Dessiner les trous noirs
          ctx.beginPath()
          ctx.arc(blackHole1X, blackHole1Y, 10, 0, Math.PI * 2)
          ctx.fillStyle = "black"
          ctx.fill()

          ctx.beginPath()
          ctx.arc(blackHole2X, blackHole2Y, 10, 0, Math.PI * 2)
          ctx.fillStyle = "black"
          ctx.fill()

          frame++
          requestAnimationFrame(animate)
        }

        animate()
      },
    }

    // Lancer l'animation correspondante
    if (animations[id]) {
      animations[id]()
    }
  }, [id])

  return <canvas ref={canvasRef} className="h-full w-full" />
}
