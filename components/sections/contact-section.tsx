"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SectionHeader } from "../ui/section-header"
import { Mail, Linkedin, Github, Send, Phone, MapPin, User, MessageSquare } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "bolatitoamoho@gmail.com",
    href: "mailto:abdulkameel@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 90 6860 3516",
    href: "tel:+234XXXXXXXXX",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kaduna, Nigeria",
    href: "#",
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    value: "@Bola02",
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
          {/* Contact Form - Redesigned */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-slate-800/20 rounded-2xl blur-xl"></div>
              
              <div className="relative bg-slate-800/60 backdrop-blur-lg border border-slate-600/40 rounded-2xl p-8 shadow-2xl">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4">
                    <MessageSquare className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Send me a message</h3>
                  <p className="text-slate-400 text-sm">I'll get back to you within 24 hours</p>
                </div>

                <form className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div 
                      className="relative group"
                      whileHover={{ scale: 1.02 }}
                    >
                      <label className="block text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
                        <User className="w-4 h-4 text-blue-400" />
                        Name
                      </label>
                      <Input
                        className="bg-slate-700/40 border-slate-600/50 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 h-12 rounded-lg transition-all duration-300 group-hover:bg-slate-700/60"
                        placeholder="Your full name"
                      />
                    </motion.div>
                    
                    <motion.div 
                      className="relative group"
                      whileHover={{ scale: 1.02 }}
                    >
                      <label className="block text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
                        <Mail className="w-4 h-4 text-blue-400" />
                        Email
                      </label>
                      <Input
                        type="email"
                        className="bg-slate-700/40 border-slate-600/50 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 h-12 rounded-lg transition-all duration-300 group-hover:bg-slate-700/60"
                        placeholder="your@email.com"
                      />
                    </motion.div>
                  </div>

                  {/* Subject */}
                  <motion.div 
                    className="relative group"
                    whileHover={{ scale: 1.01 }}
                  >
                    <label className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
                    <Input
                      className="bg-slate-700/40 border-slate-600/50 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 h-12 rounded-lg transition-all duration-300 group-hover:bg-slate-700/60"
                      placeholder="What's this about?"
                    />
                  </motion.div>

                  {/* Message */}
                  <motion.div 
                    className="relative group"
                    whileHover={{ scale: 1.005 }}
                  >
                    <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                    <div className="relative">
                      <Textarea
                        rows={5}
                        className="bg-slate-700/40 border-slate-600/50 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 resize-none rounded-lg transition-all duration-300 group-hover:bg-slate-700/60"
                        placeholder="Tell me about your project, goals, timeline, and budget..."
                      />
                      <div className="absolute bottom-3 right-3 text-xs text-slate-500">
                        Be specific for better results
                      </div>
                    </div>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium group h-14 rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                    >
                      <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      Send Message
                      <motion.div
                        className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={false}
                      />
                    </Button>
                  </motion.div>

                  {/* Privacy Note */}
                  <p className="text-xs text-slate-500 text-center">
                    Your information is secure and will only be used to respond to your inquiry.
                  </p>
                </form>
              </div>
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
                    <div className="p-2 text-blue-400">
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
                    <div className="p-2 text-blue-400">
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