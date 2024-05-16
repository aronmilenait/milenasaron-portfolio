import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="bg-gradient-to-r from-pink-50 to-pink-100 py-8"
    >
      <div className="container mx-auto max-w-4xl px-4">
        <motion.h2
          className="text-4xl font-medium text-pink-900 mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          About me
        </motion.h2>
        <motion.p
          className="text-lg text-pink-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Hi! I'm Milena Sol Aron, and I'm based in Buenos Aires, Argentina.
        </motion.p>
        <motion.p
          className="text-lg text-pink-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Since June 2023, I’ve been working remotely at Bigger as a{" "}
          <b>Full Stack Developer</b>, with a strong focus on front-end
          technologies like TypeScript, React, JavaScript, and Vite.
          Additionally, I work as a <b>Web Developer</b>, building websites
          using platforms such as Webflow, WordPress, and LeadPages. My
          responsibilities include creating landing pages, developing complex
          websites from scratch, optimizing performance, and providing ongoing
          maintenance. I also have experience with <b>marketing technologies</b>
          , like managing email campaigns using Vero and creating welcome packs
        </motion.p>
        <motion.p
          className="text-lg text-pink-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Since May 2024, I have been pursuing an <b>associate's degree</b> in
          programming at the <b>Universidad Tecnológica Nacional (UTN).</b>
        </motion.p>
      </div>
    </section>
  );
};

export default AboutMe;
