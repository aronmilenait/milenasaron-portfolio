import { useState } from "react";
import { motion } from "framer-motion";
import experienceData from "../data/experienceData";

const Experience = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section id="experience" className="bg-white py-8">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.h3
          className="text-4xl font-medium mb-8 text-pink-900 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Experience
        </motion.h3>
        <motion.div
          className="bg-gradient-to-b from-pink-300 to-pink-200 rounded-lg p-8 text-pink-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div>
            <p className="text-2xl font-semibold mb-1">{experienceData.job}</p>
            <p className="text-lg mb-1 font-medium">{experienceData.company}</p>
            <p className="text-lg">{experienceData.duration}</p>
          </div>
        </motion.div>
        <div className="space-y-4">
          {experienceData.roles.map((role, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 border-2 border-pink-500"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <div
                onClick={() => toggleExpand(index)}
                className="cursor-pointer flex justify-between items-center"
              >
                <p className="text-lg font-semibold text-pink-900">
                  {role.title}
                </p>
                <div className="flex items-center">
                  <p className="mr-2 text-pink-500"></p>
                  <svg
                    className="w-6 h-6 text-pink-900 transition-transform duration-300 transform rotate-0 hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={
                        expanded === index ? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"
                      }
                    />
                  </svg>
                </div>
              </div>
              {expanded === index && (
                <motion.div
                  className="mt-2 text-lg text-pink-900"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{role.description}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
