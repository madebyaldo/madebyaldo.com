import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { workProjects } from "../data/workProjects";

function HomePage() {
  // Initialize showHeroLogo based on current scroll position to prevent animation on refresh
  const [showHeroLogo, setShowHeroLogo] = useState(() => {
    if (typeof window !== "undefined") {
      return window.scrollY <= 25;
    }
    return true;
  });
  const [isInitialMount, setIsInitialMount] = useState(true);
  const logoAreaRef = useRef(null);
  const lastLogoHeight = useRef(0);

  useLayoutEffect(() => {
    if (logoAreaRef.current) {
      lastLogoHeight.current = logoAreaRef.current.offsetHeight;
    }
  });

  useEffect(() => {
    let ticking = false;
    let lastValue = window.scrollY <= 25;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const show = scrollY <= 25;
          // Only update state when the value actually changes to avoid re-renders and layout thrashing
          if (show !== lastValue) {
            lastValue = show;
            setShowHeroLogo(show);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll(); // Check initial scroll position
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Disable initial animation after first render
    const timer = setTimeout(() => {
      setIsInitialMount(false);
    }, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-[88px] md:pt-[56px] px-6 md:px-10 pb-12 md:pb-12">
        <div className="max-w-[1200px] mx-auto">
          {/* Hero Logo - animates to navbar; spacer collapses smoothly */}
          {showHeroLogo ? (
            <div key="hero-logo" ref={logoAreaRef} className="hidden md:block">
              <motion.div
                className="flex items-center mb-12 md:mb-16 py-8 md:py-12"
                layoutId="logo"
                initial={isInitialMount ? false : undefined}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <div className="w-full px-10">
                  <Link to="/" className="block">
                    <div
                      className="w-full scale-x-[1.2]"
                      style={{ height: "360px" }}
                    >
                      <svg
                        viewBox="0 0 778 152"
                        preserveAspectRatio="none"
                        className="w-full h-full"
                      >
                        <path
                          d="M140 148L133.6 132H78.2L72 148H0L65.2 3.99999H151.2L218 148H140ZM92.8 94H118L105.2 62.2L92.8 94ZM289.969 102H373.969V148H217.969V3.99999H289.969V102ZM478.031 3.99999C541.831 3.99999 570.031 34 570.031 74V78C570.031 118 541.831 148 478.031 148H376.031V3.99999H478.031ZM496.031 78V74C496.031 62.2 492.831 52 474.031 52H448.031V100H474.031C492.831 100 496.031 89.8 496.031 78ZM673.961 -1.90735e-06C737.761 -1.90735e-06 777.961 34 777.961 74V78C777.961 118 737.761 152 673.961 152C610.161 152 569.961 118 569.961 78V74C569.961 34 610.161 -1.90735e-06 673.961 -1.90735e-06ZM703.961 78V74C703.961 62.2 692.761 48 673.961 48C655.161 48 643.961 62.2 643.961 74V78C643.961 89.8 655.161 104 673.961 104C692.761 104 703.961 89.8 703.961 78Z"
                          fill="#000"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </motion.div>
            </div>
          ) : (
            <motion.div
              key="hero-spacer"
              className="hidden md:block overflow-hidden"
              initial={{ height: lastLogoHeight.current }}
              animate={{ height: 0 }}
              transition={{ type: "spring", duration: 0.8, bounce: 0 }}
            />
          )}

          {/* Text content just under MOD logo, aligned with MOD logo's D */}
          <div className="hidden md:flex justify-end mt-20 md:mt-24">
            <div className="text-left px-10 -mr-[5%]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1
                  className="text-[40px] md:text-[48px] leading-[1.1em] mb-6 md:mb-6"
                  style={{
                    fontFamily: '"Matter Regular", sans-serif',
                    letterSpacing: "-0.02em",
                    color: "var(--color-black)",
                  }}
                >
                  We make beautiful brands and
                  <br />
                  digital experiences.
                </h1>

                <Link
                  to="/about"
                  className="inline-block mt-10 md:mt-12 hover:opacity-70 transition-opacity underline"
                  style={{
                    fontFamily: '"Matter Mono Regular", monospace',
                    fontSize: "16px",
                    letterSpacing: "0.025em",
                    textTransform: "uppercase",
                    color: "var(--color-black)",
                    textUnderlineOffset: "4px",
                  }}
                >
                  Explore ALDO →
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Mobile version */}
          <div className="md:hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1
                className="text-[40px] md:text-[48px] leading-[1.1em] mb-6 md:mb-6"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  letterSpacing: "-0.02em",
                  color: "var(--color-black)",
                }}
              >
                We make beautiful brands and digital experiences.
              </h1>

              <Link
                to="/about"
                className="inline-block mt-6 md:mt-6 hover:opacity-70 transition-opacity underline"
                style={{
                  fontFamily: '"Matter Mono Regular", monospace',
                  fontSize: "16px",
                  letterSpacing: "0.025em",
                  textTransform: "uppercase",
                  color: "var(--color-black)",
                  textUnderlineOffset: "4px",
                }}
              >
                Explore ALDO →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work Grid Section */}
      <section className="px-4 md:px-10 pb-12 md:pb-12">
        <div>
          <h2 className="sr-only">Latest work</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-10">
            {workProjects.slice(-6).map((project) => (
              <Link
                key={project.slug}
                to={`/work/${project.slug}`}
                className="group block"
              >
                <div className="bg-[#F3F2EF] aspect-[0.79/1] mb-2 md:mb-2 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-2 md:mt-2">
                  <h3
                    className="text-[18px] md:text-[24px] mb-1 md:mb-1"
                    style={{
                      fontFamily: '"Matter Regular", sans-serif',
                      letterSpacing: "-0.02em",
                      color: "var(--color-black)",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-[16px]"
                    style={{
                      fontFamily: '"Matter Mono Regular", monospace',
                      letterSpacing: "-0.02em",
                      color: "var(--color-black)",
                    }}
                  >
                    {project.type}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Work Link */}
          <div className="mt-12 md:mt-12 text-right">
            <Link
              to="/work"
              className="inline-block"
              style={{
                fontFamily: '"Matter Regular", sans-serif',
                fontSize: "32px",
                letterSpacing: "-0.02em",
                lineHeight: "125%",
                color: "var(--color-black)",
              }}
            >
              View all work →
            </Link>
          </div>
        </div>
      </section>

      {/* Playground Section */}
      <section
        data-nav-dark
        className="bg-black pt-20 md:pt-20 pb-22 md:pb-22 px-4 md:px-10"
      >
        <div>
          <h2
            className="text-center mb-16"
            style={{
              fontFamily: '"Matter Regular", sans-serif',
              fontSize: "32px",
              letterSpacing: "-0.02em",
              lineHeight: "125%",
              color: "var(--color-light-beige)",
              maxWidth: "800px",
              margin: "0 auto 64px",
            }}
          >
            Sometimes we make things for ourselves to solve problems that we're
            passionate about.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8">
            {/* EQUE */}
            <div>
              <div className="bg-[#ECEEF0] aspect-square mb-2 md:mb-2">
                <img
                  src="https://framerusercontent.com/images/obuKoTmKePct296fpxTZ8v7pCMk.gif"
                  alt="EQUE"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3
                className="text-[18px] md:text-[24px] mb-1 md:mb-1 mt-2 md:mt-2"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  letterSpacing: "-0.02em",
                  color: "var(--color-light-beige)",
                }}
              >
                EQUE
              </h3>
              <p
                className="text-[16px] mb-16 md:mb-16"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  letterSpacing: "-0.02em",
                  lineHeight: "135%",
                  color: "var(--color-light-beige)",
                }}
              >
                We made a playlist app (and an algorithm) to change the way we
                listen to music together and unite us through the tracks we all
                love, regardless of what music platform you pledge allegiance
                to.
              </p>
            </div>

            {/* EQUE Mag */}
            <div>
              <div className="bg-[#F3F2EF40] aspect-square mb-2 md:mb-2">
                <img
                  src="https://framerusercontent.com/images/Rj0UnqrJbA5n8MBgCsogJ027FA.gif"
                  alt="EQUE Mag"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3
                className="text-[18px] md:text-[24px] mb-1 md:mb-1 mt-2 md:mt-2"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  letterSpacing: "-0.02em",
                  color: "var(--color-light-beige)",
                }}
              >
                EQUE Mag
              </h3>
              <p
                className="text-[16px] mb-16 md:mb-16"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  letterSpacing: "-0.02em",
                  lineHeight: "135%",
                  color: "var(--color-light-beige)",
                }}
              >
                We created a platform that provides artists and creatives a
                platform to share the music that they believe needs to be heard,
                with fully-integrated music players, visually tailored for each
                track.
              </p>
            </div>

            {/* Digestible */}
            <div>
              <div className="bg-[#F3F2EF40] aspect-square mb-2 md:mb-2">
                <img
                  src="https://framerusercontent.com/images/X7PLTnANG0zTAbFU08V46fvOl7Y.gif"
                  alt="Digestible"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3
                className="text-[18px] md:text-[24px] mb-1 md:mb-1 mt-2 md:mt-2"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  letterSpacing: "-0.02em",
                  color: "var(--color-light-beige)",
                }}
              >
                Digestible
              </h3>
              <p
                className="text-[16px] mb-16 md:mb-16"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  letterSpacing: "-0.02em",
                  lineHeight: "135%",
                  color: "var(--color-light-beige)",
                }}
              >
                Dark times call for clean ideas. So we created a beautiful
                web-based menu platform for restaurants to abandon their printed
                menus without falling victim to PDFs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Other Section */}
      <section
        className="bg-white pt-16 md:pt-22 pb-0 px-4 md:px-10"
        style={{ backgroundColor: "#fff" }}
      >
        <div>
          <h2
            className="text-center mb-12 md:mb-16"
            style={{
              fontFamily: '"Matter Regular", sans-serif',
              fontSize: "32px",
              letterSpacing: "-0.02em",
              lineHeight: "1.25em",
              color: "var(--color-black)",
            }}
          >
            From top-class pitch decks to making running shoes out of school
            <br />
            binders, there are some projects we just can't say no to.
          </h2>

          <div
            className="flex gap-4 md:gap-4 overflow-x-auto pb-6 md:pb-10"
            style={{
              overscrollBehaviorX: "contain",
            }}
          >
            {/* Scrollable items would go here - simplified for now */}
            <div className="flex-shrink-0 w-[75%] md:w-[20%]">
              <div className="bg-white aspect-[0.88/1] mb-2">
                <img
                  src="https://framerusercontent.com/images/yjBmOQbGZWUiyQ2KEvkmY9vCDI.jpg"
                  alt="Nickelodeon"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3
                className="text-[18px] mb-1 mt-2"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  letterSpacing: "-0.02em",
                  color: "var(--color-black)",
                }}
              >
                Nickelodeon
              </h3>
              <div className="inline-block bg-[#E4EB79] px-1 py-0.5 rounded mb-1">
                <span
                  className="text-[12px]"
                  style={{
                    fontFamily: '"Matter Mono Regular", monospace',
                    letterSpacing: "-0.02em",
                    color: "var(--color-black)",
                  }}
                >
                  event + installation
                </span>
              </div>
              <p
                className="text-[16px]"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  letterSpacing: "-0.02em",
                  lineHeight: "135%",
                  color: "var(--color-black)",
                }}
              >
                We brought 8k people to the Ontario Science Centre for a hands
                on learning experience with Nickelodeon.
              </p>
            </div>
            {/* Hilroy */}
            <div className="flex-shrink-0 w-[75%] md:w-[20%]">
              <div className="bg-white aspect-[0.88/1] mb-2">
                <img
                  src="https://framerusercontent.com/images/EkWwNNlOWghsHrHR1rdEd0wBs.jpg"
                  alt="Hilroy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3
                className="text-[18px] mb-1 mt-2"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  letterSpacing: "-0.02em",
                  color: "var(--color-black)",
                }}
              >
                Hilroy
              </h3>
              <div className="inline-block bg-[#E4EB79] px-1 py-0.5 rounded mb-1">
                <span
                  className="text-[12px]"
                  style={{
                    fontFamily: '"Matter Mono Regular", monospace',
                    letterSpacing: "-0.02em",
                    color: "var(--color-black)",
                  }}
                >
                  event + installation
                </span>
              </div>
              <p
                className="text-[16px]"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  letterSpacing: "-0.02em",
                  lineHeight: "135%",
                  color: "var(--color-black)",
                }}
              >
                It's not very often you get to celebrate a 100th birthday. So we
                threw a giant party and invited the entire country.
              </p>
            </div>

            {/* McFarlane Toys */}
            <div className="flex-shrink-0 w-[75%] md:w-[20%]">
              <div className="bg-white aspect-[0.88/1] mb-2">
                <img
                  src="https://framerusercontent.com/images/ivWoSCMyfteaDpgK8b2rACotvk.jpg"
                  alt="McFarlane Toys"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3
                className="text-[18px] mb-1 mt-2"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  letterSpacing: "-0.02em",
                  color: "var(--color-black)",
                }}
              >
                McFarlane Toys
              </h3>
              <div className="inline-block bg-[#E4EB79] px-1 py-0.5 rounded mb-1">
                <span
                  className="text-[12px]"
                  style={{
                    fontFamily: '"Matter Mono Regular", monospace',
                    letterSpacing: "-0.02em",
                    color: "var(--color-black)",
                  }}
                >
                  pitch deck
                </span>
              </div>
              <p
                className="text-[16px]"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  letterSpacing: "-0.02em",
                  lineHeight: "135%",
                  color: "var(--color-black)",
                }}
              >
                Being the world's top action figure producer, we were bound to
                have some fun helping tell their story.
              </p>
            </div>

            {/* Five Star */}
            <div className="flex-shrink-0 w-[75%] md:w-[20%]">
              <div className="bg-white aspect-[0.88/1] mb-2">
                <img
                  src="https://framerusercontent.com/images/nsYncGXTVvXe6Fd9eygxOcTMQWg.jpg"
                  alt="Five Star"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3
                className="text-[18px] mb-1 mt-2"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  letterSpacing: "-0.02em",
                  color: "var(--color-black)",
                }}
              >
                Five Star
              </h3>
              <div className="inline-block bg-[#E4EB79] px-1 py-0.5 rounded mb-1">
                <span
                  className="text-[12px]"
                  style={{
                    fontFamily: '"Matter Mono Regular", monospace',
                    letterSpacing: "-0.02em",
                    color: "var(--color-black)",
                  }}
                >
                  video series
                </span>
              </div>
              <p
                className="text-[16px]"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  letterSpacing: "-0.02em",
                  lineHeight: "135%",
                  color: "var(--color-black)",
                }}
              >
                How do you help students get great advice to navigate the world
                beyond school? Create a mentor series.
              </p>
            </div>

            {/* MTV x Ardene */}
            <div className="flex-shrink-0 w-[75%] md:w-[20%]">
              <div className="bg-white aspect-[0.88/1] mb-2">
                <img
                  src="https://framerusercontent.com/images/9gEpWrFFmpBd5kDOouWJJNgp0.jpg"
                  alt="MTV x Ardene"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3
                className="text-[18px] mb-1 mt-2"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  letterSpacing: "-0.02em",
                  color: "var(--color-black)",
                }}
              >
                MTV x Ardene
              </h3>
              <div className="inline-block bg-[#E4EB79] px-1 py-0.5 rounded mb-1">
                <span
                  className="text-[12px]"
                  style={{
                    fontFamily: '"Matter Mono Regular", monospace',
                    letterSpacing: "-0.02em",
                    color: "var(--color-black)",
                  }}
                >
                  product collab
                </span>
              </div>
              <p
                className="text-[16px]"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  letterSpacing: "-0.02em",
                  lineHeight: "135%",
                  color: "var(--color-black)",
                }}
              >
                Unique partnerships often require looking through a different
                lens, so we did just that.
              </p>
            </div>

            {/* Five Star United */}
            <div className="flex-shrink-0 w-[75%] md:w-[20%]">
              <div className="bg-white aspect-[0.88/1] mb-2">
                <img
                  src="https://framerusercontent.com/images/QwEhrviDO4o3axPA7Ej6p56Ok.jpg"
                  alt="Five Star United"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3
                className="text-[18px] mb-1 mt-2"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  letterSpacing: "-0.02em",
                  color: "var(--color-black)",
                }}
              >
                Five Star United
              </h3>
              <div className="inline-block bg-[#E4EB79] px-1 py-0.5 rounded mb-1">
                <span
                  className="text-[12px]"
                  style={{
                    fontFamily: '"Matter Mono Regular", monospace',
                    letterSpacing: "-0.02em",
                    color: "var(--color-black)",
                  }}
                >
                  product collab
                </span>
              </div>
              <p
                className="text-[16px]"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  letterSpacing: "-0.02em",
                  lineHeight: "135%",
                  color: "var(--color-black)",
                }}
              >
                We partnered with celebrity designer Alexander-John to
                conceptualize a sneaker using school binders.
              </p>
            </div>
          </div>

          {/* Footer */}
          <footer className="pt-24 md:pt-24 pb-6 md:pb-6">
            <h2
              className="text-left text-[32px] md:text-[40px] lg:text-[32px]"
              style={{
                fontFamily: '"Matter Regular", sans-serif',
                letterSpacing: "-0.02em",
                lineHeight: "125%",
                color: "var(--color-black)",
              }}
            >
              © Copyright ALDO Creative Inc. 2026.
            </h2>
          </footer>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
