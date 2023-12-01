import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact: () => JSX.Element = () => {
  return (
    <section id="contact" className="bg-white py-8">
      <div className="container mx-auto text-center">
        <h4 className="text-4xl font-bold mb-6 text-indigo-950">Contact</h4>
        <div className="flex justify-center items-center mb-8">
          <a
            href="https://github.com/aronmilenait"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-700 mx-2 p-2 transition duration-200 transform hover:text-indigo-800 hover:scale-110 hover:bg-indigo-100 rounded-full"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/milenasaron/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-700 mx-2 p-2 transition duration-200 transform hover:text-indigo-800 hover:scale-110 hover:bg-indigo-100 rounded-full"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="mailto:aronmilena.it@gmail.com"
            className="text-indigo-700 mx-2 p-2 transition duration-200 transform hover:text-indigo-800 hover:scale-110 hover:bg-indigo-100 rounded-full"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
