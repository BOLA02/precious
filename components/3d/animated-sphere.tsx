"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

export function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <mesh ref={meshRef} scale={2}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color="#3B82F6"
        roughness={0.2}
        metalness={0.8}
        emissive="#1E40AF"
        emissiveIntensity={0.1}
      />
    </mesh>
  )
}
