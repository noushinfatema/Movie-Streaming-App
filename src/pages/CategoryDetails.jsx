import { useParams } from "react-router-dom";

import breakingBad from "../assets/posters/breakingBad.png";
import dark from "../assets/posters/dark.png";
import bet from "../assets/posters/bet.png";
import moneyHeist from "../assets/posters/moneyHeist.png";
import squidGame from "../assets/posters/squidGame.png";
import witcher from "../assets/posters/witcher.png";

export default function CategoryDetails() {
  const { id } = useParams();

  const categoryMovies = {
    action: [
      {
        title: "Money Heist",
        image: moneyHeist,
        description:
          "A criminal mastermind recruits a team to carry out the biggest heist in history.",
        trailer:
          "https://www.youtube.com/embed/_InqQJRqGW4",
      },
      {
        title: "Breaking Bad",
        image: breakingBad,
        description:
          "A chemistry teacher turns into a drug kingpin.",
        trailer:
          "https://www.youtube.com/embed/HhesaQXLuRY",
      },
    ],

    drama: [
      {
        title: "Dark",
        image: dark,
        description:
          "A mystery involving time travel and family secrets.",
        trailer:
          "https://www.youtube.com/embed/ESEUoa-mz2c",
      },
      {
        title: "Squid Game",
        image: squidGame,
        description:
          "Hundreds of contestants compete in deadly childhood games for a huge cash prize.",
        trailer:
          "https://www.youtube.com/embed/oqxAJKy0ii4",
      },
    ],

    thriller: [
      {
        title: "Bet",
        image: bet,
        description:
          "A high-stakes gambling thriller.",
        trailer:
          "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        title: "Breaking Bad",
        image: breakingBad,
        description:
          "A chemistry teacher enters the dangerous drug world.",
        trailer:
          "https://www.youtube.com/embed/HhesaQXLuRY",
      },
    ],

    "sci-fi": [
      {
        title: "Dark",
        image: dark,
        description:
          "A mind-bending time travel mystery.",
        trailer:
          "https://www.youtube.com/embed/ESEUoa-mz2c",
      },
      {
        title: "The Witcher",
        image: witcher,
        description:
          "A monster hunter struggles to find his place in a world full of magic.",
        trailer:
          "https://www.youtube.com/embed/ndl1W4ltcmg",
      },
    ],
  };

  const movies = categoryMovies[id] || [];

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold text-center mb-12 capitalize">
        {id} Movies
      </h1>

      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {movies.map((movie) => (
          <div
            key={movie.title}
            className="bg-zinc-900 rounded-lg p-6 flex flex-col md:flex-row gap-8"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-56 rounded"
            />

            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">
                {movie.title}
              </h2>

              <p className="text-gray-300 mb-6">
                {movie.description}
              </p>

              <iframe
                width="100%"
                height="315"
                src={movie.trailer}
                title={movie.title}
                allowFullScreen
                className="rounded"
              />
            </div>
          </div>
        ))}
      </div>

      {movies.length === 0 && (
        <div className="text-center text-gray-400 mt-20">
          No movies available in this category.
        </div>
      )}
    </div>
  );
}