"use client"
import { motion } from "framer-motion"
import SphereAnimation from "@/components/sphere-animation"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 z-0">
        <SphereAnimation />
      </div>
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl mx-auto text-center">
         
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 text-white"
            style={{
              textShadow: "0 0 10px #06b6d4, 0 0 20px #06b6d4, 0 0 30px #06b6d4",
              animation: "glow 2s ease-in-out infinite alternate",
            }}
          >
            Mahmoud Syiam
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 md:mb-8 text-blue-200"
          >
            Electrical Power and Control Engineer
          </motion.h3>
        
        </div>
      </div>
    </section>
  )
}

