import React from "react";
import { Link } from "react-router-dom";
import ParallaxImage from "../../Components/ParallaxImage";
import { ReactLenis, useLenis } from "lenis/react";
import AnimatedText from "../../Components/AnimatedText";
import Homelast from "../../HomePartials/Homelast";

const Contact = () => {
  const lenis = useLenis(({ scroll }) => {});

  return (
    <ReactLenis root>
      <div className="">
        {/* Contact Hero Section */}
        <section className="p-4 md:px-8 relative w-full bg-[#020617] flex flex-col items-center gap-7 md:gap-16">
          <div className="overflow-hidden w-full">
            <h1 className=" text-[24.3vw] text-lime-400 text-center w-full sm:text-[17vw] md:text-[20vw] leading-[0.85] font-light tracking-tight ">
              Get in touch
            </h1>
          </div>

          <div className=" w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-12 lg:gap-16">
            <div className=" flex-1 flex flex-col gap-10">
              {/* Intro Message Card */}
              <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 p-8 lg:p-10 text-lime-400 border border-lime-400/30 backdrop-blur-sm transition-all duration-500 hover:border-lime-400/20 hover:shadow-2xl hover:shadow-lime-400/5">
                <h3 className="text-center lg:text-left !text-[7vw] md:!text-[5.2vw] lg:!text-[4vw] mb-6 leading-tight tracking-wide">
                  Let's Build Something Great Together.
                </h3>
                <p className="text-center lg:text-left  leading-relaxed text-white font-light">
                  I'm open to freelance, full-time roles, and creative
                  collaborations.
                </p>
                <div className="mt-8 pt-6 border-t border-lime-400/20 flex items-center justify-center lg:justify-start">
                  <Link
                    to="/contact"
                    className="flex items-center gap-3 text-lime-400 font-['FK_Screamer'] text-lg tracking-wide hover:text-lime-300 transition-all duration-300 group"
                  >
                    <span>Get in Touch</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Opportunities / Resume Section */}
              <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 p-8 lg:p-10 text-lime-400 border  backdrop-blur-sm transition-all duration-500 border-lime-400/20 hover:shadow-2xl shadow-lime-400/5 space-y-6">
                <h3 className="text-center lg:text-left !text-[7vw] md:!text-[5.2vw] lg:!text-[4vw]text-lime-400 leading-tight tracking-wide">
                  Want to Collaborate?
                </h3>
                <p className="text-center lg:text-left text-[color:var(--color-light)] text-lg lg:text-xl leading-relaxed font-light">
                  Whether it's a product idea, frontend project, or just a cool
                  concept—I'm always up for a challenge. Feel free to explore my
                  work or download my resume below.
                </p>
                <div className="divider w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent my-8"></div>
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center lg:justify-start">
                  <Link
                    to="/projects"
                    className="flex items-center gap-3 font-['FK_Screamer'] text-xl lg:text-2xl text-lime-400 hover:text-lime-300 transition-all duration-300 group"
                  >
                    <span>View Projects</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Link>
                  <a
                    href="/resume.pdf"
                    download
                    className="flex items-center gap-3 font-['FK_Screamer'] text-xl lg:text-2xl text-lime-400 hover:text-lime-300 transition-all duration-300 group"
                  >
                    <span>Download Resume</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-y-[-2px] transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form flex-1">
              <form className="flex flex-col gap-6 p-8 lg:p-10 bg-gradient-to-br from-gray-900 via-black to-gray-900 backdrop-blur-sm border border-lime-400/10 transition-all duration-500 hover:border-lime-400/20">
                <div className="form-header mb-4">
                  <h3 className="font-['FK_Screamer'] !text-[7vw] md:!text-[5.2vw] lg:!text-[4vw] text-lime-400 mb-2 tracking-wide">
                    Send a Message
                  </h3>
                  <div className="w-30 h-0.5 bg-lime-400/40"></div>
                </div>

                <div className="name-fields flex flex-col sm:flex-row gap-4">
                  <div className="form-group flex-1">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="form-input w-full p-4 lg:p-5 uppercase font-['FK_Screamer'] text-lg lg:text-xl font-light text-[color:var(--color-dark)] bg-lime-400 placeholder-[color:var(--color-dark)] border-none focus:ring-2 focus:ring-lime-300 transition-all duration-300"
                    />
                  </div>
                  <div className="form-group flex-1">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="form-input w-full p-4 lg:p-5 uppercase font-['FK_Screamer'] text-lg lg:text-xl font-light text-[color:var(--color-dark)] bg-lime-400 placeholder-[color:var(--color-dark)] border-none focus:ring-2 focus:ring-lime-300 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="form-input w-full p-4 lg:p-5 uppercase font-['FK_Screamer'] text-lg lg:text-xl font-light text-[color:var(--color-dark)] bg-lime-400 placeholder-[color:var(--color-dark)] border-none focus:ring-2 focus:ring-lime-300 transition-all duration-300"
                  />
                </div>

                <div className="form-group">
                  <textarea
                    rows={6}
                    placeholder="Message"
                    className="form-textarea w-full p-4 lg:p-5 uppercase font-['FK_Screamer'] text-lg lg:text-xl font-light text-[color:var(--color-dark)] bg-lime-400 placeholder-[color:var(--color-dark)] resize-none border-none focus:ring-2 focus:ring-lime-300 transition-all duration-300"
                  ></textarea>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    className="flex items-center gap-3 font-['FK_Screamer'] text-xl lg:text-2xl text-lime-400 hover:text-lime-300 transition-all duration-300 group px-6 py-3 border border-lime-400/30 hover:border-lime-400/50 backdrop-blur-sm"
                  >
                    <span>Submit</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        
        </section>
          <Homelast/>

        {/* Contact Banner Section */}
        {/* <section className="contact-banner relative w-full h-[100vh] flex flex-col md:flex-row bg-[color:var(--color-light)] overflow-hidden">
          <div className="banner-text relative flex-1 p-8 lg:p-12 flex flex-col justify-between">
            <div className="flex justify-between items-center w-full">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-['FK_Screamer'] leading-none transform hover:scale-105 transition-transform duration-700 cursor-default">
                THANK
              </h1>
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-['FK_Screamer'] leading-none transform hover:rotate-12 transition-transform duration-700 cursor-default">
                )
              </h2>
            </div>
            <div className="flex justify-between items-center w-full">
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-['FK_Screamer']  leading-none transform hover:-rotate-12 transition-transform duration-700 cursor-default">
                (
              </h2>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-['FK_Screamer']  leading-none transform hover:scale-105 transition-transform duration-700 cursor-default">
                YOU
              </h1>
            </div>
          </div>
          
          <div className="banner-image relative flex-1 overflow-hidden">
            <div className="w-full h-full">
              <ParallaxImage
                src="/contact2.jpg"
                alt="Innovating the Future of Music"
              />
            </div>
          </div>
        </section> */}

        {/* Global Styles */}
        <style jsx global>{`
          .form-input,
          .form-textarea {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }

          .form-input:focus,
          .form-textarea:focus {
            outline: none;
            box-shadow: 0 0 0 3px rgba(163, 230, 53, 0.1),
              0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            transform: translateY(-1px);
          }

          .form-input:hover,
          .form-textarea:hover {
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            transform: translateY(-1px);
          }

          input::placeholder,
          textarea::placeholder {
            font-family: "FK Screamer", sans-serif;
            color: var(--color-dark);
            opacity: 0.7;
            transition: opacity 0.3s ease;
          }

          input:focus::placeholder,
          textarea:focus::placeholder {
            opacity: 0.5;
          }

          .contact-card {
            background: linear-gradient(
              135deg,
              var(--color-dark) 0%,
              rgba(0, 0, 0, 0.8) 100%
            );
          }

          .form-group {
            position: relative;
          }

          .form-group::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(163, 230, 53, 0.3),
              transparent
            );
            transform: scaleX(0);
            transition: transform 0.3s ease;
          }

          .form-group:focus-within::after {
            transform: scaleX(1);
          }
        `}</style>

        {/* Responsive Styles */}
        <style jsx>{`
          @media (max-width: 1024px) {
            .contact-content {
              gap: 3rem;
            }
          }

          @media (max-width: 768px) {
            .contact-hero {
              padding-top: 8rem;
              padding-bottom: 8rem;
              padding-left: 1rem;
              padding-right: 1rem;
            }

            .contact-content {
              flex-direction: column;
              gap: 2.5rem;
            }

            .contact-card {
              padding: 1.5rem;
            }

            .contact-form form {
              padding: 1.5rem;
            }

            .contact-banner {
              height: auto;
              min-height: 100vh;
            }

            .banner-text {
              min-height: 50vh;
              padding: 2rem;
            }

            .banner-image {
              min-height: 50vh;
            }

            .banner-text h1,
            .banner-text h2 {
              font-size: 3rem;
            }
          }

          @media (max-width: 480px) {
            .contact-hero {
              padding-top: 6rem;
              padding-bottom: 6rem;
            }

            .name-fields {
              flex-direction: column;
            }

            .banner-text h1,
            .banner-text h2 {
              font-size: 2.5rem;
            }
          }
        `}</style>
      </div>
    </ReactLenis>
  );
};

export default Contact;
