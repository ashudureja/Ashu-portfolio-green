import React from "react";
import { useAnimate } from "framer-motion";
import { 
  SiReact, 
  SiJavascript, 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiRedux, 
  SiVite, 
  SiHtml5 
} from "react-icons/si";

const PlusCircleIcon = () => (
  <div className="w-4 h-4 text-gray-500">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  </div>
);

const tags = ['REACT', 'JAVASCRIPT', 'TAILWIND CSS'];

export const Example = () => {
  return (
    <div className="bg-[#020617] mt-5 p-4 md:p-12">
      <div className="sm:mb-12 mb-9">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
          <h1 className="text-[18vw] text-white uppercase text-center sm:text-left xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight">
            Skilled in
          </h1>
          <div className="sm:flex hidden flex-wrap gap-2 md:gap-4 mt-8">
            {tags.map((tag) => (
              <div
                key={tag}
                className="border bg-black/20 backdrop-blur-sm border-white/20 text-gray-400 rounded-full px-4 py-1 text-sm flex items-center gap-2 cursor-pointer hover:bg-gray-800 transition-colors"
              >
                <PlusCircleIcon />
                <div>{tag}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-8xl">
        <ClipPathLinks />
      </div>
    </div>
  );
}

const ClipPathLinks = () => {
  return (
    <div className="divide-y divide-white/20 border border-white/20">
      {/* Mobile: Single column layout */}
      <div className="block md:hidden">
        <div className="grid grid-cols-1 divide-y divide-white/20">
          <LinkBox Icon={SiReact} href="#" />
          <LinkBox Icon={SiJavascript} href="#" />
          <LinkBox Icon={SiTypescript} href="#" />
          <LinkBox Icon={SiNextdotjs} href="#" />
          <LinkBox Icon={SiTailwindcss} href="#" />
          <LinkBox Icon={SiNodedotjs} href="#" />
          <LinkBox Icon={SiRedux} href="#" />
          <LinkBox Icon={SiVite} href="#" />
          <LinkBox Icon={SiHtml5} href="#" />
        </div>
      </div>

      {/* Desktop: Original grid layout */}
      <div className="hidden md:block">
        {/* Row 1 */}
        <div className="grid grid-cols-2 divide-x divide-white/20 border border-white/20">
          <LinkBox Icon={SiReact} href="#" />
          <LinkBox Icon={SiJavascript} href="#" />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-4 divide-x divide-white/20 border border-white/20">
          <LinkBox Icon={SiTypescript} href="#" />
          <LinkBox Icon={SiNextdotjs} href="#" />
          <LinkBox Icon={SiTailwindcss} href="#" />
          <LinkBox Icon={SiNodedotjs} href="#" />
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-3 divide-x divide-white/20">
          <LinkBox Icon={SiRedux} href="#" />
          <LinkBox Icon={SiVite} href="#" />
          <LinkBox Icon={SiHtml5} href="#" />
        </div>
      </div>
    </div>
  );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ Icon, href }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e) => {
    const box = e.target.getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left",
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right",
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top",
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom",
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  return (
    <div
      onMouseEnter={(e) => {
        handleMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        handleMouseLeave(e);
      }}
      className="relative grid h-20 w-full place-content-center sm:h-28 md:h-42 cursor-pointer" 
    >
      <Icon className="text-3xl sm:text-3xl lg:text-5xl text-white" />

      <div
        ref={scope}
        style={{
          clipPath: BOTTOM_RIGHT_CLIP,
        }}
        className="absolute inset-0 grid place-content-center bg-lime-400 text-black"
      >
        <Icon className="text-xl sm:text-3xl md:text-4xl" />
      </div>
    </div>
  );
};