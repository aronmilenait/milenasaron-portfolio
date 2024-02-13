import avatar from "../assets/avatar2.png";
import Sparkle from "react-sparkle";

const Header: () => JSX.Element = () => {
  return (
    <header className="bg-white text-pink-900 py-4 sticky top-0 z-50">
       <Sparkle
        color={'#f472b6'}
        count={50}
        minSize={5}
        maxSize={12}
        overflowPx={20}
        fadeOutSpeed={10}
        flicker={false}
      />
      <div className="container mx-auto flex items-center justify-center">
        <img
          src={avatar}
          alt="Avatar"
          className="rounded-full border-8 border-pink-200 shadow-md w-16 h-16 md:w-24 md:h-24"
        />
        <p className="text-xl ml-4 font-bold">
          {" "}
          Full-Stack Developer • SysAdmin (In Progress) • Marketing Tech
        </p>
      </div>
    </header>
  );
};

export default Header;
