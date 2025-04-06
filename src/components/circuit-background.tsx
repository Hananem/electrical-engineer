"use client"

import { useEffect, useRef } from "react"

export function CircuitBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size to match parent
    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.offsetWidth
        canvas.height = parent.offsetHeight
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Circuit colors
    const bgColor = "#082f49" // dark blue
    const wireColor = "#0ea5e9" // cyan
    const activeWireColor = "#22d3ee" // bright cyan
    const componentColor = "#0891b2" // darker cyan

    // Draw electrical circuit
    const drawElectricalCircuit = () => {
      // Clear canvas
      ctx.fillStyle = bgColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const time = Date.now() / 1000

      // Draw circuit elements
      drawCircuitElements(ctx, canvas.width, canvas.height, time)

      // Add a semi-transparent overlay to ensure content readability
      ctx.globalAlpha = 0.6
      ctx.fillStyle = bgColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Request next frame
      requestAnimationFrame(drawElectricalCircuit)
    }

    // Function to draw circuit elements
    const drawCircuitElements = (ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
      // Draw horizontal and vertical wires
      drawWires(ctx, width, height, time)

      // Draw circuit components
      drawComponents(ctx, width, height, time)

      // Draw connection nodes
      drawNodes(ctx, width, height, time)

      // Draw voltage sources
      drawVoltageSources(ctx, width, height, time)
    }

    // Draw wires
    const drawWires = (ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
      ctx.lineWidth = 2

      // Create a grid of wires
      const gridSize = 100

      // Horizontal wires
      for (let y = gridSize; y < height; y += gridSize) {
        // Regular wires
        ctx.globalAlpha = 0.3
        ctx.strokeStyle = wireColor
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()

        // Add some active wires with flowing current effect
        if (Math.random() > 0.6) {
          // Create flowing current effect
          const dashOffset = (time * 30) % 40
          ctx.globalAlpha = 0.6
          ctx.strokeStyle = activeWireColor
          ctx.setLineDash([5, 15])
          ctx.lineDashOffset = -dashOffset

          ctx.beginPath()
          ctx.moveTo(Math.random() * width * 0.3, y)
          ctx.lineTo(Math.random() * width * 0.7 + width * 0.3, y)
          ctx.stroke()

          ctx.setLineDash([])
        }
      }

      // Vertical wires
      for (let x = gridSize; x < width; x += gridSize) {
        // Regular wires
        ctx.globalAlpha = 0.3
        ctx.strokeStyle = wireColor
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()

        // Add some active wires with flowing current effect
        if (Math.random() > 0.6) {
          // Create flowing current effect
          const dashOffset = (time * 30) % 40
          ctx.globalAlpha = 0.6
          ctx.strokeStyle = activeWireColor
          ctx.setLineDash([5, 15])
          ctx.lineDashOffset = -dashOffset

          ctx.beginPath()
          ctx.moveTo(x, Math.random() * height * 0.3)
          ctx.lineTo(x, Math.random() * height * 0.7 + height * 0.3)
          ctx.stroke()

          ctx.setLineDash([])
        }
      }
    }

    // Draw circuit components
    const drawComponents = (ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
      const gridSize = 100

      // Place components at grid intersections
      for (let x = gridSize; x < width; x += gridSize) {
        for (let y = gridSize; y < height; y += gridSize) {
          // Only draw components at some intersections
          if (Math.random() > 0.7) {
            const componentType = Math.floor(Math.random() * 5)

            ctx.save()
            ctx.translate(x, y)

            // Randomly rotate some components
            if (Math.random() > 0.5) {
              ctx.rotate(Math.PI / 2)
            }

            ctx.globalAlpha = 0.6
            ctx.strokeStyle = componentColor
            ctx.lineWidth = 2

            // Draw different component types
            switch (componentType) {
              case 0:
                // Resistor (zigzag)
                drawResistor(ctx)
                break
              case 1:
                // Capacitor (two parallel lines)
                drawCapacitor(ctx)
                break
              case 2:
                // Inductor (coil)
                drawInductor(ctx)
                break
              case 3:
                // Diode (triangle with line)
                drawDiode(ctx)
                break
              case 4:
                // Transistor
                drawTransistor(ctx)
                break
            }

            ctx.restore()
          }
        }
      }
    }

    // Draw resistor
    const drawResistor = (ctx: CanvasRenderingContext2D) => {
      const length = 40

      ctx.beginPath()
      ctx.moveTo(-length / 2, 0)
      ctx.lineTo(-length / 3, 0)

      // Zigzag pattern
      ctx.lineTo(-length / 4, -10)
      ctx.lineTo(-length / 8, 10)
      ctx.lineTo(0, -10)
      ctx.lineTo(length / 8, 10)
      ctx.lineTo(length / 4, -10)
      ctx.lineTo(length / 3, 0)

      ctx.lineTo(length / 2, 0)
      ctx.stroke()
    }

    // Draw capacitor
    const drawCapacitor = (ctx: CanvasRenderingContext2D) => {
      const length = 40

      ctx.beginPath()
      ctx.moveTo(-length / 2, 0)
      ctx.lineTo(-5, 0)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(5, 0)
      ctx.lineTo(length / 2, 0)
      ctx.stroke()

      // Capacitor plates
      ctx.beginPath()
      ctx.moveTo(-5, -15)
      ctx.lineTo(-5, 15)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(5, -15)
      ctx.lineTo(5, 15)
      ctx.stroke()
    }

    // Draw inductor
    const drawInductor = (ctx: CanvasRenderingContext2D) => {
      const length = 40

      ctx.beginPath()
      ctx.moveTo(-length / 2, 0)
      ctx.lineTo(-length / 3, 0)
      ctx.stroke()

      // Coil
      ctx.beginPath()
      ctx.arc(-length / 4, 0, 5, 0, Math.PI, true)
      ctx.stroke()

      ctx.beginPath()
      ctx.arc(-length / 8, 0, 5, Math.PI, 0, true)
      ctx.stroke()

      ctx.beginPath()
      ctx.arc(0, 0, 5, 0, Math.PI, true)
      ctx.stroke()

      ctx.beginPath()
      ctx.arc(length / 8, 0, 5, Math.PI, 0, true)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(length / 4, 0)
      ctx.lineTo(length / 2, 0)
      ctx.stroke()
    }

    // Draw diode
    const drawDiode = (ctx: CanvasRenderingContext2D) => {
      const length = 40

      ctx.beginPath()
      ctx.moveTo(-length / 2, 0)
      ctx.lineTo(-10, 0)
      ctx.stroke()

      // Triangle
      ctx.beginPath()
      ctx.moveTo(-10, 0)
      ctx.lineTo(10, -10)
      ctx.lineTo(10, 10)
      ctx.closePath()
      ctx.stroke()

      // Line
      ctx.beginPath()
      ctx.moveTo(10, -10)
      ctx.lineTo(10, 10)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(10, 0)
      ctx.lineTo(length / 2, 0)
      ctx.stroke()
    }

    // Draw transistor
    const drawTransistor = (ctx: CanvasRenderingContext2D) => {
      const size = 20

      // Circle
      ctx.beginPath()
      ctx.arc(0, 0, size / 2, 0, Math.PI * 2)
      ctx.stroke()

      // Leads
      ctx.beginPath()
      ctx.moveTo(-size, -size / 2)
      ctx.lineTo(-size / 2, -size / 2)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(-size, size / 2)
      ctx.lineTo(-size / 2, size / 2)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(size / 2, 0)
      ctx.lineTo(size, 0)
      ctx.stroke()
    }

    // Draw connection nodes
    const drawNodes = (ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
      const gridSize = 100

      ctx.fillStyle = activeWireColor

      // Draw nodes at grid intersections
      for (let x = gridSize; x < width; x += gridSize) {
        for (let y = gridSize; y < height; y += gridSize) {
          // Pulsing effect
          const pulse = 0.4 + Math.sin(time * 2 + x * 0.1 + y * 0.1) * 0.2
          ctx.globalAlpha = pulse

          // Draw node
          ctx.beginPath()
          ctx.arc(x, y, 3, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    // Draw voltage sources
    const drawVoltageSources = (ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
      const numSources = 5

      ctx.strokeStyle = componentColor
      ctx.lineWidth = 2

      for (let i = 0; i < numSources; i++) {
        const x = Math.random() * width
        const y = Math.random() * height
        const size = 15

        ctx.save()
        ctx.translate(x, y)

        // Randomly rotate
        const rotation = Math.floor(Math.random() * 4) * (Math.PI / 2)
        ctx.rotate(rotation)

        ctx.globalAlpha = 0.6

        // Circle
        ctx.beginPath()
        ctx.arc(0, 0, size, 0, Math.PI * 2)
        ctx.stroke()

        // Plus and minus symbols
        ctx.beginPath()
        ctx.moveTo(-size / 3, 0)
        ctx.lineTo(size / 3, 0)
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(0, -size / 3)
        ctx.lineTo(0, size / 3)
        ctx.stroke()

        // Connecting wires
        ctx.beginPath()
        ctx.moveTo(-size, 0)
        ctx.lineTo(-size * 2, 0)
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(size, 0)
        ctx.lineTo(size * 2, 0)
        ctx.stroke()

        ctx.restore()
      }
    }

    // Start animation
    drawElectricalCircuit()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />
}

