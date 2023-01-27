import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import Cardboard2 from "./carboard.png";
import { SpotLight } from "@react-three/drei";

const FinalProduct2 = (Props) => {
  const {layerCounter}=Props
  const colorMap= useLoader(TextureLoader,Cardboard2);
  if(layerCounter===1){
    return(<>
 <SpotLight position={[10,15,10]} angle={0.3}>
  <mesh rotation={[0,0,0]} position={[0,-20,-70]} scale={[20,10,5]}>
    <boxBufferGeometry attach="geometry" args={[3,2,2]}/>
    <meshStandardMaterial map={colorMap}/>
  </mesh>
  </SpotLight>
  <mesh rotation={[0,0,0]} position={[0,-30,-60]} scale={[20,3,6]}>
    <boxBufferGeometry attach="geometry" args={[3,2,2]}/>
    <meshLambertMaterial color="red"/>
  </mesh>
    </>)
  }
  if(layerCounter===2){
    return(<>
   <mesh rotation={[0,0,0]} position={[0,0,-70]} scale={[20,10,5]}>
    <boxBufferGeometry attach="geometry" args={[3,2,2]}/>
    <meshStandardMaterial map={colorMap}/>
  </mesh>
  <SpotLight position={[10,15,10]} angle={0.3}>
  <mesh rotation={[0,0,0]} position={[0,-20,-70]} scale={[20,10,5]}>
    <boxBufferGeometry attach="geometry" args={[3,2,2]}/>
    <meshStandardMaterial map={colorMap}/>
  </mesh>
  </SpotLight>
  <mesh rotation={[0,0,0]} position={[0,-30,-60]} scale={[20,3,6]}>
    <boxBufferGeometry attach="geometry" args={[3,2,2]}/>
    <meshLambertMaterial color="red"/>
  </mesh>
    </>);
  };
  if(layerCounter===3){
    return(<>
      <mesh rotation={[0,0,0]} position={[0,20,-70]} scale={[20,10,5]}>
      <boxBufferGeometry attach="geometry" args={[3,2,2]}/>
      <meshStandardMaterial map={colorMap}/>
    </mesh>
     <mesh rotation={[0,0,0]} position={[0,0,-70]} scale={[20,10,5]}>
      <boxBufferGeometry attach="geometry" args={[3,2,2]}/>
      <meshStandardMaterial map={colorMap}/>
    </mesh>
    <SpotLight position={[10,15,10]} angle={0.3}>
    <mesh rotation={[0,0,0]} position={[0,-20,-70]} scale={[20,10,5]}>
      <boxBufferGeometry attach="geometry" args={[3,2,2]}/>
      <meshStandardMaterial map={colorMap}/>
    </mesh>
    </SpotLight>
    <mesh rotation={[0,0,0]} position={[0,-30,-60]} scale={[20,3,6]}>
      <boxBufferGeometry attach="geometry" args={[3,2,2]}/>
      <meshLambertMaterial color="red"/>
    </mesh>
      </>);

  }
  if(layerCounter===4){

    return(<>
    <mesh rotation={[0,0,0]} position={[0,40,-70]} scale={[20,10,5]}>
      <boxBufferGeometry attach="geometry" args={[3,2,2]}/>
      <meshStandardMaterial map={colorMap}/>
    </mesh>
      <mesh rotation={[0,0,0]} position={[0,20,-70]} scale={[20,10,5]}>
      <boxBufferGeometry attach="geometry" args={[3,2,2]}/>
      <meshStandardMaterial map={colorMap}/>
    </mesh>
     <mesh rotation={[0,0,0]} position={[0,0,-70]} scale={[20,10,5]}>
      <boxBufferGeometry attach="geometry" args={[3,2,2]}/>
      <meshStandardMaterial map={colorMap}/>
    </mesh>
    <SpotLight position={[10,15,10]} angle={0.3}>
    <mesh rotation={[0,0,0]} position={[0,-20,-70]} scale={[20,10,5]}>
      <boxBufferGeometry attach="geometry" args={[3,2,2]}/>
      <meshStandardMaterial map={colorMap}/>
    </mesh>
    </SpotLight>
    <mesh rotation={[0,0,0]} position={[0,-30,-60]} scale={[20,3,6]}>
      <boxBufferGeometry attach="geometry" args={[3,2,2]}/>
      <meshLambertMaterial color="red"/>
    </mesh>
      </>)
  }
  if(layerCounter===5){

    return(<>
    <mesh rotation={[0,0,0]} position={[0,60,-70]} scale={[20,10,5]}>
      <boxBufferGeometry attach="geometry" args={[3,2,2]}/>
      <meshStandardMaterial map={colorMap}/>
    </mesh>
    <mesh rotation={[0,0,0]} position={[0,40,-70]} scale={[20,10,5]}>
      <boxBufferGeometry attach="geometry" args={[3,2,2]}/>
      <meshStandardMaterial map={colorMap}/>
    </mesh>
      <mesh rotation={[0,0,0]} position={[0,20,-70]} scale={[20,10,5]}>
      <boxBufferGeometry attach="geometry" args={[3,2,2]}/>
      <meshStandardMaterial map={colorMap}/>
    </mesh>
     <mesh rotation={[0,0,0]} position={[0,0,-70]} scale={[20,10,5]}>
      <boxBufferGeometry attach="geometry" args={[3,2,2]}/>
      <meshStandardMaterial map={colorMap}/>
    </mesh>
    <SpotLight position={[10,15,10]} angle={0.3}>
    <mesh rotation={[0,0,0]} position={[0,-20,-70]} scale={[20,10,5]}>
      <boxBufferGeometry attach="geometry" args={[3,2,2]}/>
      <meshStandardMaterial map={colorMap}/>
    </mesh>
    </SpotLight>
    <mesh rotation={[0,0,0]} position={[0,-30,-60]} scale={[20,3,6]}>
      <boxBufferGeometry attach="geometry" args={[3,2,2]}/>
      <meshLambertMaterial color="red"/>
    </mesh>
      </>)
  }
};
export default FinalProduct2;
