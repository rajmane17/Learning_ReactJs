import React, { Suspense } from 'react'
import {Canvas} from "@react-three/fiber"
import {useGLTF, Preload, OrbitControls} from "@react-three/drei"

const Computers = () => {
  return (
    <mesh>
      <hemisphereLight 
      intensity={1}
      groundColor={black}
      />
      <pointLight intensity={1} />
      <primitive 
      object={Computers.scene}
      />

    </mesh>
  )
}

const ComputerCanvas = () => {
  return(
    <Canvas frameloop='demand' shadows camera={{position: [20, 3, 5], fov:25}} gl={{preserveDrawingBuffer:true}}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false}/>
        maxPolarAngle ={Math.PI/2}
        minPolarAngle ={Math.PI/2}
        <Computers />

      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default Computers