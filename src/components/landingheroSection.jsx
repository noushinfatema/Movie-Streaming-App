import { Link } from "react-router-dom";

const landingheroSection = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <h1 className="max-w-4xl text-5xl font-bold md:text-7xl">
          Unlimited movies, TV shows and more
        </h1>

        <p className="mt-6 text-lg md:text-2xl">
          Plans starting from $10/month. Cancel anytime.
        </p>

        <p className="mt-4 text-base md:text-xl">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="mt-8 flex flex-col gap-4 md:flex-row">
          <input
            type="email"
            placeholder="Email address"
            className="w-80 rounded border border-gray-500 bg-black/50 px-4 py-4 text-white outline-none md:w-96"
          />

          <Link
            to="/signup"
            className="rounded bg-red-600 px-8 py-4 text-lg font-semibold text-white hover:bg-red-700"
          >
            Get Started →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default landingheroSection;