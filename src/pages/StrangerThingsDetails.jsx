import { Link } from "react-router-dom";

export default function StrangerThingsDetails() {
  const cast = [
    {
      name: "Millie Bobby Brown",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    },
    {
      name: "Finn Wolfhard",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    },
    {
      name: "Noah Schnapp",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
    },
    {
      name: "David Harbour",
      image:
        "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=400",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Header */}
      <nav className="flex justify-between items-center px-10 py-5 bg-black sticky top-0 z-50">
        <Link
          to="/home"
          className="text-red-600 text-4xl font-bold"
        >
          NETFLIX
        </Link>

        <Link
          to="/home"
          className="bg-zinc-800 px-4 py-2 rounded"
        >
          ← Back
        </Link>
      </nav>

      {/* Banner */}
      <section
        className="h-[70vh] flex items-end"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1974')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full bg-gradient-to-t from-black via-black/80 to-transparent p-16">
          <h1 className="text-7xl font-bold mb-4">
            Stranger Things
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl">
            Thriller • Sci-Fi • Horror
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="https://www.youtube.com/watch?v=b9EkMc79ZSU"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-3 rounded font-bold"
            >
              ▶ Play Trailer
            </a>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="max-w-5xl mx-auto text-center py-16 px-6">
        <h2 className="text-4xl font-bold mb-8">
          Overview
        </h2>

        <p className="text-gray-300 text-lg leading-8">
          When a young boy disappears, a small town uncovers
          a mystery involving secret government experiments,
          terrifying supernatural forces and a strange girl
          with extraordinary powers. Stranger Things blends
          suspense, horror, friendship and adventure into one
          of Netflix's most successful original series.
        </p>
      </section>

      {/* Details Cards */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-3">
              Seasons
            </h3>
            <p className="text-4xl text-red-500">
              5
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-3">
              Episodes
            </h3>
            <p className="text-4xl text-red-500">
              42+
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-3">
              Release Year
            </h3>
            <p className="text-4xl text-red-500">
              2016
            </p>
          </div>

        </div>
      </section>

      {/* Cast */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-10">
          Main Cast
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {cast.map((actor) => (
            <div
              key={actor.name}
              className="bg-zinc-900 rounded-lg overflow-hidden text-center hover:scale-105 transition"
            >
              <img
                src={actor.image}
                alt={actor.name}
                className="w-full h-72 object-cover"
              />

              <div className="p-4">
                <p className="font-semibold">
                  {actor.name}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
}