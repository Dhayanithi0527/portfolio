import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Suspense, useState, useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'

const AnimeDesk = ({ isMobile }) => {
  const groupRef = useRef()

  // tiny idle rotation instead of Float
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.05 - 0.5
    }
  })

  // shared materials (VERY important for performance)
  const materials = useMemo(() => ({
    desk: new THREE.MeshToonMaterial({ color: "#f1f5f9" }),
    dark: new THREE.MeshToonMaterial({ color: "#1e293b" }),
    light: new THREE.MeshToonMaterial({ color: "#cbd5e1" }),
    monitor: new THREE.MeshToonMaterial({ color: "#0f172a" }),
    cyan: new THREE.MeshBasicMaterial({ color: "#06b6d4", toneMapped: false }),
    plant: new THREE.MeshToonMaterial({ color: "#22c55e" }),
    pot: new THREE.MeshToonMaterial({ color: "#f97316" })
  }), [])

  const scale = isMobile ? 0.7 : 1

  return (
    <group ref={groupRef} position={[0, -1, 0]} scale={scale}>
      
      {/* DESK */}
      <mesh position={[0, -0.1, 0]} material={materials.desk}>
        <boxGeometry args={[5, 0.2, 3]} />
      </mesh>

      {/* MONITOR */}
      <mesh position={[0, 1.2, -1]} material={materials.monitor}>
        <boxGeometry args={[3.2, 1.8, 0.1]} />
      </mesh>

      {/* SCREEN */}
      <mesh position={[0, 1.2, -0.94]} material={materials.cyan}>
        <planeGeometry args={[3, 1.6]} />
      </mesh>

      {/* KEYBOARD */}
      <mesh position={[0, 0.1, 0.5]} material={materials.light}>
        <boxGeometry args={[1.5, 0.05, 0.6]} />
      </mesh>

      {/* MOUSE */}
      <mesh position={[1.2, 0.1, 0.5]} material={materials.cyan}>
        <boxGeometry args={[0.25, 0.05, 0.4]} />
      </mesh>

      {/* PLANT */}
      <mesh position={[-1.8, 0.4, -0.8]} material={materials.pot}>
        <cylinderGeometry args={[0.2, 0.2, 0.4, 8]} />
      </mesh>
      <mesh position={[-1.8, 0.8, -0.8]} material={materials.plant}>
        <sphereGeometry args={[0.25, 8, 8]} />
      </mesh>

    </group>
  )
}

const HeroScene = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  return (
    <Canvas
      className="h-full w-full"
      dpr={1}                 // 👈 huge performance gain
      shadows={false}         // 👈 disable shadows
      gl={{ antialias: false }} // 👈 faster
    >
      <PerspectiveCamera makeDefault position={[0, 2, 6]} fov={45} />

      {/* simple lighting */}
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <Suspense fallback={null}>
        <AnimeDesk isMobile={isMobile} />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  )
}

export default HeroScene