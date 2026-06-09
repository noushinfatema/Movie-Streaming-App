import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen bg-black flex justify-center items-center">
      <div className="bg-zinc-900 p-10 rounded-lg w-96">
        <h1 className="text-3xl font-bold mb-8 text-white">
          Sign In
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded bg-zinc-800 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 rounded bg-zinc-800 text-white"
        />

        <button className="w-full bg-red-600 p-3 rounded font-semibold">
          Sign In
        </button>

        <p className="text-gray-400 mt-6">
          New to Netflix?{" "}
          <Link to="/signup" className="text-white">
            Sign up now
          </Link>
        </p>
      </div>
    </div>
  );
}