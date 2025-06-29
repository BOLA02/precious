"use client"

import { motion } from "framer-motion"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  service: {
    icon: LucideIcon
    title: string
    description: string
  }
  index: number
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="group"
    >
      <Card className="bg-slate-800/30 backdrop-blur-sm border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 h-full">
        <CardHeader>
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30 transition-colors">
              <service.icon size={28} />
            </div>
            <div>
              <CardTitle className="text-white text-xl mb-2">{service.title}</CardTitle>
              <CardDescription className="text-slate-300 leading-relaxed">{service.description}</CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>
    </motion.div>
  )
}
