import projectsData from "../data/projectsData";

const Projects = () => {
  return (
    <section id="projects" className="bg-white py-8">
      <div className="container mx-auto max-w-4xl">
        <h5 className="text-4xl font-medium mb-6 text-pink-900 text-center">
          Projects
        </h5>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="border-pink-500 border-2 rounded-md bg-white"
            >
              <div className="p-6">
                <p className="text-xl font-semibold mb-2 text-pink-900">
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
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 underline hover:text-pink-800 block"
                >
                  View project
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
