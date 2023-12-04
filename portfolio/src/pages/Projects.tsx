import projectsData from "../data/projectsData";

const Projects: () => JSX.Element = () => {
  return (
    <section id="projects" className="bg-white py-8">
      <div className="container mx-auto sm:text-left">
        <h3 className="text-4xl font-bold mb-6 text-indigo-950 text-center">
          Projects
        </h3>
        {projectsData.map((project, index) => (
          <div key={index} className="mb-8 mx-auto max-w-md">
            <div className="p-6 border border-indigo-500 shadow-lg border-2 rounded-md md:mx-0">
              <p className="text-xl font-semibold mb-2 text-indigo-900">
                {project.title}
              </p>
              <p className="text-indigo-950 mb-4">{project.description}</p>

              <div className="mb-4">
                <p className="text-lg font-semibold mb-2 text-indigo-900">
                  Technologies:
                </p>{" "}
                {project.technologies.map((technologies, techIndex) => (
                  <span
                    key={techIndex}
                    className="mr-2 mb-2 px-3 py-1 bg-indigo-100 text-indigo-800 rounded-lg block sm:inline-block"
                  >
                    {technologies}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 underline hover:text-indigo-800 block md:inline-block"
              >
                View project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
