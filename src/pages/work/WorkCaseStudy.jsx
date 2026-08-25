import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { workProjects, getNextProject } from "../../data/workProjects";

function WorkCaseStudy() {
  const { slug } = useParams();
  const project = workProjects.find((p) => p.slug === slug);
  const nextProject = project ? getNextProject(slug) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <main className="min-h-screen bg-white pt-[72px] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-black text-4xl mb-4">Project not found</h1>
          <Link to="/work" className="text-black underline">
            Back to Work
          </Link>
        </div>
      </main>
    );
  }

  const galleryImages = project.images || [];

  return (
    <main className="bg-black">
      {/* Next project — fixed behind everything, revealed on scroll */}
      {nextProject && (
        <Link
          to={`/work/${nextProject.slug}`}
          className="fixed bottom-0 left-0 right-0 z-0 h-[85dvh] group cursor-pointer"
        >
          {/* Next project content — centered */}
          <div className="absolute inset-0 flex items-center px-6 md:px-10 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 md:gap-0 items-center w-full">
              {/* Framed image */}
              <div className="flex justify-center md:justify-start">
                <div
                  className="p-5 md:p-8 inline-block"
                  style={{ backgroundColor: "#D9D5CE" }}
                >
                  <div className="w-[280px] md:w-[380px] lg:w-[440px] max-h-[60dvh] overflow-hidden">
                    <img
                      src={nextProject.image}
                      alt={nextProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              {/* Title */}
              <div className="text-center">
                <p
                  className="text-[16px] md:text-[18px] mb-4"
                  style={{
                    fontFamily: '"Matter Regular", sans-serif',
                    letterSpacing: "-0.01em",
                    color: "rgba(255, 255, 255, 0.5)",
                  }}
                >
                  Next project
                </p>
                <h2
                  className="text-[36px] md:text-[48px] lg:text-[56px] transition-colors duration-300"
                  style={{
                    fontFamily: '"Matter Regular", sans-serif',
                    letterSpacing: "-0.03em",
                    lineHeight: "1.1",
                    color: "var(--color-light-beige)",
                  }}
                >
                  <span className="group-hover:text-[#E4EB79] transition-colors duration-300">
                    {nextProject.title}
                  </span>
                </h2>
              </div>
            </div>
          </div>
          {/* Footer — pinned to bottom */}
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 py-6">
            <h2
              className="text-[32px] md:text-[40px] lg:text-[32px]"
              style={{
                fontFamily: '"Matter Regular", sans-serif',
                letterSpacing: "-0.02em",
                lineHeight: "125%",
                color: "var(--color-white)",
              }}
            >
              © Copyright ALDO Creative Inc. 2025.
            </h2>
          </div>
        </Link>
      )}

      {/* Main scrolling content — sits on top of the fixed section */}
      <div className="relative z-10 pointer-events-auto">
        <article className="bg-white">
          {/* Title + Disciplines (left) | Description (right) */}
          <section className="px-4 md:px-10 pt-[96px] md:pt-[110px] pb-12 md:pb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 md:gap-20">
                {/* Left column — Title + Disciplines + Visit */}
                <div>
                  <h1
                    className="text-[40px] md:text-[48px] lg:text-[56px] mb-10 md:mb-14"
                    style={{
                      fontFamily: '"Matter Regular", sans-serif',
                      letterSpacing: "-0.03em",
                      lineHeight: "1.1",
                      color: "var(--color-black)",
                    }}
                  >
                    {project.title}
                  </h1>

                  <h3
                    className="text-[14px] mb-5"
                    style={{
                      fontFamily: '"Matter Mono Regular", monospace',
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      color: "rgba(0, 0, 0, 0.35)",
                    }}
                  >
                    Disciplines
                  </h3>
                  {project.disciplines && project.disciplines.length > 0 && (
                    <ul className="space-y-2 mb-10 md:mb-14">
                      {project.disciplines.map((discipline, idx) => (
                        <li
                          key={idx}
                          className="text-[16px]"
                          style={{
                            fontFamily: '"Matter Regular", sans-serif',
                            letterSpacing: "-0.01em",
                            lineHeight: "1.5",
                            color: "var(--color-black)",
                          }}
                        >
                          → {discipline}
                        </li>
                      ))}
                    </ul>
                  )}

                  {project.website && (
                    <div>
                      <h3
                        className="text-[14px] mb-3"
                        style={{
                          fontFamily: '"Matter Mono Regular", monospace',
                          letterSpacing: "0.05em",
                          textTransform: "uppercase",
                          color: "rgba(0, 0, 0, 0.35)",
                        }}
                      >
                        Visit
                      </h3>
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[16px] underline hover:opacity-70 transition-opacity"
                        style={{
                          fontFamily: '"Matter Regular", sans-serif',
                          letterSpacing: "-0.01em",
                          color: "var(--color-black)",
                          textUnderlineOffset: "4px",
                        }}
                      >
                        {project.website.replace(/^https?:\/\//, "")} ↗
                      </a>
                    </div>
                  )}
                </div>

                {/* Right column — Description */}
                <div>
                  {project.description && project.description.length > 0 ? (
                    <div className="space-y-6">
                      {project.description.map((para, idx) => (
                        <p
                          key={idx}
                          className="text-[18px] md:text-[20px]"
                          style={{
                            fontFamily: '"Matter Regular", sans-serif',
                            letterSpacing: "-0.01em",
                            lineHeight: "1.6",
                            color: "var(--color-black)",
                          }}
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p
                      className="text-[18px] md:text-[20px]"
                      style={{
                        fontFamily: '"Matter Regular", sans-serif',
                        letterSpacing: "-0.01em",
                        lineHeight: "1.6",
                        color: "var(--color-black)",
                      }}
                    >
                      {project.hoverDescription}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </section>

          {/* Gallery — images with padding on desktop */}
          {galleryImages.length > 0 && (
            <section className="px-4 md:px-10 pb-4 md:pb-6">
              <div className="space-y-4 md:space-y-6">
                {galleryImages.map((img, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-full overflow-hidden">
                      <img
                        src={img}
                        alt={`${project.title} - ${index + 1}`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          )}
        </article>
      </div>

      {/* Spacer outside z-10 so clicks pass through to the fixed next project */}
      {nextProject && (
        <div className="h-[85dvh] pointer-events-none relative z-0" />
      )}
    </main>
  );
}

export default WorkCaseStudy;
