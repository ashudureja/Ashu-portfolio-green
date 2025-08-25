import React, { useEffect, useRef } from "react";

const TrailEffect = () => {
  const containerRef = useRef(null);
  const animationIdRef = useRef(null);
  const mouseMoveListenerRef = useRef(null);
  const trailRef = useRef([]);
  const lastRemovalTimeRef = useRef(0);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const mousePos = useRef({ x: 0, y: 0 });
  const isDesktopRef = useRef(window.innerWidth > 1000);

  const config = {
    imageCount: 10,
    imageLifespan: 750,
    removalDelay: 50,
    mouseThreshold: 100,
    inDuration: 750,
    outDuration: 1000,
    inEasing: "cubic-bezier(.07,.5,.5,1)",
    outEasing: "cubic-bezier(.87, 0, .13, 1)",
  };

  // const images = Array.from(
  //   { length: config.imageCount },
  //   (_, i) => `/images/work-items/work-item-${i + 1}.jpg`
  // );

  const images=["https://www.svgrepo.com/show/327388/logo-react.svg",]
  // const images=["https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png","https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-black-and-white.png","https://images.seeklogo.com/logo-png/27/1/vue-js-logo-png_seeklogo-274070.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROSVsyTE3Rq2DeKnZ9DvrUCTjEv6k0NTDNvw&s"]

  const isInContainer = (x, y) => {
    const rect = containerRef.current.getBoundingClientRect();
    return (
      x >= rect.left &&
      x <= rect.right &&
      y >= rect.top &&
      y <= rect.bottom
    );
  };

  const hasMovedEnough = () => {
    const dx = mousePos.current.x - lastMousePos.current.x;
    const dy = mousePos.current.y - lastMousePos.current.y;
    return Math.sqrt(dx * dx + dy * dy) > config.mouseThreshold;
  };

  const createImage = () => {
    const img = document.createElement("img");
    img.classList.add("trail-img");

    const randomIndex = Math.floor(Math.random() * images.length);
    const rotation = (Math.random() - 0.5) * 50;
    img.src = images[randomIndex];

    const rect = containerRef.current.getBoundingClientRect();
    const relativeX = mousePos.current.x - rect.left;
    const relativeY = mousePos.current.y - rect.top;

     img.style.position = "absolute";
  img.style.width = "150px";
  img.style.height = "150px";
  img.style.objectFit = "cover";
  img.style.borderRadius = "1em";
  img.style.transformOrigin = "center";
  img.style.pointerEvents = "none";
  img.style.willChange = "transform";


    img.style.position = "absolute";
    img.style.left = `${relativeX}px`;
    img.style.top = `${relativeY}px`;
    img.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(0)`;
    img.style.transition = `transform ${config.inDuration}ms ${config.inEasing}`;
    img.style.pointerEvents = "none";

    containerRef.current.appendChild(img);

    setTimeout(() => {
      img.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(1)`;
    }, 10);

    trailRef.current.push({
      element: img,
      rotation,
      removeTime: Date.now() + config.imageLifespan,
    });
  };

  const removeOldImages = () => {
    const now = Date.now();
    if (
      now - lastRemovalTimeRef.current < config.removalDelay ||
      trailRef.current.length === 0
    )
      return;

    const oldestImage = trailRef.current[0];
    if (now >= oldestImage.removeTime) {
      const imgToRemove = trailRef.current.shift();

      imgToRemove.element.style.transition = `transform ${config.outDuration}ms ${config.outEasing}`;
      imgToRemove.element.style.transform = `translate(-50%, -50%) rotate(${imgToRemove.rotation}deg) scale(0)`;

      lastRemovalTimeRef.current = now;

      setTimeout(() => {
        if (imgToRemove.element.parentNode) {
          imgToRemove.element.remove();
        }
      }, config.outDuration);
    }
  };

  const animate = () => {
    removeOldImages();
    animationIdRef.current = requestAnimationFrame(animate);
  };

  const startAnimation = () => {
    if (!isDesktopRef.current) return;

    mouseMoveListenerRef.current = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (isInContainer(mousePos.current.x, mousePos.current.y) && hasMovedEnough()) {
        lastMousePos.current = { ...mousePos.current };
        createImage();
      }
    };

    document.addEventListener("mousemove", mouseMoveListenerRef.current);
    animate();
  };

  const stopAnimation = () => {
    if (mouseMoveListenerRef.current) {
      document.removeEventListener("mousemove", mouseMoveListenerRef.current);
      mouseMoveListenerRef.current = null;
    }

    if (animationIdRef.current) {
      cancelAnimationFrame(animationIdRef.current);
      animationIdRef.current = null;
    }

    trailRef.current.forEach((item) => item.element.remove());
    trailRef.current = [];
  };

  const handleResize = () => {
    const wasDesktop = isDesktopRef.current;
    isDesktopRef.current = window.innerWidth > 1000;

    if (isDesktopRef.current && !wasDesktop) {
      startAnimation();
    } else if (!isDesktopRef.current && wasDesktop) {
      stopAnimation();
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    if (isDesktopRef.current) {
      startAnimation();
    }

    return () => {
      stopAnimation();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="trail-container  absolute inset-0 "

    >
      {/* Trail images will be injected here */}
    </div>
  );
};

export default TrailEffect;
