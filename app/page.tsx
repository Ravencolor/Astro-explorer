"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, Moon, Star, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

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
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-950 to-black py-24 text-white">
          <div className="absolute inset-0 z-0">
            {Array.from({ length: 100 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-1 w-1 rounded-full bg-white"
                initial={{ opacity: 0.1 + Math.random() * 0.5 }}
                animate={{
                  opacity: [0.1 + Math.random() * 0.5, 0.5 + Math.random() * 0.5, 0.1 + Math.random() * 0.5],
                }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 3}px`,
                  height: `${Math.random() * 3}px`,
                }}
              />
            ))}
          </div>
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                Découvrez les Merveilles de l&apos;Univers
              </h1>
              <p className="mb-8 text-xl text-zinc-300">
                Explorez les planètes, étoiles, galaxies et phénomènes cosmiques à travers des animations interactives
                et des explications claires.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
                <Button size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400">
                  Commencer l&apos;exploration
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  En savoir plus
                </Button>
              </div>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <ChevronRight size={40} className="rotate-90 text-white opacity-50" />
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Explorez Notre Système Solaire
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <SolarSystemObject
                name="Le Soleil"
                description="Notre étoile, source de chaleur et de lumière pour tout le système solaire."
                icon={<Sun className="h-12 w-12 text-yellow-500" />}
                color="yellow"
                href="/etoiles/"
              />
              <SolarSystemObject
                name="La Terre"
                description="Notre planète bleue, la seule connue à abriter la vie dans l'univers."
                icon={<PlanetEarth />}
                color="blue"
                href="/planetes/"
              />
              <SolarSystemObject
                name="La Lune"
                description="Le satellite naturel de la Terre qui influence les marées et illumine nos nuits."
                icon={<Moon className="h-12 w-12 text-zinc-300" />}
                color="gray"
                href="/satellites/lune"
              />
            </div>
          </div>
        </section>

        <section className="bg-zinc-50 py-20 dark:bg-zinc-900">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Phénomènes Célestes Fascinants
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-blue-900">
                      <AnimatedAurora />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                      <h3 className="mb-2 text-2xl font-bold">Aurores Boréales</h3>
                      <p>
                        Des lumières dansantes dans le ciel causées par l&apos;interaction entre le vent solaire et la
                        magnétosphère.
                      </p>
                      <Button variant="link" className="mt-2 p-0 text-yellow-400">
                        En savoir plus
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 bg-black">
                      <AnimatedEclipse />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                      <h3 className="mb-2 text-2xl font-bold">Éclipses Solaires</h3>
                      <p>
                        Un phénomène rare où la Lune passe entre la Terre et le Soleil, bloquant temporairement sa
                        lumière.
                      </p>
                      <Button variant="link" className="mt-2 p-0 text-yellow-400">
                        En savoir plus
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-zinc-50 py-8 dark:bg-zinc-950">
        <div className="container text-center text-sm text-zinc-600 dark:text-zinc-400">
          <p>© 2024 AstroExplorer. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}

function SolarSystemObject({ name, description, icon, color, href }) {
  const bgColors = {
    yellow: "bg-yellow-50 dark:bg-yellow-950/30",
    blue: "bg-blue-50 dark:bg-blue-950/30",
    gray: "bg-zinc-100 dark:bg-zinc-800/50",
  }

  const borderColors = {
    yellow: "border-yellow-200 dark:border-yellow-900/50",
    blue: "border-blue-200 dark:border-blue-900/50",
    gray: "border-zinc-200 dark:border-zinc-700",
  }

  return (
    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
      <Link href={href}>
        <Card className={`border ${borderColors[color]} transition-all hover:shadow-md`}>
          <CardContent className="p-6">
            <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full ${bgColors[color]}`}>
              {icon}
            </div>
            <h3 className="mb-2 text-xl font-bold">{name}</h3>
            <p className="text-zinc-600 dark:text-zinc-400">{description}</p>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}

function PlanetEarth() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      className="relative h-12 w-12 rounded-full bg-blue-500"
    >
      <motion.div className="absolute left-2 top-1 h-3 w-4 rounded-full bg-green-500" />
      <motion.div className="absolute bottom-3 right-1 h-2 w-5 rounded-full bg-green-500" />
      <motion.div className="absolute left-5 top-6 h-2 w-2 rounded-full bg-green-500" />
    </motion.div>
  )
}

function AnimatedAurora() {
  return (
    <div className="relative h-full w-full">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute bottom-0 left-0 right-0 h-1/2 origin-bottom"
          style={{
            background: `linear-gradient(to top, transparent, ${i % 2 === 0 ? "rgb(124, 58, 237, 0.5)" : "rgb(59, 130, 246, 0.5)"})`,
            left: `${i * 20}%`,
            width: "60%",
          }}
          animate={{
            height: ["40%", "60%", "40%"],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 3 + i,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  )
}

function AnimatedEclipse() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <motion.div
        className="absolute h-32 w-32 rounded-full bg-yellow-500"
        animate={{
          boxShadow: [
            "0 0 40px 20px rgba(234, 179, 8, 0.8)",
            "0 0 60px 30px rgba(234, 179, 8, 0.8)",
            "0 0 40px 20px rgba(234, 179, 8, 0.8)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute h-36 w-36 rounded-full bg-transparent"
        animate={{
          x: [-80, 80],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          repeatType: "reverse",
        }}
      >
        <div className="absolute h-32 w-32 rounded-full bg-zinc-900" />
      </motion.div>
    </div>
  )
}
