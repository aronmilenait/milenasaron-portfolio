import projectsData from "../data/projectsData";

const Projects: () => JSX.Element = () => {
  return (
    <section id="projects" className="bg-white py-8">
      <div className="mx-auto max-w-4xl container sm:text-left">
        <h5 className="text-4xl font-bold mb-6 text-pink-950 text-center">
          Projects
        </h5>
        {projectsData.map((project, index) => (
          <div key={index} className="mb-8 mx-auto max-w-md">
            <div className="p-6 border-pink-500 shadow-lg border-2 rounded-md md:mx-0 bg-white">
              <p className="text-xl font-semibold mb-2 text-pink-900">
                {project.title}
              </p>
              <p className="text-pink-950 mb-4">{project.description}</p>

              <div className="mb-4">
                <p className="text-lg font-semibold mb-2 text-pink-900">
                  Technologies:
                </p>{" "}
                {project.technologies.map((technologies, techIndex) => (
                  <span
                    key={techIndex}
                    className="mr-2 mb-2 px-3 py-1 bg-pink-100 text-pink-800 rounded-lg block sm:inline-block"
                  >
                    {technologies}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 underline hover:text-pink-800 block md:inline-block"
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
