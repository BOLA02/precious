"use client"

import { motion } from "framer-motion"

interface SectionHeaderProps {
  title: string
  highlight: string
  description?: string
}

export function SectionHeader({ title, highlight, description }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        {title} <span className="text-blue-400">{highlight}</span>
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-8"></div>
      {description && <p className="text-xl text-slate-300 max-w-2xl mx-auto">{description}</p>}
    </motion.div>
  )
}
