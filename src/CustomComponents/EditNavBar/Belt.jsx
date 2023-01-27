import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/belt.gltf')
  return (
    <group scale={5} {...props} dispose={null}>
      <mesh geometry={nodes['Cylinder001_Material_#0_0'].geometry} material={materials.Material_0} position={[-10, 20.73, 100.00]} rotation={[-1.7, 1.57, 0]} />
    </group>
  )
}

useGLTF.preload('/belt.gltf')
