import MovieRow from "../components/MovieRow";

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

export default function Categories() {
  const movies = [
    { title: "All Of Us Are Dead", image: allofusareDead },
    { title: "Bet", image: bet },
    { title: "Breaking Bad", image: breakingBad },
    { title: "Dark", image: dark },
    { title: "Elite", image: elite },
    { title: "Emily in Paris", image: emily },
    { title: "Fool Me Once", image: foolmeOnce },
    { title: "Lucifer", image: lucifer },
    { title: "Money Heist", image: moneyHeist },
    { title: "Peaky Blinders", image: peakyBlinders },
    { title: "Rush Hour", image: rushHour },
    { title: "Squid Game", image: squidGame },
    { title: "Stranger Things", image: stranger },
    { title: "Wednesday", image: wednesday },
    { title: "The Witcher", image: witcher },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-8 py-10">
      <h1 className="text-4xl font-bold mb-10">
        Browse by Category
      </h1>

      <MovieRow title="Action Movies" movies={movies.slice(0, 5)} />

      <MovieRow title="Drama Series" movies={movies.slice(5, 10)} />

      <MovieRow title="Thriller & Mystery" movies={movies.slice(10, 15)} />

      <MovieRow title="Popular on Netflix" movies={movies} />
    </div>
  );
}