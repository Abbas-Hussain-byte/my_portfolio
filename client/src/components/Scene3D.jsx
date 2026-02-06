import React from 'react';
import { Canvas } from '@react-three/fiber';

// === Minimal Debug Scene ===
const Scene3D = () => {
    return (
        <div style={{ width: '100%', height: '400px', background: '#222' }}>
            <Canvas>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <mesh>
                    <boxGeometry />
                    <meshStandardMaterial color="hotpink" />
                </mesh>
            </Canvas>
        </div>
    );
};

export default Scene3D;
