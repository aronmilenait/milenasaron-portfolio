import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import projectsData from "../data/projectsData";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        const sectionTop = projectsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsVisible(sectionTop < windowHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    }
  }, [isVisible, controls]);

  return (
    <section
      id="projects"
      className="bg-gradient-to-r from-pink-200 via-pink-50 to-pink-200 py-16"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.h4
          className="text-4xl font-medium mb-8 text-pink-900 text-center"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h4>
        <motion.p
          className="text-pink-900 mb-8 text-center text-lg"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          This is a selection of my favorite work. For more projects, visit my
          <a
            href="https://github.com/aronmilenait"
            className="text-pink-800 underline ml-1"
          >
            GitHub
          </a>
          .
        </motion.p>

        <div className="space-y-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="md:w-1/3 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform transition-transform duration-300 hover:scale-125 cursor-pointer"
                />
              </div>
              <div className="p-6 flex flex-col justify-between md:w-2/3">
                <div>
                  <motion.p
                    className="text-xl font-semibold mb-4 text-pink-900"
                    initial="hidden"
                    animate={controls}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {project.title}
                  </motion.p>
                  <motion.p
                    className="text-pink-800 mb-4"
                    initial="hidden"
                    animate={controls}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    {project.description}
                  </motion.p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-2 py-1 bg-pink-100 text-pink-800 rounded-md text-sm"
                        initial="hidden"
                        animate={controls}
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 },
                        }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        {technology}
                      </motion.span>
                    ))}
                  </div>
                </div>
                <motion.div
                  className="mt-4"
                  initial="hidden"
                  animate={controls}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="width-full inline-block text-center py-2 px-4 bg-gradient-to-br text-pink-50 font-bold from-pink-300 to-pink-500 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:text-pink-100"
                  >
                    View Project
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
