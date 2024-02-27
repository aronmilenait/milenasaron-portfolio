const AboutMe: () => JSX.Element = () => {
  return (
    <section
      id="about-me"
      className="bg-gradient-to-r from-pink-50 to-pink-100 py-8"
    >
      <div className="container mx-auto max-w-4xl flex flex-col items-center">
        <div className="mx-4 md:mx-0">
          <h1 className="text-4xl font-bold mb-4 text-pink-900 text-center">
            Milena S. Aron
          </h1>
          <p className="text-lg text-pink-950 mb-4">
            Hi! I’m Milena. I was born on October 14, 2001, in Buenos Aires,
            Argentina, where I currently live.
            <br />
            <br />I started using{" "}
            <b>GNU/Linux as my only operating system in 2015</b>, when I was 13
            years old, and Ubuntu used Unity as its desktop environment. That's
            when I discovered that my passion lay right there.
            <br />
            <br />
            In 2023, I decided to give <b>programming</b> a shot and became
            self-taught. After a few months, in June, I landed my first
            <b>
              {" "}
              full-time tech job at Bigger as a developer and a part of the
              marketing tech team
            </b>
            . I mainly work on <b>email campaigns with Vero</b>,
            <b> full-stack development (especially front-end)</b>, and{" "}
            <b>web development </b>
            with platforms like LeadPages and Webflow.
            <br />
            <br />
            I’m currentlytaking a{" "}
            <b>
              nine-month course to become a Linux System Administrator
            </b> at <i>Carrera Linux</i>, an institute from my country
            authorized by <b>LPI and Linux Foundation.</b>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
