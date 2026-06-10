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

import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import MovieRow from "../components/MovieRow";
import Footer from "../components/Footer";

const movies = [
  { title: "Stranger Things", image: stranger },
  { title: "Money Heist", image: moneyHeist },
  { title: "Peaky Blinders", image: peakyBlinders },
  { title: "Dark", image: dark },
  { title: "Squid Game", image: squidGame },
  { title: "The Witcher", image: witcher },
  { title: "Breaking Bad", image: breakingBad },
  { title: "Lucifer", image: lucifer },
  { title: "Wednesday", image: wednesday },
  { title: "All Of Us Are Dead", image: allofusareDead },
  { title: "Elite", image: elite },
  { title: "Emily In Paris", image: emily },
  { title: "Fool Me Once", image: foolmeOnce },
  { title: "Rush Hour", image: rushHour },
  { title: "Bet", image: bet },
];

export default function Home() {
  return (
    <div className="bg-black min-h-screen">

      <Navbar />

      <HeroBanner />

      <div className="px-10 py-8">

        <MovieRow title="Trending Now" movies={movies} />

        <MovieRow title="Popular on Netflix" movies={[...movies].reverse()} />

        <MovieRow title="Continue Watching" movies={movies} />

        <MovieRow title="Top Rated" movies={[...movies].reverse()} />

      </div>

      <Footer />

    </div>
  );
}