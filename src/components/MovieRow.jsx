import MovieCard from "./MovieCard";

export default function MovieRow({ title, movies = [] }) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4 text-white">
        {title}
      </h2>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            poster={movie.image}
            title={movie.title}
          />
        ))}
      </div>
    </div>
  );
}