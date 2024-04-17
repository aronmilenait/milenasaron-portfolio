import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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

  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-pink-50 to-pink-100 py-8"
    >
      <div className="container mx-auto text-center">
        <h6 className="text-4xl font-medium mb-6 text-pink-900">Contact</h6>
        <div className="flex justify-center items-center space-x-6 mb-8">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-md text-pink-700 p-3 rounded-full transition duration-300 transform hover:scale-110 hover:bg-pink-300"
            >
              <FontAwesomeIcon icon={contact.icon} size="3x" />
              <span className="sr-only">{contact.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
