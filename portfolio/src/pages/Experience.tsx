const Experience: () => JSX.Element = () => {
  return (
    <section id="experience" className="bg-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-6 text-indigo-950">Experience</h2>
        <div className="text-left mx-4 md:mx-0">
          <p className="text-2xl text-indigo-900 mb-2 font-bold">
            Software Developer • ScaleMote
          </p>
          <p className="text-xl text-indigo-900 mb-4 font-medium">
            June 2023 - Present
          </p>
          <ul className="list-disc list-inside text-indigo-950">
            <li>Front-End Development</li>
            <li>Web Development</li>
            <li>Low-Code Development (QWirl, LeadPages)</li>
            <li>Web and Graphic Design with Figma and Canva</li>
            <li>Email Campaigns (with Vero)</li>
            <li>Testing</li>
            <li>Marketing Tech</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
