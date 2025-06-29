"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

interface ProjectCardProps {
  project: {
    title: string
    description: string
    image: string
    tech: string[]
    category: string
    github: string
    live: string
  }
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 overflow-hidden h-full">
        <div className="relative overflow-hidden">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-blue-500/90 text-white border-0">{project.category}</Badge>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <CardHeader>
          <CardTitle className="text-white text-xl group-hover:text-blue-400 transition-colors">
            {project.title}
          </CardTitle>
          <CardDescription className="text-slate-300 leading-relaxed">{project.description}</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge key={tech} className="bg-slate-700/50 text-slate-300 border-slate-600/50 text-xs">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex space-x-3 pt-2">
            <Button
              size="sm"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-700 flex-1 bg-transparent"
            >
              <Github size={16} className="mr-2" />
              <a href={project.github}>Code</a>
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white flex-1">
              <ExternalLink size={16} className="mr-2" />
              <a href={project.live}>Live Demo</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
