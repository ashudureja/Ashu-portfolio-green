import React, { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

// You'll need to install and import GSAP
import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const navRef = useRef(null);
  const menuOverlayRef = useRef(null);
  const menuOverlayBarRef = useRef(null);
  const menuOpenBtnRef = useRef(null);
  const menuCloseBtnRef = useRef(null);
  const menuFooterRef = useRef(null);

  // Menu items configuration
  const menuItems = [
    { path: '/', label: 'Home', textColor: 'text-black' },
    { path: '/about', label: 'About', textColor: 'text-lime-400' },
    { path: '/work', label: 'Projects', textColor: 'text-lime-400' },
    { path: '/contact', label: 'Contact', textColor: 'text-lime-400' }
  ];

  // Social media links configuration
  const socialLinks = [
    { href: 'https://www.instagram.com/codegridweb/', label: 'Instagram' },
    { href: 'https://x.com/codegridweb', label: 'Twitter' },
    { href: 'https://www.linkedin.com/company/codegridweb/', label: 'LinkedIn' }
  ];

  // Get current page text color
  const getCurrentTextColor = () => {
    const currentItem = menuItems.find(item => item.path === pathname);
    return currentItem ? currentItem.textColor : 'text-black';
  };


   useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  useLayoutEffect(() => {
    gsap.registerPlugin(CustomEase);
    CustomEase.create(
      "hop",
      "M0,0 C0.354,0 0.464,0.133 0.498,0.502 0.532,0.872 0.651,1 1,1"
    );
  }, []);

  function slideInOut() {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: "scale(1)",
        },
        {
          opacity: 0.4,
          transform: "scale(0.5)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }

  const handleCloseMenu = () => {
    if (
      !menuOverlayBarRef.current ||
      !menuCloseBtnRef.current ||
      !navRef.current ||
      !menuOpenBtnRef.current ||
      !menuOverlayRef.current ||
      !menuFooterRef.current
    ) {
      return;
    }

    gsap.to(
      [
        menuOverlayBarRef.current.querySelector("a"),
        menuCloseBtnRef.current.querySelector("p"),
        menuFooterRef.current.querySelector(".showreel a"),
        ...menuFooterRef.current.querySelectorAll(".media-link a"),
      ],
      {
        y: -20,
        duration: 1,
        stagger: 0.1,
        ease: CustomEase.create("", ".76,0,.2,1"),
        onComplete: () => {
          gsap.set(menuOverlayBarRef.current.querySelector("a"), { y: 20 });
          gsap.set(menuCloseBtnRef.current.querySelector("p"), { y: 20 });
          gsap.set(menuFooterRef.current.querySelector(".showreel a"), {
            y: 20,
          });
          gsap.set(menuFooterRef.current.querySelectorAll(".media-link a"), {
            y: 20,
          });
        },
      }
    );

    gsap.to(".menu-link a", {
      y: "-110%",
      duration: 0.75,
      stagger: 0.05,
      ease: "power4.in",
      onComplete: () => {
        gsap.set(".menu-link a", { y: "100%" });
      },
    });

    gsap.to(menuOverlayRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 1,
      delay: 0.5,
      ease: "hop",
      onComplete: () => {
        gsap.set(navRef.current, { pointerEvents: "all" });
        gsap.set(menuOverlayRef.current, {
          pointerEvents: "none",
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        });
      },
    });

    gsap.to(
      [
        navRef.current.querySelector("a"),
        menuOpenBtnRef.current.querySelector("p"),
      ],
      {
        y: 0,
        duration: 1,
        stagger: 0.1,
        delay: 0.5,
        ease: CustomEase.create("", ".76,0,.2,1"),
      }
    );
  };

  const handleOpenMenu = () => {
    if (
      !navRef.current ||
      !menuOpenBtnRef.current ||
      !menuOverlayRef.current ||
      !menuOverlayBarRef.current ||
      !menuCloseBtnRef.current ||
      !menuFooterRef.current
    ) {
      return;
    }

    gsap.to(
      [
        navRef.current.querySelector("a"),
        menuOpenBtnRef.current.querySelector("p"),
      ],
      {
        y: -20,
        duration: 1,
        stagger: 0.1,
        ease: CustomEase.create("", ".76,0,.2,1"),
        onComplete: () => {
          gsap.set(navRef.current.querySelector("a"), { y: 20 });
          gsap.set(menuOpenBtnRef.current.querySelector("p"), { y: 20 });
        },
      }
    );

    gsap.to(menuOverlayRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      ease: CustomEase.create("", ".76,0,.2,1"),
      onComplete: () => {
        gsap.set(navRef.current, { pointerEvents: "none" });
        gsap.set(menuOverlayRef.current, { pointerEvents: "all" });
      },
    });

    gsap.to(".menu-link a", {
      y: "0",
      duration: 1,
      stagger: 0.1,
      delay: 0.5,
      ease: "power3.out",
    });

    gsap.to(
      [
        menuOverlayBarRef.current.querySelector("a"),
        menuCloseBtnRef.current.querySelector("p"),
        menuFooterRef.current.querySelector(".showreel a"),
        ...menuFooterRef.current.querySelectorAll(".media-link a"),
      ],
      {
        y: 0,
        duration: 1,
        stagger: 0.1,
        delay: 0.5,
        ease: CustomEase.create("", ".76,0,.2,1"),
      }
    );
  };

  useEffect(() => {
    gsap.registerPlugin(CustomEase);

    if (menuOpenBtnRef.current) {
      menuOpenBtnRef.current.addEventListener("click", handleOpenMenu);
    }

    if (menuCloseBtnRef.current) {
      menuCloseBtnRef.current.addEventListener("click", handleCloseMenu);
    }

    return () => {
      if (menuOpenBtnRef.current) {
        menuOpenBtnRef.current.removeEventListener("click", handleOpenMenu);
      }

      if (menuCloseBtnRef.current) {
        menuCloseBtnRef.current.removeEventListener("click", handleCloseMenu);
      }
    };
  }, []);

  const handleNavigation = (e, path) => {
    e.preventDefault();

    if (pathname === path) {
      handleCloseMenu();
      return;
    }

    handleCloseMenu();

    setTimeout(() => {
      // For basic navigation without view transitions
      navigate(path);
      
      // If you want to keep the view transition effect, you could use:
      // slideInOut();
      // setTimeout(() => navigate(path), 750);
    }, 200);
  };

  return (
    <>
      <nav 
        ref={navRef}
        className="fixed top-0 left-0 w-screen p-5 flex justify-between items-center z-10"
      >
          <div className="relative w-max h-4 cursor-pointer overflow-hidden">
            <a 
              href="/" 
              onClick={(e) => handleNavigation(e, "/")}
              className={`relative block select-none transform translate-y-0 ${getCurrentTextColor()}`}
              style={{ willChange: 'transform' }}
            >
              2025 ©
            </a>
          </div>
        <div 
          className="relative w-max h-4 cursor-pointer overflow-hidden" 
          ref={menuOpenBtnRef}
        >
          <p 
            className={`relative block select-none transform translate-y-0 ${getCurrentTextColor()}`}
            style={{ willChange: 'transform' }}
          >
            Menu
          </p>
        </div>
      </nav>

      <div 
        className="menu-overlay fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black z-20 pointer-events-none"
        ref={menuOverlayRef}
        style={{ 
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
          willChange: 'clip-path'
        }}
      >
        <div 
          className="fixed top-0 left-0 w-screen p-5 flex justify-between items-center"
          ref={menuOverlayBarRef}
        >
          <div className="relative w-max h-4 cursor-pointer overflow-hidden">
            <a 
              href="/" 
              onClick={(e) => handleNavigation(e, "/")}
              className="relative text-current block select-none transform translate-y-5"
              style={{ willChange: 'transform' }}
            >
              Logo
            </a>
          </div>
          <div 
            className="relative w-max h-4 cursor-pointer overflow-hidden" 
            ref={menuCloseBtnRef}
          >
            <p 
              className="relative text-lime-400  block select-none transform translate-y-5"
              style={{ willChange: 'transform' }}
            >
              Close
            </p>
          </div>
        </div>

        <div 
          className="fixed bottom-0 left-0 w-screen p-5 flex justify-between items-center"
          ref={menuFooterRef}
        >
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <div key={index} className="media-link relative w-max h-4 cursor-pointer overflow-hidden">
                <a 
                  href={social.href}
                  className="relative  text-lime-400 block select-none transform translate-y-5"
                  style={{ willChange: 'transform' }}
                >
                  {social.label}
                </a>
              </div>
            ))}
          </div>
          
        </div>

        <div className="flex flex-col justify-center items-center">
          {menuItems.map((item, index) => (
            <div key={index} className="menu-link relative overflow-hidden">
              <a 
                href={item.path} 
                onClick={(e) => handleNavigation(e, item.path)}
                className="relative inline-block transform translate-y-full"
                style={{ willChange: 'transform' }}
              >
                <h2 className={`uppercase font-light !text-[8vw] !leading-[0.93] text-lime-400 max-[900px]:text-[20vw]`}>
                  {item.label}
                </h2>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Nav;