import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';
import AnimatedText from '../Components/AnimatedText';
import { motion } from 'framer-motion';


const Home5 = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const materialRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetMouseRef = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);
  const animationIdRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
   const loader = useRef(null);
  const path = useRef(null);
  const initialCurve = 200;
  const duration = 700;
  let start;

    useEffect(() => {
    setPath(initialCurve)
    setTimeout( () => {
      requestAnimationFrame(animate)
    }, 500)
  }, [])

  const animate = (timestamp) => {
    if(start === undefined){
      start = timestamp
    }
    const elapsed = timestamp - start;

    const newCurve = easeOutQuad(elapsed, initialCurve, -200, duration)
    setPath(newCurve);

    loader.current.style.top = easeOutQuad(elapsed, 0, -loaderHeight(), duration) + "px";

    if(elapsed < duration){
      requestAnimationFrame(animate)
    }
  }

  const easeOutQuad = (time, start, end, duration) => {
    return -end * (time /= duration) * (time - 2) + start;
  }

  const loaderHeight = () => {
    const loaderBounds = loader.current.getBoundingClientRect();
    return loaderBounds.height;
  }

  const setPath = (curve) => {
    const width = window.innerWidth
    const height = loaderHeight();
    path.current.setAttributeNS(null, "d",
    `M0 0
    L${width} 0
    L${width} ${height}
    Q${width/2} ${height - curve} 0 ${height}
    L0 0`
    )
  }

  // Memoized shaders - keeping original complexity but optimizing structure
  const shaders = useMemo(() => ({
    vertex: `
      varying vec2 vUv;
      
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragment: `
      uniform float u_time;
      uniform vec2 u_mouse;
      uniform vec2 u_resolution;
      
      varying vec2 vUv;
      
      // Optimized Simplex noise (reduced from original but still high quality)
      vec3 mod289(vec3 x) {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
      }
      
      vec4 mod289(vec4 x) {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
      }
      
      vec4 permute(vec4 x) {
        return mod289(((x*34.0)+1.0)*x);
      }
      
      vec4 taylorInvSqrt(vec4 r) {
        return 1.79284291400159 - 0.85373472095314 * r;
      }
      
      float snoise(vec3 v) {
        const vec2 C = vec2(1.0/6.0, 1.0/3.0);
        const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
        
        vec3 i = floor(v + dot(v, C.yyy));
        vec3 x0 = v - i + dot(i, C.xxx);
        
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min(g.xyz, l.zxy);
        vec3 i2 = max(g.xyz, l.zxy);
        
        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy;
        vec3 x3 = x0 - D.yyy;
        
        i = mod289(i);
        vec4 p = permute(permute(permute(
                   i.z + vec4(0.0, i1.z, i2.z, 1.0))
                 + i.y + vec4(0.0, i1.y, i2.y, 1.0))
                 + i.x + vec4(0.0, i1.x, i2.x, 1.0));
        
        float n_ = 0.142857142857;
        vec3 ns = n_ * D.wyz - D.xzx;
        
        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_);
        
        vec4 x = x_ *ns.x + ns.yyyy;
        vec4 y = y_ *ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);
        
        vec4 b0 = vec4(x.xy, y.xy);
        vec4 b1 = vec4(x.zw, y.zw);
        
        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));
        
        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
        
        vec3 p0 = vec3(a0.xy, h.x);
        vec3 p1 = vec3(a0.zw, h.y);
        vec3 p2 = vec3(a1.xy, h.z);
        vec3 p3 = vec3(a1.zw, h.w);
        
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;
        
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
      }
      
      void main() {
        vec2 st = vUv;
        vec2 mouse = u_mouse;
        
        // Reduced from 3 waves to 2, but keeping quality
        float mouseInfluence = length(st - mouse) * 2.0;
        float wave1 = snoise(vec3(st * 3.0 + u_time * 0.2, u_time * 0.1));
        float wave2 = snoise(vec3(st * 6.0 - u_time * 0.15, u_time * 0.05));
        
        // Mouse interaction waves
        float mouseWave = sin(mouseInfluence * 15.0 - u_time * 3.0) * exp(-mouseInfluence * 2.0);
        
        // Combine waves (removed one wave)
        float combined = (wave1 * 0.6 + wave2 * 0.4 + mouseWave * 0.4);
        
        // Reduced rainbow colors from 12 to 8 - good middle ground
        vec3 colors[8];
colors[0] = vec3(0.6, 0.9, 0.0);    // Base #9ae600
colors[1] = vec3(0.62, 0.91, 0.0);  // +3%
colors[2] = vec3(0.58, 0.89, 0.0);  // -3%
colors[3] = vec3(0.66, 0.94, 0.0);  // +10%
colors[4] = vec3(0.54, 0.86, 0.0);  // -10%
colors[5] = vec3(0.72, 0.97, 0.0);  // +20%
colors[6] = vec3(0.48, 0.83, 0.0);  // -20%
colors[7] = vec3(0.78, 1.0, 0.0);   // +30%
        // Optimized gradient calculation
        float gradientPos = fract(st.x * 2.0 + st.y * 1.5 + combined * 0.3 + u_time * 0.1);
        gradientPos = gradientPos * 7.0; // Scale for 8 colors
        
        int index = int(gradientPos);
        float t = fract(gradientPos);
        
        vec3 finalColor;
        if (index >= 7) {
          finalColor = mix(colors[7], colors[0], t);
        } else {
          finalColor = mix(colors[index], colors[index + 1], t);
        }
        
        // Keep original glow effect
        float glowDist = distance(st, mouse);
        float glow = 1.0 - smoothstep(0.0, 0.3, glowDist);
        finalColor += glow * vec3(1.0, 1.0, 1.0) * 0.33;
        
        // Keep original brightness variation
        finalColor *= 0.9 + 0.3 * combined;
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `
  }), []);

  // Optimized mouse move handler
  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const { left, top, width, height } = container.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = 1.0 - (e.clientY - top) / height;
    
    targetMouseRef.current = { x, y };
    
    const rotX = (e.clientX - left) / width - 0.5;
    const rotY = (e.clientY - top) / height - 0.5;
    
    setRotation({ 
      x: rotY * 5, 
      y: rotX * 5 
    });
  }, []);

  // Optimized resize handler
  const handleResize = useCallback(() => {
    if (!rendererRef.current || !materialRef.current) return;
    
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    rendererRef.current.setSize(width, height);
    materialRef.current.uniforms.u_resolution.value.set(width, height);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup with moderate optimizations
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, // Keep antialiasing for quality
      alpha: true,
      powerPreference: "high-performance"
    });
    
    // Moderate pixel ratio limit
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create shader material
    const material = new THREE.ShaderMaterial({
      vertexShader: shaders.vertex,
      fragmentShader: shaders.fragment,
      uniforms: {
        u_time: { value: 0 },
        u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
        u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
      }
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    sceneRef.current = scene;
    rendererRef.current = renderer;
    materialRef.current = material;

    // Optimized animation loop with moderate throttling
    const animate = () => {
      timeRef.current += 0.016;
      
      // Slightly faster mouse interpolation than heavily optimized version
      const lerpFactor = 0.06;
      mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * lerpFactor;
      mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * lerpFactor;
      
      // Update uniforms
      material.uniforms.u_time.value = timeRef.current;
      material.uniforms.u_mouse.value.set(mouseRef.current.x, mouseRef.current.y);
      
      renderer.render(scene, camera);
      animationIdRef.current = requestAnimationFrame(animate);
    };
    
    animationIdRef.current = requestAnimationFrame(animate);

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      window.removeEventListener('resize', handleResize);
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      
      sceneRef.current = null;
      rendererRef.current = null;
      materialRef.current = null;
    };
  }, [shaders, handleResize]);

  return (
    <div
      ref={containerRef}
      className="h-screen w-full flex flex-col items-center justify-center p-4 md:p-8 text-black overflow-hidden relative"
      onMouseMove={handleMouseMove}
      style={{
        background: "transparent",
        transform: `perspective(3000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: "transform 0.1s ease-out",
        willChange: "transform",
      }}
    >
      {/* Content overlay */}
      <div ref={loader} className="loader z-[999]">
        <svg className="w-full h-full">
          <path ref={path}></path>
        </svg>
      </div>

      <div className="relative z-10 top-4 md:top-8 flex flex-col min-h-screen w-full">
        {/* Top Nav */}
        <header className="flex font-[font1] justify-between items-center border-b border-black pb-8 md:pb-6">
          <div className="text-sm"></div>
          <span className="block ml-20 md:ml-40"></span>
        </header>

        {/* Main Title */}
        <main className="flex pointer-events-none flex-col gap-4 relative  items-center justify-center    leading-none mt-85">
          <div className="flex   md:ml-14 ">
            <div className="w-full h-full relative">
              {" "}
              <AnimatedText
                delay={0.6}
                initialY="-100%"
                className=" font-[heading] tracking-tight text-4xl lg:text-[8rem] md:text-[5rem] sm:text-6xl"
              >
                Portfoli
              </AnimatedText>
            </div>
            <motion.img
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
             className="lg:!h-60 lg:!w-60 lg:!-mt-35 spinner -mt-10 ml-1 !h-17 !w-17 md:!h-35 md:!w-35 md:!-mt-20 sm:!h-25 sm:!w-25 sm:!-mt-15"

            
              src="./sun.png"
            ></motion.img>
          </div>
          <div
            className="
       !font-[font1]  text-sm sm:text-lg w-60 sm:w-full text-center"
          >
            Hi , I am Ashu 27 years old sydney based frontend developer.
          </div>
        </main>
      </div>

      <style jsx>{`
        .text-shadow-lg {
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        canvas {
          position: fixed !important;
          top: 0;
          left: 0;
          z-index: 1;
          pointer-events: none;
          width: 100vw !important;
          height: 100vh !important;
        }

       

        @media (max-width: 768px) {
          .spinner {
            animation: spin 20s linear infinite;
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out 0.6s both;
        }

        .animate-slide-up-delayed {
          animation: slideUp 0.5s ease-out 0.7s both;
        }

        @keyframes slideUp {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Home5;