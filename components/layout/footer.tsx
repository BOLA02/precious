"use client"

export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-slate-700/50 bg-slate-800/30">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-slate-400">
          © {new Date().getFullYear()} Abdulkameel Bolatito Amoho. Crafted with passion and cutting-edge technology.
        </p>
      </div>
    </footer>
  )
}
