import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const SEPARATION = 20; // 缩小粒子间距
const AMOUNTX = 400;  // 适当减少 X 轴方向的粒子数
const AMOUNTY = 400;  // 适当减少 Y 轴方向的粒子数

const ParticleWave = () => {
  return (
    <Canvas 
      camera={{ position: [0, 1000, 200], fov: 90, far: 20000 }} 
      style={{ width: "100vw", height: "100vh", position: 'relative' }}
    >
      <ambientLight />
      <WaveParticles />
    </Canvas>
  );
};

const WaveParticles = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const shaderRef = useRef<any>(null);
  const countRef = useRef(0);

  // 计算粒子位置和大小
  const { positions, scales } = useMemo(() => {
    const numParticles = AMOUNTX * AMOUNTY;
    const positions = new Float32Array(numParticles * 3);
    const scales = new Float32Array(numParticles);

    let i = 0, j = 0;
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        positions[i] = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2; // x
        positions[i + 1] = 0; // y
        positions[i + 2] = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2; // z
        scales[j] = 10;
        i += 3;
        j++;
      }
    }
    return { positions, scales };
  }, []);

  // 动画更新
  useFrame(() => {
    const positions = shaderRef.current.geometry.attributes.position.array;
    const scales = shaderRef.current.geometry.attributes.scale.array;

    let i = 0, j = 0;
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        positions[i + 1] = Math.sin((ix + countRef.current) * 0.1) * 20 +
          Math.sin((iy + countRef.current) * 0.2) * 20;
        // scales[j] = (Math.sin((ix + countRef.current) * 0.6) + 1) * 1 +
        //   (Math.sin((iy + countRef.current) * 0.8) + 1) * 1;
        i += 3;
        j++;
      }
    }

    shaderRef.current.geometry.attributes.position.needsUpdate = true;
    shaderRef.current.geometry.attributes.scale.needsUpdate = true;

    countRef.current += 0.15;
  });

  return (
    <points ref={shaderRef}>
      {/* <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={positions.length / 3} itemSize={3} />
        <bufferAttribute attach="attributes-scale" array={scales} count={scales.length} itemSize={1} />
      </bufferGeometry> */}
      <shaderMaterial
        uniforms={{ color: { value: new THREE.Color('#FEFF34') } }}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
      />
    </points>
  );
};

// 顶点着色器
const vertexShader = `
  attribute float scale;
  void main() {
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = scale * (300.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

// 片段着色器
const fragmentShader = `
  uniform vec3 color;
  void main() {
    if (length(gl_PointCoord - vec2(0.5, 0.5)) > 0.475) discard;
    gl_FragColor = vec4(color, 1.0);
  }
`;

export default ParticleWave;
