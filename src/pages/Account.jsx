import { useNavigate } from "react-router-dom";

export default function Account() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Clear auth data if you have any
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Account Settings
      </h1>

      <div className="bg-zinc-900 p-10 rounded-lg w-full max-w-4xl text-center">
        {/* Membership */}
        <div className="border-b border-zinc-700 pb-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Membership & Billing
          </h2>

          <p className="text-gray-400">
            Email: user@netflix.com
          </p>

          <p className="text-gray-400 mt-2">
            Plan: Premium UHD
          </p>

          <button className="mt-5 bg-red-600 px-6 py-3 rounded hover:bg-red-700 transition">
            Manage Subscription
          </button>
        </div>

        {/* Security */}
        <div className="border-b border-zinc-700 pb-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Security
          </h2>

          <button className="bg-zinc-700 px-6 py-3 rounded hover:bg-zinc-600 transition">
            Change Password
          </button>
        </div>

        {/* Profiles */}
        <div className="border-b border-zinc-700 pb-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Profile Settings
          </h2>

          <button className="bg-zinc-700 px-6 py-3 rounded hover:bg-zinc-600 transition">
            Manage Profiles
          </button>
        </div>

        {/* Sign Out */}
        <div className="mt-8">
          <button
            onClick={handleSignOut}
            className="bg-red-600 px-8 py-3 rounded font-semibold hover:bg-red-700 transition"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}