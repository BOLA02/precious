"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { SectionHeader } from "../ui/section-header"

const stats = [
  { number: "15+", label: "Projects Completed" },
  { number: "2+", label: "Years Experience" },
  { number: "100%", label: "Client Satisfaction" },
  { number: "24/7", label: "Support Available" },
]

const technologies = ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML/CSS"]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="About" highlight="Me" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm Uwen Precious, a passionate Frontend Developer/Fullstack Software Developer with over 7 years of experience creating
              beautiful and functional web interfaces. I specialize in building responsive websites, e-commerce
              platforms, and modern web applications that provide exceptional user experiences.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              My expertise lies in modern frontend technologies including React, Next.js, and TypeScript. I focus on
              writing clean, maintainable code and creating pixel-perfect designs that work seamlessly across all
              devices.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {technologies.map((tech) => (
                <Badge key={tech} className="bg-blue-500/20 text-blue-400 border-blue-500/30 px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50"
              >
                <div className="text-3xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-slate-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
