const Experience = () => {
  return (
    <section id="experience" className="bg-white py-8">
      <div className="container mx-auto max-w-4xl px-4 flex flex-col items-center">
        <h3 className="text-4xl font-medium mb-6 text-pink-950">Experience</h3>
        <div className="text-left">
          <p className="text-2xl text-pink-900 mb-2 font-bold">
            Software Developer and Marketing Tech at Bigger (Australia)
          </p>
          <p className="text-xl text-pink-900 mb-4 font-medium">
            June 2023 - Present (Full time and remote)
          </p>
          <ul className="list-disc list-inside text-pink-950 text-lg text-left">
            <li>
              Full-Stack Development with a focus on front-end technologies like
              TypeScript, React, Vite, and Tailwind CSS. Also familiar with
              back-end development using NestJS, TypeORM, Docker and MySQL
            </li>
            <li>
              Web development with low-code platforms like Webflow and LeadPages
            </li>
            <li>Email marketing campaigns with Vero and Liquid</li>
            <li>Testing with Cypress and Jest</li>
            <li>Welcome packs with Qwirl</li>
            <li>Google Sheets</li>
            <li>Basic web and graphic design with Figma and Canva</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
