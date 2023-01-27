

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

 function Arrow3(props) {
  const { nodes, materials } = useGLTF('/arrow.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh geometry={nodes.Cylinder_Material002_0.geometry} material={materials['Material.002']} position={[20, -170.65, -1700]} rotation={[150, 50, 30]} scale={[20, 50, 100]} />
      </group>
    </group>
  )
}

export default Arrow3;
useGLTF.preload('/arrow.gltf')
