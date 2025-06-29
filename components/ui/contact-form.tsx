"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export function ContactForm() {
  return (
    <form className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
          <Input
            className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
          <Input
            type="email"
            className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500"
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
        <Input
          className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500"
          placeholder="Project discussion"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
        <Textarea
          rows={5}
          className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500 resize-none"
          placeholder="Tell me about your project..."
        />
      </div>
      <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium group">
        <Send className="mr-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        Send Message
      </Button>
    </form>
  )
}
