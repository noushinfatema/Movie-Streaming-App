import { useNavigate } from "react-router-dom";

import breakingBad from "../assets/posters/breakingBad.png";
import peakyBlinders from "../assets/posters/peakyBlinders.png";
import dark from "../assets/posters/dark.png";
import squidGame from "../assets/posters/squidGame.png";

export default function Categories() {
  const navigate = useNavigate();

  const categories = [
    {
      id: "action",
      title: "Action Movies",
      image: breakingBad,
    },
    {
      id: "drama",
      title: "Drama Series",
      image: peakyBlinders,
    },
    {
      id: "thriller",
      title: "Thriller & Mystery",
      image: dark,
    },
    {
      id: "popular",
      title: "Popular on Netflix",
      image: squidGame,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <h1 className="text-5xl font-bold text-center mb-16">
        Browse by Category
      </h1>

      <div className="flex flex-col items-center gap-16">
        {categories.map((category) => (
          <div
            key={category.id}
            className="text-center cursor-pointer"
            onClick={() =>
              navigate(`/category/${category.id}`)
            }
          >
            <h2 className="text-3xl font-semibold mb-6">
              {category.title}
            </h2>

            <img
              src={category.image}
              alt={category.title}
              className="w-72 rounded-lg shadow-lg hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}