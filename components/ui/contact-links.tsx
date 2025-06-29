"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "abdulkameel@example.com",
    href: "mailto:abdulkameel@example.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: "#",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "View my code",
    href: "#",
  },
]

export function ContactLinks() {
  return (
    <div className="flex justify-center space-x-6">
      {contactMethods.map((contact, index) => (
        <motion.a
          key={contact.label}
          href={contact.href}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 group"
        >
          <contact.icon className="text-blue-400 group-hover:text-blue-300" size={24} />
          <span className="text-white font-medium text-sm">{contact.label}</span>
          <span className="text-slate-400 text-xs text-center">{contact.value}</span>
        </motion.a>
      ))}
    </div>
  )
}
