"use client"
import { Code2, Database, Smartphone, Globe, Cpu, Zap, Terminal } from "lucide-react"
import { SectionHeader } from "../ui/section-header"
import { TechStackCard } from "../ui/tech-stack-card"
import { ServiceCard } from "../ui/service-card"

const techStack = [
  { name: "React/Next.js", icon: Code2, level: 95, description: "Modern web applications" },
  { name: "TypeScript", icon: Terminal, level: 90, description: "Type-safe development" },
  { name: "Node.js", icon: Database, level: 85, description: "Backend & APIs" },
  { name: "Flutter", icon: Smartphone, level: 80, description: "Cross-platform mobile" },
  { name: "Three.js", icon: Cpu, level: 75, description: "3D web experiences" },
  { name: "Cloud/DevOps", icon: Globe, level: 85, description: "Scalable deployment" },
]

const services = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "End-to-end web applications with modern frameworks and scalable architecture.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Cross-platform mobile apps with native performance and seamless user experience.",
  },
  {
    icon: Cpu,
    title: "3D Web Experiences",
    description: "Interactive 3D visualizations and immersive web experiences using WebGL.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed optimization, code splitting, and performance monitoring for web applications.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Tech" highlight="Stack" />

        {/* Tech Stack Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {techStack.map((tech, index) => (
            <TechStackCard key={tech.name} tech={tech} index={index} />
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
