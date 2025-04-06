"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { CircuitBackground } from "@/components/circuit-background"

const timelineEvents = [
  {
    year: "Sep 2023 – Aug 2024",
    title: "Technical Electrical Field Sales Engineer",
    subtitle: "MAS For Engineering & Trading Co. | Hybrid",
    description: (
      <>
        <p className="mb-3">
          Specialized in energy management, industrial automation (PLC, HMI, SCADA), and electrical panel design.
        </p>
        <p className="mb-3">Provided technical solutions & sales support for electrical products.</p>
        <p className="mb-3">Attended international energy exhibitions & seminars.</p>
      </>
    ),
    skills: ["Sales Strategy", "EMS", "System Integration", "Market Analysis", "Business Development"],
  },
  {
    year: "Mar 2023 - Aug 2023",
    title: "Light Current Site Engineer",
    subtitle: "International Control Systems Co. | Cairo, Egypt | Hybrid",
    description: (
      <>
        <p className="mb-3">
          Led site inspections, installations, testing, and commissioning for fire alarm, sound, lighting, and public
          address systems.
        </p>
        <p className="mb-3">Managed system integration and provided periodic maintenance for fire alarm systems.</p>
        <p className="mb-3">Handled hardware programming and site coordination.</p>
      </>
    ),
    skills: [
      "Project Commissioning",
      "System Integration",
      "Maintenance",
      "AutoCAD",
      "Control Systems",
      "Sound & Fire Alarm Systems",
    ],
  },
  {
    year: "Aug 2020 - Sep 2020",
    title: "Electrical Engineering Trainee",
    subtitle: "ELSEWCOV, Elsewedy Electric | 10th of Ramadan, Sharjah, Egypt | On-site",
    description: (
      <>
        <p className="mb-3">
          Gained experience in electrical design, transformer manufacturing, quality control, testing, and both
          electrical and mechanical design.
        </p>
        <p className="mb-3">Assisted in logistics, project management, sales support, and maintenance tasks.</p>
        <p className="mb-3">
          <strong>Certificate:</strong> Achievement in Transformer Engineering (ELSEWEDY TRANSFORMERS).
        </p>
      </>
    ),
    skills: [
      "Quality Control",
      "Electrical Engineering",
      "Mechanical Design",
      "Electrical Testing",
      "Energy",
      "Product Knowledge",
      "Logistics",
      "Project Management",
      "Power Systems",
    ],
  },
  {
    year: "Jun 2019 - Aug 2019",
    title: "Electrical Engineering Trainee",
    subtitle: "Medstar Group | Sharjah, Egypt | On-site",
    description: (
      <p className="mb-3">
        Gained hands-on experience in electrical maintenance, working with motors, VFDs, inverters, transformers, and
        power distribution systems.
      </p>
    ),
    skills: ["Electrical Maintenance", "Power Distribution", "Circuit Analysis", "Energy", "Field Service Engineering"],
  },
  {
    year: "Jun 2017 – Aug 2017",
    title: "Electrical Engineering Trainee",
    subtitle: "General Authority for Educational Buildings (GAEB) | On-site, Giza",
    description: (
      <p className="mb-3">
        Focused on load calculations, cable sizing, earthing, and Egyptian Electrical Code compliance.
      </p>
    ),
    skills: ["Power Distribution", "Electrical Code Compliance", "Site Inspections"],
  },
  {
    year: "Jun 2016 – Aug 2016",
    title: "Electrical Engineering Trainee",
    subtitle: "ArabTech for Electrical Industries | On-site, Sharkia",
    description: (
      <p className="mb-3">Trained in switchgear, MCCs, ATS, power factor correction, and infrastructure panels.</p>
    ),
    skills: ["Panel Building", "Low Voltage Systems", "Power Systems Engineering"],
  },
  {
    year: "2018 - 2022",
    title: "Bachelor's in Electrical Engineering & Computer Science",
    subtitle: "Higher Technological Institute",
    description: <p className="mb-3">Specialized in Energy, Maintenance & Repair.</p>,
    skills: ["Energy Systems", "Control Systems", "Electrical Design"],
  },
  {
    year: "2014 - 2018",
    title: "Electrical, Electronic & Communications Engineering",
    subtitle: "Faculty of Electronic Engineering, Menoufia University",
    description: <p className="mb-3">Specialized in Energy and Power Engineering.</p>,
    skills: ["Energy Systems", "Control Systems", "Electrical Design"],
  },
]

export default function Timeline() {
  return (
    <section id="timeline" className="py-12 md:py-20 relative bg-blue-950">
      {/* Circuit Background */}
      <CircuitBackground />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            My <span className="text-cyan-400">Journey</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
            Professional experience and educational background in electrical engineering.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line - hidden on mobile, visible on md and up */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 to-blue-700 hidden md:block"></div>

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-8 md:mb-16 ${
                index % 2 === 0 ? "md:flex md:flex-row md:justify-end" : "md:flex md:flex-row-reverse md:justify-end"
              }`}
            >
              {/* Timeline dot - hidden on mobile */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-cyan-400 border-4 border-blue-900 z-10 hidden md:block">
                {/* Pulse effect */}
                <div
                  className="absolute inset-0 rounded-full animate-ping bg-cyan-400/50"
                  style={{ animationDuration: "3s" }}
                ></div>
              </div>

              {/* Mobile timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-700 md:hidden"></div>

              {/* Mobile timeline dot */}
              <div className="absolute left-4 top-6 transform -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 border-2 border-blue-900 z-10 md:hidden">
                {/* Pulse effect */}
                <div
                  className="absolute inset-0 rounded-full animate-ping bg-cyan-400/50"
                  style={{ animationDuration: "3s" }}
                ></div>
              </div>

              <div className={`w-full md:w-5/12 pl-10 md:pl-0 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                <div className="bg-blue-950/70 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-blue-800 shadow-lg hover:shadow-cyan-900/20 transition-all duration-300">
                  <div className="text-cyan-400 font-bold text-lg md:text-xl mb-2">{event.title}</div>
                  <div className="text-blue-200 font-semibold text-sm md:text-base mb-2 md:mb-3">{event.year}</div>
                  <div className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4">{event.subtitle}</div>
                  <div className="text-gray-300 text-sm md:text-base">{event.description}</div>

                  <div className="flex flex-wrap gap-1.5 md:gap-2 mt-3 md:mt-4">
                    {event.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="bg-blue-900/50 text-cyan-300 border-cyan-800 text-xs md:text-sm px-2 py-0.5"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

