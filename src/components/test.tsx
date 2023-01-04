/* eslint-disable react/no-unknown-property */
import { OrbitControls, Stars, Stats } from '@react-three/drei';
import { useRef } from 'react';
import { Canvas, useFrame, useLoader } from 'react-three-fiber';
import * as three from 'three';
import img1 from '../assets/earth4.jpg';
import img2 from '../assets/earth_bump.jpg';
const Earth = () => {
  const earth = useRef<three.Mesh>(new three.Mesh());
  const [texture, bump] = useLoader(three.TextureLoader, [img1, img2]);

  useFrame((_, delta) => {
    earth.current.rotation.y += delta;
  });

  return (
    <mesh ref={earth}>
      <sphereGeometry args={[1.5, 50, 50]} />
      <meshPhysicalMaterial
        emissiveMap={texture}
        bumpMap={bump}
        emissive={'white'}
        emissiveIntensity={1}
        // wireframe
      />
    </mesh>
  );
};

const Scene = () => {
  return (
    <>
      <Stars count={1000} />
      <pointLight intensity={1.0} position={[10, 2, 2]} />
      <Earth />
    </>
  );
};

const Test = () => {
  return (
    <div className='w-full h-screen bg-gray-900'>
      <Canvas>
        <Stats />
        <OrbitControls />
        <Scene />
      </Canvas>
    </div>
  );
};

export default Test;
