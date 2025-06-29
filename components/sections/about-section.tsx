"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { SectionHeader } from "../ui/section-header"

const stats = [
  { number: "50+", label: "Projects Completed" },
  { number: "4+", label: "Years Experience" },
  { number: "20+", label: "Happy Clients" },
  { number: "99%", label: "Success Rate" },
]

const technologies = ["React", "TypeScript", "Node.js", "Flutter", "Three.js", "AWS"]

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
              I'm Abdulkameel Bolatito Amoho, a passionate full-stack developer with over 4 years of experience creating
              innovative digital solutions. I specialize in building scalable web applications, cross-platform mobile
              apps, and immersive 3D web experiences.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              My expertise spans modern JavaScript frameworks, cloud technologies, and emerging tech like WebGL and
              AR/VR. I'm committed to writing clean, efficient code and staying at the forefront of technological
              innovation.
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
