"use client"
import { Code2, Smartphone, Globe, Zap, Palette, Monitor, Database,
  Server,
  GitBranch } from "lucide-react"
import { SectionHeader } from "../ui/section-header"
import { TechStackCard } from "../ui/tech-stack-card"
import { ServiceCard } from "../ui/service-card"



const techStack = [
  {
    name: "React",
    icon: Code2,
    level: 90,
    description: "Component-based UI development for modern web apps",
  },
  {
    name: "Next.js",
    icon: Globe,
    level: 88,
    description: "Full-stack React framework with SSR & App Router",
  },
  {
    name: "JavaScript",
    icon: Code2,
    level: 90,
    description: "Core language for web development (ES6+)",
  },
  {
    name: "Node.js",
    icon: Server,
    level: 85,
    description: "Backend runtime for building scalable APIs",
  },
  {
    name: "PHP",
    icon: Server,
    level: 80,
    description: "Server-side scripting for web applications",
  },
  {
    name: "MySQL",
    icon: Database,
    level: 85,
    description: "Relational database management system",
  },
  {
    name: "MongoDB",
    icon: Database,
    level: 82,
    description: "NoSQL database for flexible document storage",
  },
  {
    name: "PostgreSQL",
    icon: Database,
    level: 88,
    description: "Advanced relational database with strong consistency",
  },
  {
    name: "Expo",
    icon: Smartphone,
    level: 80,
    description: "React Native toolchain for building mobile apps",
  },
  {
    name: ".NET",
    icon: Server,
    level: 75,
    description: "Framework for building enterprise applications (C#)",
  },
  {
    name: "Git",
    icon: GitBranch,
    level: 90,
    description: "Version control and collaboration tool",
  },
];

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
