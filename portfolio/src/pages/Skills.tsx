import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Skills = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "Node.js",
    "React.js",
    "HTML/CSS",
    "Docker",
    "MySQL",
    "NestJS",
    "Vite",
    "Tailwind CSS",
    "Bootstrap",
    "Webflow",
    "WordPress",
    "LeadPages",
    "Vero",
    "Liquid",
    "Cypress",
    "Jest",
    "Git/Github",
    "Linux",
    "Bash",
  ];

  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById("skills-section");
      if (skillsSection) {
        const sectionTop = skillsSection.getBoundingClientRect().top;
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
      id="skills-section"
      className="bg-gradient-to-r from-pink-50 to-pink-100 py-8"
    >
      <div className="container mx-auto max-w-4xl px-4">
        <h4 className="text-4xl font-medium mb-6 text-pink-900 text-center">
          Skills
        </h4>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4"
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
          initial="hidden"
          animate={controls}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-pink-300 to-pink-500 rounded-lg shadow-lg overflow-hidden"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { type: "spring", stiffness: 200 },
                },
              }}
            >
              <p className="text-lg text-white font-bold py-4 text-center">
                {skill}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
