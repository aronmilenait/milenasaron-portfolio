import projectsData from "../data/projectsData";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-r from-pink-50 to-pink-100 py-8"
    >
      <div className="container mx-auto max-w-4xl">
        <h5 className="text-4xl font-medium mb-6 text-pink-900 text-center">
          Projects
        </h5>
        <p
          id="projects-note"
          className="text-2xl mb-6 text-pink-800 text-center"
        >
          Note: This is a personal selection. For more projects, visit my{" "}
          <a
            href="https://github.com/aronmilenait"
            className="text-pink-800 underline hover:text-pink-900"
            target="_blank"
          >
            GitHub
          </a>
          .
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="border-pink-500 border-2 rounded-md bg-white flex flex-col"
            >
              <div className="p-6 flex-1">
                <p className="text-xl font-semibold mb-2 text-pink-900 text-center">
                  {project.title}
                </p>
                <p className="text-pink-900 mb-4">{project.description}</p>
                <div className="mb-4">
                  <p className="text-lg font-semibold mb-2 text-pink-900">
                    Technologies:
                  </p>{" "}
                  {project.technologies.map((technology, techIndex) => (
                    <span
                      key={techIndex}
                      className="mr-2 mb-2 px-3 py-1 bg-pink-100 text-pink-800 rounded-lg inline-block"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 mt-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 bg-gradient-to-br text-pink-50 font-bold from-pink-300 to-pink-500 rounded-lg shadow-lg overflow-hidden cursor-pointer"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
