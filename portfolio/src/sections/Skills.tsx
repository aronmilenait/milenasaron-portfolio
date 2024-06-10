import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Skills = () => {
  const skills = {
    "Front End": [
      "JavaScript",
      "TypeScript",
      "HTML/CSS",
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Bootstrap",
    ],
    "Low Code": ["Webflow", "WordPress", "LeadPages"],
    "Back End": [
      "Node.js",
      "Python",
      "Flask",
      "NestJS",
      "Docker",
      "MySQL",
      "SQLite",
    ],
    Marketing: ["Vero", "Liquid", "Qwirl"],
    Testing: ["Cypress", "Jest"],
    Others: ["Linux", "Bash", "Git/Github"],
  };

  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById("skills");
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
    <section id="skills" className="bg-white py-8 relative text-center">
      <div className="container mx-auto max-w-4xl px-6">
        <h4 className="text-4xl font-medium mb-12 text-pink-900">Skills</h4>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
          initial="hidden"
          animate={controls}
        >
          {Object.entries(skills).map(([category, skillsList], index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 border-pink-400 border-2"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { type: "spring", stiffness: 200 },
                },
              }}
            >
              <p className="text-xl font-normal mb-4 text-pink-900">
                {category}
              </p>
              <ul className="space-y-2">
                {skillsList.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="bg-gradient-to-br from-pink-300 to-pink-500 text-white rounded-md px-3 py-2 text-sm font-medium transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
