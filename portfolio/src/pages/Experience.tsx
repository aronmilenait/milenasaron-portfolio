const Experience: () => JSX.Element = () => {
  return (
    <section id="experience" className="bg-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-6 text-pink-950">Experience</h2>
        <div className="text-left mx-4 md:mx-0">
          <p className="text-2xl text-pink-900 mb-2 font-bold">
            Software Developer • Marketing Tech | Bigger (Australia)
          </p>
          <p className="text-xl text-pink-900 mb-4 font-medium">
            June 2023 - Present (Full Time and Remote)
          </p>
          <ul className="list-disc list-inside text-pink-950">
            <li>Full-Stack Development</li>
            <li>Web Development with LeadPages and Webflow</li>
            <li>Basic Web and Graphic Design with Figma and Canva</li>
            <li>Email marketing Campaigns (with Vero)</li>
            <li>Testing with Cypress</li>
            <li>Welcome packs with Qwirl</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
