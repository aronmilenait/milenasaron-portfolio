import aboutMeImg from "../assets/about-me2.png";

const AboutMe: () => JSX.Element = () => {
  return (
    <section id="about-me" className="bg-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <img
          src={aboutMeImg}
          alt="About Me"
          className="rounded-full border-8 border-indigo-200 shadow-lg w-1/2 md:w-auto mb-4"
        />
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2 text-indigo-950">
            Milena S. Aron
          </h1>
          <p className="text-xl text-indigo-900 mb-4">
            Software Developer from Argentina passionate about Linux and coding.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
