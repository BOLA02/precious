"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SectionHeader } from "../ui/section-header"
import { Mail, Linkedin, Github, Send, Phone, MapPin } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "abdulkameel@example.com",
    href: "mailto:abdulkameel@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 XXX XXX XXXX",
    href: "tel:+234XXXXXXXXX",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lagos, Nigeria",
    href: "#",
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    value: "@abdulkameel",
    href: "#",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Abdulkameel Amoho",
    href: "#",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Let's Work"
          highlight="Together"
          description="Ready to bring your project to life? Let's discuss how we can create something amazing together."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                    <Input
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500 h-12"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                    <Input
                      type="email"
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500 h-12"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
                  <Input
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500 h-12"
                    placeholder="Project discussion"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                  <Textarea
                    rows={6}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium group h-12"
                >
                  <Send className="mr-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in touch</h3>
              <div className="space-y-4">
                {contactMethods.map((contact, index) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-all duration-300 border border-slate-700/50 hover:border-blue-500/50"
                  >
                    <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                      <contact.icon size={20} />
                    </div>
                    <div>
                      <div className="text-white font-medium">{contact.label}</div>
                      <div className="text-slate-400 text-sm">{contact.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Follow me</h4>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-all duration-300 border border-slate-700/50 hover:border-blue-500/50"
                  >
                    <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                      <social.icon size={20} />
                    </div>
                    <div>
                      <div className="text-white font-medium">{social.label}</div>
                      <div className="text-slate-400 text-sm">{social.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-2">Available for Projects</h4>
              <p className="text-slate-300 text-sm">
                I'm currently available for freelance work and new opportunities. Let's create something amazing
                together!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
