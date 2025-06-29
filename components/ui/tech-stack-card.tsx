"use client"

import { motion } from "framer-motion"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface TechStackCardProps {
  tech: {
    name: string
    icon: LucideIcon
    level: number
    description: string
  }
  index: number
}

export function TechStackCard({ tech, index }: TechStackCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group"
    >
      <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 h-full">
        <CardHeader className="pb-4">
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30 transition-colors">
              <tech.icon size={24} />
            </div>
            <div>
              <CardTitle className="text-white text-lg">{tech.name}</CardTitle>
              <CardDescription className="text-slate-400 text-sm">{tech.description}</CardDescription>
            </div>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${tech.level}%` }}
              transition={{ duration: 1.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
            />
          </div>
          <div className="text-right text-sm text-slate-400 mt-1">{tech.level}%</div>
        </CardHeader>
      </Card>
    </motion.div>
  )
}
