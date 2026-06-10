import { Link } from "react-router-dom";

export default function HeroBanner() {
  return (
    <section
      className="h-[70vh] flex items-center px-16 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1974')",
      }}
    >
      <div className="max-w-xl text-white">
        <h1 className="text-6xl font-bold mb-4">
          Stranger Things
        </h1>

        <p className="text-lg mb-2">
          Genre: Thriller • Sci-Fi • Horror
        </p>

        <p className="text-lg mb-6">
          When a young boy vanishes, a small town uncovers
          a mystery involving secret experiments and
          supernatural forces.
        </p>

        <div className="flex gap-4">
          <a
  href="https://www.youtube.com/watch?v=b9EkMc79ZSU"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white text-black px-6 py-3 rounded font-semibold"
>
  ▶ Play Trailer
</a>

          <Link
            to="/stranger-things"
            className="bg-gray-700 px-6 py-3 rounded hover:bg-gray-600"
          >
            More Info
          </Link>
        </div>
      </div>
    </section>
  );
}