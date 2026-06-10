import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute top-0 z-20 flex w-full items-center justify-between px-6 py-6 md:px-14">
      <h1 className="text-5xl font-extrabold text-red-600">
        NETFLIX
      </h1>

      <div className="flex items-center gap-3">
        <select className="rounded border border-gray-500 bg-black/50 px-3 py-2 text-white">
          <option>English</option>
        </select>

        <Link
          to="/login"
          className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;