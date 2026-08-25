import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { workProjects } from "../data/workProjects";

function Work() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-black pt-[72px]">
      {/* Work Grid Section */}
      <section className="px-4 md:px-10 pt-12 md:pt-12 pb-12 md:pb-12">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-10">
            {workProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={`/work/${project.slug}`} className="group block">
                  <div className="bg-[#F3F2EF] aspect-[0.79/1] mb-2 md:mb-2 overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                    />
                    <div
                      className="absolute inset-0 flex flex-col justify-center items-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundColor: project.hoverColor }}
                    >
                      <h3
                        className="text-[32px] mb-4 text-center"
                        style={{
                          fontFamily: '"Matter Regular", sans-serif',
                          letterSpacing: "-0.02em",
                          lineHeight: "1.25em",
                          color:
                            project.hoverColor === "#F2F2F2" ? "#000" : "#fff",
                        }}
                      >
                        {project.hoverTitle}
                      </h3>
                      <p
                        className="text-[22px] md:text-[18px] text-center"
                        style={{
                          fontFamily: '"Matter Regular", sans-serif',
                          letterSpacing: "-0.02em",
                          lineHeight: "1.25em",
                          color:
                            project.hoverColor === "#F2F2F2" ? "#000" : "#fff",
                        }}
                      >
                        {project.hoverDescription}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 md:mt-2">
                    <h3
                      className="text-[18px] md:text-[24px] mb-1 md:mb-1"
                      style={{
                        fontFamily: '"Matter Regular", sans-serif',
                        letterSpacing: "-0.02em",
                        color: "var(--color-white)",
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-[16px]"
                      style={{
                        fontFamily: '"Matter Mono Regular", monospace',
                        letterSpacing: "-0.02em",
                        color: "var(--color-white)",
                      }}
                    >
                      {project.type}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
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

export default Work;
