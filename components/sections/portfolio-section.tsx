"use client"
import { motion } from "framer-motion"
import { SectionHeader } from "../ui/section-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Modern E-commerce Platform",
    description:
      "A fully responsive online store with shopping cart, product filtering, and secure checkout process. Built with React and integrated payment gateway.",
    tech: ["React", "Next.js", "Tailwind CSS", "Stripe API"],
    category: "E-commerce",
    github: "#",
    live: "#",
  },
  {
    title: "NGO Website & Donation Portal",
    description:
      "Professional website for a non-profit organization featuring donation system, volunteer registration, and event management capabilities.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PayPal API"],
    category: "Non-Profit",
    github: "#",
    live: "#",
  },
  {
    title: "Corporate Business Website",
    description:
      "Modern corporate website with service showcase, team profiles, contact forms, and blog section. Optimized for SEO and performance.",
    tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    category: "Corporate",
    github: "#",
    live: "#",
  },
  {
    title: "Restaurant Website & Menu",
    description:
      "Elegant restaurant website with online menu, reservation system, and location details. Mobile-optimized for better customer experience.",
    tech: ["React", "Next.js", "Tailwind CSS", "EmailJS"],
    category: "Restaurant",
    github: "#",
    live: "#",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Featured" highlight="Projects" />

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 rounded-xl p-8 hover:bg-slate-800/70">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">{project.category}</Badge>
                      <div className="h-1 w-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-300 leading-relaxed mb-4 text-lg">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <Badge key={tech} className="bg-slate-700/50 text-slate-300 border-slate-600/50 text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 lg:flex-col">
                    <Button
                      variant="outline"
                      className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-blue-500 bg-transparent"
                    >
                      <Github size={18} className="mr-2" />
                      <a href={project.github}>View Code</a>
                    </Button>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      <ExternalLink size={18} className="mr-2" />
                      <a href={project.live}>Live Demo</a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
