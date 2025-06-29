"use client"
import { Code2, Smartphone, Globe, Zap, Palette, Monitor } from "lucide-react"
import { SectionHeader } from "../ui/section-header"
import { TechStackCard } from "../ui/tech-stack-card"
import { ServiceCard } from "../ui/service-card"

const techStack = [
  { name: "React", icon: Code2, level: 90, description: "Component-based UI development" },
  { name: "Next.js", icon: Globe, level: 85, description: "Full-stack React framework" },
  { name: "TypeScript", icon: Code2, level: 80, description: "Type-safe JavaScript" },
  { name: "Tailwind CSS", icon: Palette, level: 95, description: "Utility-first CSS framework" },
  { name: "JavaScript", icon: Code2, level: 88, description: "Modern ES6+ development" },
  { name: "Responsive Design", icon: Monitor, level: 92, description: "Mobile-first approach" },
]

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom websites built with modern frameworks, optimized for performance and user experience.",
  },
  {
    icon: Code2,
    title: "E-commerce Solutions",
    description: "Complete online stores with shopping carts, payment integration, and inventory management.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Mobile-first designs that work perfectly across all devices and screen sizes.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Fast-loading websites with optimized code, images, and best practices implementation.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Skills &" highlight="Services" />

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
