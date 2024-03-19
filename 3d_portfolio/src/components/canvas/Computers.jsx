import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/room_girl_face.gltf");

  return (
    <mesh>
      <directionalLight 
        position={[0, 3, 1]}
        castShadow
        intensity={Math.PI * 1}
        color='#141bf7'
      />
      <directionalLight 
        position={[0, 3, 2]}
        castShadow
        intensity={Math.PI * 1}
        color='#d943f7'
      />    
      <pointLight 
        position={isMobile ? [-.7, .4, .1] : [.6, .4, 0]}
        castShadow
        intensity={Math.PI * .5}
      /> 
      <primitive 
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.8}
        position={isMobile ? [-1.4, -.7, 0] : [0.1, -.7, 0]}
        rotation={[0, 1.35, -0.02]}
        
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [17, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;