import { Link } from "react-router-dom";
import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-black text-white">
      <h1 className="text-red-600 text-4xl font-bold">
        NETFLIX
      </h1>

      <div className="flex items-center gap-8">
        <Link
          to="/home"
          className="hover:text-gray-300 transition"
        >
          Home
        </Link>

        <Link
          to="/categories"
          className="hover:text-gray-300 transition"
        >
          Categories
        </Link>

        <Link
          to="/account"
          className="hover:text-gray-300 transition"
        >
          Account
        </Link>

        <Link
          to="/search"
          className="hover:text-gray-300 transition"
        >
          <Search size={24} />
        </Link>
      </div>
    </nav>
  );
}