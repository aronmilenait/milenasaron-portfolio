import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { motion, useAnimation } from "framer-motion";

const Contact = () => {
  const contacts = [
    {
      icon: faGithub,
      link: "https://github.com/aronmilenait",
      label: "GitHub",
    },
    {
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/milenasaron/",
      label: "LinkedIn",
    },
    {
      icon: faEnvelope,
      link: "mailto:aronmilena.it@gmail.com",
      label: "Email",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const sectionTop = contactSection.getBoundingClientRect().top;
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
      id="contact"
      className="bg-gradient-to-r from-pink-200 via-pink-50 to-pink-200 py-16"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h5
          className="text-4xl font-medium mb-12 text-pink-900"
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -50 },
          }}
          transition={{ duration: 0.5 }}
        >
          Contact
        </motion.h5>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8"
          initial="hidden"
          animate={controls}
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 },
            },
            hidden: {},
          }}
        >
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-white shadow-lg text-pink-700 p-6 rounded-xl transition-transform duration-300 hover:text-pink-50 hover:bg-gradient-to-br hover:from-pink-300 hover:to-pink-400"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 200 },
                },
                hover: { scale: 1.05, transition: { duration: 0.3 } },
              }}
            >
              <FontAwesomeIcon icon={contact.icon} size="3x" className="mb-4" />
              <p className="font-medium text-md">{contact.label}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
