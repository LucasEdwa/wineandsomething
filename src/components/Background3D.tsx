import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Stage } from '@react-three/drei';
import { Suspense } from 'react';
import { useTheme } from '../context/ThemeContext';
interface ModelProps  {
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}

function Model(props: ModelProps) {
  const { nodes, materials } = useGLTF('/wine__cups_table_-_lowpoly.glb') as any;

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group
          position={[-165.68486023, 459.42391968, -125.72822571]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={112.44773865}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_Vidro_0.geometry}
            material={materials.Vidro}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_Rotulo_0.geometry}
            material={materials.Rotulo}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_Tampa_0.geometry}
            material={materials.Tampa}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_Preto_0.geometry}
            material={materials.Preto}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_CRISTAL_0.geometry}
          material={materials.CRISTAL}
          position={[-81.4521637, 309.1607666, 236.60101318]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[83.08235168, 83.08235168, 7.78820801]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_CRISTAL_0.geometry}
          material={materials.CRISTAL}
          position={[192.92453003, 309.1607666, 2.17881489]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[83.08235168, 83.08235168, 7.78820801]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_Madeira_0.geometry}
          material={materials.Madeira}
          position={[283.74365234, -57.33813095, -281.66369629]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[58.2074585, 58.2074585, 349.13803101]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_Tecido1_0.geometry}
          material={materials.Tecido1}
          position={[0, 300.91821289, 0]}
          rotation={[-Math.PI / 2, 3e-8, -0.69813162]}
          scale={[485.1156311, 485.1156311, 485.11557007]}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/wine__cups_table_-_lowpoly.glb');

export default function Background3D() {
  const { theme } = useTheme();
  return (
    <div className="absolute bg-red-900/30 top-0 left-0 w-full h-screen -z-10">
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Model />
          </Stage>
          <OrbitControls 
            enableZoom={false} 
            autoRotate 
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
        </Suspense>
      </Canvas>
    </div>
  );
} 