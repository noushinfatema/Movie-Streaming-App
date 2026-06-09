import MovieCard from "./MovieCard";

export default function MovieRow({ title }) {
  const posters = [
    "https://picsum.photos/250/350?1",
    "https://picsum.photos/250/350?2",
    "https://picsum.photos/250/350?3",
    "https://picsum.photos/250/350?4",
    "https://picsum.photos/250/350?5",
    "https://picsum.photos/250/350?6",
  ];

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4 text-white">
        {title}
      </h2>

      <div className="flex gap-4 overflow-x-auto">
        {posters.map((poster, index) => (
          <MovieCard key={index} poster={poster} />
        ))}
      </div>
    </div>
  );
}