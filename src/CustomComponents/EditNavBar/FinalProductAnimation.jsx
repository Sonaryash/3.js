import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import Cardboard from "./carboard.jpg";

const FinalProduct = () => {
  const colorMap= useLoader(TextureLoader,Cardboard);
  return (<mesh rotation={[0,0,0]} position={[0,-25,-70]} scale={15}>
    <boxBufferGeometry attach="geometry" args={[3,2,2]}/>
    <meshStandardMaterial map={colorMap}/>
  </mesh>);
};
export default FinalProduct;
