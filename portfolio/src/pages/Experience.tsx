const Experience = () => {
  return (
    <section id="experience" className="bg-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-6 text-pink-950">Experience</h2>
        <div className="text-left mx-4 md:mx-0">
          <p className="text-2xl text-pink-900 mb-2 font-bold">
            Software Developer and Marketing Tech at Bigger (Australia)
          </p>
          <p className="text-xl text-pink-900 mb-4 font-medium">
            June 2023 - Present (Full time and remote)
          </p>
          <ul className="list-disc list-inside text-pink-950 text-lg">
            <li>
              Full-Stack Development (mainly front-end) with TypeScript, React,
              Vite, Tailwind CSS
            </li>
            <li>
              Web development with low-code platforms like Webflow and LeadPages
            </li>
            <li>Basic web and graphic design with Figma and Canva</li>
            <li>Email marketing campaigns with Vero and Liquid</li>
            <li>Testing with Cypress and Jest</li>
            <li>Welcome packs with Qwirl</li>
            <li>Google Sheets</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
