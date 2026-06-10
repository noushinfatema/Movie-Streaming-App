const MovieDetails = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Banner Section */}
      <div className="relative h-[80vh] bg-zinc-900">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

        <div className="relative z-10 flex h-full items-end px-8 pb-16 md:px-16">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold md:text-7xl">
              Movie Title
            </h1>

            <div className="mt-4 flex flex-wrap gap-4 text-gray-300">
              <span>Release Year</span>
              <span>PG-13</span>
              <span>Duration</span>
              <span>Genre</span>
            </div>

            <p className="mt-6 text-lg text-gray-300">
              Movie description will appear here. This content will be
              dynamically loaded from the movie database API.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="rounded bg-white px-6 py-3 font-semibold text-black hover:bg-gray-300">
                ▶ Play
              </button>

              <button className="rounded bg-zinc-700 px-6 py-3 hover:bg-zinc-600">
                + My List
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Movie */}
      <section className="px-8 py-12 md:px-16">
        <h2 className="mb-6 text-3xl font-bold">
          About This Movie
        </h2>

        <div className="space-y-4 text-gray-400">
          <p>
            <span className="font-semibold text-white">
              Genre:
            </span>{" "}
            Action / Drama
          </p>

          <p>
            <span className="font-semibold text-white">
              Release Year:
            </span>{" "}
            YYYY
          </p>

          <p>
            <span className="font-semibold text-white">
              Rating:
            </span>{" "}
            N/A
          </p>

          <p>
            <span className="font-semibold text-white">
               Main Lead:
            </span>{" "}
            Lead Actor Name
          </p>

          <p>
            <span className="font-semibold text-white">
              Director:
            </span>{" "}
            Director Name
          </p>

          <p>
            <span className="font-semibold text-white">
             Writer:
            </span>{" "}
             Writer Name
          </p>
        </div>
      </section>

      {/* More Like This */}
      <section className="px-8 py-12 md:px-16">
        <h2 className="mb-6 text-3xl font-bold">
          More Like This
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="h-64 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition"></div>

          <div className="h-64 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition"></div>

          <div className="h-64 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition"></div>

          <div className="h-64 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition"></div>
        </div>
      </section>
    </div>
  );
};

export default MovieDetails;