"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/useToast"

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <section id="contact" className="py-12 md:py-20 bg-blue-950/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
            Have a project in mind or want to discuss potential collaborations? Feel free to reach out to me through any
            of the channels below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-cyan-400">Contact Information</h3>

            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-900/60 p-2 md:p-3 rounded-lg mr-3 md:mr-4">
                  <Mail className="h-5 w-5 md:h-6 md:w-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold mb-1">Email</h4>
                  <p className="text-gray-300 text-sm md:text-base">mahmoud.syiam@example.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-900/60 p-2 md:p-3 rounded-lg mr-3 md:mr-4">
                  <Phone className="h-5 w-5 md:h-6 md:w-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold mb-1">Phone</h4>
                  <p className="text-gray-300 text-sm md:text-base">+20 10 9717 2927</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-900/60 p-2 md:p-3 rounded-lg mr-3 md:mr-4">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold mb-1">Location</h4>
                  <p className="text-gray-300 text-sm md:text-base">Cairo, Egypt</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mt-8 md:mt-10 mb-4 md:mb-6 text-cyan-400">Social Media</h3>

            <div className="flex space-x-3 md:space-x-4">
              <a href="https://www.linkedin.com/in/mahmoud-syiam-077a5790/"
              className="bg-blue-900/60 p-2 md:p-3 rounded-lg hover:bg-blue-800/60 transition-colors">
                <Linkedin className="h-5 w-5 md:h-6 md:w-6 text-cyan-400" />
              </a>
           
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 lg:mt-0"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-cyan-400">Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-blue-900/30 border-blue-800 focus:border-cyan-400 text-white text-sm md:text-base"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-blue-900/30 border-blue-800 focus:border-cyan-400 text-white text-sm md:text-base"
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-blue-900/30 border-blue-800 focus:border-cyan-400 text-white text-sm md:text-base"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-blue-900/30 border-blue-800 focus:border-cyan-400 text-white text-sm md:text-base min-h-[120px] md:min-h-[150px]"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-blue-950 font-medium text-sm md:text-base py-2 md:py-2.5"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

