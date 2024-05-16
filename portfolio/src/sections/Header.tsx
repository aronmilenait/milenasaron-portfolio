import { motion } from "framer-motion";
import Sparkle from "react-sparkle";
import avatar from "../assets/avatar3.png";

const Header = () => {
  return (
    <header className="bg-white text-pink-900 py-4 sticky top-0 z-50">
      <Sparkle
        color="#f472b6"
        count={50}
        minSize={5}
        maxSize={12}
        overflowPx={20}
        fadeOutSpeed={10}
        flicker={false}
      />
      <div className="container mx-auto flex items-center justify-center">
        <motion.img
          src={avatar}
          alt="Avatar"
          className="rounded-full border-4 border-pink-300 shadow-md w-24 h-24 md:w-32 md:h-32"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="ml-4" id="header-text">
          <motion.h1
            className="text-3xl md:text-4xl font-medium text-pink-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              type: "spring",
              stiffness: 80,
            }}
          >
            Milena Sol Aron
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-pink-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
              type: "spring",
              stiffness: 80,
            }}
            whileHover={{ color: "#f472b6" }}
          >
            Full Stack and Web Developer
          </motion.p>
        </div>
      </div>
    </header>
  );
};

export default Header;
