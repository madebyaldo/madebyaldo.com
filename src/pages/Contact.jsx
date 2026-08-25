import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-black pt-[104px]">
      {/* Hero Section with Image and Content */}
      <section className="px-4 md:px-10 pb-12 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          {/* Left Column - Image */}
          <motion.div
            className="aspect-[5/6] w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://framerusercontent.com/modules/LVpncFn0lCc1PbXbnLxi/EP5pDoXEPSHrLl3THRib/assets/6DaSdqk2tojhKjQesRWmpm7o.jpg"
              alt="Contact"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-start gap-6 md:gap-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[48px] md:text-[96px] leading-[100%] mb-4 md:mb-6"
              style={{
                fontFamily: '"Matter Regular", sans-serif',
                letterSpacing: "-0.02em",
                color: "var(--color-light-beige)",
              }}
            >
              Let's start something.
            </motion.h1>

            <motion.div
              className="flex flex-col md:flex-row gap-4 md:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link
                to="/contact/clients"
                className="inline-block px-8 py-4 rounded-full text-center"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  fontSize: "24px",
                  letterSpacing: "-0.02em",
                  lineHeight: "1.25em",
                  color: "var(--color-black)",
                  backgroundColor: "var(--color-light-beige)",
                }}
              >
                Start a project
              </Link>
              <Link
                to="/contact/crew"
                className="inline-block px-8 py-4 rounded-full text-center"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  fontSize: "24px",
                  letterSpacing: "-0.02em",
                  lineHeight: "1.25em",
                  color: "var(--color-black)",
                  backgroundColor: "var(--color-light-beige)",
                }}
              >
                Join the crew
              </Link>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="flex flex-col gap-6 md:gap-6 mt-6 md:mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div>
                <h2
                  className="mb-2"
                  style={{
                    fontFamily: '"Matter Regular", sans-serif',
                    fontSize: "24px",
                    letterSpacing: "-0.02em",
                    lineHeight: "135%",
                    color: "var(--color-light-beige)",
                  }}
                >
                  Send an email
                </h2>
                <a
                  href="mailto:hello.madebyaldo@gmail.com"
                  className="inline-block underline"
                  style={{
                    fontFamily: '"Matter Mono Regular", monospace',
                    fontSize: "16px",
                    letterSpacing: "0.025em",
                    lineHeight: "100%",
                    color: "var(--color-white)",
                    textTransform: "uppercase",
                    textUnderlineOffset: "4px",
                  }}
                >
                  hello.madebyaldo@gmail.com
                </a>
              </div>

              <div>
                <h2
                  className="mb-2"
                  style={{
                    fontFamily: '"Matter Regular", sans-serif',
                    fontSize: "24px",
                    letterSpacing: "-0.02em",
                    lineHeight: "135%",
                    color: "var(--color-light-beige)",
                  }}
                >
                  Drop a DM on IG
                </h2>
                <a
                  href="https://instagram.com/madebyaldo.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block underline"
                  style={{
                    fontFamily: '"Matter Mono Regular", monospace',
                    fontSize: "16px",
                    letterSpacing: "0.025em",
                    lineHeight: "100%",
                    color: "var(--color-white)",
                    textTransform: "uppercase",
                    textUnderlineOffset: "4px",
                  }}
                >
                  @madebyaldo.co
                </a>
              </div>

              <div>
                <h2
                  className="mb-2"
                  style={{
                    fontFamily: '"Matter Regular", sans-serif',
                    fontSize: "24px",
                    letterSpacing: "-0.02em",
                    lineHeight: "135%",
                    color: "var(--color-light-beige)",
                  }}
                >
                  Do a LinkedIn
                </h2>
                <a
                  href="https://linkedin.com/company/mod-creative"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block underline"
                  style={{
                    fontFamily: '"Matter Mono Regular", monospace',
                    fontSize: "16px",
                    letterSpacing: "0.025em",
                    lineHeight: "100%",
                    color: "var(--color-white)",
                    textTransform: "uppercase",
                    textUnderlineOffset: "4px",
                  }}
                >
                  ALDO
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 md:px-10 py-6 md:py-6">
        <div>
          <h2
            className="text-[32px] md:text-[40px] lg:text-[32px]"
            style={{
              fontFamily: '"Matter Regular", sans-serif',
              letterSpacing: "-0.02em",
              lineHeight: "125%",
              color: "var(--color-white)",
            }}
          >
            © Copyright ALDO Creative Inc. 2026.
          </h2>
        </div>
      </footer>
    </main>
  );
}

export default Contact;
