"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  Lightbulb,
  Cpu,
  Zap,
  BarChart,
  Users,
  GraduationCap,
  PenToolIcon as Tool,
  Search,
  CircuitBoardIcon as Circuit,
  Sliders,
  TestTube,
  Cog,
  Lamp,
  Wrench,
} from "lucide-react"
import Image from "next/image"

const skills = [
  {
    icon: <Lightbulb className="h-6 w-6 md:h-8 md:w-8 text-cyan-400" />,
    title: "Electrical Design",
    description:
      "Expert in designing electrical systems for various applications, from building services to industrial installations.",
  },
  {
    icon: <Cpu className="h-6 w-6 md:h-8 md:w-8 text-cyan-400" />,
    title: "Control Systems",
    description:
      "Proficient in designing and implementing control systems for automation and process control applications.",
  },
  {
    icon: <Zap className="h-6 w-6 md:h-8 md:w-8 text-cyan-400" />,
    title: "Power Systems",
    description:
      "Specialized in power system analysis, protection, and optimization for reliable and efficient energy distribution.",
  },
  {
    icon: <Cog className="h-6 w-6 md:h-8 md:h-8 text-cyan-400" />,
    title: "System Integration",
    description:
      "Skilled in integrating various electrical systems and components to create cohesive and efficient solutions.",
  },
  {
    icon: <Wrench className="h-6 w-6 md:h-8 md:h-8 text-cyan-400" />,
    title: "Maintenance & Repair",
    description:
      "Experienced in diagnosing, maintaining, and repairing electrical systems to ensure optimal performance and longevity.",
  },
  {
    icon: <Search className="h-6 w-6 md:h-8 md:h-8 text-cyan-400" />,
    title: "Research & Circuit Analysis",
    description:
      "Capable of conducting in-depth research and analyzing complex electrical circuits to solve engineering challenges.",
  },
  {
    icon: <Tool className="h-6 w-6 md:h-8 md:h-8 text-cyan-400" />,
    title: "As-Built Drawings",
    description:
      "Proficient in creating accurate as-built drawings that document existing electrical installations and modifications.",
  },
  {
    icon: <Circuit className="h-6 w-6 md:h-8 md:h-8 text-cyan-400" />,
    title: "PCB Design",
    description:
      "Skilled in designing printed circuit boards for various electronic applications with attention to detail and functionality.",
  },
  {
    icon: <Lamp className="h-6 w-6 md:h-8 md:h-8 text-cyan-400" />,
    title: "Lighting Control",
    description:
      "Experienced in designing and implementing advanced lighting control systems for energy efficiency and user comfort.",
  },
  {
    icon: <TestTube className="h-6 w-6 md:h-8 md:h-8 text-cyan-400" />,
    title: "Electrical Testing",
    description:
      "Proficient in conducting comprehensive electrical testing to ensure safety, compliance, and performance of systems.",
  },
  {
    icon: <Sliders className="h-6 w-6 md:h-8 md:h-8 text-cyan-400" />,
    title: "Automation",
    description:
      "Skilled in implementing automation solutions that improve efficiency, reduce costs, and enhance system performance.",
  },
  {
    icon: <BarChart className="h-6 w-6 md:h-8 md:w-8 text-cyan-400" />,
    title: "Energy Efficiency",
    description:
      "Dedicated to implementing energy-efficient solutions that reduce consumption and environmental impact.",
  },
  {
    icon: <Users className="h-6 w-6 md:h-8 md:w-8 text-cyan-400" />,
    title: "Team Leadership",
    description: "Experienced in leading engineering teams, coordinating projects, and mentoring junior engineers.",
  },
  {
    icon: <GraduationCap className="h-6 w-6 md:h-8 md:w-8 text-cyan-400" />,
    title: "Continuous Learning",
    description:
      "Committed to staying updated with the latest technologies and advancements in electrical engineering.",
  },
]

export default function About() {
  return (
    <section id="about" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
            I'm a passionate electrical engineer with expertise in various domains of electrical engineering, committed
            to creating innovative and sustainable solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-cyan-400">My Background</h3>
            <p className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base">
  With over 2 years of experience in the electrical engineering field, I&#39;ve worked on a diverse range of
  projects from power distribution systems to renewable energy integration and smart building technologies.
</p>
<p className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base">
  My educational background includes a Bachelor&#39;s degree in Electrical Engineering with a specialization in
  Energy, Maintenance &amp; Repair, which has provided me with a strong foundation in both theoretical knowledge
  and practical applications.
</p>
<p className="text-gray-300 text-sm md:text-base">
  I&#39;m driven by the challenge of creating electrical systems that are not only efficient and reliable but
  also sustainable and future-proof. My approach combines technical expertise with innovative thinking to
  deliver solutions that exceed expectations.
</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-cyan-400 shadow-lg shadow-cyan-900/30">
              <Image src="/images/profile.jpg" alt="Mahmoud Syiam" fill className="object-cover" priority />
            </div>
          </motion.div>
        </div>

        <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center text-cyan-400">
  My Skills &amp; Expertise
</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="bg-blue-900/40 border-blue-800 h-full">
                <CardContent className="p-4 md:p-6">
                  <div className="mb-3 md:mb-4">{skill.icon}</div>
                  <h4 className="text-lg md:text-xl font-bold mb-2 text-white">{skill.title}</h4>
                  <p className="text-gray-300 text-sm md:text-base">{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

