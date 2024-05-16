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
            Software Developer at Bigger (Australia)
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
              Engage in full-stack development, specializing in front-end
              technologies like TypeScript, React, Vite, and Tailwind CSS,
              alongside back-end development using NestJS, TypeORM, Docker, and
              MySQL.
            </motion.li>
            <motion.li>
              Utilize low-code platforms such as Webflow, WordPress, and
              LeadPages for diverse web development projects ranging from simple
              landing pages to complex websites.
            </motion.li>
            <motion.li>
              WordPress website management tasks, including troubleshooting
              design issues, updating plugins and WordPress versions, migrating
              websites between hosting providers, and enhancing performance for
              both mobile and desktop platforms.
            </motion.li>
            <motion.li>
              Apply basic web and graphic design skills using tools like Figma
              and Canva to craft compelling user interfaces and graphics.
            </motion.li>
            <motion.li>
              Execute targeted email marketing campaigns through platforms like
              Vero and Liquid, optimizing content to enhance audience
              engagement.
            </motion.li>
            <motion.li>
              Implement testing strategies using Cypress and Jest to ensure the
              reliability and functionality of web applications.
            </motion.li>
            <motion.li>
              Create welcome packs using Qwirl to enhance the user onboarding
              experience.
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
