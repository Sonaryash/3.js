

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

 function Arrow2(props) {
  const { nodes, materials } = useGLTF('/arrow.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh geometry={nodes.Cylinder_Material002_0.geometry} material={materials['Material.002']} position={[1050, -800.65, -1700]} rotation={[0, 190, 0]} scale={[20, 50, 100]} />
      </group>
    </group>
  )
}

export default Arrow2;
useGLTF.preload('/arrow.gltf')
