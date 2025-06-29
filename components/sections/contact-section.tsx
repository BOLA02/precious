"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "../ui/section-header"
import { ContactForm } from "../ui/contact-form"
import { ContactLinks } from "../ui/contact-links"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="Let's"
          highlight="Connect"
          description="Ready to bring your next project to life? Let's discuss how we can create something amazing together."
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50">
            <CardContent className="p-8">
              <ContactForm />
              <div className="mt-8 pt-8 border-t border-slate-700/50">
                <ContactLinks />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
