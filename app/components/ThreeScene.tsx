'use client'
import { useEffect, useRef } from 'react'

export default function ThreeScene({ className }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return
    const container = mountRef.current

    let animId: number
    let renderer: import('three').WebGLRenderer

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    import('three').then((THREE) => {
      const scene = new THREE.Scene()
      const w = container.clientWidth
      const h = container.clientHeight
      const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100)
      camera.position.z = 4.5

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setSize(w, h)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setClearColor(0x000000, 0)
      container.appendChild(renderer.domElement)

      const geo = new THREE.IcosahedronGeometry(1.6, 1)
      const edges = new THREE.EdgesGeometry(geo)
      const mat = new THREE.LineBasicMaterial({
        color: 0x00e89a,
        transparent: true,
        opacity: 0.55,
      })
      const wireframe = new THREE.LineSegments(edges, mat)
      scene.add(wireframe)

      // Subtle inner glow sphere
      const innerGeo = new THREE.SphereGeometry(1.5, 8, 8)
      const innerMat = new THREE.MeshBasicMaterial({
        color: 0x00e89a,
        transparent: true,
        opacity: 0.03,
        wireframe: false,
      })
      scene.add(new THREE.Mesh(innerGeo, innerMat))

      const ro = new ResizeObserver(() => {
        const nw = container.clientWidth
        const nh = container.clientHeight
        camera.aspect = nw / nh
        camera.updateProjectionMatrix()
        renderer.setSize(nw, nh)
      })
      ro.observe(container)

      let t = 0
      const animate = () => {
        animId = requestAnimationFrame(animate)
        if (!prefersReduced) {
          t += 0.003
          wireframe.rotation.y = t
          wireframe.rotation.x = t * 0.35
        }
        renderer.render(scene, camera)
      }
      animate()

      return () => {
        ro.disconnect()
        cancelAnimationFrame(animId)
        renderer.dispose()
        container.removeChild(renderer.domElement)
      }
    })

    return () => {
      cancelAnimationFrame(animId)
      if (renderer) renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} className={className} />
}
