export default function MovieCard({ poster }) {
  return (
    <img
      src={poster}
      alt="movie"
      className="w-48 rounded hover:scale-105 transition cursor-pointer"
    />
  );
}