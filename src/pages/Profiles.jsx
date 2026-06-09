import { Link } from "react-router-dom";

export default function Profiles() {
  const profiles = [
    { name: "Noushin", color: "bg-blue-500" },
    { name: "Mitu", color: "bg-green-500" },
    { name: "Oishy", color: "bg-red-500" },
    { name: "Guest", color: "bg-yellow-500" },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      
      <h1 className="text-red-600 text-5xl font-extrabold mb-16">
        NETFLIX
      </h1>

      <h2 className="text-5xl font-semibold mb-12">
        Who's Watching?
      </h2>

      <div className="flex flex-wrap justify-center gap-10">
        {profiles.map((profile) => (
          <Link
            key={profile.name}
            to="/home"
            className="flex flex-col items-center group"
          >
            <div
              className={`w-40 h-40 ${profile.color} rounded-md transition duration-300 group-hover:scale-110`}
            >
              <div className="w-full h-full flex items-center justify-center text-5xl">
                🙂
              </div>
            </div>

            <p className="mt-4 text-xl text-gray-300 group-hover:text-white">
              {profile.name}
            </p>
          </Link>
        ))}
      </div>

      <button className="mt-16 border border-gray-500 px-8 py-3 text-gray-400 hover:text-white hover:border-white transition">
        Manage Profiles
      </button>

    </div>
  );
}