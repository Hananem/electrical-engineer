"use client"

import { useEffect, useRef } from "react"

export function CircuitBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.offsetWidth
        canvas.height = parent.offsetHeight
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const bgColor = "#082f49"
    const wireColor = "#0ea5e9"
    const activeWireColor = "#22d3ee"
    const componentColor = "#0891b2"

    const drawElectricalCircuit = () => {
      ctx.fillStyle = bgColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const time = Date.now() / 1000

      drawCircuitElements(ctx, canvas.width, canvas.height, time)

      ctx.globalAlpha = 0.6
      ctx.fillStyle = bgColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      requestAnimationFrame(drawElectricalCircuit)
    }

    const drawCircuitElements = (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      time: number
    ) => {
      drawWires(ctx, width, height, time)
      drawComponents(ctx, width, height, time)
      drawNodes(ctx, width, height, time)
      drawVoltageSources(ctx, width, height)
    }

    const drawWires = (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      time: number
    ) => {
      ctx.lineWidth = 2
      const gridSize = 100

      for (let y = gridSize; y < height; y += gridSize) {
        ctx.globalAlpha = 0.3
        ctx.strokeStyle = wireColor
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()

        if (Math.random() > 0.6) {
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

      for (let x = gridSize; x < width; x += gridSize) {
        ctx.globalAlpha = 0.3
        ctx.strokeStyle = wireColor
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()

        if (Math.random() > 0.6) {
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

    const drawComponents = (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      time: number
    ) => {
      const gridSize = 100

      for (let x = gridSize; x < width; x += gridSize) {
        for (let y = gridSize; y < height; y += gridSize) {
          if (Math.random() > 0.7) {
            const componentType = Math.floor(Math.random() * 5)

            ctx.save()
            ctx.translate(x, y)
            if (Math.random() > 0.5) ctx.rotate(Math.PI / 2)
            ctx.globalAlpha = 0.6
            ctx.strokeStyle = componentColor
            ctx.lineWidth = 2

            switch (componentType) {
              case 0:
                drawResistor(ctx)
                break
              case 1:
                drawCapacitor(ctx)
                break
              case 2:
                drawInductor(ctx)
                break
              case 3:
                drawDiode(ctx)
                break
              case 4:
                drawTransistor(ctx)
                break
            }

            ctx.restore()
          }
        }
      }
    }

    const drawResistor = (ctx: CanvasRenderingContext2D) => {
      const length = 40
      ctx.beginPath()
      ctx.moveTo(-length / 2, 0)
      ctx.lineTo(-length / 3, 0)
      ctx.lineTo(-length / 4, -10)
      ctx.lineTo(-length / 8, 10)
      ctx.lineTo(0, -10)
      ctx.lineTo(length / 8, 10)
      ctx.lineTo(length / 4, -10)
      ctx.lineTo(length / 3, 0)
      ctx.lineTo(length / 2, 0)
      ctx.stroke()
    }

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
      ctx.beginPath()
      ctx.moveTo(-5, -15)
      ctx.lineTo(-5, 15)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(5, -15)
      ctx.lineTo(5, 15)
      ctx.stroke()
    }

    const drawInductor = (ctx: CanvasRenderingContext2D) => {
      const length = 40
      ctx.beginPath()
      ctx.moveTo(-length / 2, 0)
      ctx.lineTo(-length / 3, 0)
      ctx.stroke()
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

    const drawDiode = (ctx: CanvasRenderingContext2D) => {
      const length = 40
      ctx.beginPath()
      ctx.moveTo(-length / 2, 0)
      ctx.lineTo(-10, 0)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(-10, 0)
      ctx.lineTo(10, -10)
      ctx.lineTo(10, 10)
      ctx.closePath()
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(10, -10)
      ctx.lineTo(10, 10)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(10, 0)
      ctx.lineTo(length / 2, 0)
      ctx.stroke()
    }

    const drawTransistor = (ctx: CanvasRenderingContext2D) => {
      const size = 20
      ctx.beginPath()
      ctx.arc(0, 0, size / 2, 0, Math.PI * 2)
      ctx.stroke()
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

    const drawNodes = (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      time: number
    ) => {
      const gridSize = 100
      ctx.fillStyle = activeWireColor

      for (let x = gridSize; x < width; x += gridSize) {
        for (let y = gridSize; y < height; y += gridSize) {
          const pulse = 0.4 + Math.sin(time * 2 + x * 0.1 + y * 0.1) * 0.2
          ctx.globalAlpha = pulse
          ctx.beginPath()
          ctx.arc(x, y, 3, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    const drawVoltageSources = (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number
    ) => {
      const numSources = 5
      ctx.strokeStyle = componentColor
      ctx.lineWidth = 2

      for (let i = 0; i < numSources; i++) {
        const x = Math.random() * width
        const y = Math.random() * height
        const size = 15

        ctx.save()
        ctx.translate(x, y)
        const rotation = Math.floor(Math.random() * 4) * (Math.PI / 2)
        ctx.rotate(rotation)

        ctx.beginPath()
        ctx.moveTo(-size / 2, -size / 2)
        ctx.lineTo(size / 2, -size / 2)
        ctx.lineTo(size / 2, size / 2)
        ctx.lineTo(-size / 2, size / 2)
        ctx.closePath()
        ctx.stroke()

        ctx.restore()
      }
    }

    drawElectricalCircuit()
    return () => window.removeEventListener("resize", resizeCanvas)
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}


