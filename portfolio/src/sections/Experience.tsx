import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="bg-white py-8">
      <div className="container mx-auto max-w-4xl px-4 flex flex-col items-center">
        <motion.h3
          className="text-4xl font-medium mb-6 text-pink-950"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Experience
        </motion.h3>
        <div className="text-left">
          <motion.p
            className="text-2xl text-pink-900 mb-2 font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Software Developer and Marketing Tech at Bigger (Australia)
          </motion.p>
          <motion.p
            className="text-xl text-pink-900 mb-4 font-medium"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            June 2023 - Present (Full time and remote)
          </motion.p>
          <motion.ul
            className="list-disc list-inside text-pink-950 text-lg text-left"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.li>
              Full-Stack Development with a focus on front-end technologies like
              TypeScript, React, Vite, and Tailwind CSS. Also familiar with
              back-end development using NestJS, TypeORM, Docker, and MySQL
            </motion.li>
            <motion.li>
              Web development with low-code platforms like Webflow and LeadPages
            </motion.li>
            <motion.li>
              Email marketing campaigns with Vero and Liquid
            </motion.li>
            <motion.li>Testing with Cypress and Jest</motion.li>
            <motion.li>Welcome packs with Qwirl</motion.li>
            <motion.li>
              Basic web and graphic design with Figma and Canva
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
