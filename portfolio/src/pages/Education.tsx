import educationData from "../data/educationData";

const Education: () => JSX.Element = () => {
  return (
    <section
      id="education"
      className="bg-gradient-to-r from-pink-50 to-pink-100 py-8"
    >
      <div className="container mx-auto sm:text-left">
        <h4 className="text-4xl font-bold mb-6 text-pink-950 text-center">
          Education
        </h4>
        {educationData.map((education, index) => (
          <div key={index} className="mb-8 mx-auto max-w-md">
            <div className="p-6 border-pink-500 shadow-lg border-2 rounded-md md:mx-0 bg-white">
              <p className="text-xl font-semibold mb-2 text-pink-900">
                {education.title}
              </p>
              <p className="text-pink-950 mb-2">
                Institution: {education.institution}
              </p>
              <p className="text-pink-950 mb-2">
                Duration: {education.duration}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
