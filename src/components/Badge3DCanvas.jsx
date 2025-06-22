import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Float, Html, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

// Simple 3D badge shape (can be replaced with GLTF/GLB model for more detail)
function Badge3D() {
  const groupRef = useRef();
  const [isFront, setIsFront] = useState(true);
  const [isBack, setIsBack] = useState(false);
  const { camera } = useThree();

  // Update visibilitas konten depan/belakang berdasarkan sudut kamera
  useFrame(() => {
    if (!groupRef.current) return;
    // Badge menghadap ke Z+
    const worldDir = groupRef.current.getWorldDirection(new THREE.Vector3());
    // Kamera menghadap ke Z-
    const camDir = camera.getWorldDirection(new THREE.Vector3());
    // Dot product > 0 artinya kamera menghadap ke depan badge
    const dot = worldDir.dot(camDir);
    setIsFront(dot < 0);
    setIsBack(dot > 0);
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.2}>
      <group ref={groupRef}>
        {/* Layer belakang (shadow & border biru) */}
        <RoundedBox
          args={[2.6, 3.5, 0.18]}
          radius={0.32}
          smoothness={6}
          position={[0, 0, -0.07]}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial
            attach="material"
            color="#18181b"
            metalness={0.25}
            roughness={0.5}
          />
          <meshPhysicalMaterial
            attach="material"
            color="#18181b"
            metalness={0.25}
            roughness={0.5}
            clearcoat={0.5}
            clearcoatRoughness={0.2}
            transmission={0.1}
          />
        </RoundedBox>
        {/* Layer depan (permukaan glossy & border highlight) */}
        <RoundedBox
          args={[2.5, 3.3, 0.12]}
          radius={0.28}
          smoothness={6}
          position={[0, 0, 0.07]}
          castShadow
          receiveShadow
        >
          <meshPhysicalMaterial
            attach="material"
            color="#23272f"
            metalness={0.35}
            roughness={0.18}
            clearcoat={0.8}
            clearcoatRoughness={0.08}
            iridescence={0.12}
            iridescenceIOR={1.2}
            sheen={0.2}
            sheenColor="#38bdf8"
          />
          {/* Border highlight biru */}
          <meshStandardMaterial
            attach="material"
            color="#38bdf8"
            metalness={0.7}
            roughness={0.2}
            transparent
            opacity={0.18}
          />
        </RoundedBox>
        {/* Lanyard ring */}
        <mesh position={[0, 2, 0]}>
          <torusGeometry args={[0.18, 0.06, 16, 100]} />
          <meshStandardMaterial
            color="#38bdf8"
            metalness={0.7}
            roughness={0.2}
          />
        </mesh>
        {/* Extended Lanyard system */}
        <group position={[0, 9, 0]}>
          {/* Top horizontal bar */}
          <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.04, 0.04, 4, 16]} />
            <meshStandardMaterial
              color="#333"
              metalness={0.3}
              roughness={0.7}
            />
          </mesh>
          {/* Main vertical strings */}
          <mesh position={[-1.5, -3, 0]}>
            <cylinderGeometry args={[0.04, 0.04, 7, 16]} />
            <meshStandardMaterial
              color="#444"
              metalness={0.1}
              roughness={0.8}
            />
          </mesh>
          <mesh position={[1.5, -3, 0]}>
            <cylinderGeometry args={[0.04, 0.04, 7, 16]} />
            <meshStandardMaterial
              color="#444"
              metalness={0.1}
              roughness={0.8}
            />
          </mesh>
          {/* Curved connections at bottom */}
          <mesh position={[-1.5, -7, 0]}>
            <torusGeometry args={[0.5, 0.04, 16, 100, Math.PI / 2]} />
            <meshStandardMaterial
              color="#444"
              metalness={0.1}
              roughness={0.8}
            />
          </mesh>
          <mesh position={[1.5, -7, 0]}>
            <torusGeometry args={[0.5, 0.04, 16, 100, -Math.PI / 2]} />
            <meshStandardMaterial
              color="#444"
              metalness={0.1}
              roughness={0.8}
            />
          </mesh>
          {/* Bottom connection to badge */}
          <mesh position={[0, -7.5, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.04, 0.04, 2, 16]} />
            <meshStandardMaterial
              color="#444"
              metalness={0.1}
              roughness={0.8}
            />
          </mesh>
        </group>
        {/* Sisi Depan Badge */}
        {isFront && (
          <>
            <Html
              center
              position={[0, 0.5, 0.19]}
              zIndexRange={[10, 0]}
              transform
            >
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Profile"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  border: "2px solid #38bdf8",
                  boxShadow: "0 1px 6px #0008",
                }}
              />
            </Html>
            <Html
              center
              position={[0, -0.7, 0.19]}
              zIndexRange={[10, 0]}
              transform
            >
              <div
                style={{
                  textAlign: "center",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 10,
                  textShadow: "0 1px 4px #000a",
                }}
              >
                Achmad Choerul R.
                <div
                  style={{
                    fontWeight: 400,
                    fontSize: 8,
                    color: "#38bdf8",
                    marginTop: 1,
                  }}
                >
                  Frontend Developer
                </div>
              </div>
            </Html>
          </>
        )}
        {/* Sisi Belakang Badge */}
        {isBack && (
          <Html
            center
            position={[0, 0, -0.19]}
            zIndexRange={[10, 0]}
            transform
            rotation-y={Math.PI}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: 48,
                height: 65,
                background: "#18181b",
                borderRadius: 6,
                border: "1.2px dashed #38bdf8",
                boxShadow: "0 1px 4px #0006",
                padding: 3,
              }}
            >
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=32x32&data=mailto:email@domain.com"
                alt="QR Email"
                style={{ width: 32, height: 32, marginBottom: 2 }}
              />
              <span style={{ color: "#fff", fontSize: 7, marginTop: 1 }}>
                email@domain.com
              </span>
              <span style={{ color: "#38bdf8", fontSize: 6, marginTop: 1 }}>
                Scan QR untuk kontak
              </span>
            </div>
          </Html>
        )}
      </group>
    </Float>
  );
}

const Badge3DCanvas = () => (
  <div style={{ width: 370, height: 500, margin: "0 auto" }}>
    <Canvas camera={{ position: [0, 0, 7], fov: 40 }} shadows>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={0.7} />
      <Suspense fallback={null}>
        <Badge3D />
      </Suspense>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
    </Canvas>
  </div>
);

export default Badge3DCanvas;
