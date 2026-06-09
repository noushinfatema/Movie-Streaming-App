export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-black">
      <h1 className="text-red-600 text-4xl font-bold">
        NETFLIX
      </h1>

      <div className="flex gap-8 text-white">
        <a href="#">Home</a>
        <a href="#">TV Shows</a>
        <a href="#">Movies</a>
        <a href="#">My List</a>
      </div>
    </nav>
  );
}