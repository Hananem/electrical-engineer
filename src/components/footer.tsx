"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black py-8 md:py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <Link href="#home" className="text-xl md:text-2xl font-bold text-cyan-400 tracking-tight">
              Mahmoud Syiam
            </Link>
            <p className="text-gray-400 mt-2 text-sm md:text-base">Electrical Engineer & Technology Innovator</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="https://www.linkedin.com/in/mahmoud-syiam-077a5790/" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            
            </div>
            <p className="text-gray-400 text-xs md:text-sm">&copy; {currentYear} Mahmoud Syiam. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

