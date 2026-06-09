import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import MovieRow from "../components/MovieRow";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">

      <Navbar />

      <HeroBanner />

      <div className="px-10 py-8">

        <MovieRow title="Trending Now" />

        <MovieRow title="Popular on Netflix" />

        <MovieRow title="Continue Watching" />

        <MovieRow title="Top Rated" />

      </div>

      <Footer />

    </div>
  );
}