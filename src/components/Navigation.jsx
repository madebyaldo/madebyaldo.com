import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navigation() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const darkPages = ["/work", "/about", "/contact"];
    setIsDark(darkPages.includes(location.pathname));

    if (location.pathname === "/") {
      let ticking = false;

      const checkSections = () => {
        const navHeight = 56;
        const darkSection = document.querySelector("[data-nav-dark]");
        if (darkSection) {
          const rect = darkSection.getBoundingClientRect();
          setIsDarkSection(rect.top <= navHeight && rect.bottom > navHeight);
        }
      };

      const handleScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const scrollY = window.scrollY;
            setIsDark(false);
            setIsScrolled(scrollY > 25);
            checkSections();
            ticking = false;
          });
          ticking = true;
        }
      };

      const checkInitialScroll = () => {
        const scrollY = window.scrollY;
        setIsDark(false);
        setIsScrolled(scrollY > 25);
        checkSections();
      };

      checkInitialScroll();
      requestAnimationFrame(checkInitialScroll);

      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      setIsScrolled(true); // On other pages, always show nav with logo
    }
  }, [location]);

  const navItems = [
    { path: "/work", label: "Work" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const mobileNavItems = [
    { path: "/work", label: "Work" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/tools", label: "Tools" },
  ];

  const effectivelyDark = isDark || isDarkSection;
  const logoColor = effectivelyDark ? "#fff" : "#000";
  const textColor = effectivelyDark ? "#fff" : "#000";
  const bgColor = effectivelyDark ? "#000" : "#fff";

  return (
    <>
      {/* Mobile Navigation */}
      <nav
        className="fixed top-0 left-0 w-full z-50 md:hidden transition-colors duration-300"
        style={{ backgroundColor: isMobileMenuOpen ? "#000" : bgColor }}
      >
        <div className="flex items-center justify-between h-[56px] px-6">
          <Link to="/" className="flex items-center">
            <div className="w-[73px] h-[22px]">
              <svg viewBox="0 0 778 152" preserveAspectRatio="none" className="w-full h-full">
                <path
                  d="M140 148L133.6 132H78.2L72 148H0L65.2 3.99999H151.2L218 148H140ZM92.8 94H118L105.2 62.2L92.8 94ZM289.969 102H373.969V148H217.969V3.99999H289.969V102ZM478.031 3.99999C541.831 3.99999 570.031 34 570.031 74V78C570.031 118 541.831 148 478.031 148H376.031V3.99999H478.031ZM496.031 78V74C496.031 62.2 492.831 52 474.031 52H448.031V100H474.031C492.831 100 496.031 89.8 496.031 78ZM673.961 -1.90735e-06C737.761 -1.90735e-06 777.961 34 777.961 74V78C777.961 118 737.761 152 673.961 152C610.161 152 569.961 118 569.961 78V74C569.961 34 610.161 -1.90735e-06 673.961 -1.90735e-06ZM703.961 78V74C703.961 62.2 692.761 48 673.961 48C655.161 48 643.961 62.2 643.961 74V78C643.961 89.8 655.161 104 673.961 104C692.761 104 703.961 89.8 703.961 78Z"
                  fill={isMobileMenuOpen ? "#fff" : logoColor}
                />
              </svg>
            </div>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-4 h-4 rounded-full"
            aria-label="Toggle menu"
            style={{ backgroundColor: isMobileMenuOpen ? "#fff" : textColor }}
          ></button>
        </div>
        <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="absolute top-0 left-0 w-full bg-black px-6 pb-4"
            style={{ paddingTop: "130px", zIndex: -1 }}
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between w-full">
              {mobileNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="hover:opacity-70 transition-opacity"
                  style={{
                    fontFamily: '"Matter Regular", sans-serif',
                    fontSize: "20px",
                    letterSpacing: "-0.02em",
                    color: "#fff",
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </nav>

      {/* Desktop Navigation */}
      <header
        className="hidden md:block fixed top-0 left-0 w-full z-50 transition-colors duration-300"
        style={{ backgroundColor: bgColor }}
      >
        <div className="px-10">
          <div
            className={`flex items-center h-[56px] ${
              location.pathname === "/" && !isScrolled
                ? "justify-between"
                : "justify-between"
            }`}
          >
            {/* Logo in nav - only show when scrolled on home page, or always on other pages */}
            {(location.pathname !== "/" || isScrolled) && (
              <Link to="/" className="flex items-center">
                <motion.div
                  className="w-[97px] h-[30px]"
                  layoutId={location.pathname === "/" ? "logo" : undefined}
                  initial={
                    location.pathname === "/"
                      ? false
                      : { scale: 0.5, opacity: 0 }
                  }
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <svg
                    viewBox="0 0 778 152"
                    preserveAspectRatio="none"
                    className="w-full h-full"
                  >
                    <path
                      d="M140 148L133.6 132H78.2L72 148H0L65.2 3.99999H151.2L218 148H140ZM92.8 94H118L105.2 62.2L92.8 94ZM289.969 102H373.969V148H217.969V3.99999H289.969V102ZM478.031 3.99999C541.831 3.99999 570.031 34 570.031 74V78C570.031 118 541.831 148 478.031 148H376.031V3.99999H478.031ZM496.031 78V74C496.031 62.2 492.831 52 474.031 52H448.031V100H474.031C492.831 100 496.031 89.8 496.031 78ZM673.961 -1.90735e-06C737.761 -1.90735e-06 777.961 34 777.961 74V78C777.961 118 737.761 152 673.961 152C610.161 152 569.961 118 569.961 78V74C569.961 34 610.161 -1.90735e-06 673.961 -1.90735e-06ZM703.961 78V74C703.961 62.2 692.761 48 673.961 48C655.161 48 643.961 62.2 643.961 74V78C643.961 89.8 655.161 104 673.961 104C692.761 104 703.961 89.8 703.961 78Z"
                      fill={logoColor}
                    />
                  </svg>
                </motion.div>
              </Link>
            )}

            {/* Nav links - positioned differently on home page when not scrolled */}
            {location.pathname === "/" && !isScrolled ? (
              <nav className="absolute left-0 right-0 flex items-center justify-between px-10">
                <Link
                  to={navItems[0].path}
                  className="hover:opacity-70 transition-opacity"
                  style={{
                    fontFamily: '"Matter Regular", sans-serif',
                    fontSize: "18px",
                    letterSpacing: "-0.02em",
                    color: textColor,
                    fontWeight:
                      location.pathname === navItems[0].path ? 600 : 400,
                  }}
                >
                  {navItems[0].label}
                </Link>
                <Link
                  to={navItems[1].path}
                  className="hover:opacity-70 transition-opacity"
                  style={{
                    fontFamily: '"Matter Regular", sans-serif',
                    fontSize: "18px",
                    letterSpacing: "-0.02em",
                    color: textColor,
                    fontWeight:
                      location.pathname === navItems[1].path ? 600 : 400,
                  }}
                >
                  {navItems[1].label}
                </Link>
                <Link
                  to={navItems[2].path}
                  className="hover:opacity-70 transition-opacity"
                  style={{
                    fontFamily: '"Matter Regular", sans-serif',
                    fontSize: "18px",
                    letterSpacing: "-0.02em",
                    color: textColor,
                    fontWeight:
                      location.pathname === navItems[2].path ? 600 : 400,
                  }}
                >
                  {navItems[2].label}
                </Link>
              </nav>
            ) : (
              <nav className="flex items-center gap-12">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="hover:opacity-70 transition-opacity"
                    style={{
                      fontFamily: '"Matter Regular", sans-serif',
                      fontSize: "18px",
                      letterSpacing: "-0.02em",
                      color: textColor,
                      fontWeight: location.pathname === item.path ? 600 : 400,
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Navigation;
