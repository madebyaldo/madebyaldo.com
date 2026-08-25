import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-black">
      {/* Hero/Bio Section */}
      <section className="pt-[104px] md:pt-[104px] pb-12 md:pb-12">
        <div className="px-4 md:px-10">
          <div className="md:flex md:gap-10">
            {/* Left text column */}
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-[32px] md:text-[32px] leading-[125%]"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  letterSpacing: "-0.02em",
                  color: "var(--color-light-beige)",
                }}
              >
                We are ALDO, a creative & tech studio. We bring our passion for
                good design to brands with purpose and deliver with no
                compromise.
              </h2>
            </motion.div>

            {/* Right text column */}
            <motion.div
              className="md:w-1/2 mt-6 md:mt-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p
                className="text-[24px] md:text-[24px] leading-[1.25em] mb-6 md:mb-6"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  letterSpacing: "-0.02em",
                  color: "var(--color-light-beige)",
                }}
              >
                Toronto is home but we operate globally with a super lean and
                modular approach, only tapping into our diverse roster of talent
                when the project calls for it. No fluff. No politics. No
                meetings about meetings. Just a group of creative entrepreneurs,
                working how we want to produce the best results.
              </p>

              <Link
                to="/contact"
                className="inline-block"
                style={{
                  fontFamily: '"Matter Mono Regular", monospace',
                  fontSize: "14px",
                  letterSpacing: "0.025em",
                  textTransform: "uppercase",
                  color: "var(--color-white)",
                }}
              >
                Get in touch →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 md:px-10 pb-12 md:pb-12">
        <div>
          <p
            className="text-[14px] md:text-[14px] mb-10 md:mb-10"
            style={{
              fontFamily: '"Matter Mono Regular", monospace',
              letterSpacing: "0.025em",
              textTransform: "uppercase",
              color: "rgba(243, 242, 239, 0.5)",
            }}
          >
            Services
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-10">
            <div>
              <p
                className="text-[18px] leading-[135%]"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  letterSpacing: "-0.02em",
                  color: "var(--color-light-beige)",
                }}
              >
                → Brand identity
                <br />
                → Brand strategy
                <br />
                → Art direction
                <br />→ Photography
              </p>
            </div>

            <div>
              <p
                className="text-[18px] leading-[135%]"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  letterSpacing: "-0.02em",
                  color: "var(--color-light-beige)",
                }}
              >
                → Copywriting
                <br />
                → Graphic design
                <br />
                → Packaging
                <br />→ Motion
              </p>
            </div>

            <div>
              <p
                className="text-[18px] leading-[135%]"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  letterSpacing: "-0.02em",
                  color: "var(--color-light-beige)",
                }}
              >
                → UX research
                <br />
                → IA & Wireframing
                <br />
                → Prototyping
                <br />→ UI & visual design
              </p>
            </div>

            <div>
              <p
                className="text-[18px] leading-[135%]"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  letterSpacing: "-0.02em",
                  color: "var(--color-light-beige)",
                }}
              >
                → Front end development
                <br />
                → Back end development
                <br />
                → Framer
                <br />→ Squarespace
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Clients Section */}
      <section className="px-4 md:px-10 pb-12 md:pb-12">
        <div>
          <p
            className="text-[14px] md:text-[14px] mb-10 md:mb-10"
            style={{
              fontFamily: '"Matter Mono Regular", monospace',
              letterSpacing: "0.025em",
              textTransform: "uppercase",
              color: "rgba(243, 242, 239, 0.5)",
            }}
          >
            Selected clients
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-10">
            <div>
              <p
                className="text-[18px] leading-[135%]"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  letterSpacing: "-0.02em",
                  color: "var(--color-light-beige)",
                }}
              >
                Avling
                <br />
                Serviette
                <br />
                Simpl Things
                <br />
                cada dia tequila
              </p>
            </div>

            <div>
              <p
                className="text-[18px] leading-[135%]"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  letterSpacing: "-0.02em",
                  color: "var(--color-light-beige)",
                }}
              >
                Five Star
                <br />
                Hilroy
                <br />
                Nickelodeon
                <br />
                MTV
              </p>
            </div>

            <div>
              <p
                className="text-[18px] leading-[135%]"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  letterSpacing: "-0.02em",
                  color: "var(--color-light-beige)",
                }}
              >
                eBay
                <br />
                Novamind
                <br />
                ONroute
                <br />
                FitSwoop
              </p>
            </div>

            <div>
              <p
                className="text-[18px] leading-[135%]"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  letterSpacing: "-0.02em",
                  color: "var(--color-light-beige)",
                }}
              >
                Fuel Transport
                <br />
                CarDoor
                <br />
                McFarlane Toys
                <br />
                DJ Starting From Scratch
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="px-4 md:px-10 pb-12 md:pb-12">
        <div>
          <h2
            className="text-[14px] md:text-[14px] mb-10 md:mb-10"
            style={{
              fontFamily: '"Matter Mono Regular", monospace',
              letterSpacing: "0.025em",
              textTransform: "uppercase",
              color: "rgba(243, 242, 239, 0.5)",
            }}
          >
            Partners
          </h2>

          <div className="flex flex-col md:flex-row gap-10 md:gap-10 items-start md:items-center">
            <a
              href="https://www.framer.com/?via=mattjumper"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[40px] md:h-[40px] w-[148px] md:w-[148px]"
            >
              <img
                src="https://framerusercontent.com/modules/75wiVqpK5ar6iqAQZW10/jyT8udeGFYIxxUefK86L/assets/UOl1XN55ZNs3hpIFVxFhykXRc.png"
                alt="Framer"
                className="w-full h-full object-contain"
              />
            </a>

            <a
              href="https://netlify.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[32px] md:h-[32px] w-[118px] md:w-[118px]"
            >
              <img
                src="https://framerusercontent.com/modules/75wiVqpK5ar6iqAQZW10/jyT8udeGFYIxxUefK86L/assets/DJH8HXEdPWCKLwjVAjKszFJh7Ns.png"
                alt="Netlify"
                className="w-full h-full object-contain"
              />
            </a>

            <a
              href="https://squarespace.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[32px] md:h-[32px] w-[211px] md:w-[211px]"
            >
              <img
                src="https://framerusercontent.com/modules/75wiVqpK5ar6iqAQZW10/jyT8udeGFYIxxUefK86L/assets/vUZZMsPVQooLGCUQdLYJAhCj5k.png"
                alt="Squarespace"
                className="w-full h-full object-contain"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 md:px-10 py-6 md:py-6">
        <div>
          <h2
            className="text-[32px] md:text-[32px] leading-[125%]"
            style={{
              fontFamily: '"Matter Regular", sans-serif',
              letterSpacing: "-0.02em",
              color: "var(--color-light-beige)",
            }}
          >
            © Copyright ALDO Creative Inc. 2026.
          </h2>
        </div>
      </footer>
    </main>
  );
}

export default About;
