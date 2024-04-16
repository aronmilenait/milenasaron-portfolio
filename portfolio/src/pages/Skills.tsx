const Skills = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "Node.js",
    "React.js",
    "HTML/CSS",
    "Docker",
    "MySQL",
    "NestJS",
    "Vite",
    "Tailwind CSS",
    "Bootstrap",
    "Webflow",
    "WordPress",
    "LeadPages",
    "Vero",
    "Liquid",
    "Cypress",
    "Jest",
    "Git/Github",
    "Linux",
    "Bash",
  ];

  return (
    <section className="bg-gradient-to-r from-pink-50 to-pink-100 py-8">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-4xl font-bold mb-6 text-pink-900 text-center">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-pink-300 to-pink-500 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 cursor-pointer"
            >
              <p className="text-lg text-white font-bold py-4 text-center">
                {skill}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
