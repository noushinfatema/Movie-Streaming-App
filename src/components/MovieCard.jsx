import { Link } from "react-router-dom";

export default function MovieCard({ poster, title }) {
  return (
    <Link to="/movie/1" className="flex-shrink-0">
      <img
        src={poster}
        alt={title}
        className="w-44 h-64 object-cover rounded-md hover:scale-110 transition duration-300 cursor-pointer"
      />
    </Link>
  );
}