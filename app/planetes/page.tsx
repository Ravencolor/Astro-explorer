"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronLeft } from "lucide-react"

import { ChevronRight, Moon, Star, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const planets = [
  {
    id: "mercure",
    name: "Mercure",
    color: "#A97142",
    description: "La planète la plus proche du Soleil, avec une surface criblée de cratères similaire à notre Lune.",
    facts: [
      "Mercure n'a pas d'atmosphère significative",
      "Une journée sur Mercure dure 176 jours terrestres",
      "Sa température de surface varie de -173°C à 427°C",
    ],
    size: 4879, // diamètre en km
  },
  {
    id: "venus",
    name: "Vénus",
    color: "#E6C229",
    description:
      "Souvent appelée la jumelle de la Terre en raison de sa taille similaire, mais avec une atmosphère toxique et des températures extrêmes.",
    facts: [
      "L'atmosphère est principalement composée de dioxyde de carbone",
      "La pression atmosphérique est 92 fois celle de la Terre",
      "Vénus tourne dans le sens inverse des autres planètes",
    ],
    size: 12104,
  },
  {
    id: "terre",
    name: "Terre",
    color: "#4B90E6",
    description: "Notre planète bleue, la seule connue à abriter la vie dans l'univers.",
    facts: [
      "71% de la surface est couverte d'eau",
      "L'atmosphère est composée principalement d'azote et d'oxygène",
      "La Terre a un champ magnétique qui nous protège du vent solaire",
    ],
    size: 12756,
  },
  {
    id: "mars",
    name: "Mars",
    color: "#E27B58",
    description: "La planète rouge, cible de nombreuses missions d'exploration à la recherche de traces de vie passée.",
    facts: [
      "Mars possède deux petites lunes: Phobos et Deimos",
      "Le mont Olympus est le plus grand volcan du système solaire",
      "Mars a des saisons similaires à la Terre mais deux fois plus longues",
    ],
    size: 6792,
  },
  {
    id: "jupiter",
    name: "Jupiter",
    color: "#E0A951",
    description:
      "La plus grande planète du système solaire, une géante gazeuse avec une grande tache rouge qui est en fait une tempête massive.",
    facts: [
      "Jupiter a au moins 79 lunes",
      "Sa Grande Tache Rouge est une tempête qui dure depuis au moins 400 ans",
      "Jupiter a un système d'anneaux ténu",
    ],
    size: 142984,
  },
  {
    id: "saturne",
    name: "Saturne",
    color: "#F4D57F",
    description:
      "Célèbre pour ses magnifiques anneaux, Saturne est une autre géante gazeuse avec une densité si faible qu'elle flotterait sur l'eau.",
    facts: [
      "Les anneaux de Saturne sont principalement composés de glace et de roche",
      "Saturne a au moins 82 lunes, dont Titan, la deuxième plus grande lune du système solaire",
      "Un jour sur Saturne dure environ 10,7 heures terrestres",
    ],
    size: 120536,
  },
  {
    id: "uranus",
    name: "Uranus",
    color: "#9CBED8",
    description: "Une géante de glace qui tourne sur le côté, comme si elle avait été renversée.",
    facts: [
      "Uranus tourne sur un axe presque parallèle à son orbite",
      "Elle a 27 lunes connues, toutes nommées d'après des personnages de Shakespeare et Pope",
      "Son atmosphère contient du méthane qui lui donne sa couleur bleu-vert",
    ],
    size: 51118,
  },
  {
    id: "neptune",
    name: "Neptune",
    color: "#3E66F9",
    description: "La planète la plus éloignée du Soleil, connue pour ses vents violents et sa couleur bleue profonde.",
    facts: [
      "Neptune a été découverte par calcul mathématique avant d'être observée",
      "Elle possède les vents les plus rapides du système solaire, atteignant 2100 km/h",
      "Neptune a 14 lunes connues, dont Triton qui orbite dans le sens inverse",
    ],
    size: 49528,
  },
]

export default function PlanetesPage() {
  const [selectedPlanet, setSelectedPlanet] = useState(planets[2]) // Terre par défaut
  const [activeTab, setActiveTab] = useState("apercu")

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
          <h1 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">Les Planètes du Système Solaire</h1>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-1">
                {planets.map((planet) => (
                  <Card
                    key={planet.id}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      selectedPlanet.id === planet.id ? "ring-2 ring-primary ring-offset-2" : ""
                    }`}
                    onClick={() => setSelectedPlanet(planet)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full" style={{ backgroundColor: planet.color }} />
                        <span className="font-medium">{planet.name}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="flex items-center justify-center bg-zinc-100 p-8 dark:bg-zinc-800 md:w-1/3">
                      <PlanetAnimation planet={selectedPlanet} />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <h2 className="mb-4 text-2xl font-bold">{selectedPlanet.name}</h2>

                      <Tabs value={activeTab} onValueChange={setActiveTab}>
                        <TabsList className="mb-4">
                          <TabsTrigger value="apercu">Aperçu</TabsTrigger>
                          <TabsTrigger value="faits">Faits intéressants</TabsTrigger>
                        </TabsList>
                        <TabsContent value="apercu" className="space-y-4">
                          <p>{selectedPlanet.description}</p>
                          <div>
                            <h3 className="mb-2 font-medium">Diamètre</h3>
                            <p>{selectedPlanet.size.toLocaleString()} km</p>
                          </div>
                          <Button>Explorer en détail</Button>
                        </TabsContent>
                        <TabsContent value="faits" className="space-y-4">
                          <ul className="space-y-2">
                            {selectedPlanet.facts.map((fact, index) => (
                              <li key={index} className="flex items-start">
                                <span className="mr-2 text-primary">•</span>
                                {fact}
                              </li>
                            ))}
                          </ul>
                        </TabsContent>
                      </Tabs>
                    </div>
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

function PlanetAnimation({ planet }) {
  // Calculer la taille relative en fonction du diamètre réel
  // Mais avec des limites pour l'affichage
  const getRelativeSize = () => {
    const maxSize = 180
    const minSize = 40
    const largestPlanet = Math.max(...planets.map((p) => p.size))

    // Calculer la taille proportionnelle
    let size = (planet.size / largestPlanet) * maxSize

    // Assurer une taille minimale pour les petites planètes
    size = Math.max(size, minSize)

    return size
  }

  const size = getRelativeSize()

  return (
    <motion.div
      animate={{
        rotate: 360,
        boxShadow: [
          `0 0 10px 5px ${planet.color}33`,
          `0 0 20px 10px ${planet.color}33`,
          `0 0 10px 5px ${planet.color}33`,
        ],
      }}
      transition={{
        rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
        boxShadow: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
      }}
      className="rounded-full"
      style={{
        backgroundColor: planet.color,
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      {/* Caractéristiques de surface pour certaines planètes */}
      {planet.id === "terre" && (
        <>
          <motion.div
            className="absolute h-1/3 w-1/4 rounded-full bg-green-600 opacity-70"
            style={{ top: "20%", left: "30%" }}
          />
          <motion.div
            className="absolute h-1/4 w-1/3 rounded-full bg-green-600 opacity-70"
            style={{ top: "50%", left: "50%" }}
          />
        </>
      )}

      {planet.id === "mars" && (
        <motion.div
          className="absolute h-1/3 w-1/3 rounded-full bg-red-800 opacity-70"
          style={{ top: "30%", left: "40%" }}
        />
      )}

      {planet.id === "jupiter" && (
        <motion.div
          className="absolute h-1/5 w-2/5 rounded-full bg-red-600 opacity-80"
          style={{ top: "40%", left: "30%" }}
        />
      )}
    </motion.div>
  )
}
