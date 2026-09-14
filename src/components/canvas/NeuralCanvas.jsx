import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Color, MathUtils } from "three";

function Sculpture({ touch }) {
  const group = useRef(null);
  const elapsed = useRef(0);
  const { positions, colors } = useMemo(() => {
    const rings = touch ? 270 : 440;
    const sides = touch ? 28 : 46;
    const positions = new Float32Array(rings * sides * 3);
    const colors = new Float32Array(rings * sides * 3);
    const mint = new Color("#92edc4");
    const dark = new Color("#22513e");
    for (let i = 0; i < rings; i++) {
      const u = i / rings * Math.PI * 2;
      const r = 1.2 + 0.34 * Math.cos(3 * u);
      const center = [r * Math.cos(2 * u), r * Math.sin(2 * u), 0.53 * Math.sin(3 * u)];
      for (let j = 0; j < sides; j++) {
        const v = j / sides * Math.PI * 2;
        const offset = (i * sides + j) * 3;
        const tube = 0.29;
        positions[offset] = center[0] + tube * Math.cos(v) * Math.cos(2 * u);
        positions[offset + 1] = center[1] + tube * Math.cos(v) * Math.sin(2 * u);
        positions[offset + 2] = center[2] + tube * Math.sin(v);
        const shade = dark.clone().lerp(mint, 0.25 + 0.75 * Math.pow((Math.sin(v + u) + 1) / 2, 1.5));
        colors.set([shade.r, shade.g, shade.b], offset);
      }
    }
    return { positions, colors };
  }, [touch]);
  useFrame((state, delta) => {
    elapsed.current += Math.min(delta, 0.05);
    const t = elapsed.current;
    group.current.rotation.y = t * 0.085 + (!touch ? state.pointer.x * 0.1 : 0);
    group.current.rotation.z = -0.35 + Math.sin(t * 0.12) * 0.12;
    group.current.rotation.x = MathUtils.damp(group.current.rotation.x, 0.35 + (!touch ? state.pointer.y * 0.13 : 0), 3, delta);
  });
  return <group ref={group} rotation={[0.35, 0, -0.35]}><points><bufferGeometry><bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} /><bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} /></bufferGeometry><pointsMaterial vertexColors size={touch ? 0.014 : 0.012} sizeAttenuation transparent opacity={0.88} depthWrite={false} /></points></group>;
}

export default function NeuralCanvas() {
  const container = useRef(null);
  const [visible, setVisible] = useState(true);
  const [pageVisible, setPageVisible] = useState(!document.hidden);
  const [supported, setSupported] = useState(true);
  const touch = useMemo(() => window.matchMedia("(pointer: coarse), (max-width: 640px)").matches, []);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    if (container.current) observer.observe(container.current);
    const visibility = () => setPageVisible(!document.hidden);
    document.addEventListener("visibilitychange", visibility);
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", visibility); };
  }, []);
  return <div ref={container} className="neural-canvas">
    {supported && <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5.5], fov: 43 }} gl={{ antialias: false, alpha: false, powerPreference: "low-power" }} frameloop={visible && pageVisible ? "always" : "never"} fallback={null} onCreated={({ gl }) => { gl.setClearColor("#101211"); gl.domElement.addEventListener("webglcontextlost", () => setSupported(false), { once: true }); }}><color attach="background" args={["#101211"]} /><Sculpture touch={touch} /></Canvas>}
  </div>;
}
