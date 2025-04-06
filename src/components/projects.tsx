"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Briefcase, History, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { JSX } from "react/jsx-runtime"

// Define types for different project items
type BaseProjectItem = {
  title: string
  organization: string
  description: string
  tags: string[]
}

type RegularProjectItem = BaseProjectItem & {
  period: string
  features?: never // Explicitly mark as not available
}

type GraduationProjectItem = BaseProjectItem & {
  period?: never // Explicitly mark as not available
  features: string[]
}

type ProjectItem = RegularProjectItem | GraduationProjectItem

type Section = {
  id: string
  title: string
  icon: JSX.Element
  items: ProjectItem[]
}

// Define the different sections of projects/experience
const sections: Section[] = [
  {
    id: "current",
    title: "Current Roles",
    icon: <Briefcase className="h-5 w-5 md:h-6 md:w-6 text-cyan-400 mr-2" />,
    items: [
      {
        title: "Electrical Systems Manager",
        organization: "Artoc Auto Club – Mokattam City",
        period: "Jun 2024 – Present",
        description: "Responsible for all electrical systems within the facility.",
        tags: ["Electrical Systems", "Facility Management", "Maintenance"],
      },
      {
        title: "Electrical Systems Manager",
        organization: "Raville Compound – Nasr City",
        period: "Jun 2024 – Present",
        description: "Responsible for all electrical systems throughout the compound.",
        tags: ["Electrical Systems", "Residential", "Maintenance"],
      },
    ],
  },
  {
    id: "previous",
    title: "Previous Projects",
    icon: <History className="h-5 w-5 md:h-6 md:w-6 text-cyan-400 mr-2" />,
    items: [
      {
        title: "Energy Management System (EMS)",
        organization: "Mirsan, Badr City",
        period: "Jan 2024 – Feb 2024",
        description:
          "Implemented an energy management system for optimizing power consumption and distribution. Associated with MAS For Engineering & Trading Co.",
        tags: ["EMS", "Power Optimization", "Energy Efficiency"],
      },
      {
        title: "Four-Zone Sound System",
        organization: "Seashell, North Coast",
        period: "Jul 2023",
        description:
          "Designed and installed a sophisticated four-zone sound system for a coastal property. Associated with International Control Systems Co. (ICS).",
        tags: ["Audio Systems", "Zone Control", "Installation"],
      },
      {
        title: "Conventional Fire Alarm System",
        organization: "Atsa, Fayoum",
        period: "Jun 2023",
        description:
          "Implemented a conventional fire alarm system for safety and compliance. Associated with International Control Systems Co. (ICS).",
        tags: ["Fire Alarm", "Safety Systems", "Compliance"],
      },
    ],
  },
  {
    id: "graduation",
    title: "Graduation Project",
    icon: <GraduationCap className="h-5 w-5 md:h-6 md:w-6 text-cyan-400 mr-2" />,
    items: [
      {
        title: "Automation of Clinical and Inventory Monitoring and Service Requesting",
        organization: "Higher Technological Institute",
        description:
          "Developed an Android application enabling patients to request an ambulance, a specific blood type bag, or book a hospital bed. Users could view the fastest route to the nearest available hospital using Google Maps.",
        features: [
          "IR sensors indicated bed availability on a 5-bed mockup",
          "LED indicators updated from the database upon patient requests",
          "Extended concept to check ambulance and blood bag availability",
        ],
        tags: ["Arduino", "Google Firebase", "Android Studio", "Google Maps API"],
      },
    ],
  },
]

export default function Projects() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const [currentItemIndex, setCurrentItemIndex] = useState(0)

  const currentSection = sections[currentSectionIndex]
  const currentItems = currentSection.items
  const currentItem = currentItems[currentItemIndex]

  const nextItem = () => {
    if (currentItemIndex < currentItems.length - 1) {
      setCurrentItemIndex(currentItemIndex + 1)
    } else if (currentSectionIndex < sections.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1)
      setCurrentItemIndex(0)
    }
  }

  const prevItem = () => {
    if (currentItemIndex > 0) {
      setCurrentItemIndex(currentItemIndex - 1)
    } else if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1)
      setCurrentItemIndex(sections[currentSectionIndex - 1].items.length - 1)
    }
  }

  // Calculate total items for pagination
  const totalItems = sections.reduce((acc, section) => acc + section.items.length, 0)

  // Calculate current overall item index for pagination
  const calculateOverallIndex = () => {
    let index = 0
    for (let i = 0; i < currentSectionIndex; i++) {
      index += sections[i].items.length
    }
    return index + currentItemIndex
  }

  const currentOverallIndex = calculateOverallIndex()

  // Type guard to check if the item has features
  const hasFeatures = (item: ProjectItem): item is GraduationProjectItem => {
    return "features" in item && Array.isArray(item.features)
  }

  // Type guard to check if the item has a period
  const hasPeriod = (item: ProjectItem): item is RegularProjectItem => {
    return "period" in item && typeof item.period === "string"
  }

  return (
    <section id="projects" className="py-12 md:py-20 bg-black/70">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            Work Experience & <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
            A showcase of my professional roles and significant projects, demonstrating my expertise and experience in
            electrical engineering.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto px-4 md:px-0">
          {/* Section title */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-4 flex items-center justify-center"
          >
            <h3 className="text-xl md:text-2xl font-bold text-cyan-400 flex items-center">
              {currentSection.icon}
              {currentSection.title}
            </h3>
          </motion.div>

          {/* Project slider */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentSectionIndex}-${currentItemIndex}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-blue-950/40 border-blue-900 h-full">
                  <CardContent className="p-5 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-cyan-400">{currentItem.title}</h3>

                    {currentItem.organization && (
                      <p className="text-blue-200 text-sm md:text-base mb-1 md:mb-2">{currentItem.organization}</p>
                    )}

                    {hasPeriod(currentItem) && (
                      <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4">{currentItem.period}</p>
                    )}

                    <p className="text-gray-300 mb-4 md:mb-5 text-sm md:text-base">{currentItem.description}</p>

                    {hasFeatures(currentItem) && (
                      <div className="mb-4 md:mb-5">
                        <h4 className="text-white font-semibold mb-2 text-sm md:text-base">Key Features:</h4>
                        <ul className="list-disc pl-5 text-gray-300 text-sm md:text-base space-y-1">
                          {currentItem.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {currentItem.tags.map((tag, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="bg-blue-900/50 text-cyan-300 border-cyan-800 text-xs md:text-sm"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 flex w-full justify-between px-2 md:px-6">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-blue-900/70 border-blue-800 text-cyan-400 hover:bg-blue-800/80 hover:text-cyan-300"
              onClick={prevItem}
              disabled={currentSectionIndex === 0 && currentItemIndex === 0}
            >
              <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
              <span className="sr-only">Previous</span>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-blue-900/70 border-blue-800 text-cyan-400 hover:bg-blue-800/80 hover:text-cyan-300"
              onClick={nextItem}
              disabled={currentSectionIndex === sections.length - 1 && currentItemIndex === currentItems.length - 1}
            >
              <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
              <span className="sr-only">Next</span>
            </Button>
          </div>

          {/* Pagination indicators */}
          <div className="flex justify-center mt-4 md:mt-6 space-x-2">
            {Array.from({ length: totalItems }).map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                  index === currentOverallIndex ? "bg-cyan-400" : "bg-blue-800"
                }`}
                aria-label={`Item ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

