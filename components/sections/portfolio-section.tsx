"use client"
import { SectionHeader } from "../ui/section-header"
import { ProjectCard } from "../ui/project-card"

const projects = [
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time data visualization platform with machine learning insights and predictive analytics.",
    image: "/placeholder.svg?height=300&width=500",
    tech: ["React", "TypeScript", "Python", "TensorFlow"],
    category: "Web Application",
    github: "#",
    live: "#",
  },
  {
    title: "Blockchain Trading Platform",
    description: "Secure cryptocurrency trading interface with real-time market data and portfolio management.",
    image: "/placeholder.svg?height=300&width=500",
    tech: ["Next.js", "Web3", "Solidity", "Node.js"],
    category: "FinTech",
    github: "#",
    live: "#",
  },
  {
    title: "IoT Device Management System",
    description: "Enterprise-grade platform for monitoring and controlling IoT devices across multiple locations.",
    image: "/placeholder.svg?height=300&width=500",
    tech: ["React", "MQTT", "MongoDB", "Docker"],
    category: "IoT Platform",
    github: "#",
    live: "#",
  },
  {
    title: "AR Mobile Experience",
    description: "Augmented reality mobile application for interactive product visualization and virtual try-ons.",
    image: "/placeholder.svg?height=300&width=500",
    tech: ["Flutter", "ARCore", "Firebase", "TensorFlow Lite"],
    category: "Mobile AR",
    github: "#",
    live: "#",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Featured" highlight="Projects" />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
