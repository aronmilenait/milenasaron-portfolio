import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-pink-50 to-pink-100 py-8"
    >
      <div className="container mx-auto max-w-4xl px-4">
        <motion.h2
          className="text-4xl font-medium text-pink-900 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg text-pink-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Hi! I'm Milena, a <b>Full Stack & Web Developer</b> based in Buenos
          Aires, Argentina, with over a year of experience in the field.
        </motion.p>
        <motion.p
          className="text-lg text-pink-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Besides coding, I have almost five years of experience in{" "}
          <b>Digital Marketing & Tech</b> and nine years of experience in{" "}
          <b>Linux</b>.
        </motion.p>
        <motion.p
          className="text-lg text-pink-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Additionally, I have been pursuing an{" "}
          <b>associate degree in programming</b> at the Universidad Tecnológica
          Nacional (UTN) since May 2024.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"></div>
      </div>
    </section>
  );
};

export default AboutMe;
