import avatar from "../assets/avatar.png";

const Header: () => JSX.Element = () => {
  return (
    <header className="bg-white text-indigo-950 py-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-center">
        <img
          src={avatar}
          alt="Avatar"
          className="rounded-full border-4 border-indigo-200 shadow-md w-16 h-16 md:w-24 md:h-24"
        />
        <p className="text-lg font-bold ml-4">
          Milena S. Aron | Software Developer
        </p>
      </div>
    </header>
  );
};

export default Header;
