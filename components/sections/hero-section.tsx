"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Twitter, Mail, ArrowRight, ChevronDown, Code } from "lucide-react"
import dynamic from "next/dynamic"

// Dynamically import the 3D scene with no SSR
const Scene = dynamic(() => import("../3d/scene").then((mod) => ({ default: mod.Scene })), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    </div>
  ),
})

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "#contact", label: "Email" },
]

export function HeroSection() {
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef)
  const [webglSupported, setWebglSupported] = useState(true)

  useEffect(() => {
    // Check WebGL support
    try {
      const canvas = document.createElement("canvas")
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
      if (!gl) {
        setWebglSupported(false)
      }
    } catch (e) {
      setWebglSupported(false)
    }
  }, [])

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 3D Background or Fallback */}
      {webglSupported ? (
        <Scene />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-bounce"></div>
        </div>
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-900/90 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6"
          >
            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 mb-4 px-4 py-2 text-sm font-medium">
              <Code className="w-4 h-4 mr-2" />
              Frontend Developer
            </Badge>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          >
            <motion.span
              className="block text-white"
              initial={{ opacity: 0, x: -30 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Crafting
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: 30 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.9 }}
            >
              Digital Experiences
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
          >
            Frontend developer passionate about creating beautiful, responsive, and user-friendly web interfaces using
            modern technologies like React, Next.js, and TypeScript.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium group"
            >
              <a href="#portfolio" className="flex items-center">
                View My Work
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 rounded-lg font-medium bg-transparent"
            >
              <a href="#contact">Let's Connect</a>
            </Button>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0 }}
            animate={isHeroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <ChevronDown className="text-slate-400" size={32} />
      </motion.div>
    </section>
  )
}
