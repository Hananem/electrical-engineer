"use client"

import { useRef, useEffect } from "react"
import * as THREE from "three"
import { useMediaQuery } from "@/hooks/use-mobile"

export default function SphereAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = isMobile ? 40 : 30

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    // Create sphere particles
    const sphereRadius = isMobile ? 6 : 8

    const sphereParticlesCount = isMobile ? 1000 : 1500
    const sphereParticlesGeometry = new THREE.BufferGeometry()
    const sphereParticlesMaterial = new THREE.PointsMaterial({
      size: isMobile ? 0.1 : 0.12,
      color: 0x00ffff,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    })

    const sphereParticlesPositions = new Float32Array(sphereParticlesCount * 3)
    const sphereParticlesSpeeds = new Float32Array(sphereParticlesCount)

    // Create particles in a spherical arrangement
    for (let i = 0; i < sphereParticlesCount; i++) {
      const i3 = i * 3

      // Use spherical coordinates to position particles in a sphere shape
      const phi = Math.acos(-1 + (2 * i) / sphereParticlesCount)
      const theta = Math.sqrt(sphereParticlesCount * Math.PI) * phi

      // Convert to Cartesian coordinates
      sphereParticlesPositions[i3] = sphereRadius * Math.sin(phi) * Math.cos(theta)
      sphereParticlesPositions[i3 + 1] = sphereRadius * Math.sin(phi) * Math.sin(theta)
      sphereParticlesPositions[i3 + 2] = sphereRadius * Math.cos(phi)

      // Random speed for each particle
      sphereParticlesSpeeds[i] = 0.005 + Math.random() * 0.01
    }

    sphereParticlesGeometry.setAttribute("position", new THREE.BufferAttribute(sphereParticlesPositions, 3))
    const sphereParticles = new THREE.Points(sphereParticlesGeometry, sphereParticlesMaterial)
    scene.add(sphereParticles)

    // Create outer particles
    const outerParticlesCount = isMobile ? 700 : 1000
    const outerParticlesGeometry = new THREE.BufferGeometry()
    const outerParticlesMaterial = new THREE.PointsMaterial({
      size: isMobile ? 0.06 : 0.08,
      color: 0x0a84ff,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    })

    const outerParticlesPositions = new Float32Array(outerParticlesCount * 3)
    const outerParticlesSpeeds = new Float32Array(outerParticlesCount)
    const outerParticlesRadii = new Float32Array(outerParticlesCount)

    for (let i = 0; i < outerParticlesCount; i++) {
      const i3 = i * 3
      const radius = (isMobile ? 6 : 8) + Math.random() * (isMobile ? 10 : 15)
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI

      outerParticlesPositions[i3] = radius * Math.sin(phi) * Math.cos(theta)
      outerParticlesPositions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      outerParticlesPositions[i3 + 2] = radius * Math.cos(phi)

      outerParticlesSpeeds[i] = 0.01 + Math.random() * 0.02
      outerParticlesRadii[i] = radius
    }

    outerParticlesGeometry.setAttribute("position", new THREE.BufferAttribute(outerParticlesPositions, 3))
    const outerParticles = new THREE.Points(outerParticlesGeometry, outerParticlesMaterial)
    scene.add(outerParticles)

    // Add lights for ambient illumination
    const ambientLight = new THREE.AmbientLight(0x404040, 2)
    scene.add(ambientLight)

    const pointLight1 = new THREE.PointLight(0x00ffff, 10)
    pointLight1.position.set(10, 10, 10)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0x0a84ff, 10)
    pointLight2.position.set(-10, -10, -10)
    scene.add(pointLight2)

    // Handle resize
    const handleResize = () => {
      const isMobileNow = window.innerWidth < 768
      camera.position.z = isMobileNow ? 40 : 30
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener("resize", handleResize)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      // Rotate sphere particles
      sphereParticles.rotation.y += 0.003
      sphereParticles.rotation.x += 0.001

      // Animate outer particles
      const positions = outerParticlesGeometry.attributes.position.array as Float32Array

      for (let i = 0; i < outerParticlesCount; i++) {
        const i3 = i * 3

        // Get current position
        const x = positions[i3]
        const y = positions[i3 + 1]
        const z = positions[i3 + 2]

        // Calculate angle
        const angle = Math.atan2(z, x) + outerParticlesSpeeds[i]
        const radius = outerParticlesRadii[i]

        // Update position with circular motion
        positions[i3] = radius * Math.cos(angle)
        positions[i3 + 2] = radius * Math.sin(angle)

        // Add slight vertical oscillation
        positions[i3 + 1] = y + Math.sin(Date.now() * 0.001 + i) * 0.02
      }

      outerParticlesGeometry.attributes.position.needsUpdate = true

      // Pulsate the sphere particles
      const time = Date.now() * 0.001
      sphereParticles.scale.set(
        1 + Math.sin(time * 0.5) * 0.05,
        1 + Math.sin(time * 0.5) * 0.05,
        1 + Math.sin(time * 0.5) * 0.05,
      )

      renderer.render(scene, camera)
    }
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      containerRef.current?.removeChild(renderer.domElement)
      scene.clear()
    }
  }, [isMobile])

  return <div ref={containerRef} className="absolute inset-0" />
}

