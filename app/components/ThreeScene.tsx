'use client'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container || !window.WebGLRenderingContext) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(42, container.clientWidth / container.clientHeight, 0.1, 100)
    camera.position.set(0, 0, 9)

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    // Wireframe icosahedron
    const icoGeo = new THREE.IcosahedronGeometry(2.6, 1)
    const wireGeo = new THREE.WireframeGeometry(icoGeo)
    const wireMat = new THREE.LineBasicMaterial({ color: 0x00E89A, transparent: true, opacity: 0.45 })
    const wire = new THREE.LineSegments(wireGeo, wireMat)
    scene.add(wire)

    // Glowing vertex dots
    const dotGeo = new THREE.BufferGeometry()
    const positions: number[] = []
    const posAttr = icoGeo.attributes.position
    const seen = new Set<string>()
    for (let i = 0; i < posAttr.count; i++) {
      const x = posAttr.getX(i), y = posAttr.getY(i), z = posAttr.getZ(i)
      const key = `${x.toFixed(3)},${y.toFixed(3)},${z.toFixed(3)}`
      if (!seen.has(key)) { seen.add(key); positions.push(x, y, z) }
    }
    dotGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    const dots = new THREE.Points(dotGeo, new THREE.PointsMaterial({ color: 0x00FFA8, size: 0.14, transparent: true, opacity: 1, sizeAttenuation: true }))
    scene.add(dots)

    // Inner core (pulsing)
    const coreMat = new THREE.MeshBasicMaterial({ color: 0x00FFA8, transparent: true, opacity: 0.9, wireframe: true })
    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.55, 0), coreMat)
    scene.add(core)

    // Outer halo
    const haloMat = new THREE.LineBasicMaterial({ color: 0x00E89A, transparent: true, opacity: 0.08 })
    const halo = new THREE.LineSegments(new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(3.6, 1)), haloMat)
    scene.add(halo)

    // Starfield
    const starCount = 240
    const starGeo = new THREE.BufferGeometry()
    const starPos = new Float32Array(starCount * 3)
    const starColor = new Float32Array(starCount * 3)
    for (let i = 0; i < starCount; i++) {
      starPos[i * 3]     = (Math.random() - 0.5) * 40
      starPos[i * 3 + 1] = (Math.random() - 0.5) * 30
      starPos[i * 3 + 2] = (Math.random() - 0.5) * 30 - 10
      if (Math.random() > 0.85) {
        starColor[i * 3] = 0.0; starColor[i * 3 + 1] = 0.91; starColor[i * 3 + 2] = 0.6
      } else {
        const v = 0.4 + Math.random() * 0.5
        starColor[i * 3] = v; starColor[i * 3 + 1] = v; starColor[i * 3 + 2] = v
      }
    }
    starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPos, 3))
    starGeo.setAttribute('color', new THREE.Float32BufferAttribute(starColor, 3))
    const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ size: 0.05, transparent: true, opacity: 0.7, vertexColors: true, sizeAttenuation: true }))
    scene.add(stars)

    // Orbiting satellite
    const sat = new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 12), new THREE.MeshBasicMaterial({ color: 0x00FFA8 }))
    scene.add(sat)

    // Mouse parallax
    let targetRotX = 0, targetRotY = 0
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      targetRotY = ((e.clientX - rect.left) / rect.width - 0.5) * 2 * 0.4
      targetRotX = ((e.clientY - rect.top) / rect.height - 0.5) * 2 * 0.3
    }
    const onMouseLeave = () => { targetRotX = 0; targetRotY = 0 }
    container.addEventListener('mousemove', onMouseMove)
    container.addEventListener('mouseleave', onMouseLeave)

    let t = 0
    let animId: number
    function animate() {
      animId = requestAnimationFrame(animate)
      t += 0.01

      wire.rotation.y += 0.0035
      wire.rotation.x += 0.0012
      dots.rotation.y += 0.0035
      dots.rotation.x += 0.0012
      halo.rotation.y -= 0.0015
      halo.rotation.x += 0.0008

      wire.rotation.y += (targetRotY - wire.rotation.y * 0.02) * 0.002
      wire.rotation.x += (targetRotX - wire.rotation.x * 0.02) * 0.002
      dots.rotation.y = wire.rotation.y
      dots.rotation.x = wire.rotation.x

      const pulse = 1 + Math.sin(t * 2) * 0.08
      core.scale.set(pulse, pulse, pulse)
      core.rotation.y -= 0.01
      core.rotation.z += 0.008

      sat.position.x = Math.cos(t * 0.7) * 3.2
      sat.position.z = Math.sin(t * 0.7) * 3.2
      sat.position.y = Math.sin(t * 0.4) * 0.6

      stars.rotation.y -= 0.0003

      renderer.render(scene, camera)
    }
    animate()

    let resizeTimer: ReturnType<typeof setTimeout>
    const onResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        camera.aspect = container.clientWidth / container.clientHeight
        camera.updateProjectionMatrix()
        renderer.setSize(container.clientWidth, container.clientHeight)
      }, 100)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      clearTimeout(resizeTimer)
      container.removeEventListener('mousemove', onMouseMove)
      container.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={containerRef} style={{ position: 'absolute', inset: 0 }} />
}
