import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Stage } from '@react-three/drei';
import { Suspense } from 'react';

function Model(props: any) {
  const { nodes, materials } = useGLTF('/simple_calendar.glb') as any;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.115}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          {/* Paper and board */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.Papan}
            position={[0, 0, 0.046]}
            rotation={[-0.308, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.Paper}
            position={[0, 0, 0.046]}
            rotation={[-0.308, 0, 0]}
          />
          {/* Calendar pages */}
          {[8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30].map((num) => (
            <mesh
              key={num}
              castShadow
              receiveShadow
              geometry={nodes[`Object_${num}`].geometry}
              material={materials[num <= 10 ? 'Tanggalan_1' : 'Tanggalan_2']}
              position={[0, 0, 0.046]}
              rotation={[-0.308, 0, 0]}
            />
          ))}
          {/* Rings */}
          {[-0.045, 0.045].map((x, i) => (
            <mesh
              key={i}
              castShadow
              receiveShadow
              geometry={nodes.Object_32.geometry}
              material={materials.Ring}
              position={[x, 0.129, 0]}
              rotation={[0, 0, -Math.PI / 2]}
              scale={0.204}
            />
          ))}
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/simple_calendar.glb');

export default function CalendarScene() {
    

  return (
    <div className="h-[300px] w-full ">
      <Canvas shadows camera={{ position: [0, 0, 4], fov: 45 }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.5}>
            <Model />
          </Stage>
          <OrbitControls 
            enableZoom={false} 
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
        </Suspense>
      </Canvas>
    </div>
  );
} 