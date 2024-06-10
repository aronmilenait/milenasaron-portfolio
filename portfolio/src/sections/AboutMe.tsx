import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative py-16 bg-gradient-to-r from-pink-200 via-pink-50 to-pink-200 overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h2
          className="text-4xl font-medium text-pink-900 mb-6 text-center relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          About Me
        </motion.h2>
        <div className="relative z-10 text-lg text-pink-900 leading-relaxed space-y-6">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Hi! I'm Milena Sol Aron, a Full Stack and Web Developer based in
            Buenos Aires, Argentina. Currently, I work remotely at Bigger as a
            Software Developer, and until May 2024, I also worked as a Marketing
            Tech.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Additionally, I'm pursuing an associate's degree in programming at
            the Universidad Tecnológica Nacional (UTN) since May 2024.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
