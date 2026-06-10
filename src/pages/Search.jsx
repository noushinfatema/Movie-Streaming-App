import React, { useState } from "react";
import { Search } from "lucide-react";

import allofusareDead from "../assets/posters/allofusareDead.png";
import bet from "../assets/posters/bet.png";
import breakingBad from "../assets/posters/breakingBad.png";
import dark from "../assets/posters/dark.png";
import elite from "../assets/posters/elite.png";
import emily from "../assets/posters/emily.png";
import foolmeOnce from "../assets/posters/foolmeOnce.png";
import lucifer from "../assets/posters/lucifer.png";
import moneyHeist from "../assets/posters/moneyHeist.png";
import peakyBlinders from "../assets/posters/peakyBlinders.png";
import rushHour from "../assets/posters/rushHour.png";
import squidGame from "../assets/posters/squidGame.png";
import stranger from "../assets/posters/stranger.png";
import wednesday from "../assets/posters/wednesday.png";
import witcher from "../assets/posters/witcher.png";

const movies = [
  { id: 1, title: "All Of Us Are Dead", image: allofusareDead },
  { id: 2, title: "Bet", image: bet },
  { id: 3, title: "Breaking Bad", image: breakingBad },
  { id: 4, title: "Dark", image: dark },
  { id: 5, title: "Elite", image: elite },
  { id: 6, title: "Emily In Paris", image: emily },
  { id: 7, title: "Fool Me Once", image: foolmeOnce },
  { id: 8, title: "Lucifer", image: lucifer },
  { id: 9, title: "Money Heist", image: moneyHeist },
  { id: 10, title: "Peaky Blinders", image: peakyBlinders },
  { id: 11, title: "Rush Hour", image: rushHour },
  { id: 12, title: "Squid Game", image: squidGame },
  { id: 13, title: "Stranger Things", image: stranger },
  { id: 14, title: "Wednesday", image: wednesday },
  { id: 15, title: "The Witcher", image: witcher },
];

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-10 py-6">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-red-600 text-4xl font-bold">
          NETFLIX
        </h1>

        <div className="hidden md:flex gap-8 text-gray-300">
          <span className="cursor-pointer hover:text-white transition">
            Home
          </span>

          <span className="cursor-pointer hover:text-white transition">
            TV Shows
          </span>

          <span className="cursor-pointer hover:text-white transition">
            Movies
          </span>

          <span className="cursor-pointer hover:text-white transition">
            My List
          </span>
        </div>
      </div>

      {/* Page Title */}
      <h2 className="text-4xl font-bold text-center mb-8">
        Search
      </h2>

      {/* Full Width Search Bar */}
      <div className="relative w-full mb-12">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          size={22}
        />

        <input
          type="text"
          placeholder="Search movies, shows..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-xl border border-zinc-700 bg-zinc-900 py-4 pl-12 pr-4 text-lg outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
        />
      </div>

      {/* Section Title */}
      <h3 className="text-2xl font-semibold mb-8">
        {searchTerm ? "Search Results" : "Popular Searches"}
      </h3>

      {/* Movies Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            className="cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-[260px] object-cover rounded-lg shadow-md"
            />

            <h4 className="mt-3 text-center text-sm md:text-base font-medium">
              {movie.title}
            </h4>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredMovies.length === 0 && (
        <div className="mt-20 text-center text-gray-400 text-lg">
          No movies found.
        </div>
      )}
    </div>
  );
}