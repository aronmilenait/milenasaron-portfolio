const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="bg-gradient-to-r from-pink-50 to-pink-100 py-8"
    >
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="text-4xl font-bold text-pink-900 mb-4 text-center">
          About me
        </h1>
        <p className="text-lg text-pink-900 mb-4">
          Hi! My name is Milena Sol Aron and I'm based in Buenos Aires, Argentina.
        </p>
        <p className="text-lg text-pink-900 mb-4">
          Since June 2023, I have been working full-time at Bigger as a
          <b> full-stack developer</b> (mainly front-end with TypeScript, React,
          JavaScript, Vite and Tailwind CSS) and a part of the{" "}
          <b>marketing tech</b> team. Also, I work as a{" "}
          <b>low-code developer</b>, making website and landing pages with platforms like Webflow
          and LeadPages.
        </p>
        <p className="text-lg text-pink-900 mb-4">
          Beyond coding, I'm actively pursuing{" "}
          <b>Linux System Administration</b> as one of my hobbies. My experience
          with this operating system dates back to 2015, encompassing diverse
          tasks such as driver installation, system configuration, recovery
          procedures, backup strategies, and more.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
