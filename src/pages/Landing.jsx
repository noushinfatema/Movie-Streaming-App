import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div
  className="min-h-screen text-white bg-cover bg-center"
  style={{
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.85)), url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1974&auto=format&fit=crop')",
  }}
>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-red-600 text-4xl font-bold">NETFLIX</h1>

        <Link
          to="/login"
          className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
        >
          Sign In
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center mt-32 px-4">
        <h1 className="text-5xl md:text-7xl font-bold max-w-4xl">
          Unlimited movies, TV shows and more
        </h1>

        <p className="text-xl mt-6">
          Watch anywhere. Cancel anytime.
        </p>

        <p className="mt-4 text-lg">
          Ready to watch? Enter your email to create an account.
        </p>

        <div className="flex mt-8 gap-2">
          <input
            type="email"
            placeholder="Email address"
            className="px-4 py-3 w-80 rounded text-black bg-white"
          />

          <Link
            to="/signup"
            className="bg-red-600 px-6 py-3 rounded text-white font-semibold"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}