import avatar from "../assets/avatar3.png";
import Sparkle from "react-sparkle";

const Header = () => {
  return (
    <header className="bg-white text-pink-900 py-4 sticky top-0 z-50">
      <Sparkle
        color={"#f472b6"}
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
          className="rounded-full border-4 border-pink-300 shadow-md w-24 h-24 md:w-32 md:h-32"
        />
        <div className="ml-4">
          <h1 className="text-2xl font-bold text-pink-900">Milena S. Aron</h1>
          <p className="text-xl text-pink-700">
            Full-Stack Developer &bull; Marketing Tech
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
