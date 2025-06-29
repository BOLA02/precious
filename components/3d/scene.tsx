"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { AnimatedSphere } from "./animated-sphere"
import { FloatingParticles } from "./floating-particles"

// Loading fallback component
function SceneLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  )
}

// Error fallback component
function SceneError() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-32 h-32 bg-blue-500/20 rounded-full animate-pulse"></div>
      </div>
    </div>
  )
}

export function Scene() {
  try {
    return (
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          gl={{ antialias: true, alpha: true }}
          onCreated={({ gl }) => {
            gl.setClearColor("#0f172a", 0)
          }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3B82F6" />
            <directionalLight position={[0, 10, 5]} intensity={0.3} />
            <AnimatedSphere />
            <FloatingParticles />
          </Suspense>
        </Canvas>
      </div>
    )
  } catch (error) {
    console.error("3D Scene Error:", error)
    return <SceneError />
  }
}
